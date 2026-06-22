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
    liveUrl: "https://acta-hazel.vercel.app",
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
    title: "Acadexis",
    subtitle: "Institutional AI-Knowledge Grounding Platform",
    description:
      "A premium, institutional AI-knowledge grounding platform designed for universities that bridges the gap between official course materials, lecturers, and students. Features university Google SSO, academic email verification, and a Study Lab (AI tutor citing specific page numbers). Includes a Lecturer Workspace with a Knowledge Hub for managing slide/syllabus uploads and student struggle heatmaps for data-driven insights.",
    tech: [
      "Next.js",
      "TypeScript",
      "Django REST Framework",
      "Tailwind CSS",
      "Zustand",
      "Framer motion",
      "Google SSO",
      "PostgreSQL",
      "WebSockets",
    ],
    liveUrl: "https://studywithacadexis.vercel.app",
    githubUrl: "https://github.com/oluwaseyipd/Acadexis_frontend",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    featured: true,
    status: "live" as const,
    caseStudy: {
      problem:
        "University students struggle to find verified, course-specific answers from traditional AI tools, which often hallucinate. Simultaneously, lecturers lack visibility into which course concepts students are struggling with in their uploaded materials.",
      solution:
        "Developed a role-based SaaS platform connecting lecturers and students. Built an AI Tutor Study Lab that provides precise answers with page-level citations from official course documents (PDFs/PPTXs). Integrated lecturer analytics featuring student struggle heatmaps based on AI queries, a timed quiz engine, a bookmarking workspace, and secure Google SSO with academic domain restrictions.",
      impact:
        "Provided students with 100% hallucination-free study assistance through verified course materials. Enabled lecturers to pinpoint student knowledge gaps in real-time, reducing manual feedback loops, improving class comprehension, and delivering a scale-ready academic ecosystem.",
    },
  },

  {
    id: 4,
    title: "QuillInsight",
    subtitle: "AI-Powered Note-Taking Platform",
    description:
      "Premium, AI-powered note-taking web application built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Supabase (PostgreSQL, Auth). Users can draft thoughts, structure notes inside custom folder hierarchies, label items with dynamic tags, and process texts in real-time to extract executive summaries, recommended tags, and key takeaway check-lists powered by OpenAI's gpt-4o-mini model. Features a markdown writing area with a 750ms debounced auto-save, distraction-free reader view, and 5 personalization themes.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "OpenAI API", "Lucide React"],
    liveUrl: "https://quillinsight.vercel.app",
    githubUrl: "https://github.com/oluwaseyipd/quillinsight",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    featured: true,
    status: "live" as const,
    caseStudy: {
      problem:
        "Standard note-taking tools lack intelligent context processing. Users often struggle to organize scattered notes, manually synthesize long entries, extract key action items, and quickly index entries with relevant search tags.",
      solution:
        "Developed a premium markdown workspace utilizing Next.js 16 and Supabase with a 750ms debounced auto-save for real-time synchronization. Integrated a collapsible AI Insights Drawer powered by OpenAI's gpt-4o-mini that automatically generates executive summaries, key checklist takeaways, and actionable tag recommendations that users can append to notes with a single click.",
      impact:
        "Engineered a zero-latency, distraction-free note-taking workflow with instant AI summarization and dynamic metadata generation, significantly reducing the cognitive load of organizing, tagging, and reviewing notes.",
    },
  },

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

export const testimonials = [];
