export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  title?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface TechnicalDecision {
  technology: string;
  decision: string;
  why: string;
}

export interface ProjectMeta {
  role: string;
  type: string;
  year: string;
  clientOrEvent?: string;
  timeline?: string;
}

export interface ProjectRoleDetails {
  built: string[];
  notBuilt: string[];
  summary?: string;
}

export interface ProjectOverview {
  problem: string;
  audience: string;
  summary: string;
}

export interface ProjectLinks {
  liveUrl: string;
  githubUrl?: string;
  backendUrl?: string;
  docsUrl?: string;
}

export interface ProjectTechStack {
  frontend: string[];
  backend: string[];
  services?: string[];
  tools?: string[];
  database?: string[];
}

export interface ProjectDetailData {
  tagline: string;
  meta: ProjectMeta;
  overview: ProjectOverview;
  role: ProjectRoleDetails;
  keyFeatures: ProjectFeature[];
  technicalDecisions: TechnicalDecision[];
  techStack: ProjectTechStack;
  links: ProjectLinks;
  images: ProjectImage[];
}

export type ProjectCategory = "fullstack" | "frontend" | "backend";

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  backendUrl?: string;
  image: string;
  featured?: boolean;
  status?: "live" | "building";
  details: ProjectDetailData;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "acta",
    title: "Acta",
    subtitle: "Task & Workspace Management App",
    category: "fullstack",
    description:
      "A fast, responsive task and workspace manager with list and Kanban views, analytics, three themes, and Google sign-in. Built with a React 19 and TypeScript frontend connected to a Django REST API backend with PostgreSQL.",
    tech: ["React 19", "TypeScript", "TanStack Query", "Tailwind CSS", "Django REST", "PostgreSQL"],
    liveUrl: "https://actaly.vercel.app",
    githubUrl: "https://github.com/oluwaseyipd/acta-frontend",
    backendUrl: "https://github.com/oluwaseyipd/Acta_backend",
    image: "/images/acta/home-hero.png",
    featured: true,
    status: "live",
    details: {
      tagline: "A fast, responsive task manager with optimistic updates, multi-theme engine, and a Django REST API backend.",
      meta: {
        role: "Full-Stack Developer",
        type: "Full-Stack Web Application",
        year: "2026",
        clientOrEvent: "Personal Product & Open-Source Project",
        timeline: "Dec 2025 – Jan 2026",
      },
      overview: {
        problem:
          "Individuals and fast-moving teams struggle with clunky, sluggish task managers that impose unnecessary latency on routine actions like checking off items, switching grouping modes, or managing due dates. Traditional tools often force users through page reloads and interrupt sessions with expired login tokens.",
        audience:
          "Built for developers, remote teams, and solo builders who want a lightweight, keyboard-friendly workspace that feels instant and keeps track of velocity without administrative clutter.",
        summary:
          "Acta is a task and workspace manager built to feel instant on any screen. The React frontend handles list and Kanban views, productivity analytics, and multi-theme customization, communicating with a custom Django REST API. The core focus was on details that make software feel truly polished: optimistic UI mutations, silent token refresh, resilient form validation, and responsive mobile drawers.",
      },
      role: {
        summary: "I designed and engineered the entire application end-to-end as the sole full-stack developer.",
        built: [
          "Built the entire React 19 + TypeScript frontend from scratch with Vite, Tailwind CSS, and Framer Motion.",
          "Engineered the full Django REST Framework backend with custom serializers, PostgreSQL schemas, and relational task models.",
          "Implemented optimistic mutations with TanStack Query and state synchronization with Zustand.",
          "Designed and implemented Google OAuth2 authentication with silent JWT access token refresh via Axios interceptors.",
          "Crafted the Kanban drag-and-drop board, due-date grouping (Today, Tomorrow, Inbox), and interactive analytics page.",
          "Built the multi-theme architecture supporting Light, Dark, and Midnight presets saved across sessions.",
        ],
        notBuilt: [
          "Did not use heavy pre-built dashboard templates; every component was custom-coded using Tailwind CSS and modular UI primitives.",
          "Did not build an external auth provider from scratch; leveraged Google OAuth2 and Django SimpleJWT standards for security.",
        ],
      },
      keyFeatures: [
        {
          title: "List & Kanban Workflows",
          description: "Seamlessly toggle between a dense list view and an interactive Kanban board grouped by due date: Today, Tomorrow, and Inbox.",
        },
        {
          title: "Zero-Latency Optimistic Updates",
          description: "Checking off a task or changing status mutates the UI immediately, rolling back gracefully if the backend request fails.",
        },
        {
          title: "Google SSO & Silent JWT Refresh",
          description: "One-click Google login paired with an Axios interceptor that refreshes expired tokens in the background without session kicks.",
        },
        {
          title: "Productivity Analytics Dashboard",
          description: "Visual summaries tracking task completion velocity, category breakdowns, and historical productivity trends.",
        },
        {
          title: "3 Theme Presets (Light, Dark, Midnight)",
          description: "Tailored color palettes crafted for day and night workflows with persistent theme preferences.",
        },
        {
          title: "Validated Forms with Zod & React Hook Form",
          description: "Type-safe task creation and editing modals with real-time error states and zero unnecessary re-renders.",
        },
      ],
      technicalDecisions: [
        {
          technology: "TanStack Query v5",
          decision: "Server State & Optimistic Caching",
          why: "Eliminates loading spinners during regular task updates. It manages query deduplication, automatic cache invalidation, and seamless rollback on network errors.",
        },
        {
          technology: "Zustand",
          decision: "Client UI State Management",
          why: "Separates transient UI state (theme mode, active Kanban view, sidebar collapsed state) from asynchronous server data, avoiding boilerplate and context re-render overhead.",
        },
        {
          technology: "Django REST Framework & PostgreSQL",
          decision: "Backend API & Relational Database",
          why: "Provides robust relational data integrity for workspaces, task foreign keys, and user ownership, with built-in permission classes and fast JSON serialization.",
        },
        {
          technology: "Axios Interceptors",
          decision: "Token Rotation & Session Resilience",
          why: "Allows queuing failed 401 requests while a single refresh token request executes, then replays the original requests transparently.",
        },
      ],
      techStack: {
        frontend: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Zustand", "Framer Motion", "React Hook Form", "Zod", "Axios"],
        backend: ["Django REST Framework", "Python 3.11", "JWT Authentication", "Django CORS Headers"],
        database: ["PostgreSQL", "Relational Task Schemas"],
        services: ["Google OAuth 2.0", "Cloudflare R2"],
        tools: ["Git & GitHub", "Vercel", "ESLint", "Postman"],
      },
      links: {
        liveUrl: "https://actaly.vercel.app",
        githubUrl: "https://github.com/oluwaseyipd/acta-frontend",
        backendUrl: "https://github.com/oluwaseyipd/Acta_backend",
      },
      images: [
        {
          src: "https://res.cloudinary.com/ddk9omr4r/image/upload/q_auto/f_auto/v1768639376/Screenshot_from_2026-01-14_10-17-52_wuvwxn.png",
          alt: "Acta Dashboard overview with task board and sidebar",
          title: "Dashboard Overview",
          caption: "Workspace overview with quick filters, task boards, and collapsible navigation sidebar.",
        },
        {
          src: "/images/acta/01-login.png",
          alt: "Login page with Google sign-in",
          title: "Authentication & Google SSO",
          caption: "Secure login flow featuring Google OAuth2 and JWT token persistence.",
        },
        {
          src: "/images/acta/02-overview-list.png",
          alt: "Overview in list view",
          title: "Structured List View",
          caption: "Dense list view categorized by Today, Tomorrow, and Upcoming backlog items.",
        },
        {
          src: "/images/acta/03-kanban-board.png",
          alt: "Kanban board grouped by Today, Tomorrow and Inbox",
          title: "Interactive Kanban Board",
          caption: "Drag-and-drop Kanban columns with real-time status transitions and optimistic updates.",
        },
        {
          src: "/images/acta/04-task-form.png",
          alt: "Task form showing validation feedback",
          title: "Zod Schema Validated Forms",
          caption: "Task creation modal with field validation, date pickers, and priority flags.",
        },
        {
          src: "/images/acta/05-analytics.png",
          alt: "Analytics page",
          title: "Velocity & Analytics",
          caption: "Visual productivity metrics tracking task completion rates and overdue distribution.",
        },
        {
          src: "/images/acta/06-profile.png",
          alt: "Profile page",
          title: "User Settings & Preferences",
          caption: "Profile management screen with account settings and theme controls.",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "otei",
    title: "Ogbomoso Tech & Entrepreneurship Ignite",
    subtitle: "Flagship Conference Platform & Admin Dashboard",
    category: "fullstack",
    description:
      "Official website and event management platform for OTEI 2026 — the inaugural tech conference in Ogbomoso, Nigeria. Handles multi-tier attendee registration, Paystack payments, volunteer/sponsor intake, and an admin dashboard with CSV export.",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Paystack", "Resend"],
    liveUrl: "https://ogbomosotei.com",
    githubUrl: "https://github.com/oluwaseyipd/ogbomosotei",
    image: "https://res.cloudinary.com/ddk9omr4r/image/upload/q_auto/f_auto/v1775470067/ogbomosotei_ziokjk.png",
    featured: true,
    status: "live",
    details: {
      tagline: "The full-featured event website, payment gateway, and administrative portal for Ogbomoso's premier tech conference.",
      meta: {
        role: "Sole Full-Stack Developer & Designer",
        type: "Event Platform & Management System",
        year: "2026",
        clientOrEvent: "OTEI 2026 • May 2, 2026 • LAUTECH, Ogbomoso",
        timeline: "Jan 2026 – Feb 2026",
      },
      overview: {
        problem:
          "Regional tech conferences in Nigeria often suffer from fragmented registration workflows — relying on insecure public Google Forms, manual bank transfer confirmations, and disconnected volunteer sheets, resulting in delayed ticketing and payment errors.",
        audience:
          "Built for conference attendees (students, founders, engineers) across Nigeria, as well as the OTEI organizing committee who required a centralized dashboard to track registrations, verify payments, and export attendee manifests.",
        summary:
          "OTEI 2026 was the inaugural edition of a major regional conference in Ogbomoso with no existing digital infrastructure. I designed and built the complete platform: an engaging public portal with a live event countdown, an integrated Paystack checkout for multi-tier tickets, 4 separate application pipelines, automated transactional emails, and an admin dashboard with data visualizations and CSV export.",
      },
      role: {
        summary: "I designed and engineered the entire web platform, payment integration, and administrative system from scratch.",
        built: [
          "Engineered the responsive React + Vite frontend with Tailwind CSS and custom component styling.",
          "Integrated Paystack payment gateway with real-time transaction verification and reference validation.",
          "Architected PostgreSQL relational schemas in Supabase for attendees, volunteers, sponsors, and exhibitors.",
          "Configured Supabase Row Level Security (RLS) policies to safeguard attendee information while allowing public form submissions.",
          "Built Supabase Edge Functions connected to Resend to trigger automated, branded confirmation emails upon payment verification.",
          "Developed a password-protected Admin Dashboard featuring summary metric cards, registration charts, table search/filters, and CSV export.",
        ],
        notBuilt: [
          "Did not build a custom credit card processor; leveraged Paystack's PCI-compliant API and web checkout modal.",
          "Did not manage raw SMTP mail servers; used Resend's transactional email delivery API.",
        ],
      },
      keyFeatures: [
        {
          title: "Multi-Tier Registration & Paystack Integration",
          description: "Attendees select ticket tiers (Student, Standard, VIP) and pay seamlessly via cards, USSD, or bank transfer with automated reference verification.",
        },
        {
          title: "Multi-Portal Intake System",
          description: "Dedicated application forms for general attendees, volunteers, corporate sponsors, and booth exhibitors stored in isolated database tables.",
        },
        {
          title: "Real-Time Event Countdown",
          description: "A precision countdown timer on the homepage counting down to May 2, 2026 at LAUTECH, built with a custom React hook.",
        },
        {
          title: "Serverless Email Automation",
          description: "Supabase Edge Functions invoke Resend upon successful checkout to deliver branded tickets and payment receipts instantly.",
        },
        {
          title: "Admin Dashboard with Data Visualization",
          description: "Summary statistics, registration breakdown charts, real-time search across attendee records, and 1-click CSV data export.",
        },
        {
          title: "Full Responsive Conference Homepage",
          description: "Hero, about, schedule timetable, keynote speakers showcase, sponsor logos, and location guide in one cohesive interface.",
        },
      ],
      technicalDecisions: [
        {
          technology: "Supabase (PostgreSQL & RLS)",
          decision: "Database & Granular Access Control",
          why: "Provided immediate relational database provisioning with strict PostgreSQL Row Level Security (RLS) policies, allowing public submissions without exposing attendee contact lists.",
        },
        {
          technology: "Paystack Inline SDK",
          decision: "Payment Gateway Integration",
          why: "Industry gold-standard for Nigerian payment processing, supporting cards, direct bank transfer, and mobile banking with high transaction success rates.",
        },
        {
          technology: "Supabase Edge Functions & Resend",
          decision: "Serverless Transactional Emailing",
          why: "Offloads email sending to lightweight serverless Deno functions triggered by database events, keeping the client bundle tiny and securing API keys.",
        },
        {
          technology: "Vite + React",
          decision: "Frontend Build & Bundle Optimization",
          why: "Guarantees sub-second dev server startup and minimal production JS bundles, crucial for mobile attendees on 3G/4G cellular connections.",
        },
      ],
      techStack: {
        frontend: ["React", "Vite", "Tailwind CSS", "Lucide React", "Framer Motion"],
        backend: ["Supabase (PostgreSQL)", "Row Level Security (RLS)", "Supabase Edge Functions"],
        database: ["PostgreSQL Relational Tables (Attendees, Volunteers, Sponsors, Exhibitors)"],
        services: ["Paystack Payment Gateway", "Resend Transactional Email"],
        tools: ["Git & GitHub", "Vercel", "Postman", "Supabase Studio"],
      },
      links: {
        liveUrl: "https://ogbomosotei.com",
        githubUrl: "https://github.com/oluwaseyipd/ogbomosotei",
      },
      images: [
        {
          src: "/images/otei/01-home-hero.png",
          alt: "OTEI 2026 Conference Homepage Hero",
          title: "Homepage & Hero",
          caption: "Hero section with event branding, location information, and registration CTA.",
        },
        {
          src: "/images/otei/02-schedule-speakers.png",
          alt: "Schedule and speakers sections",
          title: "Schedule & Speaker Lineup",
          caption: "Interactive schedule timeline and keynote speaker showcase.",
        },
        {
          src: "/images/otei/03-registration-form.png",
          alt: "Event registration form",
          title: "Tiered Registration Modal",
          caption: "Multi-tier ticket registration form with input validation.",
        },
        {
          src: "/images/otei/04-application-forms.png",
          alt: "Volunteer, sponsor and exhibitor forms",
          title: "Volunteer & Sponsor Intake",
          caption: "Dedicated application forms for community volunteers and corporate partners.",
        },
        {
          src: "/images/otei/05-confirmation-email.png",
          alt: "Automated confirmation email",
          title: "Automated Email Confirmation",
          caption: "Branded confirmation email delivered via Resend upon successful checkout.",
        },
        {
          src: "/images/otei/06-admin-overview.png",
          alt: "Admin dashboard with charts",
          title: "Admin Analytics Dashboard",
          caption: "Administrative overview with registration charts and CSV export functionality.",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "lewas-growth-oil",
    title: "Lewa's Growth Oil",
    subtitle: "Brand Website & WhatsApp Ordering",
    category: "frontend",
    description:
      "A brand website for a luxury organic haircare oil, with an ingredient showcase, reviews, an FAQ and one-tap ordering through WhatsApp. Built with React 19, TypeScript and Tailwind CSS v4.",
    tech: ["React 19", "TypeScript", "Tailwind CSS v4", "React Router", "Vite"],
    liveUrl: "https://lewasgrowthoil.vercel.app",
    githubUrl: "https://github.com/oluwaseyipd/lewas-growth-oil",
    image: "/images/lewas/01-home-hero.png",
    featured: true,
    status: "live",
    details: {
      tagline: "A luxury brand site that turns visitors into WhatsApp orders.",
      meta: {
        role: "Frontend Developer",
        type: "Brand Website & E-commerce Portal",
        year: "2026",
        clientOrEvent: "Lewa's Growth Oil",
        timeline: "2026",
      },
      overview: {
        problem:
          "The brand takes orders directly via WhatsApp, but lacked a central web presence to establish product credibility, showcase botanical ingredients, and reduce friction for new buyers.",
        audience:
          "Customers looking for organic haircare solutions and easy direct-to-WhatsApp ordering.",
        summary:
          "Lewa's Growth Oil is a luxury organic haircare brand that sells directly to customers through WhatsApp. I built a responsive five-page site where every order button opens a WhatsApp chat with a ready-written message, backed by comprehensive ingredient spotlights and customer FAQs.",
      },
      role: {
        summary: "I designed and developed the entire frontend website and WhatsApp ordering integrations.",
        built: [
          "Engineered the responsive 5-page site using React 19, TypeScript, and Tailwind CSS v4.",
          "Implemented one-tap WhatsApp pre-formatted messaging templates for order and inquiry buttons.",
          "Built custom ingredient showcase with botanical actived breakdown and categorized FAQs.",
          "Configured client-side routing with smooth page transition resets.",
        ],
        notBuilt: [
          "Did not build a custom backend payment processor; utilized direct WhatsApp conversion funnel per client specification.",
        ],
      },
      keyFeatures: [
        {
          title: "One-Tap WhatsApp Ordering",
          description: "Pre-written message templates for order requests and enquiries, letting customers place orders in seconds.",
        },
        {
          title: "Ingredient Botanical Showcase",
          description: "Details on Rosemary, Onion Oil, Avocado Oil, Clove Oil, Menthol, and Aloe Vera active components.",
        },
        {
          title: "Categorized FAQ Accordion",
          description: "Organized questions grouped by ordering, delivery timelines, ingredients, and application usage.",
        },
        {
          title: "Editorial Brand Experience",
          description: "Playfair Display and Manrope typography paired with fluid micro-interactions and dark aesthetic accents.",
        },
      ],
      technicalDecisions: [
        {
          technology: "React 19 & Vite",
          decision: "Fast Client Architecture",
          why: "Provides sub-second load times and lightweight bundling essential for high mobile conversion.",
        },
        {
          technology: "Tailwind CSS v4",
          decision: "Design System & Performance",
          why: "Delivers modern CSS token variables and minimal stylesheet overhead.",
        },
      ],
      techStack: {
        frontend: ["React 19", "TypeScript", "Tailwind CSS v4", "React Router", "Vite"],
        backend: [],
        services: ["WhatsApp API"],
        tools: ["Git & GitHub", "Vercel", "ESLint"],
      },
      links: {
        liveUrl: "https://lewasgrowthoil.vercel.app",
        githubUrl: "https://github.com/oluwaseyipd/lewas-growth-oil",
      },
      images: [
        { src: "/images/lewas/01-home-hero.png", alt: "Homepage hero with order button", title: "Homepage Hero", caption: "Homepage hero with immediate call-to-action." },
        { src: "/images/lewas/02-the-oil.png", alt: "The Oil page with product benefits", title: "Product Benefits", caption: "Product breakdown and benefits overview." },
        { src: "/images/lewas/03-ingredients.png", alt: "Ingredient showcase", title: "Ingredients", caption: "Botanical actives and ingredients breakdown." },
        { src: "/images/lewas/04-reviews.png", alt: "Reviews section", title: "Reviews", caption: "Customer reviews and ratings section." },
        { src: "/images/lewas/05-faq.png", alt: "Categorised FAQ accordion", title: "FAQ", caption: "Categorized FAQ accordion." },
        { src: "/images/lewas/06-about.png", alt: "About page with brand story", title: "Brand Story", caption: "About the brand and founder story." },
      ],
    },
  },
  // {
  //   id: 4,
  //   slug: "acadexis",
  //   title: "Acadexis",
  //   subtitle: "Institutional AI-Knowledge Grounding Platform",
  //   category: "frontend",
  //   description:
  //     "A premium, institutional AI-knowledge grounding platform designed for universities that bridges the gap between official course materials, lecturers, and students. Features university Google SSO, academic email verification, and an AI Study Lab citing specific document page numbers.",
  //   tech: ["Next.js", "TypeScript", "Django REST", "Tailwind CSS", "Zustand", "Framer Motion", "Google SSO", "PostgreSQL"],
  //   liveUrl: "https://studywithacadexis.vercel.app",
  //   githubUrl: "https://github.com/oluwaseyipd/Acadexis_frontend",
  //   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  //   featured: true,
  //   status: "live",
  //   details: {
  //     tagline: "An institutional AI grounding platform connecting university lecture slides with verifiable student AI tutoring.",
  //     meta: {
  //       role: "Frontend Engineer & System Designer",
  //       type: "EdTech AI Web Platform",
  //       year: "2026",
  //       clientOrEvent: "Academic Research & University Study Lab",
  //       timeline: "2025 – 2026",
  //     },
  //     overview: {
  //       problem:
  //         "University students frequently rely on generic AI chat tools that hallucinate incorrect answers, contradict course syllabi, or provide out-of-scope explanations. At the same time, lecturers have no visibility into which concepts students find difficult within uploaded lecture slides.",
  //       audience:
  //         "Built for university professors, lecturers, and undergraduate students within accredited higher-education institutions.",
  //       summary:
  //         "Acadexis connects university lecturers directly with their students through an AI grounding layer. Lecturers upload authoritative course slides and PDFs to the Knowledge Hub, while students interact with a Study Lab that answers questions strictly using approved course content, citing exact page numbers and slide headers with zero hallucinations.",
  //     },
  //     role: {
  //       summary: "I led the frontend architecture and user interface engineering for both student and lecturer portals.",
  //       built: [
  //         "Engineered the complete Next.js App Router frontend with TypeScript, Zustand, and Tailwind CSS.",
  //         "Built the Study Lab AI tutoring interface with streaming markdown answers and page-level citation chips.",
  //         "Implemented university Google SSO with academic domain gating (@institution.edu / @lautech.edu.ng).",
  //         "Designed and built the Lecturer Knowledge Hub for drag-and-drop slide/syllabus ingestion.",
  //         "Created the Student Struggle Heatmap dashboard visualizing high-confusion topics based on student AI queries.",
  //         "Developed an interactive timed quiz engine with instant score breakdowns and bookmarking tools.",
  //       ],
  //       notBuilt: [
  //         "Did not train custom neural embedding models; connected to Django REST vector retrieval pipelines via REST endpoints.",
  //       ],
  //     },
  //     keyFeatures: [
  //       {
  //         title: "AI Study Lab with Page Citations",
  //         description: "Answers are grounded strictly in uploaded course PDFs with clickable citation chips jumping to the exact source page.",
  //       },
  //       {
  //         title: "Institutional Google SSO & Domain Gating",
  //         description: "Restricts workspace access strictly to verified institutional email domains, keeping university materials private.",
  //       },
  //       {
  //         title: "Lecturer Knowledge Hub",
  //         description: "Drag-and-drop course material management supporting PDF, PPTX, and syllabus indexing with status indicators.",
  //       },
  //       {
  //         title: "Student Struggle Heatmaps",
  //         description: "Aggregates anonymous student query themes into visual heatmaps so lecturers can pinpoint knowledge gaps before exams.",
  //       },
  //       {
  //         title: "Timed Quiz Generator",
  //         description: "Generates syllabus-aligned practice quizzes with instant answer rationale and personal performance tracking.",
  //       },
  //       {
  //         title: "Real-Time Discussion Channels",
  //         description: "WebSocket-powered peer discussion rooms enabling collaborative study sessions and TA support.",
  //       },
  //     ],
  //     technicalDecisions: [
  //       {
  //         technology: "Next.js App Router & TypeScript",
  //         decision: "Application Framework & Type Safety",
  //         why: "Offers server-side rendering for quick initial dashboard loading and strict TypeScript interfaces across complex academic course models.",
  //       },
  //       {
  //         technology: "Zustand",
  //         decision: "Interactive Workspace State",
  //         why: "Provides a lightweight state store for the document viewer, quiz timer, and active citation drawer without unnecessary re-renders.",
  //       },
  //       {
  //         technology: "Django REST Framework",
  //         decision: "Backend API & Vector Retrieval",
  //         why: "Handles relational database constraints for courses, enrollments, and integrates document indexing pipelines cleanly.",
  //       },
  //       {
  //         technology: "Framer Motion",
  //         decision: "Interactive Micro-Interactions",
  //         why: "Powers smooth drawer transitions, citation popovers, and quiz card animations without dragging down UI performance.",
  //       },
  //     ],
  //     techStack: {
  //       frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Lucide React"],
  //       backend: ["Django REST Framework", "Python", "JWT Auth", "WebSockets"],
  //       database: ["PostgreSQL", "Vector Embeddings Storage"],
  //       services: ["Google SSO", "Vercel"],
  //       tools: ["Git & GitHub", "Figma", "ESLint", "Postman"],
  //     },
  //     links: {
  //       liveUrl: "https://studywithacadexis.vercel.app",
  //       githubUrl: "https://github.com/oluwaseyipd/Acadexis_frontend",
  //     },
  //     images: [
  //       {
  //         src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  //         alt: "Acadexis Platform Overview",
  //         title: "Platform Overview",
  //         caption: "Institutional AI grounding platform connecting course materials with student study tools.",
  //       },
  //       {
  //         src: "/images/acadexis/01-study-lab.png",
  //         alt: "AI Study Lab interface with page citations",
  //         title: "AI Study Lab & Citations",
  //         caption: "AI Tutor answering questions with exact page-level citations from lecture slides.",
  //       },
  //       {
  //         src: "/images/acadexis/02-knowledge-hub.png",
  //         alt: "Lecturer course material upload dashboard",
  //         title: "Lecturer Knowledge Hub",
  //         caption: "Drag-and-drop course document ingestion with automated PDF/PPTX indexing.",
  //       },
  //       {
  //         src: "/images/acadexis/03-struggle-heatmap.png",
  //         alt: "Student struggle analytics heatmap",
  //         title: "Student Struggle Heatmap",
  //         caption: "Lecturer heatmap visualizing high-confusion topics and query clusters.",
  //       },
  //       {
  //         src: "/images/acadexis/04-quiz-engine.png",
  //         alt: "Timed quiz interface",
  //         title: "Timed Interactive Quiz Engine",
  //         caption: "Automated syllabus-based quiz generator with immediate scoring and feedback.",
  //       },
  //       {
  //         src: "/images/acadexis/05-academic-sso.png",
  //         alt: "Google SSO with academic email domain restriction",
  //         title: "Academic Domain SSO",
  //         caption: "Secure Google SSO restricted to authorized institutional email domains.",
  //       },
  //       {
  //         src: "/images/acadexis/06-document-reader.png",
  //         alt: "Split screen document viewer with highlighted citations",
  //         title: "Side-by-Side Document Reader",
  //         caption: "Side-by-side lecture notes viewer with highlighted AI query citations.",
  //       },
  //       {
  //         src: "/images/acadexis/07-bookmark-workspace.png",
  //         alt: "Saved citations and notes workspace",
  //         title: "Notes & Bookmarks Workspace",
  //         caption: "Personal study workspace for saving, categorizing, and exporting key concepts.",
  //       },
  //     ],
  //   },
  // },
  {
    id: 5,
    slug: "acta-backend-api",
    title: "Acta REST API & Auth Service",
    subtitle: "Django REST Framework & PostgreSQL Engine",
    category: "backend",
    description:
      "A high-performance relational backend API for task management, workspace permissions, and real-time collaboration. Features JWT rotation, Google OAuth2 token exchange, and optimized PostgreSQL query filters.",
    tech: ["Django REST Framework", "Python 3.11", "PostgreSQL", "JWT SimpleJWT", "Docker"],
    liveUrl: "https://actaly.vercel.app",
    githubUrl: "https://github.com/oluwaseyipd/Acta_backend",
    backendUrl: "https://github.com/oluwaseyipd/Acta_backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    featured: true,
    status: "live",
    details: {
      tagline: "A scalable, production-ready Django REST backend with relational models, OAuth2 integration, and JWT rotation.",
      meta: {
        role: "Backend Engineer",
        type: "Backend API & Database Architecture",
        year: "2026",
        clientOrEvent: "Acta Workspace Cloud Engine",
        timeline: "Dec 2025 – Jan 2026",
      },
      overview: {
        problem:
          "Building modern frontend apps with optimistic UI mutations requires low-latency backend APIs with strict data validation, resilient token rotation to avoid user dropouts, and normalized relational structures that prevent orphan records.",
        audience:
          "Built to power web and mobile clients requiring low-latency JSON responses, secure Google OAuth2 authentication, and multi-tenant workspace isolation.",
        summary:
          "The Acta Backend Engine is built with Django REST Framework and PostgreSQL. It exposes granular endpoints for task CRUD operations, due date grouping, and workspace management, paired with secure Google OAuth2 token verification and a custom refresh token rotation pipeline.",
      },
      role: {
        summary: "I architected and built the entire backend API, relational models, and auth pipeline.",
        built: [
          "Designed normalized PostgreSQL database schemas with foreign key constraints and index optimizations.",
          "Implemented Django REST Framework viewsets and model serializers with deep validation.",
          "Engineered Google OAuth2 backend authentication and JWT rotation with SimpleJWT.",
          "Configured CORS policies, environment security parameters, and containerized Docker setup.",
          "Built automated API tests and documentation for seamless frontend integration.",
        ],
        notBuilt: [
          "Did not manage bare metal server clusters; deployed as containerized service on modern cloud infrastructure.",
        ],
      },
      keyFeatures: [
        {
          title: "JWT Token Rotation & Refresh",
          description: "Rotates refresh tokens on each exchange and verifies blacklisted tokens to prevent replay attacks.",
        },
        {
          title: "Google OAuth2 Verification",
          description: "Exchanges Google OAuth2 tokens securely with backend user profiles and auto-creates accounts.",
        },
        {
          title: "Optimized Relational Queries",
          description: "Uses select_related and prefetch_related to eliminate N+1 query bottlenecks on workspace listings.",
        },
        {
          title: "Granular Permission Classes",
          description: "Role-based object level permissions ensuring users can only read and mutate their own workspace records.",
        },
      ],
      technicalDecisions: [
        {
          technology: "Django REST Framework",
          decision: "API Architecture & Serializers",
          why: "Provides powerful serialization, built-in validation, and structured viewsets for rapid, reliable endpoint delivery.",
        },
        {
          technology: "PostgreSQL",
          decision: "Relational Database Engine",
          why: "Guarantees ACID transactions, strict referential integrity, and efficient index queries for task dates and priorities.",
        },
        {
          technology: "SimpleJWT",
          decision: "Stateless Authentication & Token Rotation",
          why: "Enables stateless scalable authentication while providing token blacklisting for secure user logout.",
        },
      ],
      techStack: {
        frontend: ["API Consumers (React, Mobile)"],
        backend: ["Django REST Framework", "Python 3.11", "SimpleJWT", "Django ORM"],
        database: ["PostgreSQL", "Relational Models", "Database Indexing"],
        services: ["Google OAuth2 API", "Cloudflare R2"],
        tools: ["Docker", "Git & GitHub", "Postman", "pytest"],
      },
      links: {
        liveUrl: "https://actaly.vercel.app",
        backendUrl: "https://github.com/oluwaseyipd/Acta_backend",
      },
      images: [
        {
          src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
          alt: "Django REST API Architecture Overview",
          title: "API Engine Overview",
          caption: "Relational backend service built with Django REST Framework and PostgreSQL.",
        },
        {
          src: "/images/acta/01-login.png",
          alt: "Authentication and OAuth Token Verification",
          title: "JWT & OAuth2 Authentication",
          caption: "Secure authentication pipeline with Google OAuth token exchange and JWT rotation.",
        },
        {
          src: "/images/acta/02-overview-list.png",
          alt: "Task Endpoint Serializers",
          title: "Relational Task Serializers",
          caption: "High-performance serializers handling nested task data and date groupings.",
        },
        {
          src: "/images/acta/03-kanban-board.png",
          alt: "Kanban State API",
          title: "Kanban Mutation Endpoints",
          caption: "Atomic status update endpoints supporting optimistic client UI updates.",
        },
        {
          src: "/images/acta/04-task-form.png",
          alt: "Validated API Schemas",
          title: "Field Validation & Errors",
          caption: "Structured error response payloads for input validation.",
        },
        {
          src: "/images/acta/05-analytics.png",
          alt: "Aggregation Queries",
          title: "Analytics Aggregations",
          caption: "Optimized database aggregations for velocity tracking.",
        },
        {
          src: "/images/acta/06-profile.png",
          alt: "User Permissions",
          title: "User Permissions & Security",
          caption: "Row-level object permissions and workspace access control.",
        },
        {
          src: "/images/acta/07-themes.png",
          alt: "Settings API",
          title: "User Preferences API",
          caption: "Endpoints persisting theme and user preferences across devices.",
        },
      ],
    },
  },
  {
    id: 7,
    slug: "amfida",
    title: "Amfida",
    subtitle: "Accommodation & Hostel Management API",
    category: "backend",
    description:
      "A Django REST API for hostel and accommodation discovery, connecting landlords, agents and students. Features role-based access, search and filtering, media uploads and interactive Swagger docs.",
    tech: ["Django", "Django REST Framework", "PostgreSQL", "JWT", "Docker"],
    liveUrl: "https://amfida.vercel.app",
    githubUrl: "https://github.com/oluwaseyipd/Amfida_backend",
    backendUrl: "https://github.com/oluwaseyipd/Amfida_backend",
    image: "/images/amfida/01-swagger-overview.png",
    featured: true,
    status: "live",
    details: {
      tagline: "A secure, well-documented API for finding and managing student accommodation.",
      meta: {
        role: "Backend Developer",
        type: "REST API & Cloud Architecture",
        year: "2026",
      },
      overview: {
        problem:
          "Students and tenants struggle to find verified accommodation without paying exorbitant agent fees or falling victim to rental scams, while landlords lack lightweight management tools.",
        audience:
          "Students, tenants, landlords, and housing agents seeking verified student housing listings.",
        summary:
          "Amfida is a backend API for finding and managing student accommodation. It serves landlords, agents, and vacancy seekers with role-based permissions, search, media uploads, and OpenAPI documentation.",
      },
      role: {
        summary: "I designed and engineered the entire backend API, relational models, and documentation.",
        built: [
          "Engineered multi-role user system with custom permission classes for landlords, agents, and seekers.",
          "Built listing management CRUD endpoints with object-level authorization guards.",
          "Implemented multi-criteria search, filtering, and pagination for hostel listings.",
          "Integrated Cloudflare R2 / AWS S3 media uploads for listing photos and verification docs.",
          "Generated OpenAPI 3.0 schemas with interactive Swagger UI and ReDoc via drf-spectacular.",
        ],
        notBuilt: [
          "Did not build a custom native mobile client; designed pure RESTful endpoints for third-party client integration.",
        ],
      },
      keyFeatures: [
        { title: "Multi-Role User System", description: "Landlords, agents and vacancy seekers, each with their own permissions." },
        { title: "Hostel & Listing Management", description: "Full CRUD with object-level authorization, ensuring users only modify their own listings." },
        { title: "Search, Filtering & Pagination", description: "Find listings across multiple criteria with paginated results." },
        { title: "Media Uploads (Cloudflare R2 / S3)", description: "Secure photo and video upload endpoints per listing." },
        { title: "JWT Authentication", description: "Token-based login using SimpleJWT with role-based access control." },
        { title: "Interactive OpenAPI / Swagger Docs", description: "Interactive documentation generated via drf-spectacular." },
      ],
      technicalDecisions: [
        {
          technology: "Django REST Framework",
          decision: "API Architecture & Serializers",
          why: "Accelerates schema design and provides robust validation layers for housing models.",
        },
        {
          technology: "drf-spectacular",
          decision: "OpenAPI 3.0 Documentation",
          why: "Automatically generates type-safe OpenAPI schemas, Swagger UI, and ReDoc for frontend consumers.",
        },
        {
          technology: "PostgreSQL",
          decision: "Relational Data Storage",
          why: "Ensures data integrity across hostels, rooms, media attachments, and review ratings.",
        },
      ],
      techStack: {
        frontend: [],
        backend: ["Django 6.1", "Django REST Framework", "PostgreSQL", "SQLite (development)", "SimpleJWT", "drf-spectacular"],
        services: ["Cloudflare R2 / AWS S3", "Resend"],
        tools: ["Docker & Docker Compose", "Pipenv", "Git & GitHub", "Vercel"],
      },
      links: {
        liveUrl: "https://amfida.vercel.app",
        backendUrl: "https://github.com/oluwaseyipd/Amfida_backend",
      },
      images: [
        { src: "/images/amfida/01-swagger-overview.png", alt: "Swagger UI listing all Amfida endpoints", title: "Swagger UI", caption: "Interactive API docs (Swagger UI)" },
        { src: "/images/amfida/02-jwt-login.png", alt: "JWT token request and response", title: "JWT Login", caption: "JWT authentication endpoints" },
        { src: "/images/amfida/03-create-listing.png", alt: "Creating a listing with a request and response", title: "Create Listing", caption: "Listing creation endpoint" },
        { src: "/images/amfida/04-media-upload.png", alt: "Photo upload endpoint for a listing", title: "Media Upload", caption: "Listing photo upload" },
        { src: "/images/amfida/05-data-model.png", alt: "Database diagram of accounts, hostels, listings and reviews", title: "Data Model", caption: "Database diagram" },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}