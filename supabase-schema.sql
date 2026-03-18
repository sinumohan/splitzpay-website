-- Run this in your Supabase SQL editor to create the waitlist table
-- Dashboard → SQL Editor → New Query

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  business_type TEXT,
  source TEXT DEFAULT 'marketing_website',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert (used by API route)
CREATE POLICY "Service role can insert waitlist" ON waitlist
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Allow service role to read (for admin/export)
CREATE POLICY "Service role can read waitlist" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);
