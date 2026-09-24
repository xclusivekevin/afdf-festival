-- Applied to project boxaqtgfdfyoofxvdjsp on 20 Sep 2026 as three migrations (festival_registrations, festival_rpc_and_settings, festival_register_fix_code_var).
-- Replace the admin_secret value before running elsewhere.
create extension if not exists pgcrypto;
create table if not exists public.festival_registrations (
  id uuid primary key default gen_random_uuid(), code text not null unique, name text not null, email text not null, phone text not null,
  tickets integer not null check (tickets between 1 and 10), city text not null check (city in ('Lagos','Abuja')),
  status text not null default 'confirmed' check (status in ('confirmed','checked_in','cancelled')),
  checked_in_at timestamptz, checked_in_count integer not null default 0, email_sent_at timestamptz, email_error text,
  source text not null default 'web', created_at timestamptz not null default now());
create index if not exists festival_registrations_email_idx on public.festival_registrations (lower(email));
create index if not exists festival_registrations_city_idx on public.festival_registrations (city, created_at desc);
alter table public.festival_registrations enable row level security;
revoke all on public.festival_registrations from anon, authenticated;
create or replace view public.festival_capacity as select city, coalesce(sum(tickets),0)::int as tickets_allocated, count(*)::int as registrations from public.festival_registrations where status <> 'cancelled' group by city;
revoke all on public.festival_capacity from anon, authenticated;
create table if not exists public.festival_settings (id boolean primary key default true check (id), admin_secret text not null, capacity_lagos integer not null default 2000, capacity_abuja integer not null default 2000, max_tickets_per_order integer not null default 5, registration_closes_at timestamptz not null default '2026-11-15 23:59:59+01', event_dates jsonb not null default '{"Lagos":"Date to be announced","Abuja":"Date to be announced"}', updated_at timestamptz not null default now());
alter table public.festival_settings enable row level security;
revoke all on public.festival_settings from anon, authenticated;
insert into public.festival_settings (admin_secret) values ('REPLACE_WITH_A_LONG_RANDOM_SECRET') on conflict (id) do nothing;
create or replace function public.festival_new_code() returns text language plpgsql as $$ declare chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; out text := ''; i int; begin for i in 1..8 loop out := out || substr(chars, 1 + floor(random()*length(chars))::int, 1); end loop; return 'AFDF-' || substr(out,1,4) || '-' || substr(out,5,4); end $$;
create or replace function public.festival_status() returns jsonb language sql security definer set search_path = public as $$ select jsonb_build_object('closes_at', s.registration_closes_at, 'open', now() < s.registration_closes_at, 'max_tickets', s.max_tickets_per_order, 'event_dates', s.event_dates, 'remaining', jsonb_build_object('Lagos', greatest(0, s.capacity_lagos - coalesce((select sum(tickets) from festival_registrations where city='Lagos' and status<>'cancelled'),0)), 'Abuja', greatest(0, s.capacity_abuja - coalesce((select sum(tickets) from festival_registrations where city='Abuja' and status<>'cancelled'),0)))) from festival_settings s where s.id; $$;
create or replace function public.festival_register(p_name text, p_email text, p_phone text, p_tickets int, p_city text) returns jsonb language plpgsql security definer set search_path = public as $$
declare s festival_settings; used int; cap int; r festival_registrations; v_code text;
begin
  select * into s from festival_settings where id;
  if now() >= s.registration_closes_at then return jsonb_build_object('ok', false, 'error', 'closed'); end if;
  if p_city not in ('Lagos','Abuja') then return jsonb_build_object('ok', false, 'error', 'bad_city'); end if;
  if p_tickets < 1 or p_tickets > s.max_tickets_per_order then return jsonb_build_object('ok', false, 'error', 'bad_tickets'); end if;
  if length(trim(p_name)) < 2 or p_email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' or length(regexp_replace(p_phone,'\D','','g')) < 7 then return jsonb_build_object('ok', false, 'error', 'bad_input'); end if;
  if exists (select 1 from festival_registrations where lower(email)=lower(p_email) and city=p_city and status<>'cancelled') then return jsonb_build_object('ok', false, 'error', 'duplicate'); end if;
  perform pg_advisory_xact_lock(hashtext('festival_'||p_city));
  select coalesce(sum(tickets),0) into used from festival_registrations where city=p_city and status<>'cancelled';
  cap := case when p_city='Lagos' then s.capacity_lagos else s.capacity_abuja end;
  if used + p_tickets > cap then return jsonb_build_object('ok', false, 'error', 'full', 'remaining', greatest(0, cap-used)); end if;
  loop v_code := festival_new_code(); exit when not exists (select 1 from festival_registrations fr where fr.code = v_code); end loop;
  insert into festival_registrations (code, name, email, phone, tickets, city) values (v_code, trim(p_name), lower(trim(p_email)), trim(p_phone), p_tickets, p_city) returning * into r;
  return jsonb_build_object('ok', true, 'registration', to_jsonb(r));
end $$;
create or replace function public.festival_admin_ok(p_secret text) returns boolean language sql security definer set search_path = public as $$ select exists (select 1 from festival_settings where id and admin_secret = p_secret); $$;
create or replace function public.festival_admin_list(p_secret text) returns setof festival_registrations language plpgsql security definer set search_path = public as $$ begin if not festival_admin_ok(p_secret) then raise exception 'unauthorised'; end if; return query select * from festival_registrations order by created_at desc; end $$;
create or replace function public.festival_admin_lookup(p_secret text, p_code text) returns setof festival_registrations language plpgsql security definer set search_path = public as $$ begin if not festival_admin_ok(p_secret) then raise exception 'unauthorised'; end if; return query select * from festival_registrations where upper(replace(code,' ','')) = upper(replace(p_code,' ','')) or lower(email) = lower(p_code); end $$;
create or replace function public.festival_admin_checkin(p_secret text, p_code text, p_count int default null) returns jsonb language plpgsql security definer set search_path = public as $$
declare r festival_registrations; n int;
begin
  if not festival_admin_ok(p_secret) then raise exception 'unauthorised'; end if;
  select * into r from festival_registrations where upper(replace(code,' ','')) = upper(replace(p_code,' ','')) for update;
  if r.id is null then return jsonb_build_object('ok', false, 'error', 'not_found'); end if;
  if r.status = 'cancelled' then return jsonb_build_object('ok', false, 'error', 'cancelled', 'registration', to_jsonb(r)); end if;
  n := coalesce(p_count, r.tickets);
  if r.checked_in_count + n > r.tickets then return jsonb_build_object('ok', false, 'error', 'already_checked_in', 'registration', to_jsonb(r)); end if;
  update festival_registrations set checked_in_count = checked_in_count + n, checked_in_at = coalesce(checked_in_at, now()), status = case when checked_in_count + n >= tickets then 'checked_in' else status end where id = r.id returning * into r;
  return jsonb_build_object('ok', true, 'registration', to_jsonb(r));
end $$;
create or replace function public.festival_admin_set_email(p_secret text, p_id uuid, p_sent boolean, p_error text default null) returns void language plpgsql security definer set search_path = public as $$ begin if not festival_admin_ok(p_secret) then raise exception 'unauthorised'; end if; update festival_registrations set email_sent_at = case when p_sent then now() else email_sent_at end, email_error = p_error where id = p_id; end $$;
create or replace function public.festival_admin_settings(p_secret text) returns festival_settings language plpgsql security definer set search_path = public as $$ declare s festival_settings; begin if not festival_admin_ok(p_secret) then raise exception 'unauthorised'; end if; select * into s from festival_settings where id; s.admin_secret := '***'; return s; end $$;
create or replace function public.festival_admin_update_settings(p_secret text, p_capacity_lagos int, p_capacity_abuja int, p_max int, p_closes_at timestamptz) returns void language plpgsql security definer set search_path = public as $$ begin if not festival_admin_ok(p_secret) then raise exception 'unauthorised'; end if; update festival_settings set capacity_lagos=p_capacity_lagos, capacity_abuja=p_capacity_abuja, max_tickets_per_order=p_max, registration_closes_at=p_closes_at, updated_at=now() where id; end $$;
revoke all on function public.festival_new_code() from public, anon, authenticated;
grant execute on function public.festival_status() to anon;
grant execute on function public.festival_register(text,text,text,int,text) to anon;
grant execute on function public.festival_admin_list(text) to anon;
grant execute on function public.festival_admin_lookup(text,text) to anon;
grant execute on function public.festival_admin_checkin(text,text,int) to anon;
grant execute on function public.festival_admin_set_email(text,uuid,boolean,text) to anon;
grant execute on function public.festival_admin_settings(text) to anon;
grant execute on function public.festival_admin_update_settings(text,int,int,int,timestamptz) to anon;
revoke execute on function public.festival_admin_ok(text) from anon, authenticated;
