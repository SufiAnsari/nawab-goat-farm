# TODO – NAWAB GOAT FARM Website

> Atomic checklist for building the NAWAB GOAT FARM website.

---

## Setup

- [x] Create project folder structure (`/css`, `/js`, `/images`, `/pages`)
- [x] Initialize `index.html` with HTML5 boilerplate
- [x] Add Tailwind CSS via CDN
- [x] Create `main.css` for custom styles
- [x] Create `main.js` for interactivity
- [x] Add Google Fonts: **Playfair Display** and **Lato**
- [x] Define CSS custom properties for color palette:
  - Primary Green `#009c4d`
  - Dark Green `#046b38`
  - Teal `#009ee2`
  - Light BG `#f0fdf4`
  - Dark Footer `#111827`
- [x] Set up base typography styles (headings, body text)
- [x] Prepare placeholder images in WebP format
- [x] Set up folder for page HTML files (`about.html`, `breeds.html`, `gallery.html`, `contact.html`)

---

## Core Layout

- [x] Build fixed Navbar component
  - [x] Add logo (left)
  - [x] Add navigation links (Home, About, Goat Breeds, Gallery, Contact)
  - [x] Add "Contact Us" CTA button (right)
  - [x] Implement mobile hamburger menu toggle (JS)
- [x] Build Footer component (4-column layout)
  - [x] Column 1: Logo + short description
  - [x] Column 2: Quick links
  - [x] Column 3: Contact info
  - [x] Column 4: Social icons (WhatsApp, Facebook, YouTube)
- [x] Create reusable section container with consistent spacing
- [x] Create wave/curve section divider SVG

---

## Features

### Home Page (`index.html`)

- [x] Build Hero Section
  - [x] Add full-screen background image
  - [x] Apply green-to-teal gradient overlay
  - [x] Add centered circular logo
  - [x] Add brand name: **NAWAB GOAT FARM**
  - [x] Add "Since 2015" badge
  - [x] Add tagline: *"Where goats are treated with pleasure..."*
  - [x] Add CTAs: "View Livestock" and "Palai Services"
  - [x] Add decorative wave divider at bottom
- [x] Build "Exclusive Breeds" Section
  - [x] Create section title with underline accent
  - [x] Build breed card component (image, name, description, badge, CTA)
  - [x] Display 3 breed cards in a responsive grid
  - [x] Add "View All Breeds" button
- [x] Build "Palai Services" Section
  - [x] Create two-column layout (text left, image right)
  - [x] Add feature list with check icons
  - [x] Add overlapping images with badge
  - [x] Add CTA: "Inquire About Palai Plans"
- [x] Build Gallery Preview Section
  - [x] Create masonry-style image grid
  - [x] Add hover zoom effect with overlay icon
- [x] Build Contact CTA Section
  - [x] Add gradient background
  - [x] Add heading
  - [x] Embed contact form (Name, Phone, Service interest, Message)
  - [x] Add submit button

---

### About Page (`about.html`)

- [x] Create page header with title
- [x] Add farm introduction paragraph
- [x] Add mission & values section
- [x] Add ethical care philosophy section
- [x] Add "Since 2015" experience highlight
- [x] Add supporting images

---

### Goat Breeds Page (`breeds.html`)

- [x] Create page header with title
- [x] Build breed card grid (responsive: 3 cols → 2 cols → 1 col)
- [x] Populate breed cards with sample data:
  - [x] Breed 1: Image, name, description
  - [x] Breed 2: Image, name, description
  - [x] Breed 3: Image, name, description
  - [x] (Add more as needed)
- [x] Add optional visual category labels (no filter functionality)

---

### Gallery Page (`gallery.html`)

- [x] Create page header with title
- [x] Build full-width responsive image grid (3 cols → 2 cols)
- [x] Add lightbox interaction (optional, JS-based)
- [x] Enable hover effect on images
- [x] Add lazy loading to all images

---

### Contact Page (`contact.html`)

- [x] Create page header with title
- [x] Build contact form (Netlify Forms / Formspree ready)
  - [x] Name input (required)
  - [x] Phone input (optional)
  - [x] Email input (required)
  - [x] Message textarea (required)
  - [x] Submit button
- [x] Add basic form validation (JS)
- [x] Display WhatsApp quick-contact button
- [x] Display email address
- [x] Display Facebook page link
- [x] Add optional location text

---

### Global Components

- [x] Create floating WhatsApp button
  - [x] Fixed position (bottom-right)
  - [x] Opens chat with predefined message
  - [x] Mobile and desktop compatible
- [x] Create floating social icons strip (WhatsApp, Facebook, YouTube, Email)
- [x] Add YouTube video embed component (responsive)

---

## SEO

- [x] Add unique `<title>` tag per page
- [x] Add unique `<meta name="description">` per page
- [x] Ensure proper heading hierarchy (`h1` → `h2` → `h3`)
- [x] Add `alt` attributes to all images
- [x] Use clean, readable URLs (no query params)
- [x] Add JSON-LD structured data (LocalBusiness + Farm schema)
- [x] **Add valid `sitemap.xml`**
- [x] **Configure `robots.txt`**
- [x] **Add Meta Tags for Social Media (Open Graph)**
- [x] **Ensure all images are compressed (WebP)**
- [x] **Add `loading="lazy"` to off-screen images**
- [x] **Optimize LCP (Preload Hero, Prioritize Logo)**
- [x] **Fix CLS (Add Width/Height Attributes)**
- [x] **Configure Netlify Caching Headers**
- [x] Test and fix responsive breakpoints (mobile, tablet, desktop)
- [x] Ensure tap targets ≥ 44px on mobile
- [x] Verify high contrast for text over images
- [x] Add minimal CSS transitions/hover effects
- [x] Remove unused CSS/JS
- [x] Cross-browser testing (Chrome, Firefox, Edge, Safari)
- [x] Test on low-bandwidth connection
- [x] Validate HTML (W3C Validator)
- [x] Validate CSS

---

## Deployment

- [x] Create Netlify account (if not exists)
- [x] Configure Netlify Forms (or Formspree) for contact form
- [x] Deploy site to Netlify (drag-and-drop or Git)
- [x] Set up custom domain (optional)
- [x] Enable HTTPS (automatic on Netlify)
- [x] Test live website on mobile and desktop
- [x] Verify form submissions work
- [x] Verify social links open correctly
- [x] Submit sitemap to Google Search Console

---

✅ **All tasks are atomic And independently doable.**  
📋 Check items off as you complete them.
