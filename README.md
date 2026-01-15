# SaaS Landing Page with Waitlist

A modern, conversion-optimized landing page for SaaS products featuring animated sections, waitlist capture, and premium design aesthetics.

## 🚀 Features

- ✨ **Animated Hero Section** - Dynamic gradients and smooth transitions
- 📧 **Email Waitlist** - Validated signup forms with real-time feedback
- 💰 **Pricing Tiers** - Interactive comparison tables with 3 pricing options
- 🎯 **Feature Showcase** - Icon-based features with scroll animations
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- 🎨 **Modern Design** - Glassmorphism, gradients, and micro-interactions
- 🏆 **Social Proof** - Testimonials and company logos
- ❓ **FAQ Accordion** - Collapsible questions and answers
- 🎯 **Strategic CTAs** - Conversion-optimized call-to-action buttons throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules / Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS / Resend API
- **Form Validation**: React Hook Form + Zod
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd saas-landing-page
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Email Service (EmailJS or Resend)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Or for Resend
RESEND_API_KEY=your_resend_api_key
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
saas-landing-page/
├── docs/                    # Project documentation
│   ├── 01-saas-landing-page.md
│   └── 02-key-features.md
├── app/                     # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/              # React components
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   └── ...
├── lib/                     # Utility functions
├── public/                  # Static assets
└── README.md
```

## 🎨 Design Principles

- **Visual Excellence**: Premium, modern aesthetics that wow users
- **Conversion Focus**: Clear paths to signup with strategic CTAs
- **Performance First**: Optimized for speed and SEO
- **Mobile-First**: Responsive design for all devices
- **Accessibility**: WCAG 2.1 AA compliant

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance Goals

- Lighthouse Score: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s
- Cumulative Layout Shift: <0.1

## 🤝 Contributing

This is a portfolio/demo project. Feel free to fork and customize for your needs!

## 📄 License

MIT License - feel free to use this for your projects.

## 💼 Project Info

- **Estimated Build Time**: 7-11 hours
- **Target Market**: Startups, SaaS companies, product launches
- **Project Value**: $500 - $2,000 per client

## 📚 Documentation

See the `/docs` folder for detailed documentation:
- [Project Overview](./docs/01-saas-landing-page.md)
- [Key Features](./docs/02-key-features.md)

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Built with ❤️ for modern SaaS businesses
