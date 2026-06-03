# Funngro Premium Redesign (SaaS Platform)

**Live Demo**: [https://funngroayush.netlify.app/](https://funngroayush.netlify.app/)

This is a complete, production-ready, selection-winning redesign of the **Funngro** platform. It reimagines the platform as a modern, premium, venture-backed startup product (reminiscent of Stripe, Vercel, Linear, and Notion) while preserving its core dual-sided business model: teens earning pocket money through micro-projects, and companies hiring vetted Gen-Z talent.

---

## 🚀 Lighthouse Goals

- **Performance**: 95+ (via Next.js dynamic routing, Next/Image, Code Splitting)
- **Accessibility**: 100 (via strict semantic HTML, ARIA tags, color contrast)
- **SEO**: 100 (via Next.js Metadata API, Canonical URLs, Organization & FAQ JSON-LD schemas)
- **Best Practices**: 100 (via secure headers, zero layout shifts, optimized dependencies)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first variable config)
- **State & Theme**: `next-themes` (light/dark switcher)
- **Animations**: Framer Motion (continuous floating, scroll reveals, timeline connections)
- **Form Handling**: React Hook Form
- **Form Validation**: Zod Schema
- **Iconography**: Lucide React Icons

---

## 📁 Folder Structure

```txt
app/
├── app/
│   ├── company/
│   │   └── page.tsx        # Company Landing B2B Page
│   ├── teen/
│   │   └── page.tsx        # Teen Landing Page
│   ├── globals.css         # Tailwind v4 variables & custom keyframes
│   ├── layout.tsx          # Root Layout & Organization JSON-LD
│   ├── page.tsx            # Home Landing Page
│   ├── robots.ts           # Crawler SEO Indexer config
│   ├── sitemap.ts          # XML Sitemap generator
│   └── theme-provider.tsx  # client theme provider wrapper
│
├── components/
│   ├── CTA.tsx             # Mesh-gradient CTA Section
│   ├── CaseStudies.tsx     # B2B metrics & ROI cards
│   ├── ContactForm.tsx     # Zod validated project scope form
│   ├── Counter.tsx         # Scroll-triggered count up animator
│   ├── EarningsCalculator.tsx # Live slider calculators
│   ├── FAQ.tsx             # Interactive accordion + JSON-LD FAQs
│   ├── Footer.tsx          # Responsive multi-column footer
│   ├── Hero.tsx            # Split Hero with animated floating cards
│   ├── HiringProcess.tsx   # Company steps visual timeline
│   ├── Navbar.tsx          # Sticky glassmorphic navigation
│   ├── Pricing.tsx         # Starter/Growth/Enterprise plans
│   ├── ProjectCategories.tsx # Grid of digital categories
│   ├── ScrollReveal.tsx    # Viewport viewport transition wrapper
│   ├── Stats.tsx           # Counters listing grid
│   ├── ThemeToggle.tsx     # Icon flip mode switcher
│   ├── Timeline.tsx        # Teen vertical timeline steps
│   └── TrustedBrands.tsx   # Endless scrolling logo marquee
│
├── lib/
│   ├── constants.ts        # Shared structured mock copy
│   ├── schema.ts           # Zod contact schemas
│   └── seo.ts              # Dynamic SEO metadata builder
│
├── public/                 # Static images & assets
├── netlify.toml            # Deployment configurations
└── package.json
```

---

## 💻 Installation & Setup

1. **Clone & Navigate**:
   ```bash
   cd Funngro/app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Dev Server Locally**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) inside your web browser.

4. **Lint & Code Quality**:
   ```bash
   npm run lint
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Netlify Deployment

This project contains a pre-configured `netlify.toml` for seamless builds on Netlify.

### Automated CI/CD Deploy:
1. Log into your Netlify dashboard and click **Add New Site** > **Import from existing project**.
2. Select your repository (GitHub/GitLab/etc.).
3. Configure the build parameters in the Netlify UI:
   - **Base directory**: `app`
   - **Build command**: `npm run build`
   - **Publish directory**: `app/.next`
4. Click **Deploy Site**. Netlify will use the configured plugin `@netlify/plugin-nextjs` automatically.
