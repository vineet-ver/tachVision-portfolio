# 🚀 TechNova.ai - Quick Setup Guide

## 📋 What's Included

This modern business portfolio website includes:

✅ **5 Complete Pages**
- Home (with animated hero & stats)
- About (team & values)
- Services (with pricing)
- Portfolio (filterable projects)
- Contact (form & info)

✅ **Premium Features**
- Glassmorphism UI effects
- Dark/Light mode toggle
- Animated cursor trail
- Framer Motion animations
- Responsive design
- SEO optimized

✅ **6 Reusable Components**
- Navbar (with active indicators)
- Footer (with newsletter)
- Card (glassmorphic)
- ProjectModal
- CursorTrail

## 🎨 Design Specifications

### Brand Colors
```css
Primary:   #6C63FF (Purple/Blue)
Secondary: #00E0FF (Cyan)
Dark BG:   #1E1E2F
```

### Typography
- **Headings**: Geist Sans (Bold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

## 🖼️ Customization Guide

### 1. Update Company Info

**File**: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your company description",
  // ... update other fields
};
```

### 2. Change Brand Colors

**File**: `app/globals.css`
```css
:root {
  --primary: #6C63FF;      /* Change to your primary color */
  --secondary: #00E0FF;    /* Change to your secondary color */
  --dark-bg: #1E1E2F;      /* Change to your dark background */
}
```

### 3. Update Portfolio Projects

**File**: `data/portfolio.json`
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Project Name",
      "category": "Web Development",
      "description": "Project description",
      "tags": ["React", "Next.js"],
      "link": "#"
    }
  ]
}
```

### 4. Modify Services

**File**: `app/services/page.tsx`
- Update service titles, descriptions, and features
- Modify pricing plans

### 5. Update Contact Information

**File**: `app/contact/page.tsx` and `components/Footer.tsx`
```typescript
const contactInfo = [
  { icon: FiMail, content: 'your-email@company.com' },
  { icon: FiPhone, content: '+1 (555) 123-4567' },
  { icon: FiMapPin, content: 'Your Address' },
];
```

## 🎯 Key Files to Customize

| File | Purpose |
|------|---------|
| `app/layout.tsx` | SEO metadata, site title |
| `app/globals.css` | Colors, fonts, global styles |
| `components/Navbar.tsx` | Navigation links, logo |
| `components/Footer.tsx` | Social links, footer content |
| `data/portfolio.json` | Project portfolio data |

## 🔧 Adding New Pages

1. Create folder in `app/` directory:
   ```
   app/blog/page.tsx
   ```

2. Add to navigation in `components/Navbar.tsx`:
   ```typescript
   const navLinks = [
     // ... existing links
     { name: 'Blog', path: '/blog' },
   ];
   ```

## 🎨 Using Glassmorphism Components

```typescript
import Card from '@/components/Card';

<Card className="p-6">
  <h3>Your Content</h3>
  <p>Card with glassmorphic effect</p>
</Card>
```

## 🌐 Social Media Links

**File**: `components/Footer.tsx`
```typescript
const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/yourusername' },
  { icon: FiTwitter, href: 'https://twitter.com/yourusername' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername' },
  { icon: FiMail, href: 'mailto:hello@yourcompany.com' },
];
```

## 📸 Adding Images

Place images in `/public` folder:
```
public/
  ├── logo.png
  ├── projects/
  │   ├── project1.jpg
  │   └── project2.jpg
  └── team/
      └── member1.jpg
```

Use in components:
```typescript
import Image from 'next/image';

<Image 
  src="/logo.png" 
  alt="Logo" 
  width={200} 
  height={50} 
/>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@yoursite.com
```

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format
2. **Lazy Load**: Components below fold
3. **Minimize CSS**: Remove unused Tailwind classes
4. **Cache**: Enable caching headers

## 🐛 Troubleshooting

### Port Already in Use
```bash
Stop-Process -Id <PID> -Force
# or
npm run dev -- -p 3001
```

### Build Errors
```bash
rm -rf .next
npm run build
```

### Type Errors
```bash
npm run lint
```

## 📞 Need Help?

- Check the main README.md
- Review Next.js documentation
- Inspect browser console for errors

## ✨ Next Steps

1. ✅ Customize brand colors
2. ✅ Update company information
3. ✅ Add your portfolio projects
4. ✅ Update contact details
5. ✅ Add real images
6. ✅ Configure email integration
7. ✅ Set up analytics
8. ✅ Deploy to production

---

**Happy Coding! 🎉**
