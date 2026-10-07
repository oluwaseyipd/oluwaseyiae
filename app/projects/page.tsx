import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/project";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Featured Projects & Case Studies | ${siteConfig.name}`,
  description: "Explore in-depth case studies and architectural breakdowns of projects built by Abiola John Oluwaseyi.",
};

export default function ProjectsIndexPage() {
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
          {/* Breadcrumb / Back */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold transition-colors group"
              style={{ color: "var(--text-secondary)" }}
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
                style={{ color: "var(--accent)" }}
              />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 border"
              style={{
                background: "rgba(34, 211, 238, 0.08)",
                borderColor: "rgba(34, 211, 238, 0.25)",
                color: "var(--accent)",
              }}
            >
              <Sparkles size={13} />
              Portfolio Showcase
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Featured Projects &amp; Case Studies
            </h1>
            <p
              className="text-sm sm:text-base max-w-2xl leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              In-depth technical writeups covering architectural decisions, frontend engineering, backend integrations, and verified impact.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border overflow-hidden flex flex-col justify-between transition-all group"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Image */}
                <div
                  className="relative aspect-video overflow-hidden border-b"
                  style={{
                    background: "var(--background)",
                    borderColor: "var(--border)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md"
                      style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {project.details.meta.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider block mb-1"
                      style={{ color: "var(--accent)" }}
                    >
                      {project.subtitle}
                    </span>
                    <h2
                      className="text-xl md:text-2xl font-bold"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  <p
                    className="text-xs md:text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-medium border"
                        style={{
                          background: "var(--background)",
                          borderColor: "var(--border)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div
                    className="flex items-center gap-3 pt-4 border-t mt-auto"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 py-2.5 px-4 rounded-lg font-semibold text-xs md:text-sm flex items-center justify-center gap-1.5 transition-all"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "#020617",
                      }}
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={14} />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border transition-colors hover:border-cyan-400"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text-secondary)",
                        }}
                        aria-label={`Visit live site for ${project.title}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg border transition-colors hover:border-cyan-400"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text-secondary)",
                        }}
                        aria-label={`View GitHub repo for ${project.title}`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}