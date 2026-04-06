# Abiola John Oluwaseyi — Portfolio

A modern, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion v12.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout with metadata & fonts
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # CSS variables, design tokens, utilities
├── components/
│   ├── ThemeProvider.tsx # Dark/light mode context
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Hero section with animations
│   ├── About.tsx         # About with photo & bio
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # Featured projects cards
│   ├── Experience.tsx    # Timeline + testimonials
│   ├── Contact.tsx       # Contact form + direct links
│   └── Footer.tsx        # Links, socials, credits
├── lib/
│   └── data.ts           # ← EDIT THIS FILE to update all content
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## ✏️ Updating Content

**All content lives in `lib/data.ts`** — edit this single file to update:
- Personal info (name, bio, email, social links, photo URL)
- Skills list
- Projects (title, description, tech stack, links, images)
- Experience & achievements
- Testimonials

## 🎨 Design Tokens

Colors and theme variables are defined in `app/globals.css` as CSS custom properties. Both dark and light modes are fully configured.

## 📧 Setting Up Contact Form

The form currently logs to console. To enable email sending:

1. Install EmailJS: `npm install @emailjs/browser`
2. Sign up at [emailjs.com](https://emailjs.com)
3. In `components/Contact.tsx`, replace the `console.log` with:
   ```ts
   import emailjs from '@emailjs/browser';
   await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
   ```

## 🔗 Resume

Update `resumeUrl` in `lib/data.ts` to point to your actual PDF resume URL.

## 🌐 Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel --prod
```

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **Framer Motion v12**
- **Lucide React** icons
- Custom theme system (no next-themes dependency needed)

---

Built with ❤️ and a commitment to **Holiness & Excellence**.
