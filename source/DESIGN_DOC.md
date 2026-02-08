# Design Document
## NAWAB GOAT FARM Website

---

## 1. Design Overview

### Design Style
- Premium rural / agricultural aesthetic
- Clean, modern layout with natural tones
- Trust-focused and service-oriented
- Strong visual emphasis on livestock imagery
- Balanced mix of elegance (typography) and approachability

### Design Goals
- Communicate professionalism and care
- Highlight goat breeds and Palai services
- Encourage contact via WhatsApp and contact form
- Work seamlessly on mobile and desktop

---

## 2. Layout Structure

### Global Layout
- Fixed top navigation bar
- Full-width hero section
- Section-based vertical scrolling layout
- Clear CTA separation between sections
- Footer with structured information columns

### Grid System
- Desktop: 12-column grid
- Tablet: 8-column grid
- Mobile: Single-column stacked layout

---

## 3. Color Palette

### Primary Colors
- Primary Green: `#009c4d`
- Dark Green: `#046b38`
- Secondary Teal/Cyan: `#009ee2`

### Background Colors
- Light Background: `#f0fdf4`
- White Sections: `#ffffff`
- Dark Footer: `#111827` / `#1f2933`

### Accent & Utility
- Gradient usage: Green → Teal
- Success icons/checks: Green tones
- CTA buttons: Solid green or gradient

---

## 4. Typography

### Font Families
- Headings: **Playfair Display**
- Body Text: **Lato**

### Usage Rules
- H1–H3: Playfair Display (bold, elegant)
- Body text, labels, buttons: Lato
- Taglines and quotes: Playfair Display (italic)

### Hierarchy
- H1: 48–72px (Hero title)
- H2: 36–48px (Section titles)
- H3: 24–32px
- Body: 16–18px
- Small labels: 12–14px (uppercase, spaced)

---

## 5. Page-by-Page Section Breakdown

---

### Home Page

#### Sections
1. **Navigation Bar**
   - Logo (left)
   - Menu links (right)
   - Primary CTA: “Contact Us”

2. **Hero Section**
   - Full-screen background image
   - Green-to-teal gradient overlay
   - Circular logo at center
   - Brand name
   - “Since 2015” badge
   - Tagline:
     > “Where goats are treated with pleasure…”
   - CTAs:
     - View Livestock
     - Palai Services
   - Decorative wave divider at bottom

3. **Exclusive Breeds Section**
   - Section title + underline accent
   - 3-card grid (breed cards)
   - Card content:
     - Image
     - Breed name
     - Short description
     - Badge (e.g., Pure Breed)
     - Details CTA
   - “View All Breeds” button

4. **Palai (Boarding) Services**
   - Two-column layout:
     - Left: Text + feature list
     - Right: Overlapping images + badge
   - Bullet list with check icons
   - CTA: Inquire About Palai Plans

5. **Gallery**
   - Masonry-style image grid
   - Hover zoom + overlay icon
   - Focus on authenticity and farm life

6. **Contact CTA**
   - Gradient background section
   - Large heading
   - Embedded contact form
   - Inputs:
     - Name
     - Phone
     - Service interest
     - Message
   - Submit button

---

### About Page

#### Sections
- Farm introduction
- Mission & values
- Ethical care philosophy
- Experience highlight (“Since 2015”)
- Supporting images

---

### Goat Breeds Page

#### Sections
- Breed grid (cards)
- Filters or categories (optional, visual only)
- Each card:
  - Image
  - Breed name
  - Description
- No pricing or transactions

---

### Gallery Page

#### Sections
- Full-width image grid
- Lightbox-style interaction (optional)
- Optimized for mobile swipe

---

### Contact Page

#### Sections
- Contact form
- WhatsApp quick contact button
- Email display
- Facebook page link
- Simple layout for fast access

---

## 6. Component List

### Core Components
- Navbar (desktop + mobile)
- Hero section
- Gradient CTA buttons
- Breed cards
- Image cards
- Feature list with icons
- Contact form
- Footer (4-column layout)

### Utility Components
- Floating social icons (WhatsApp, Facebook, YouTube, Email)
- Section dividers (lines, waves)
- Badges (“Top Seller”, “Since 2015”)

---

## 7. Mobile Responsiveness Notes

### Navigation
- Hamburger menu on mobile
- CTA remains visible

### Hero Section
- Reduced height
- Center-aligned text
- Stacked buttons

### Cards & Grids
- Breed cards: 1 per row
- Gallery: 2-column grid
- Images resized for performance

### Forms
- Single-column inputs
- Large touch-friendly buttons

### Performance
- Optimized images
- Minimal animations on mobile
- Fast loading on low bandwidth

---

## 8. Accessibility & UX Notes

- High contrast text over images
- Clear CTA buttons
- Readable font sizes
- Tap targets ≥ 44px
- Simple language and structure

---

## 9. Design Constraints

- No ecommerce
- No payments
- No login/admin
- Informational + contact-focused only

---

## 10. Handoff Notes

This design is suitable for:
- Static HTML/CSS
- Tailwind CSS
- React / Next.js
- AI website builders (Antigravity, Claude, GPT)

---