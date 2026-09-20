# Festival ticketing database

Lives in the AFN Supabase project (`boxaqtgfdfyoofxvdjsp`) as `public.festival_registrations` + `public.festival_settings` + RPC functions,
because the account's free-tier limit (2 projects) blocked creating a separate project on 20 Sep 2026.

To move it to its own project later: create the project, run `migrations/001_festival.sql` there, set a fresh admin secret in
`festival_settings`, and change `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and `FESTIVAL_ADMIN_SECRET`.

Security model: RLS is on with no policies, and the table is revoked from `anon`/`authenticated`. Every read and write goes through
`security definer` functions. Public ones (`festival_status`, `festival_register`) validate input and enforce capacity, close date and
duplicates. Admin ones require the admin secret, which only the Next.js server holds (`FESTIVAL_ADMIN_SECRET`).
