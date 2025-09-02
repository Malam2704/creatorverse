import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_DB_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

console.log('Supabase URL:', URL);
console.log('Supabase API Key:', API_KEY);
const supabase = createClient(URL, API_KEY);
export default supabase;