# Contour Steel Engineering India (P) Ltd.

> **BUILT FOR A STRONGER TOMORROW**  
> Premium Industrial Website for Pre-Engineered Buildings (PEB), Structural Steel Engineering, and Turnkey Construction Solutions across India.

---

## 🏗️ Overview

This is the production-ready website for **Contour Steel Engineering India (P) Ltd.**, built using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed following the official corporate visual identity and layout specifications, the site features dynamic automatic image sliders, comprehensive multi-page routing, dedicated service deep-dives, interactive project filtering, rigorous QA/QC process breakdowns, responsive mobile navigation, and interactive quote modals.

---

## 🎨 Visual Identity & Design System

- **Primary Color:** Deep Navy Blue (`#0B2240`, `#061325`)
- **Secondary Color:** Steel Blue (`#1E3A8A`, `#2563EB`)
- **Accent Color:** Industrial Red (`#C9252C`, `#DC2626`)
- **Backgrounds:** Clean White (`#FFFFFF`), Light Technical Slate (`#F8FAFC`, `#F1F5F9`)
- **Typography:** Modern, bold industrial corporate typography with balanced line-heights and high contrast readability.

---

## 🚀 Key Features

1. **Header & Navigation:**
   - Top contact bar displaying official phone numbers (`+91 91009 96655`, `+91 93268 63516`), email (`hydsales@contoursteel.co.in`), and WhatsApp integration.
   - Sticky dark navy navigation bar on scroll with active route highlighting.
   - Smooth desktop mega-dropdowns for *About Us* and *Our Services*.
   - Prominent red **Get a Quote** CTA button opening an interactive modal accessible on every page.
   - Mobile-responsive slide-in drawer menu and sticky mobile bottom navigation bar (*Home*, *Services*, *Projects*, *Contact*).

2. **Hero Section – Dynamic Image Slider:**
   - 3 professionally configured industrial slides.
   - 5-second automatic rotation with pause-on-hover / pause-on-touch interaction.
   - Previous and Next controls, plus 3 pagination indicators (active indicator in red).
   - Floating statistics card:
     - **19+** Years of Experience
     - **1,100+** Structures Delivered
     - **30 Million** Sq. Ft. of PEB Projects

3. **Our Services (8 Core Capabilities):**
   - Pre-Engineered Buildings (PEB)
   - Industrial Steel Buildings
   - Structural Steel Engineering
   - Multi-Storey Steel Buildings
   - Specialized Industrial Structures
   - Steel Fabrication
   - Steel Erection & Installation
   - Turnkey PEB Solutions
   - Each service links to a dedicated detail route (`/services/[slug]`) complete with banner images, technical specs, features, applications, and direct quote requests.

4. **About Us (`/about`):**
   - Detailed corporate overview, vision, mission, and 8 core values.
   - Engineering expertise and plant capability highlights.

5. **Manufacturing Facilities (`/facilities`):**
   - Deep-dive into the Seriguda plant infrastructure.
   - Multi-torch CNC cutting, automatic H-beam assembly, SAW welding gantries, shot blasting, and airless spray coating lines.

6. **Quality Assurance (`/quality-assurance`):**
   - 5-stage documented QA/QC workflow from raw material ultrasonic inspection to final dispatch verification.
   - Zero-harm HSE safety culture and site erection verification.

7. **Projects Showcase (`/projects` & `/projects/[slug]`):**
   - Interactive category filtering (*All*, *Pre-Engineered Buildings*, *Industrial Warehouses*, *Process Plants*, *Commercial Steel*).
   - Detailed project case studies with area, steel tonnage, scope of work, and image galleries.

8. **Why PEB (`/why-peb`):**
   - Technical breakdown of Pre-Engineered Buildings vs. conventional structural steel.
   - 6 key engineering advantages including speed, cost savings, and clear spans up to 90m.

9. **Contact & Enquiry (`/contact`):**
   - Verified addresses for **Hyderabad (Head Office)**, **Pune (Branch Office)**, and **Seriguda (Plant)**.
   - Interactive validated enquiry form with service selector, phone validation, and instant feedback.
   - Direct Google Maps links, clickable phone numbers, and WhatsApp integration.

---

## 📂 Route Directory Structure

```
src/
├── app/
│   ├── layout.tsx                               # Root layout with Navbar, Footer, WhatsApp & Mobile Nav
│   ├── page.tsx                                 # Homepage
│   ├── globals.css                              # Tailwind and custom styles
│   ├── about/page.tsx                           # /about
│   ├── services/
│   │   ├── page.tsx                             # /services
│   │   └── [slug]/
│   │       ├── page.tsx                         # /services/[slug] (8 dedicated pages)
│   │       └── ServiceQuoteButton.tsx
│   ├── facilities/page.tsx                      # /facilities
│   ├── quality-assurance/page.tsx               # /quality-assurance
│   ├── projects/
│   │   ├── page.tsx                             # /projects
│   │   ├── ProjectsClient.tsx                   # Filterable gallery component
│   │   └── [slug]/page.tsx                      # /projects/[slug] (Dedicated detail pages)
│   ├── why-peb/page.tsx                         # /why-peb
│   └── contact/
│       ├── page.tsx                             # /contact
│       └── ContactForm.tsx                      # Validated contact form
├── components/
│   ├── Navbar.tsx                               # Header, top bar, desktop nav & mobile drawer
│   ├── Footer.tsx                               # Industrial navy footer
│   ├── HeroSlider.tsx                           # 5-second automatic hero slider with stats
│   ├── ServicesSection.tsx                      # 8 service cards
│   ├── AboutSection.tsx                         # 2-column company overview & core values
│   ├── WhyChooseSection.tsx                     # 5 advantage pillars
│   ├── FacilitiesSection.tsx                    # 4 plant photographs & overview
│   ├── ProjectsSection.tsx                      # Featured projects grid
│   ├── CtaSection.tsx                           # Construction silhouette background & addresses
│   ├── PageHeader.tsx                           # Breadcrumb header for inner pages
│   ├── QuoteModal.tsx                           # Interactive quote request popup
│   ├── WhatsAppFloating.tsx                     # Floating WhatsApp button
│   └── MobileBottomNav.tsx                      # Mobile app-style sticky bottom bar
├── data/
│   ├── company.ts                               # Company metadata, offices, core values
│   ├── services.ts                              # Comprehensive 8-service data
│   ├── projects.ts                              # Project case studies & specs
│   ├── facilities.ts                            # Plant machinery specifications
│   ├── quality.ts                               # QA/QC inspection stages
│   └── whyPeb.ts                                # Technical PEB data & comparison
└── types/
    └── index.ts                                 # TypeScript type definitions
```

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Server will start on http://localhost:3000

# Build production bundle
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment Ready (Vercel)

The project uses Next.js 14 App Router with static generation (`generateStaticParams`) for all dynamic routes. Deploying to Vercel is zero-configuration:
- Framework preset: **Next.js**
- Build command: `next build`
- Output directory: `.next`
