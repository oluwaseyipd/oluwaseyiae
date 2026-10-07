export const siteConfig = {
  icon: "/favicon.png",
  name: "Abiola John Oluwaseyi",
  handle: "@devoluwaseyi",
  title: "Frontend Developer • React, Next.js & TypeScript",
  bio: "ALX-certified frontend developer building responsive, accessible web apps with React, Next.js, and TypeScript. Based in Ogbomoso, Nigeria. Open to entry-level roles and internships, remote or on-site.",
  longBio: `I'm Abiola John Oluwaseyi, a frontend developer and Computer Science graduate who builds fast, accessible web apps with React, Next.js, and TypeScript. I've shipped several live products, including a Paystack-powered conference platform for OTEI 2026 in Ogbomoso, an AI note-taking app, and a task manager with optimistic updates and Google sign-in. I also work with Django REST Framework, so I can connect interfaces to real backends and take a feature from design to deployment. I completed the ALX Software Engineering program and later mentored other learners through it. I care about software that is purposeful and carefully crafted, guided by two values: holiness and excellence. I'm looking for an entry-level frontend role or internship, remote or on-site in Lagos, Ibadan, or Ogbomoso, and I'm open to relocating.`,
  email: "oluwaseyiae@gmail.com",
  twitter: "https://x.com/devoluwaseyi",
  github: "https://github.com/oluwaseyipd",
  linkedin: "https://linkedin.com/in/oluwaseyiae",
  photo: "/oluwaseyi.webp",
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


export const experience = [
  {
    id: 1,
    title: "Freelance Frontend Developer",
    org: "Independent",
    period: "2025 – Present",
    description:
      "Build responsive websites and web apps for clients with React, Next.js and TypeScript, including a brand website with one-tap WhatsApp ordering for Lewa's Growth Oil. Handle the work from requirements to deployment.", // TODO: confirm Lewa's Growth Oil is a freelance client and the client is happy to be named; add "[N] client projects" only if the count is verifiable
    type: "work" as const,
  },
  {
    id: 2,
    title: "Volunteer Frontend Team Lead",
    org: "Higher Ground Baptist Church",
    period: "Jan 2024 – Present", // TODO: confirm the start date
    description:
      "Lead a team of four volunteers (designers, developers and content creators) shipping event platforms for the church, including BISUM and Photizo, with Next.js and React, TypeScript, Supabase, Paystack and Resend. Run pull request reviews and a mobile-first checklist before each release.",
    type: "volunteer" as const,
  },
  {
    id: 3,
    title: "ALX Software Engineering Mentor",
    org: "ALX Africa",
    period: "Sept 2025 – Feb 2026",
    description:
      "Mentored aspiring software engineers through the ALX Software Engineering program, reviewing their code, helping them debug project work and giving career advice.", // TODO: add "[N] mentees" if you know the number
    type: "volunteer" as const,
  },
  {
    id: 4,
    title: "ALX Software Engineering Certification",
    org: "ALX Africa",
    period: "Sept 2025",
    description:
      "Completed the ALX Software Engineering program, covering full-stack development, data structures and algorithms, system design and professional software practices.",
    type: "certification" as const,
  },
];

export const testimonials = [];
