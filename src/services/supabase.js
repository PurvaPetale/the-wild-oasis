import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://motoqddbdydqpebbroet.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vdG9xZGRiZHlkcXBlYmJyb2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNDQwMTQsImV4cCI6MjAxODkyMDAxNH0.zENiUCxyxaKtOPSzqhy_18FLmWGZu-Gy_Fa3FxhsXEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
