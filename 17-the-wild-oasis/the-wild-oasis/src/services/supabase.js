import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pdlndfzmjcgtcuqyswwh.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbG5kZnptamNndGN1cXlzd3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxOTEyMDEsImV4cCI6MjAzNzc2NzIwMX0.aLrEADxm5AicgKkH8Rgf4bpfL38Fw6U1mdQ2T1ah1EY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
