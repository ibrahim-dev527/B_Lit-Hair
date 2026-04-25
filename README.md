# b_lit hairs — Complete Setup Guide

## What You Have

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `shop.html` | Product listing page |
| `product.html` | Single product detail page |
| `about.html` | About / brand story page |
| `services.html` | Services page |
| `contact.html` | Contact page with form |
| `admin.html` | Admin dashboard (you control everything here) |
| `assets/images/belinda.jpeg` | Your photo (you must add this) |

---

## Step 1 — Add Your Photo

Create this folder structure and place your photo inside it:

```
blit-hairs/
└── assets/
    └── images/
        └── belinda.jpeg
```

The file must be named exactly `belinda.jpeg` (lowercase). This photo appears on the hero, about page, nav logo, chatbot and CTA sections across the whole website.

---

## Step 2 — Create Your Supabase Account

1. Go to **https://supabase.com** and click **Start your project** (free)
2. Sign up with your email
3. Click **New Project**
4. Fill in: Project name = `blit-hairs`, set a database password, choose region **West EU** or **US East**
5. Click **Create new project** and wait about 2 minutes

---

## Step 3 — Get Your API Keys

1. In Supabase, click **Settings** (gear icon left sidebar)
2. Click **API**
3. Copy both values:
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **anon public** key — long code starting with `eyJ...`

---

## Step 4 — Add Your Keys to Every HTML File

In each of the 7 HTML files, find and replace:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

With your actual values:

```javascript
const SUPABASE_URL = 'https://abcdefgh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

Do this in: `index.html`, `shop.html`, `product.html`, `about.html`, `services.html`, `contact.html`, `admin.html`

---

## Step 5 — Create Database Tables

In Supabase, click **SQL Editor** then **New query**. Run each block separately:

### Products Table
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

### Services Table
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

### Reviews Table
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

### Contact Submissions Table
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

## Step 6 — Set Access Permissions

In SQL Editor, run this full block at once:

```sql
alter table products enable row level security;
create policy "Public read products" on products for select using (is_visible = true);
create policy "Admin full access products" on products for all using (true) with check (true);

alter table services enable row level security;
create policy "Public read services" on services for select using (is_visible = true);
create policy "Admin full access services" on services for all using (true) with check (true);

alter table reviews enable row level security;
create policy "Public read approved reviews" on reviews for select using (is_approved = true);
create policy "Admin full access reviews" on reviews for all using (true) with check (true);

alter table contact_submissions enable row level security;
create policy "Anyone can submit contact" on contact_submissions for insert with check (true);
create policy "Admin full access contacts" on contact_submissions for all using (true) with check (true);
```

---

## Step 7 — Set Your Admin Login

Open `admin.html` and find near the bottom of the script:

```javascript
const ADMIN_EMAIL = 'admin@blit-hairs.com';
const ADMIN_PASSWORD = 'blit2024admin';
```

Change to your own email and a strong password. Keep this private.

---

## Step 8 — Deploy

### Netlify (Easiest)
1. Go to **https://netlify.com** and sign up free
2. Drag and drop your entire `blit-hairs` folder onto the dashboard
3. Your site goes live instantly with a free link

### cPanel Hosting
1. Log into cPanel → File Manager
2. Upload all files to `public_html/`
3. Live at your domain

---

## How to Use the Admin Dashboard

**Login:** Go to `yourwebsite.com/admin.html` and enter your email and password.

| What you want to do | How |
|---|---|
| Add a product | Products → Add Product → fill form → Save |
| Edit a product | Products → click pencil icon → update → Save |
| Hide a product (keep but not show) | Products → click eye icon |
| Delete a product | Products → click trash icon → Confirm |
| Add a service | Services → Add Service → fill form → Save |
| Edit/delete a service | Services → pencil or trash icon |
| Add a review | Reviews → Add Review → fill form → Save |
| Approve a review to show on site | Reviews → click Approve button |
| Hide a review | Reviews → click Unapprove |
| Delete a review | Reviews → trash icon |
| Read a contact message | Messages → click View |
| Reply to a message | Messages → View → Reply on WhatsApp |
| Delete a message | Messages → trash icon |
| Test Supabase connection | Settings → Test Connection |
| View your live website | Top right → View Website button |

---

## How It All Connects

```
Admin Dashboard (admin.html)
        ↓ saves to
   Supabase Database
        ↓ read by
   Website Pages (shop, home, services, about)
        ↓ shown to
   Your Customers
```

When you add a product in admin → it instantly appears on shop.html  
When you approve a review → it instantly appears on the homepage and about page  
When a customer submits the contact form → it appears in your Messages tab  

---

## Product Image Guide

Images are loaded from URLs. Use one of these free options:

- **Cloudinary** (best): https://cloudinary.com — upload photo, copy URL
- **ImgBB** (simple): https://imgbb.com — upload photo, copy direct link
- **Local folder**: put images in `assets/images/` and use `assets/images/photo.jpg`

---

## Go-Live Checklist

- [ ] `belinda.jpeg` placed in `assets/images/`
- [ ] Supabase URL and key added to all 7 HTML files
- [ ] All 4 database tables created in Supabase
- [ ] Access permissions SQL block has been run
- [ ] Admin email and password changed in `admin.html`
- [ ] At least 4 products added via admin
- [ ] At least 3 reviews added and approved
- [ ] Services added and visible
- [ ] Contact form tested (appears in Messages tab)
- [ ] Tested on mobile phone
- [ ] Deployed to Netlify or cPanel

---

*Built by Ibratech for b_lit hairs.*