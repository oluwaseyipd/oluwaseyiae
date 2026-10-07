import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { ProjectTechStack } from "@/components/ProjectTechStack";
import { ProjectMainContent } from "@/components/ProjectMainContent";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/lib/project";
import { siteConfig } from "@/lib/data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | " + siteConfig.name,
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} — Project Details & Case Study | ${siteConfig.name}`,
    description: project.details.tagline || project.description,
    keywords: [
      project.title,
      project.subtitle,
      ...project.tech,
      "Case Study",
      "Frontend Developer",
      "Full Stack",
      siteConfig.name,
    ],
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.details.tagline || project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.subtitle}`,
      description: project.details.tagline || project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      <Navbar />

      <main className="flex-1 pt-28 md:pt-32 pb-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation & Back Link */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold transition-colors group"
              style={{ color: "var(--text-secondary)" }}
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
                style={{ color: "var(--accent)" }}
              />
              <span>Back to all projects</span>
            </Link>

            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                style={{
                  background: "rgba(34, 211, 238, 0.08)",
                  borderColor: "rgba(34, 211, 238, 0.25)",
                  color: "var(--accent)",
                }}
              >
                <CheckCircle size={12} />
                {project.details.meta.type}
              </span>
              <span
                className="px-2.5 py-1 rounded-full text-xs font-mono border"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {project.details.meta.year}
              </span>
            </div>
          </div>

          {/* Project Header Title Area */}
          <div className="mb-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              {project.title}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl font-medium max-w-3xl leading-relaxed"
              style={{ color: "var(--accent)" }}
            >
              {project.subtitle}
            </p>
            <p
              className="text-sm md:text-base mt-2 max-w-3xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.details.tagline}
            </p>
          </div>

          {/* 
            MAIN 2-COLUMN GRID LAYOUT
            Left column (approx 68%): Carousel on top + Main Content underneath.
            Right column (approx 32%): Standalone Tech Stack sidebar (does not get covered by main content).
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Carousel + Main Content */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Carousel of 8 images (smooth sliding, left/right arrows, bounded size) */}
              <ProjectCarousel
                images={project.details.images}
                projectTitle={project.title}
              />

              {/* Main Content (Overview, My Role, Key Features, Technical Decisions, Challenges, Results, Links) */}
              <ProjectMainContent project={project} />
            </div>

            {/* RIGHT COLUMN: Standalone Tech Stacks Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <ProjectTechStack project={project} />
            </div>
          </div>

          {/* Bottom Next / Other Projects Navigation */}
          <div
            className="mt-20 pt-10 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h3
                className="text-lg font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                }}
              >
                More Projects
              </h3>
              <Link
                href="/#projects"
                className="text-xs font-semibold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                View full portfolio →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 3)
                .map((other) => (
                  <Link
                    key={other.id}
                    href={`/projects/${other.slug}`}
                    className="p-4 rounded-xl border transition-all group flex flex-col justify-between"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div>
                      <span
                        className="text-[11px] font-semibold uppercase tracking-wider block mb-1"
                        style={{ color: "var(--accent)" }}
                      >
                        {other.subtitle}
                      </span>
                      <h4
                        className="text-sm font-bold group-hover:text-cyan-400 transition-colors"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {other.title}
                      </h4>
                      <p
                        className="text-xs line-clamp-2 mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {other.description}
                      </p>
                    </div>
                    <div
                      className="mt-4 pt-2 border-t flex items-center justify-between text-xs font-medium"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--accent)",
                      }}
                    >
                      <span>Read Case Study</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
