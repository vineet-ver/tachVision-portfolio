# TechNova.ai - Business Portfolio Website

A modern, professional business portfolio website built with Next.js 16 and Tailwind CSS 4, showcasing cutting-edge web design with glassmorphism effects, smooth animations, and a responsive layout.

![TechNova.ai](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)

## 🎯 Project Overview

TechNova.ai is a stunning business portfolio website designed for a tech startup specializing in AI solutions, web development, UI/UX design, and branding services. The site features a modern, futuristic design with smooth animations and glassmorphic UI elements.

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Effects**: Beautiful frosted glass cards with backdrop blur
- **Gradient Themes**: Blue to violet gradients (#6C63FF → #00E0FF)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Animated Cursor Trail**: Premium cursor effects for desktop users
- **Responsive Design**: Mobile-first approach, fully responsive on all devices

### 📄 Pages
1. **Home Page** - Hero section with animated background, CTA buttons, stats showcase
2. **About Page** - Company mission, values, team profiles
3. **Services Page** - 4 service categories with pricing tiers
4. **Portfolio Page** - Project grid with filtering and modal previews
5. **Contact Page** - Contact form with validation and business info

### 🎭 Components
- Navbar with dark/light mode toggle
- Footer with newsletter signup
- Reusable glassmorphic cards
- Project detail modals
- Animated cursor trail

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System

### Colors
- **Primary**: `#6C63FF` (Purple/Blue)
- **Secondary**: `#00E0FF` (Cyan)
- **Dark Background**: `#1E1E2F`

### Key Features
- SEO optimized with Next.js metadata
- Fast performance with image optimization
- Smooth animations with Framer Motion
- Form validation with client-side feedback
- Custom gradient scrollbar

## 📦 Project Structure

```
my-app/
├── app/                      # App router pages
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── Card.tsx
│   ├── CursorTrail.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProjectModal.tsx
├── data/
│   └── portfolio.json       # Project data
└── public/                  # Static assets
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

*Created by: Senior Web Developer & UI Designer*

