-- Migration: Create Enquiries and Products Tables
-- Created: June 20, 2026

-- 1. Create enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  device TEXT,
  problem TEXT,
  preferred_contact TEXT
);

-- 2. Create products table (replacing the old phones concept)
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,          -- Product Model/Name (e.g., "iPhone 13 Pro", "LG 1.5 Ton AC")
  brand TEXT NOT NULL,         -- Brand (e.g., "Apple", "LG", "Oppo", "Kent")
  category TEXT NOT NULL,      -- Category: "Mobiles", "Air Conditioners", "Water Purifiers", "Accessories"
  price INTEGER NOT NULL,      -- Price in INR (e.g., 45000)
  condition TEXT NOT NULL,     -- Condition: "New", "Like New", "Excellent", "Good", "Fair"
  description TEXT,            -- Listing description/notes
  sold BOOLEAN DEFAULT false,  -- Availability status
  -- Category-specific specifications (optional / nullable)
  storage TEXT,                -- e.g., "128GB", "256GB" (Mobiles)
  color TEXT,                  -- e.g., "Sierra Blue", "Black" (Mobiles / Accessories)
  spec_capacity TEXT,          -- e.g., "1.5 Ton", "10 Liters" (ACs / Purifiers)
  spec_type TEXT               -- e.g., "Inverter Split", "RO+UV+UF Alkaline" (ACs / Purifiers)
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- 4. Set RLS Policies

-- Enquiries Policies:
-- Anyone can submit an enquiry (anon or authenticated)
CREATE POLICY "anyone can submit enquiries"
  ON enquiries FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- Only authenticated users (admins) can view, update, or delete enquiries
CREATE POLICY "admins can view enquiries"
  ON enquiries FOR SELECT 
  TO authenticated 
  USING (true);

CREATE POLICY "admins can update enquiries"
  ON enquiries FOR UPDATE 
  TO authenticated 
  USING (true);

CREATE POLICY "admins can delete enquiries"
  ON enquiries FOR DELETE 
  TO authenticated 
  USING (true);

-- Products Policies:
-- Anyone (public) can view products
CREATE POLICY "anyone can view products"
  ON products FOR SELECT 
  USING (true);

-- Only authenticated users (admins) can manage (insert, update, delete) products
CREATE POLICY "admins can manage products"
  ON products FOR ALL 
  TO authenticated 
  USING (true)
  WITH CHECK (true);

-- ── DOWN / ROLLBACK SCRIPT ──
-- To roll back this migration, execute the following SQL in your Supabase SQL Editor:
-- 
-- DROP POLICY IF EXISTS "admins can manage products" ON products;
-- DROP POLICY IF EXISTS "anyone can view products" ON products;
-- DROP POLICY IF EXISTS "admins can delete enquiries" ON enquiries;
-- DROP POLICY IF EXISTS "admins can update enquiries" ON enquiries;
-- DROP POLICY IF EXISTS "admins can view enquiries" ON enquiries;
-- DROP POLICY IF EXISTS "anyone can submit enquiries" ON enquiries;
-- 
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS enquiries;

