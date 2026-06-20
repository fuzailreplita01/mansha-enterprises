-- Seed Data: 4 Trending Oppo & Nothing Mobile Listings (New and Pre-owned)
-- For Mansha Enterprises Products Catalog in Alamgirnagar, Ahmednagar

INSERT INTO products (
  name, 
  brand, 
  category, 
  price, 
  condition, 
  description, 
  sold, 
  storage, 
  color
) VALUES 
-- 1. New Oppo Phone (Trending Mid-ranger)
(
  'Reno 12 Pro 5G', 
  'Oppo', 
  'Mobiles', 
  36999, 
  'New', 
  'Brand new retail unit from Oppo authorized partner. Features MediaTek Dimensity 7300-Energy, AI Portrait Cam, and 80W SuperVOOC flash charging. Official 1-year brand warranty included.', 
  false, 
  '12GB RAM + 256GB', 
  'Space Brown'
),

-- 2. New Nothing Phone (Popular Design-First Mid-ranger)
(
  'Phone (2a) Plus 5G', 
  'Nothing', 
  'Mobiles', 
  27999, 
  'New', 
  'Brand new retail box. Distinctive transparent design with Glyph interface. Powered by customized MediaTek Dimensity 7350 Pro, 50MP dual cameras, and clean Nothing OS. Official 1-year brand warranty included.', 
  false, 
  '8GB RAM + 256GB', 
  'Grey'
),

-- 3. Pre-owned Oppo Phone (Good Condition)
(
  'Reno 10 5G', 
  'Oppo', 
  'Mobiles', 
  19500, 
  'Good', 
  'Certified pre-owned. Thoroughly inspected and tested by our in-house technicians. Light signs of daily use on corners, fully functional. 64MP triple camera with 32MP portrait telephoto. Comes with original charger and shop bill.', 
  false, 
  '8GB RAM + 256GB', 
  'Ice Blue'
),

-- 4. Pre-owned Nothing Phone (Excellent Condition)
(
  'Phone (1) 5G', 
  'Nothing', 
  'Mobiles', 
  16999, 
  'Excellent', 
  'Pre-owned in pristine condition. Screen and glass back are scratch-free. Glyph lighting fully functional. Battery health is at 88%. Includes shop warranty (6 months), original box, and charging cable.', 
  false, 
  '8GB RAM + 128GB', 
  'White'
);
