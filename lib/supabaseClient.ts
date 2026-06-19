/**
 * Supabase client utilizing native fetch.
 * This avoids external dependency bloat and leverages Next.js native fetch cache / optimization.
 * 
 * --- SQL Schema for Supabase SQL Editor ---
 * 
 * create table feedbacks (
 *   id uuid default gen_random_uuid() primary key,
 *   created_at timestamp with time zone default timezone('utc'::text, now()) not null,
 *   name text not null,
 *   email text not null,
 *   role_title text not null,
 *   company text not null,
 *   project_type text not null,
 *   rating integer not null check (rating >= 1 and rating <= 5),
 *   feedback_text text not null,
 *   valuable_part text not null,
 *   linkedin_url text,
 *   approved boolean default false not null,
 *   allow_public_display boolean default true not null
 * );
 * 
 * -- Enable Row Level Security (RLS)
 * alter table feedbacks enable row level security;
 * 
 * -- Create Policies
 * create policy "Allow public inserts" on feedbacks 
 *   for insert to anon 
 *   with check (true);
 * 
 * create policy "Allow public read of approved feedback" on feedbacks 
 *   for select to anon 
 *   using (approved = true);
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseConfigured = () => {
  return !!supabaseUrl && (!!supabaseAnonKey || !!supabaseServiceKey);
};

export async function fetchFromSupabase<T>(
  path: string,
  options: RequestInit = {}
): Promise<T[]> {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured in environment variables.");
  }

  // Use service role key if available to bypass RLS read/write limits on server-side queries
  const activeKey = supabaseServiceKey || supabaseAnonKey;

  const url = `${supabaseUrl}/rest/v1/${path}`;
  const headers = {
    "apikey": activeKey!,
    "Authorization": `Bearer ${activeKey}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation",
    ...options.headers,
  } as HeadersInit;

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase API error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : [];
}
