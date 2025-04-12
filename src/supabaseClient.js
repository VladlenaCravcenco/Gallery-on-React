import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eslybtxqkkydrpgecrpo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbHlidHhxa2t5ZHJwZ2VjcnBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NzU3MDMsImV4cCI6MjA2MDA1MTcwM30.x6t6CxGYQGF-VxxyhTVamUBxqzgNR1QfqAddO1mDu9I'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);