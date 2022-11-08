import {createClient} from '@supabase/supabase-js';
export const url = import.meta.env.VITE_SUPABASE_URL
export const key = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(url,key)
    
export default supabase;