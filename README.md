# b_lit hairs — Website Setup Guide

> Complete setup instructions for connecting Supabase, placing images, and deploying the website.

---

## 📁 Folder Structure

Place all files exactly like this:

```
blit-hairs/
├── index.html          ← Homepage
├── shop.html           ← Shop / product listing
├── product.html        ← Single product detail page
├── about.html          ← About page
├── services.html       ← Services page
├── contact.html        ← Contact page
└── assets/
    └── images/
        └── belinda.jpeg   ← ⚠️ YOUR PHOTO GOES HERE
```

**Important:** Create the `assets/images/` folder and place `belinda.jpeg` inside it. This image is used as:
- The hero background on the homepage
- The about page portrait
- The nav logo
- The chatbot avatar
- CTA section backgrounds

---

## 🗄️ Supabase Setup (Step by Step)

### Step 1 — Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up (free)
2. Click **"New Project"**
3. Give it a name e.g. `blit-hairs`
4. Set a strong database password (save it somewhere safe)
5. Choose a region close to Ghana (e.g. **Europe West** or **US East**)
6. Click **Create Project** and wait ~2 minutes

---

### Step 2 — Get Your API Keys

1. In your Supabase project, go to **Settings → API**
2. Copy these two values:
   - **Project URL** → looks like `https://xxxxxxxxxxxx.supabase.co`
   - **anon public key** → a long string starting with `eyJ...`

---

### Step 3 — Replace Placeholders in ALL HTML Files

Open each HTML file and find these two lines (they appear near the top of each `<script>` block):

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Replace with your actual values:

```javascript
const SUPABASE_URL = 'https://xxxxxxxxxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

Do this in: `index.html`, `shop.html`, `product.html`, `about.html`, `services.html`, `contact.html`

---

### Step 4 — Create Database Tables

Go to **Supabase → SQL Editor** and run these SQL commands one by one:

#### 📦 Products Table
```sql
create table products (
  id text primary key,
  name text not null,
  category text not null check (category in ('wigs','bundles','frontals','extensions')),
  price numeric not null,
  currency text default 'GHS',
  badge text,
  hair_type text,
  texture text,
  default_length text,
  weight text,
  color text,
  description text,
  features jsonb default '[]',
  image text,
  images jsonb default '[]',
  whatsapp_msg text,
  is_visible boolean default true,
  sort_order integer default 0,
  created_at timestamptz default now()
);
```

#### 🛠️ Services Table
```sql
create table services (
  id text primary key,
  name text not null,
  description text,
  starting_price numeric,
  currency text default 'GHS',
  duration text,
  icon text,
  tags jsonb default '[]',
  is_visible boolean default true,
  sort_order integer default 0,
  created_at timestamptz default now()
);
```

#### ⭐ Reviews Table
```sql
create table reviews (
  id bigint generated always as identity primary key,
  reviewer_name text not null,
  reviewer_location text,
  stars integer default 5 check (stars between 1 and 5),
  review_text text not null,
  is_approved boolean default false,
  created_at timestamptz default now()
);
```

#### 📬 Contact Submissions Table
```sql
create table contact_submissions (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  is_read boolean default false,
  created_at timestamptz default now()
);
```

---

### Step 5 — Enable Public Read Access (Row Level Security)

Run this SQL to allow the website to read your data:

```sql
-- Allow public to read visible products
alter table products enable row level security;
create policy "Public can read visible products"
  on products for select using (is_visible = true);

-- Allow public to read visible services
alter table services enable row level security;
create policy "Public can read visible services"
  on services for select using (is_visible = true);

-- Allow public to read approved reviews
alter table reviews enable row level security;
create policy "Public can read approved reviews"
  on reviews for select using (is_approved = true);

-- Allow public to submit contact forms
alter table contact_submissions enable row level security;
create policy "Anyone can submit contact form"
  on contact_submissions for insert with check (true);
```

---

### Step 6 — Add Your Products

Go to **Supabase → Table Editor → products** and click **Insert Row**, or run this SQL sample:

```sql
insert into products (id, name, category, price, currency, badge, hair_type, texture, default_length, weight, color, description, features, image, images, whatsapp_msg, is_visible, sort_order)
values (
  'BLH001',
  'Brazilian Straight Bundle',
  'bundles',
  420,
  'GHS',
  'Best Seller',
  'Brazilian Virgin',
  'Straight',
  '18"',
  '100g per bundle',
  'Natural Black (#1B)',
  'Our signature Brazilian Straight bundles are sourced from 100% virgin human hair.',
  '["100% Virgin Human Hair","No Shedding / No Tangling","Can be Coloured & Heat Styled"]',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  '["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"]',
  'Hello b_lit hairs! 💕 I''m interested in the *Brazilian Straight Bundle*.',
  true,
  1
);
```

Repeat for each product. You can also manage products directly in the **Table Editor** UI — no SQL needed.

---

### Step 7 — Add Your Services

In **Table Editor → services**, add your services. Example:

```sql
insert into services (id, name, description, starting_price, currency, duration, icon, tags, is_visible, sort_order)
values (
  'SRV001',
  'Hair Sales',
  'Premium bundles, wigs, closures and frontals. All 100% virgin human hair.',
  290,
  'GHS',
  'Immediate',
  'shop',
  '["Nationwide Delivery","WhatsApp Order"]',
  true,
  1
);
```

**Available icon values:** `shop`, `braid`, `style`, `star`, `wig`, `scissors`

---

### Step 8 — Approve Reviews

Customer reviews submitted via WhatsApp or added manually need to be **approved** before they appear on the site.

In **Table Editor → reviews**, set `is_approved = true` for any review you want to show.

---

### Step 9 — View Contact Form Submissions

All messages sent via the Contact page form are saved to the `contact_submissions` table.

Go to **Table Editor → contact_submissions** to read them. Set `is_read = true` to mark them as handled.

---

## 🚀 Deploying the Website

### Option A — Netlify (Recommended, Free)
1. Go to [https://netlify.com](https://netlify.com) and sign up
2. Drag and drop your entire `blit-hairs/` folder onto the Netlify dashboard
3. Your site goes live instantly with a free URL like `blit-hairs.netlify.app`
4. To use a custom domain (e.g. `blit-hairs.com`), go to **Domain Settings** in Netlify

### Option B — GitHub Pages (Free)
1. Create a GitHub account and a new repository
2. Upload all your files
3. Go to **Settings → Pages → Deploy from main branch**
4. Your site goes live at `yourusername.github.io/blit-hairs`

### Option C — cPanel / Web Hosting
1. Log into your hosting cPanel
2. Open **File Manager**
3. Upload all files to `public_html/` or your domain's root folder
4. Done!

---

## 🔧 How to Update Content (Admin Guide)

### Update a Product Price
1. Go to **Supabase → Table Editor → products**
2. Find the product row
3. Click the price cell and update it
4. Click **Save** — changes appear live on the website immediately

### Add a New Product
1. Go to **Table Editor → products**
2. Click **Insert Row**
3. Fill in all the fields (name, category, price, image URL, etc.)
4. Set `is_visible = true` and assign a `sort_order` number
5. Save — it appears on the website automatically

### Hide a Product (without deleting)
1. Find the product in **Table Editor → products**
2. Set `is_visible = false`
3. It disappears from the website instantly

### Add a Review
1. Go to **Table Editor → reviews**
2. Click **Insert Row**
3. Add the reviewer name, location, stars (1–5), and review text
4. Set `is_approved = true` to make it visible

### Update Services
Same process as products — use the **services** table.

---

## 📱 WhatsApp Number

The WhatsApp number `233273521007` is used throughout all pages. If it ever changes, search all HTML files for `233273521007` and replace with the new number.

---

## 🖼️ Replacing Placeholder Images

All product images currently use **Unsplash** placeholder photos. To replace them with real product photos:

1. Upload your product photos to a hosting service:
   - [Cloudinary](https://cloudinary.com) (free, recommended)
   - [ImgBB](https://imgbb.com) (free)
   - Or just put them in your `assets/images/` folder
2. In **Supabase → products**, update the `image` and `images` columns with your real photo URLs
3. Changes appear live on the website immediately

---

## ✅ Checklist Before Going Live

- [ ] Placed `belinda.jpeg` in `assets/images/`
- [ ] Replaced `YOUR_SUPABASE_URL` in all 6 HTML files
- [ ] Replaced `YOUR_SUPABASE_ANON_KEY` in all 6 HTML files
- [ ] Created all 4 database tables in Supabase
- [ ] Ran the Row Level Security policies
- [ ] Added at least 4 products to the products table
- [ ] Added services to the services table
- [ ] Added and approved at least 3 reviews
- [ ] Tested the contact form (check contact_submissions table)
- [ ] Tested on mobile phone
- [ ] Deployed to hosting

---

## 📞 Need Help?

WhatsApp or contact your developer (Ibratech) for assistance with setup.

---

*Built with ❤️ for b_lit hairs — Ghana's luxury hair brand.*