# TODO – NAWAB GOAT FARM Website

> Atomic checklist for building the NAWAB GOAT FARM website.

---

## Setup

- [ ] Create project folder structure (`/css`, `/js`, `/images`, `/pages`)
- [ ] Initialize `index.html` with HTML5 boilerplate
- [ ] Add Tailwind CSS via CDN
- [ ] Create `main.css` for custom styles
- [ ] Create `main.js` for interactivity
- [ ] Add Google Fonts: **Playfair Display** and **Lato**
- [ ] Define CSS custom properties for color palette:
  - Primary Green `#009c4d`
  - Dark Green `#046b38`
  - Teal `#009ee2`
  - Light BG `#f0fdf4`
  - Dark Footer `#111827`
- [ ] Set up base typography styles (headings, body text)
- [ ] Prepare placeholder images in WebP format
- [ ] Set up folder for page HTML files (`about.html`, `breeds.html`, `gallery.html`, `contact.html`)

---

## Core Layout

- [ ] Build fixed Navbar component
  - [ ] Add logo (left)
  - [ ] Add navigation links (Home, About, Goat Breeds, Gallery, Contact)
  - [ ] Add "Contact Us" CTA button (right)
  - [ ] Implement mobile hamburger menu toggle (JS)
- [ ] Build Footer component (4-column layout)
  - [ ] Column 1: Logo + short description
  - [ ] Column 2: Quick links
  - [ ] Column 3: Contact info
  - [ ] Column 4: Social icons (WhatsApp, Facebook, YouTube)
- [ ] Create reusable section container with consistent spacing
- [ ] Create wave/curve section divider SVG

---

## Features

### Home Page (`index.html`)

- [ ] Build Hero Section
  - [ ] Add full-screen background image
  - [ ] Apply green-to-teal gradient overlay
  - [ ] Add centered circular logo
  - [ ] Add brand name: **NAWAB GOAT FARM**
  - [ ] Add "Since 2015" badge
  - [ ] Add tagline: *"Where goats are treated with pleasure..."*
  - [ ] Add CTAs: "View Livestock" and "Palai Services"
  - [ ] Add decorative wave divider at bottom
- [ ] Build "Exclusive Breeds" Section
  - [ ] Create section title with underline accent
  - [ ] Build breed card component (image, name, description, badge, CTA)
  - [ ] Display 3 breed cards in a responsive grid
  - [ ] Add "View All Breeds" button
- [ ] Build "Palai Services" Section
  - [ ] Create two-column layout (text left, image right)
  - [ ] Add feature list with check icons
  - [ ] Add overlapping images with badge
  - [ ] Add CTA: "Inquire About Palai Plans"
- [ ] Build Gallery Preview Section
  - [ ] Create masonry-style image grid
  - [ ] Add hover zoom effect with overlay icon
- [ ] Build Contact CTA Section
  - [ ] Add gradient background
  - [ ] Add heading
  - [ ] Embed contact form (Name, Phone, Service interest, Message)
  - [ ] Add submit button

---

### About Page (`about.html`)

- [ ] Create page header with title
- [ ] Add farm introduction paragraph
- [ ] Add mission & values section
- [ ] Add ethical care philosophy section
- [ ] Add "Since 2015" experience highlight
- [ ] Add supporting images

---

### Goat Breeds Page (`breeds.html`)

- [ ] Create page header with title
- [ ] Build breed card grid (responsive: 3 cols → 2 cols → 1 col)
- [ ] Populate breed cards with sample data:
  - [ ] Breed 1: Image, name, description
  - [ ] Breed 2: Image, name, description
  - [ ] Breed 3: Image, name, description
  - [ ] (Add more as needed)
- [ ] Add optional visual category labels (no filter functionality)

---

### Gallery Page (`gallery.html`)

- [ ] Create page header with title
- [ ] Build full-width responsive image grid (3 cols → 2 cols)
- [ ] Add lightbox interaction (optional, JS-based)
- [ ] Enable hover effect on images
- [ ] Add lazy loading to all images

---

### Contact Page (`contact.html`)

- [ ] Create page header with title
- [ ] Build contact form (Netlify Forms / Formspree ready)
  - [ ] Name input (required)
  - [ ] Phone input (optional)
  - [ ] Email input (required)
  - [ ] Message textarea (required)
  - [ ] Submit button
- [ ] Add basic form validation (JS)
- [ ] Display WhatsApp quick-contact button
- [ ] Display email address
- [ ] Display Facebook page link
- [ ] Add optional location text

---

### Global Components

- [ ] Create floating WhatsApp button
  - [ ] Fixed position (bottom-right)
  - [ ] Opens chat with predefined message
  - [ ] Mobile and desktop compatible
- [ ] Create floating social icons strip (WhatsApp, Facebook, YouTube, Email)
- [ ] Add YouTube video embed component (responsive)

---

## SEO

- [ ] Add unique `<title>` tag per page
- [ ] Add unique `<meta name="description">` per page
- [ ] Ensure proper heading hierarchy (`h1` → `h2` → `h3`)
- [ ] Add `alt` attributes to all images
- [ ] Use clean, readable URLs (no query params)
- [ ] Create `robots.txt`
- [ ] Create `sitemap.xml`
- [ ] Add Open Graph meta tags (og:title, og:description, og:image)
- [ ] Add JSON-LD structured data (LocalBusiness + Farm schema)

---

## Polish

- [ ] Optimize all images (compress, convert to WebP)
- [ ] Add `loading="lazy"` to all images
- [ ] Test and fix responsive breakpoints (mobile, tablet, desktop)
- [ ] Ensure tap targets ≥ 44px on mobile
- [ ] Verify high contrast for text over images
- [ ] Add minimal CSS transitions/hover effects
- [ ] Remove unused CSS/JS
- [ ] Cross-browser testing (Chrome, Firefox, Edge, Safari)
- [ ] Test on low-bandwidth connection
- [ ] Validate HTML (W3C Validator)
- [ ] Validate CSS

---

## Deployment

- [ ] Create Netlify account (if not exists)
- [ ] Configure Netlify Forms (or Formspree) for contact form
- [ ] Deploy site to Netlify (drag-and-drop or Git)
- [ ] Set up custom domain (optional)
- [ ] Enable HTTPS (automatic on Netlify)
- [ ] Test live website on mobile and desktop
- [ ] Verify form submissions work
- [ ] Verify social links open correctly
- [ ] Submit sitemap to Google Search Console

---

✅ **All tasks are atomic And independently doable.**  
📋 Check items off as you complete them.
