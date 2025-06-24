import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase env variables are missing. Check your .env file and restart the dev server.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
