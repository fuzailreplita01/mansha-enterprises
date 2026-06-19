import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Returns null when env vars are absent (e.g. CI without secrets configured).
// Callers must guard: `if (!supabase) throw new Error(...)` inside try/catch.
export const supabase = url && key ? createClient(url, key) : null;
