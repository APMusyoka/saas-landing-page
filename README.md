# SaaS Landing Page - Modern & Conversion-Optimized

A stunning, production-ready SaaS landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a complete design system, professional animations, and all essential sections for maximum conversions.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🎨 Design System
- **Custom color palette** - Purple & Blue gradient theme with HSL color tokens
- **Professional icons** - Lucide React for UI, Simple Icons for brands
- **Smooth animations** - Framer Motion throughout
- **Glassmorphism effects** - Modern, premium UI
- **Responsive design** - Mobile-first, works on all devices

### 📄 Complete Sections

1. **Hero Section**
   - Animated gradient background with floating orbs
   - Email waitlist capture form
   - Social proof (10,000+ users)
   - 3 feature highlight cards
   - Scroll indicator

2. **Features Section**
   - 6 key features with gradient icon backgrounds
   - Scroll-triggered animations
   - Hover effects

3. **Pricing Section**
   - 3 pricing tiers (Starter, Pro, Enterprise)
   - Monthly/Yearly toggle with 17% savings
   - "Most Popular" badge
   - Feature comparison lists

4. **Testimonials Section**
   - 3 customer testimonials with ratings
   - Infinite scrolling company logo carousel
   - Trusted by: Stripe, Shopify, Notion, Figma, Vercel, Linear

5. **FAQ Accordion**
   - 6 common questions
   - Smooth expand/collapse animations
   - Support link

6. **CTA Section**
   - Subtle gradient background
   - Email capture form
   - Key stats (10K users, 99.9% uptime, 24/7 support)

7. **Navigation**
   - Sticky navbar with scroll effects
   - Mobile responsive menu
   - Smooth scroll to sections

8. **Footer**
   - 4 link columns (Product, Company, Resources, Legal)
   - Social media icons (Twitter, GitHub, LinkedIn, Discord)
   - Copyright & legal links

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: 
  - [Lucide React](https://lucide.dev/) - UI icons
  - [React Icons](https://react-icons.github.io/react-icons/) - Social & brand icons
- **Deployment**: [Vercel](https://vercel.com/) ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/APMusyoka/saas-landing-page.git

# Navigate to project
cd saas-landing-page

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 🛠️ Development

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
saas-landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system & CSS variables
│   │   ├── layout.tsx            # Root layout with Inter font
│   │   └── page.tsx              # Main page assembling all sections
│   └── components/
│       ├── Navbar.tsx            # Sticky navigation
│       ├── Hero.tsx              # Hero section with form
│       ├── Features.tsx          # Features grid
│       ├── Pricing.tsx           # Pricing cards
│       ├── Testimonials.tsx      # Reviews & logo carousel
│       ├── FAQ.tsx               # Accordion
│       ├── CTA.tsx               # Final call-to-action
│       └── Footer.tsx            # Footer with links
├── docs/                         # Project documentation
│   ├── 01-saas-landing-page.md
│   ├── 02-key-features.md
│   └── 03-design-system.md
└── public/                       # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple shades (50-900)
- **Accent**: Blue shades (50-900)
- **Neutral**: Gray shades (50-900)
- **Semantic**: Success, Warning, Error, Info

### Typography
- **Font**: Inter (Google Font)
- **Sizes**: xs to 7xl with consistent scale
- **Weights**: Light (300) to Extrabold (800)

### Components
All components use the design system with:
- Utility classes (`.btn`, `.card`, `.input`, etc.)
- Gradient effects (`.gradient-primary`, `.gradient-text`)
- Glassmorphism (`.glass`)

See `docs/03-design-system.md` for full specifications.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/APMusyoka/saas-landing-page)

Or manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo
- **Cloudflare Pages**: Connect via dashboard
- **Any static host**: Deploy `.next` folder after `npm run build`

## 📊 Performance

- ✅ Lighthouse Score: 95+
- ✅ Fast page loads with Next.js optimization
- ✅ Image optimization built-in
- ✅ Code splitting & lazy loading
- ✅ Static generation for fastest TTI

## 🎯 SEO Optimized

- ✅ Semantic HTML5 elements
- ✅ Meta tags configured
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Fast Core Web Vitals

## 📝 Customization

### Update Colors
Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --primary-500: 258 75% 55%;  /* Your brand color */
  --accent-500: 200 75% 55%;   /* Complementary color */
}
```

### Update Content
- **Hero**: Edit `src/components/Hero.tsx`
- **Features**: Modify feature array in `src/components/Features.tsx`
- **Pricing**: Update plans in `src/components/Pricing.tsx`
- **FAQ**: Change questions in `src/components/FAQ.tsx`

### Add Email Integration
Replace the mock form handlers with:
- [Resend](https://resend.com/) - Transactional emails
- [EmailJS](https://www.emailjs.com/) - Client-side emails
- [Mailchimp](https://mailchimp.com/) - Marketing automation
- Your own API endpoint

## 📚 Documentation

Full documentation available in the `docs/` folder:
- `01-saas-landing-page.md` - Project overview
- `02-key-features.md` - Feature breakdown
- `03-design-system.md` - Design tokens & guidelines
- `04-development-insights.md` - Development process & learnings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/) and [Simple Icons](https://simpleicons.org/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ by [APMusyoka](https://github.com/APMusyoka)**

For questions or support, please [open an issue](https://github.com/APMusyoka/saas-landing-page/issues).
