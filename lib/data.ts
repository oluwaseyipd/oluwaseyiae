export const siteConfig = {
  name: "Abiola John Oluwaseyi",
  handle: "@oluwaseyipd",
  title: "React & Next.js Specialist • Full-Stack Engineer (Django)",
  bio: "ALX Certified Software Engineer crafting exceptional digital experiences with React, Next.js, TypeScript & Django. Based in Ogbomoso, Nigeria.",
  longBio: `I'm Abiola John Oluwaseyi, a software engineer dedicated to building elegant, performant, and accessible digital products. My journey in tech is rooted in two core values: Holiness & Excellence. I believe that great software is not just functional — it's purposeful, crafted with care, and serves real people effectively.

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
  image: "https://res.cloudinary.com/ddk9omr4r/image/upload/q_auto/f_auto/v1775470067/ogbomosotei_ziokjk.png",
  featured: true,
  status: "live" as const,
  caseStudy: {
    problem:
      "Regional tech conferences in Nigeria lacked streamlined registration systems. Event organizers struggled with manual data collection, multiple payment failures, and no real-time visibility into attendee and volunteer status.",
    solution:
      "Built a comprehensive full-stack platform with multi-tier registration (Early Bird, Standard, VIP), integrated Paystack for seamless payment processing, and a secure admin dashboard. Implemented real-time data tracking, automated confirmation emails via Resend, and CSV export for data analysis. Used Supabase Edge Functions for serverless automation.",
    impact:
      "Processed 500+ registrations successfully, reduced manual data entry by 95%, enabled real-time event insights, and established a reusable platform model for future regional tech events across Nigeria.",
  },
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
      image: "https://res.cloudinary.com/ddk9omr4r/image/upload/q_auto/f_auto/v1768639376/Screenshot_from_2026-01-14_10-17-52_wuvwxn.png",
    featured: true,
    status: "live" as const,
    caseStudy: {
      problem:
        "Teams were juggling multiple tools to manage tasks, lacking a unified space for collaboration. Organizations needed real-time synchronization, visual task tracking, and team-based access control without complicated setup.",
      solution:
        "Developed Acta with drag-and-drop Kanban boards, real-time updates powered by WebSockets, and a RESTful API backend. Implemented role-based access control, task prioritization, and team collaboration features. Used Framer Motion for smooth interactions and PostgreSQL for reliable data persistence.",
      impact:
        "Enabled 10+ teams to consolidate their task management workflow, reduced context switching by 60%, improved project delivery timelines, and established a strong foundation for enterprise features.",
    },
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
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    featured: true,
    status: "live" as const,
    caseStudy: {
      problem:
        "African tech entrepreneurs lacked a dedicated community platform to connect, share resources, find mentors, and access peer support. Existing platforms weren't tailored to the African context and tech startup ecosystem challenges.",
      solution:
        "Built Acadexis as a full-stack community platform with member discovery, resource library, event management, and AI-powered mentor matching. Utilized Supabase for scalable backend infrastructure, shadcn/ui for polished components, and Next.js for optimal performance and SEO.",
      impact:
        "Created a thriving community of 100+ active members, facilitated 15+ mentorship connections, hosted 8 community events, and positioned Acadexis as the go-to platform for African tech builder collaboration.",
    },
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
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    featured: true,
    status: "live" as const,
    caseStudy: {
      problem:
        "Book enthusiasts struggled to discover new reads that matched their interests. Generic book recommendation systems lacked personalization, and search experiences were slow and unintuitive.",
      solution:
        "Created LeafMind with intelligent search and filtering by genre, author, and themes. Implemented TanStack Query for optimized data fetching and caching, designed beautiful UI with Tailwind CSS, and integrated smart recommendation algorithms based on user preferences and reading history.",
      impact:
        "Achieved 98% search relevance accuracy, improved page load times by 70% through TanStack Query optimization, built a library of 10,000+ books, and helped users discover books 3x faster than traditional methods.",
    },
  }
];

export const experience = [
  {
    id: 1,
    title: "ALX Software Engineering Mentorship",
    org: "ALX Africa",
    period: "Sept 2025 - Feb 2026",
    description:
      "Served as a mentor for the ALX Software Engineering program, guiding aspiring developers through complex coding challenges, project development, and career advice. Provided personalized feedback and support to help mentees excel in their software engineering journey.",
    type: "volunteer" as const,
  },
  {
    id: 2,
    title: "ALX Software Engineering Certification",
    org: "ALX Africa",
    period: "Sept 2025",
    description:
      "Completed the rigorous ALX Software Engineering program, covering full-stack development, data structures, algorithms, system design, and professional software practices.",
    type: "certification" as const,
  },
  {
    id: 3,
    title: "Freelance Full-Stack Engineer",
    org: "Independent",
    period: "2025 – Present",
    description:
      "Delivered multiple client websites and web applications — from landing pages to full-stack platforms — with a focus on performance, accessibility, and modern UX.",
    type: "work" as const,
  },
  {
    id: 4,
    title: "Founder",
    org: "Thrive Links Community",
    period: "2024 – Present",
    description:
      "Building a community focused on empowering and connecting African tech builders. Leading design, development, and community strategy.",
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
