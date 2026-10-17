// Paste YOUR Supabase settings (Project Settings > API): Project URL and the "anon public" key.
// The anon key is safe to be public because Row Level Security protects your data.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm";

const SUPABASE_URL = "https://ixyfarfroganibhgufha.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_QnYxxgsKPLZYj3fXoEPdjg_wx_kOT3U";

export const configured = SUPABASE_URL.startsWith("https://");
export const sb = configured ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

export function friendly(err) {
  const c = (err && (err.code || err.message) || "").toLowerCase();
  if (c.includes("user_already_exists") || c.includes("already registered")) return "This email already has an account. Try logging in.";
  if (c.includes("invalid_credentials") || c.includes("invalid login")) return "Wrong email or password.";
  if (c.includes("email_not_confirmed") || c.includes("not confirmed")) return "Please confirm your email first. Check your inbox (and spam).";
  if (c.includes("weak_password") || c.includes("password")) return "Password must be at least 6 characters.";
  if (c.includes("rate_limit") || c.includes("too many")) return "Too many attempts. Please wait a bit and try again.";
  if (c.includes("failed to fetch") || c.includes("network")) return "No internet connection. Please try again.";
  if (c.includes("email")) return "Please enter a valid email address.";
  return "Something went wrong. Please try again.";
}
