import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

let client: SupabaseClient | null = null

export function createSupabaseClient() {
  if (client) return client
  client = createClient(supabaseUrl, supabaseAnonKey)
  return client
}
