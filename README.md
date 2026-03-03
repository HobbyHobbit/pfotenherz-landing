# 🐾 PfotenHerz Landing Page

> Modern, responsive landing page for pet care services featuring stunning 3D animations

## 🚀 Features

- ⚡ **Next.js 15** with App Router and TypeScript
- 🎨 **Tailwind CSS** for utility-first styling
- 🎭 **React Three Fiber** for beautiful 3D animations (Paw-Heart)
- 📱 **Fully Responsive** design (Desktop, Tablet, Mobile)
- 🎠 **Smooth Carousel** for customer testimonials
- 📝 **Form Validation** with React Hook Form + Zod
- 🎯 **SEO Optimized** with Next.js metadata
- ♿ **Accessibility** focused (WCAG 2.1 AA compliant)

## 📦 Tech Stack

- **Framework**: Next.js 15.1.6
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx      # Navigation bar with mobile menu
│   │   └── MobileMenu.tsx  # Off-canvas mobile navigation
│   ├── Hero/
│   │   ├── Hero.tsx        # Hero section wrapper
│   │   └── Hero3D.tsx      # 3D Paw-Heart animation (Three.js)
│   ├── Services/
│   │   ├── Services.tsx    # Services grid
│   │   ├── ServiceCard.tsx # Individual service cards
│   │   └── ServiceModal.tsx # Detailed service modal
│   ├── Testimonials/
│   │   ├── Testimonials.tsx    # Carousel wrapper
│   │   └── TestimonialCard.tsx # Single testimonial
│   ├── Contact/
│   │   ├── Contact.tsx     # Contact section
│   │   └── ContactForm.tsx # Form with validation
│   └── Footer/
│       └── Footer.tsx      # Footer with dev credit
├── lib/
│   ├── constants.ts        # App constants (services, testimonials)
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🎨 Design System

### Colors

- **Primary**: `#FF6B4A` (Coral/Terracotta)
- **Secondary**: `#F7F3E9` (Creamy Beige)
- **Accent**: `#4ECDC4` (Turquoise)
- **Text Dark**: `#2B2D42`
- **Text Light**: `#8D99AE`

### Typography

- **Display Font**: Poppins (Bold/ExtraBold for headlines)
- **Body Font**: Inter (Regular for content)

### Spacing

- Base unit: `4px` (Tailwind's default)
- Container max-width: `1280px`

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/HobbyHobbit/pfotenherz-landing.git

# Navigate to project directory
cd pfotenherz-landing

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 📝 Configuration

### Update Content

Edit constants in `src/lib/constants.ts`:

- **Company Info**: Name, slogan, contact details
- **Services**: Title, description, pricing
- **Testimonials**: Customer quotes and ratings

### Update Styles

Modify design tokens in `tailwind.config.ts`:

- Colors
- Fonts
- Animations
- Breakpoints

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js configuration
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HobbyHobbit/pfotenherz-landing)

### Manual Deployment

```bash
npm run build
# Upload .next folder and package.json to your hosting
```

## 📄 License

MIT License - feel free to use for your own projects!

## 🙏 Credits

**Design & Development**: [Leviatos](https://github.com/HobbyHobbit) - Full-Stack Developer & Creative

**Client**: A. Mojzesz - Pet Care Services

---

**Need a website like this?** → Contact me for a free consultation! 🚀