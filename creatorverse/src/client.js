import { createClient } from '@supabase/supabase-js';
const URL = 'https://uvhmruxmiwkxmxliqvnx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2aG1ydXhtaXdreG14bGlxdm54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MDMyMTEsImV4cCI6MjA3MjI3OTIxMX0.TpzjTEP3YFFgkfH5-M1akZmzN4Y1moEefWa_lSDfk2g';
export const supabase = createClient(URL, API_KEY);