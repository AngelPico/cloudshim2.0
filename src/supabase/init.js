// src/supabase/init.js
import { createClient } from "@supabase/supabase-js";

// Suponiendo que tienes las variables de entorno SUPABASE_URL y SUPABASE_ANON_KEY
const supabaseUrl = "https://yosuaajnkupeiqcydiak.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlvc3VhYWpua3VwZWlxY3lkaWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMjYyNzksImV4cCI6MjAyNjcwMjI3OX0.Mu_48_DMLJPXtbOcbqSBTRY9tg-9CeviAeYJ-rvoeqg";

// Crea la instancia del cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
