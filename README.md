# 💡 Klien - Premium Architectural Lighting Brand Website

A minimalist and elegant website for a premium architectural lighting brand with the "Ambient Glow & Minimalist" concept.

## ✨ About The Project

**Klien** is a premium architectural lighting brand doing a complete overhaul of their online presence. The main goal: transforming the website into a minimalist showroom that's clean, refined, and elegant—where products are the stars without unnecessary visual distractions.

### Target Audience
- Architects
- Interior designers
- Lighting consultants
- High-end homeowners who appreciate simplicity, refinement, and attention to detail

### Design Philosophy
The website translates the brand's essence through intentional minimalism and subtle light presence—like a high-end gallery space where every object has room to breathe, and light is used with precision to highlight what matters.

**Core Visual Metaphor**: Ambient light floating like happy particles in a serious space—never overwhelming, but always present giving warmth and depth. Products are illuminated with precision as if highlighted by a curator who knows exactly what to see.

## 🎯 Key Features

### 🎨 Visual Design
- **Color Palette**: Pure white backgrounds, gray backgrounds, warm white accents
- **Typography**: Inter font with generous line spacing
- **Whitespace**: Generous spacing for simplicity and breathing room
- **Micro-interactions**: Hover effects, smooth transitions, refined animations

### ✨ Ambient Particle Animation
- **Canvas-based**: 25 particles (desktop) / 12 particles (mobile)
- **Soft glow**: Opacity 0.03-0.10 for subtle effect
- **Slow drift**: Natural smooth movement
- **Reduced motion support**: Can pause for users who prefer

### 🖼️ Pages

#### Hero Section
- Full viewport height (100vh) with background image
- Minimalist brand logo
- Tagline: "Simplicity. Elegance. Light."
- Single CTA button

#### Product Showcase
- Grid layout: 2 columns (desktop) / 1 column (mobile)
- Product cards with hover effects
- Modal detail with comprehensive information

#### Project Gallery
- Grid layout for featured projects
- Project cards with hover effects
- Project image + title + location

#### Brand Story
- Text-heavy section with generous spacing
- Clean typography hierarchy
- No images - focus on text

#### Contact Section
- Ultra-minimal form with floating labels
- No-border inputs with bottom lines
- Minimalist contact information

### 🛒️ Product Detail Modal
When user clicks on product card:
- **2-column layout**:
  - Left: Product image with aspect-square
  - Right: Product details (scrollable)
- **Complete information**:
  - Category label
  - Product name (prominent)
  - Price
  - Detailed description
  - Specifications list
- **Action buttons**:
  - "Add to Inquiry" - black button
  - "Download Spec Sheet" - bordered button
- **Max height**: 80vh of viewport
- **Responsive**: Stacked on mobile, side-by-side on desktop

### ♿ Accessibility (WCAG AAA)
- High contrast text (minimum 7:1 ratio)
- Keyboard navigability for all interactive elements
- Focus states that are minimal but visible
- Aria labels on all interactive elements
- Screen reader compatibility with proper heading hierarchy
- Reduced motion support for users who prefer
- Touch targets minimum 48x48px

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Simplified animations on mobile
- Optimized particle count for mobile

### ⚡ Performance
- Target load time: < 2s on 3G
- Above-the-fold content instant feel
- Lazy loading for all images
- Maintain 60fps on desktop, 30fps on mobile
- Canvas-based animation optimized
- Intersection observer to pause animations when off-screen

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript

### UI Components & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Features
- **State Management**: React hooks (useState, useEffect)
- **Animations**: Canvas API for particle effects
- **Forms**: Native HTML forms with controlled inputs

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css              # Global styles & animations
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                # Homepage with all sections
├── components/
│   ├── ambient-particles.tsx   # Canvas particle animation
│   ├── scroll-progress.tsx       # Progress indicator
│   ├── navigation.tsx            # Navigation bar
│   ├── footer.tsx               # Footer component
│   ├── minimal-button.tsx        # Reusable button
│   ├── product-card.tsx         # Product card component
│   ├── project-card.tsx          # Project card component
│   ├── product-detail-modal.tsx  # Product detail modal
│   ├── contact-form.tsx          # Contact form component
│   └── ui/                     # shadcn/ui components
│       ├── dialog.tsx
│       ├── button.tsx
│       ├── input.tsx
│       └── ...
├── hooks/
│   ├── use-toast.ts             # Toast notifications
│   └── use-mobile.ts            # Mobile detection hook
├── lib/
│   └── utils.ts                # Utility functions (cn, etc.)
public/
└── images/                      # Generated images
    ├── hero-bg.jpg             # Hero background
    ├── aura-pendant.jpg         # Product images
    ├── luna-floor.jpg
    ├── nova-wall.jpg
    ├── stella-chandelier.jpg
    ├── project-1.jpg            # Project images
    ├── project-2.jpg
    ├── project-3.jpg
    └── project-4.jpg
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Bun or npm
- Modern browser with ES6+ support

### Installation
```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Run linter
bun run lint

# Push database schema (if using Prisma)
bun run db:push
```

### Accessing the Application
Development server runs at `http://localhost:3000`

**Note**: Do not access directly via `http://localhost:3000` or `127.0.0.1`. Use the Preview Panel on the right side of the interface to view the application.

## 🎨 Products

### Aura Pendant - $1,250
**Pendant Light**

Designed with Scandinavian philosophy that celebrates simplicity, Aura Pendant redefines what elegant lighting can be. A minimalist cylinder crafted from premium aluminum with a matte white finish creates a focused beam of warm ambient light that transforms any space. Perfect for dining areas, kitchen islands, or as accent lighting in living rooms, Aura brings a sense of tranquility and function without ever overwhelming.

**Specifications**:
- Dimensions: Ø20cm x H30cm
- Material: Powder-coated aluminum
- Light Source: LED 12W (3000K)
- Dimmable: Yes
- Cable length: 150cm (adjustable)
- Warranty: 5 years

### Luna Floor Lamp - $2,450
**Floor Lamp**

Luna Floor Lamp combines elegant proportions with sophisticated lighting technology. Its slender profile and diffused illumination create an atmosphere of refined luxury. The adjustable head allows precise directional control, making it ideal for reading areas or as a dramatic statement piece in any contemporary interior. Built with brushed stainless steel and high-quality linen shade, Luna creates the perfect balance between functionality and aesthetics.

**Specifications**:
- Dimensions: Ø35cm x H160cm
- Material: Brushed stainless steel, linen shade
- Light Source: LED 18W (2700K)
- Dimmable: Yes, with touch control
- Base diameter: 35cm
- Warranty: 5 years

### Nova Wall Sconce - $890
**Wall Light**

Nova Wall Sconce redefines wall lighting with its innovative diffused glow. The carefully designed lens creates a soft, ambient light that washes walls with warmth. Perfect for hallways, bedrooms, or as bedside lighting, its versatile mounting options allow for both uplight and downlight configurations. Built with die-cast aluminum and opal glass, Nova delivers lighting quality that's unmatched in a clean design.

**Specifications**:
- Dimensions: W12cm x D8cm x H15cm
- Material: Die-cast aluminum, opal glass
- Light Source: LED 8W (3000K)
- Dimmable: Yes
- IP Rating: IP20 (indoor)
- Warranty: 3 years

### Stella Chandelier - $4,950
**Chandelier**

Stella Chandelier is a masterpiece of contemporary lighting design. Multiple floating elements create a constellation of light that serves as both illumination and sculptural art. Each individual light can be adjusted to create custom configurations, making every installation unique and personalized. With chrome finish and hand-blown glass, Stella doesn't just light up a room—it becomes a living work of art that changes with your mood.

**Specifications**:
- Dimensions: W80cm x D80cm x H120cm
- Material: Chrome finish, hand-blown glass
- Light Source: 6 x LED 10W (2700K)
- Dimmable: Yes
- Cable length: 200cm
- Warranty: 5 years

## 🏠 Featured Projects

### Modern Loft - Tokyo, Japan
Modern loft in Tokyo with Japanese design, clean lines, neutral color palette, premium lighting fixtures, bright and airy.

### Coastal Residence - Sydney, Australia
Coastal residence in Sydney with ocean view, minimalist design, warm natural light, premium lighting fixtures, neutral tones, elegant interior.

### Urban Penthouse - New York, USA
Urban penthouse in New York City with city skyline view, modern minimalist interior, premium architectural lighting, luxury design, clean aesthetic.

### Minimalist Villa - Copenhagen, Denmark
Minimalist villa in Copenhagen with Danish design, neutral color palette, warm lighting, elegant simplicity, natural materials, clean lines.

## 🎨 Design System

### Colors
```css
/* Backgrounds */
--background: #ffffff              /* Pure White Base */
--background-secondary: #fafafa        /* Soft Gray */
--background-tertiary: #f5f5f5      /* Light Gray */

/* Text Colors */
--text-primary: #000000           /* Primary Text */
--text-secondary: #333333         /* Secondary Text */
--text-muted: #666666             /* Muted Text */
```

### Typography
- **Font**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI'
- **Headings**: Medium (500) weight, tight tracking
- **Body**: Regular (400) weight, 1.6-1.7 line-height
- **Sizes**: Generous scaling with responsive breakpoints

### Spacing
- **Section padding**: py-20 (mobile) / py-28 (desktop)
- **Container max-width**: 3xl (story) / 6xl (products & projects)
- **Grid gaps**: gap-6 (mobile) / gap-8 (desktop)
- **Card padding**: p-5 for cards, p-6/p-8 for modal

## ⚡ Performance Optimization

### Code Splitting
- Automatic with Next.js 16
- Route-based splitting
- Component-level splitting for modal

### Asset Optimization
- Image lazy loading with `loading="lazy"`
- Optimal image sizes (WebP with fallback)
- Preload critical images

### Animation Performance
- Canvas-based for 60fps
- Reduced motion support
- Intersection observer for off-screen animations
- Debounced scroll events

## ♿ Accessibility

### Keyboard Navigation
- Logical tab order
- Visible focus states
- Skip links for main content

### Screen Readers
- Proper heading hierarchy
- Aria labels on all interactive elements
- Alt text for all images
- Visually hidden DialogTitle for modal

### Color Contrast
- WCAG AAA compliant (minimum 7:1)
- Test with multiple tools
- Semantic HTML structure

## 📝 Development Guidelines

### Coding Style
- TypeScript strict mode
- Functional components with hooks
- Proper type definitions
- ESLint for code quality

### Component Organization
- Reusable components in `/components`
- Page components in `/app`
- UI components in `/components/ui`
- Proper prop interfaces with TypeScript

### Styling Approach
- Tailwind CSS utility classes first
- Custom styles only when necessary
- Consistent design tokens via CSS variables
- Mobile-first responsive design

## 🔜 Future Enhancements

### Potential Features
- [ ] Filter & search functionality for products
- [ ] Shopping cart / inquiry system
- [ ] Image gallery zoom functionality
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA support
- [ ] Analytics integration
- [ ] SEO optimization (meta tags, sitemap)

### Technical Improvements
- [ ] Image optimization with blur placeholders
- [ ] Virtual scrolling for large product lists
- [ ] Server-side rendering for modal
- [ ] Form validation with Zod
- [ ] API integration for contact form

## 📄 License

This project is for **Klien** - Premium Architectural Lighting Brand.

## 👥 Credits

- **Framework**: Next.js by Vercel
- **UI Components**: shadcn/ui
- **Icons**: Lucide
- **Styling**: Tailwind CSS
- **Design Concept**: Based on brand brief for Klien

---
