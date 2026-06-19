
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey;
};

export async function fetchFromSupabase<T>(
  path: string,
  options: RequestInit = {}
): Promise<T[]> {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured in environment variables.");
  }

  const url = `${supabaseUrl}/rest/v1/${path}`;
  const headers = {
    "apikey": supabaseAnonKey!,
    "Authorization": `Bearer ${supabaseAnonKey}`,
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

  return response.json();
}
