# Zero Pack UK - Premium Compostable Packaging Website

A premium, conversion-optimized website for Zero Pack - a revolutionary custom compostable packaging brand launching in the UK market. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design**: Eco-luxe aesthetic with earth tones (sage green, terracotta, cream, charcoal)
- **Performance Optimized**: Target 90+ Google PageSpeed score with lazy loading, WebP images, and optimized Core Web Vitals
- **SEO Optimized**: Comprehensive SEO with meta tags, schema markup, sitemap, and semantic HTML
- **Conversion Focused**: Multi-step quote form, strategic CTAs, and trust indicators throughout
- **Mobile-First**: Fully responsive design with smooth animations and transitions
- **Accessibility**: WCAG 2.1 AA compliant

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zeropackuk
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
zeropackuk/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── quote/             # Quote request page
│   ├── showcase/          # Customer showcase
│   ├── articles/          # Articles/resources
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   ├── TrustBadges.tsx    # Trust indicators
│   └── CTAButton.tsx      # CTA button component
├── public/                # Static assets
└── ...config files
```

## Pages

### Home Page (`/`)
- Hero section with trust badges
- Problem/Solution section
- Social proof with testimonials
- Three-column value proposition
- Process overview (4 steps)
- Final CTA section

### Quote Request (`/quote`)
- Multi-step form (3 steps)
- Progress indicator
- Form validation
- Thank you page

### About (`/about`)
- The Problem section
- Our Mission
- ABAP AS5810 explanation
- Our Process
- Our Commitment
- Founder story

### Customer Showcase (`/showcase`)
- Grid of customer case studies
- Challenge, solution, and results
- Testimonials
- CTA to get featured

### Articles/Resources (`/articles`)
- Featured articles grid
- All articles listing
- Article detail pages
- Category filtering (future)

## SEO Features

- Semantic HTML5 structure
- Optimized meta tags and Open Graph
- Schema.org structured data
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs
- Alt text for images
- Internal linking strategy

## Key Pages & Sections

### Home Page Sections
1. **Hero**: Headline emphasizing ABAP AS5810, prominent CTA
2. **Problem/Solution**: Call out UK greenwashing, position Zero Pack
3. **Social Proof**: Testimonials and brand count
4. **Value Props**: Three columns (Home Compostable, Low MOQ, Custom Branding)
5. **Process**: 4-step overview
6. **Final CTA**: Quote request with bonus offer

### Quote Form Steps
1. Company & Contact Details
2. Order Requirements (quantity, dimensions, design)
3. Timeline & Additional Info

## Customization

### Colors
Colors are defined in `tailwind.config.ts`:
- Sage green: `sage-*` (50-950)
- Terracotta: `terracotta-*` (50-950)
- Cream: `cream-*` (50-950)
- Charcoal: `charcoal-*` (50-950)

### Typography
- Headings: Outfit (display font)
- Body: Inter (sans-serif)

### Animations
Smooth fade-in and slide animations using Framer Motion with scroll-triggered reveals.

## Performance Optimization

- Image optimization with Next.js Image component
- WebP format with fallbacks
- Lazy loading
- Code splitting
- Minified CSS/JS in production
- CDN-ready static assets

## Next Steps

1. **Connect Forms**: Integrate quote form with backend/CRM/email service
2. **Add Real Images**: Replace placeholder gradients with actual product photography
3. **Content**: Add full article content for all 6 articles
4. **Analytics**: Set up Google Analytics 4 and Hotjar
5. **Search Console**: Verify Google Search Console
6. **Email Service**: Connect form to email service (e.g., SendGrid, Resend)
7. **Testing**: Cross-browser testing and device testing
8. **Accessibility Audit**: Run full WCAG audit

## Deployment

The site is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables
No environment variables required for basic setup. Add for:
- Form submission endpoints
- Analytics IDs
- API keys (if needed)

## License

Private project - All rights reserved

## Support

For questions or issues, contact the development team.
