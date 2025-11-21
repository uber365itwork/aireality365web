# AI Reality 365 - Enterprise Design System

**Tagline:** Make Everything Marketable.  
**Company:** AI Reality 365, Inc.

---

## 🎯 Overview

This is a production-ready, enterprise-grade design system and marketing website for AI Reality 365 — a global marketing studio + AI video lab + SaaS platform.

**Mission:** "Turn ideas into reality with AI — every day."

---

## 📁 File Structure

### Design System (`/styles/globals.css`)
Complete design token system with:
- Color variables (light/dark modes)
- AI365 brand colors (Indigo primary, Cyan secondary, Violet accent)
- Typography scale
- Spacing scale (4px to 96px)
- Radius tokens (8px to 32px)
- Shadow utilities (elevation-1, elevation-2)
- Glass morphism effects
- Animation utilities

### Component Library (`/components`)

**Core Components:**
- `AIButton.tsx` - Button with variants (primary, secondary, ghost, icon) and loading states
- `Navigation.tsx` - Top nav with announcement bar, dropdown menus, mobile responsive
- `Hero.tsx` - Hero section with animated background, proof badges, dual CTAs
- `ProductTabs.tsx` - Tabbed interface for 3 product pillars
- `UseCaseCarousel.tsx` - Carousel showcasing 5 industry use cases
- `MetricsRow.tsx` - KPI metrics display (10k+ videos, 40+ countries, etc.)
- `Testimonials.tsx` - Customer testimonial cards with ratings
- `PricingSection.tsx` - Pricing table with monthly/annual toggle
- `SecurityBar.tsx` - Security & compliance badges
- `CTABand.tsx` - Conversion-focused call-to-action section
- `VideoReelSection.tsx` - Video player mockup with controls
- `LogoCloud.tsx` - Partner/customer logo grid
- `Footer.tsx` - Multi-column footer with newsletter signup
- `DemoBookingModal.tsx` - Multi-step demo booking form (3 steps)
- `ChatbotWidget.tsx` - Floating chatbot with conversation flows

**ShadCN UI Components** (`/components/ui`)
Pre-built components: accordion, alert, avatar, badge, button, card, carousel, chart, dialog, dropdown, form, input, select, tabs, tooltip, and more.

---

## 🎨 Design Tokens

### Colors
```
Primary: #4F46E5 (Indigo)
Secondary: #06B6D4 (Cyan)
Accent: #A855F7 (Violet)
Success: #10B981
Warning: #F59E0B
Error: #EF4444

Dark Mode BG: #0F172A
Light Mode BG: #F8FAFC
```

### Gradients
```
gradient-hero: Indigo → Cyan (135deg)
gradient-orbit: Violet → Indigo (radial)
```

### Effects
```
glass-surface: backdrop-blur(16px) + opacity(0.8)
elevation-1: 0 6px 16px rgba(0,0,0,0.12)
elevation-2: 0 12px 28px rgba(0,0,0,0.16)
glow-primary: 0 0 20px rgba(79,70,229,0.4)
```

---

## 📱 Pages & Routes

The app uses a simple page switcher in App.tsx. Available pages:

1. **Home** (`home`) - Complete marketing homepage with all sections
2. **AI Video Studio** (`ai-video-studio`) - Product details page
3. **Solutions** (`solutions`) - Industry-specific solutions
4. **Pricing** (`pricing`) - Full pricing page with 3 plans
5. **Case Study** (`case-study`) - Detailed customer success story
6. **Careers** (`careers`) - Job listings and company culture

---

## 🎭 Interactive Features

### Demo Booking Modal
- 3-step progressive form
- Step 1: Personal info (name, email, company, role)
- Step 2: Project details (team size, use case, timeline)
- Step 3: Scheduling (date, time preferences)
- Success confirmation screen

### Chatbot Widget
- Floating button in bottom-right corner
- Expandable to 360×560px panel
- Conversation flows:
  - Lead capture (name → email → company → handoff)
  - Support/FAQ routing
  - Demo booking
  - Pricing inquiries
- Typing indicators and quick reply chips

---

## 🎯 Key Features

### Responsive Design
- Desktop: 1440px, 1200px
- Tablet: 1024px, 768px
- Mobile: 390px
- Grid system: 12 cols (desktop), 8 cols (tablet), 4 cols (mobile)

### Animations
- Motion (Framer Motion) for smooth transitions
- Hover effects with scale and shadow
- Smart Animate between states
- Stagger animations for list items
- Float animations for floating elements

### Accessibility
- AA contrast ratios
- Focus rings on interactive elements
- Hit areas ≥44px
- Semantic HTML
- ARIA labels where needed

---

## 🚀 Usage

### Starting the App
The app loads on the Home page by default and is set to dark mode.

### Navigation
Click navigation items to switch between pages. The "Book Studio Demo" button opens the multi-step booking modal.

### Chatbot
Click the floating chat icon in the bottom-right to open the AI assistant. It provides contextual help and can route to demo booking or other resources.

### Responsive
Resize the browser to see responsive layouts. Mobile menu appears on screens <768px.

---

## 🎨 Brand Guidelines

### Typography
- Headings: Inter/System fonts
- Body: Inter
- Sentence case (no all-caps for body text)

### Voice & Tone
- Premium, enterprise-focused
- Clear, benefit-driven copy
- Technical but accessible
- Global perspective

### Visual Style
- Cinematic, premium feel
- Dark backgrounds with light text
- Glass morphism surfaces
- Subtle glow highlights
- Animated orbital elements
- Gradient accents

---

## 📊 Proof Points

Used throughout the site:
- **10k+ videos/month** - Production volume
- **40+ countries** - Global reach
- **99.95% uptime** - Reliability
- **SOC2-ready** - Security compliance
- **SSO/SAML** - Enterprise auth
- **4.3× ROAS** - Average performance lift

---

## 🔒 Security & Compliance

- GDPR Compliant
- SOC 2 (in progress)
- SSO/SAML authentication
- Role-based access control (RBAC)
- Data residency options
- Enterprise-grade security

---

## 📈 Use Cases by Industry

1. **E-commerce** - Localized product videos (−37% CPA, +4.3× ROAS)
2. **Gaming** - Creator trailers & tournament promos (+2.1× CTR)
3. **Fintech** - Compliance-safe explainers (−28% drop-off)
4. **Real Estate** - Property walk-throughs (+58% lead conversion)
5. **Education** - Lecture → micro-shorts (3× content velocity)

---

## 🎁 Product Pillars

### 1. AI Video Studio
Script-to-screen with avatars, multilingual dubbing, and auto-branding. Ship content in hours, not weeks.

### 2. Marketing Cloud
Generative ad variants, orchestration across channels, analytics with ROAS lift.

### 3. Automation & Insights
Triggered workflows from CRM/CDP, creative scoring, and KPI dashboards.

---

## 💰 Pricing Plans

1. **Free Trial** - $0/month - Limited exports, 1 brand kit, watermarked
2. **Pro** - $299/month or $2,990/year - Unlimited exports, 10 brand kits, API access
3. **Enterprise** - Custom pricing - SSO/SAML, RBAC, custom SLA, dedicated success manager

---

## 🎯 Call to Actions

Primary: **"Book Studio Demo"**  
Secondary: **"Watch 60-sec Reel"**

Additional CTAs:
- Start Free Trial
- View Pricing
- Contact Sales
- Explore Use Cases

---

## 📝 Notes for Developers

### Token Mapping
- `bg` → bg-slate-900 / bg-slate-50
- `primary` → indigo-600
- `secondary` → cyan-500
- `radius` → rounded-2xl
- `glass-surface` → backdrop-blur + bg-opacity

### Component Naming
Use semantic paths: `AI365/Components/Button/Primary`

### Export Assets
- Icons: SVG
- Illustrations: SVG/PNG @2x
- Images: Use ImageWithFallback component

---

**© 2025 AI Reality 365, Inc. All rights reserved.**

Trusted by global brands in 40+ countries.
