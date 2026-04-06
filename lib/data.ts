export const siteConfig = {
  name: "Abiola John Oluwaseyi",
  handle: "@oluwaseyipd",
  title: "React & Next.js Specialist • Full-Stack Engineer (Django)",
  bio: "ALX Certified Software Engineer crafting exceptional digital experiences with React, Next.js, TypeScript & Django. Based in Ogbomoso, Nigeria.",
  longBio: `I'm Abiola John Oluwaseyi — a passionate software engineer dedicated to building elegant, performant, and accessible digital products. My journey in tech is rooted in two core values: Holiness & Excellence. I believe that great software is not just functional — it's purposeful, crafted with care, and serves real people effectively.

With expertise in React, Next.js, TypeScript on the frontend, and Django & Django REST Framework on the backend, I deliver end-to-end solutions that are both beautiful and robust. I'm the founder of Thrive_Links, a community platform for African tech builders — because I believe in lifting others as I climb.

Currently open to full-time Frontend / Full-Stack roles and exciting collaborations.`,
  email: "oluwaseyiae@gmail.com",
  twitter: "https://x.com/oluwaseyipd",
  github: "https://github.com/oluwaseyipd",
  linkedin: "https://linkedin.com/in/oluwaseyiae",
  photo: "https://res.cloudinary.com/ddk9omr4r/image/upload/q_auto/f_auto/v1775470095/oluwaseyi_xvgypm.png",
  resumeUrl: "#", // Replace with actual resume PDF link
  values: ["Holiness", "Excellence"],
  location: "Ogbomoso, Nigeria",
  openToWork: true,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Framer Motion", icon: "✦" },
    { name: "shadcn/ui", icon: "◈" },
  ],
  backend: [
    { name: "Django", icon: "🐍" },
    { name: "Django REST", icon: "🔌" },
    { name: "Supabase", icon: "⚡" },
    { name: "PostgreSQL", icon: "🐘" },
  ],
  tools: [
    { name: "Git", icon: "🔀" },
    { name: "GitHub", icon: "🐙" },
    { name: "Vercel", icon: "△" },
    { name: "Axios", icon: "📡" },
    { name: "TanStack Query", icon: "🔄" },
  ],
};

export const projects = [
{
  id: 1,
  title: "Ogbomoso Tech & Entrepreneurship Ignite",
  subtitle: "Conference Website",
  description:
    "Full-stack event website for OTEI 2026 — a flagship tech and entrepreneurship conference in Ogbomoso, Nigeria. Features multi-tier registration with Paystack payment integration, volunteer and sponsor application forms, a live countdown, and a password-protected admin dashboard with data visualisation and CSV export. Built with React, Vite, Tailwind CSS, and Supabase, with automated confirmation emails via Resend and Supabase Edge Functions.",
  tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Paystack", "Resend"],
  liveUrl: "https://ogbomosotei.com",
  githubUrl: "https://github.com/oluwaseyipd/ogbomosotei",
  caseStudyUrl: "#",
  image: "https://res.cloudinary.com/ddk9omr4r/image/upload/q_auto/f_auto/v1775470067/ogbomosotei_ziokjk.png",
  featured: true,
  status: "live" as const,
},
  {
    id: 2,
    title: "Acta",
    subtitle: "Task Management App",
    description:
      "A powerful, full-stack task management application with real-time updates, drag-and-drop boards, and team collaboration features. Built with a React TypeScript frontend and Django REST API backend.",
    tech: ["React", "TypeScript", "Django REST", "Framer Motion", "PostgreSQL"],
    liveUrl: "https://acta-psi.vercel.app",
    githubUrl: "https://github.com/oluwaseyipd/acta-frontend",
    caseStudyUrl: "#",
    image: "https://res.cloudinary.com/ddk9omr4r/image/upload/q_auto/f_auto/v1768639376/Screenshot_from_2026-01-14_10-17-52_wuvwxn.png",
    featured: true,
    status: "live" as const,
  },
  {
    id: 3,
    title: " Acadexis",
    subtitle: "Edutech Saas Platform",
    description:
      "A vibrant community platform for African tech builders. Features member profiles, resource sharing, event announcements, and mentorship matching — built to help devs thrive together.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "Supabase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/oluwaseyipd/Acadexis_frontend",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    featured: true,
    status: "live" as const,
  },
  {
    id: 4,
    title: "LeafMind",
    subtitle: "Book Discovery App",
    description:
      "An elegant book discovery platform that helps readers find their next favorite read. Powered by smart recommendations, beautiful cover previews, and seamless search with TanStack Query.",
    tech: ["React", "TanStack Query", "Tailwind CSS", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com/oluwaseyipd",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    featured: true,
    status: "live" as const,
  }
];

export const experience = [
  {
    id: 1,
    title: "ALX Software Engineering Certification",
    org: "ALX Africa",
    period: "Sept 2025",
    description:
      "Completed the rigorous ALX Software Engineering program, covering full-stack development, data structures, algorithms, system design, and professional software practices.",
    type: "certification" as const,
  },
  {
    id: 2,
    title: "Freelance Full-Stack Engineer",
    org: "Independent",
    period: "2025 – Present",
    description:
      "Delivered multiple client websites and web applications — from landing pages to full-stack platforms — with a focus on performance, accessibility, and modern UX.",
    type: "work" as const,
  },
  {
    id: 3,
    title: "Founder — Thrive_Links",
    org: "Thrive_Links Community",
    period: "2025 – Present",
    description:
      "Building a full-stack community platform designed to empower and connect African tech builders. Leading design, development, and community strategy.",
    type: "project" as const,
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Abiola delivered our project ahead of schedule and beyond our expectations. His attention to detail and clean code made the entire collaboration seamless.",
    name: "Adaeze Nwachukwu",
    title: "Product Manager, TechStartup Lagos",
    avatar: "AN",
  },
  {
    id: 2,
    quote:
      "Working with Oluwaseyi was a game changer. He understood our vision immediately and built exactly what we needed — fast, responsive, and beautiful.",
    name: "Emmanuel Okonkwo",
    title: "Founder, EduTech Nigeria",
    avatar: "EO",
  },
  {
    id: 3,
    quote:
      "His code is exceptionally clean. The project he built for us continues to perform perfectly six months later with zero major issues. True excellence.",
    name: "Funmilayo Adeyemi",
    title: "CTO, FinTech Startup",
    avatar: "FA",
  },
];
