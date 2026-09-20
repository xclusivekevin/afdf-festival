import { createClient } from "@supabase/supabase-js";

export type Registration = {
  id: string; code: string; name: string; email: string; phone: string; tickets: number; city: "Lagos" | "Abuja";
  status: "confirmed" | "checked_in" | "cancelled"; checked_in_at: string | null; checked_in_count: number;
  email_sent_at: string | null; email_error: string | null; source: string; created_at: string;
};
export type Status = { open: boolean; closes_at: string; max_tickets: number; event_dates: Record<string, string>; remaining: Record<string, number> };

/** Anon client; every operation goes through security-definer RPCs (see supabase/migrations). */
export const db = () => createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { auth: { persistSession: false } });
export const ADMIN = () => process.env.FESTIVAL_ADMIN_SECRET!;

export async function getStatus(): Promise<Status> {
  const { data, error } = await db().rpc("festival_status");
  if (error) throw error;
  return data as Status;
}
