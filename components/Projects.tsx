"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, ArrowUpRight, Layers, Code, Server, Globe } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/lib/project";

type FilterOption = "all" | "frontend" | "backend" | "fullstack";

interface FilterItem {
  key: FilterOption;
  label: string;
  icon: typeof Globe;
}

const filterOptions: FilterItem[] = [
  { key: "all", label: "All Projects", icon: Globe },
  { key: "frontend", label: "Frontend", icon: Code },
  { key: "backend", label: "Backend", icon: Server },
  { key: "fullstack", label: "Fullstack", icon: Layers },
];

function CategoryBadge({ category }: { category: ProjectCategory }) {
  const getBadgeStyle = () => {
    switch (category) {
      case "fullstack":
        return {
          label: "Fullstack",
          bg: "rgba(34, 211, 238, 0.1)",
          border: "rgba(34, 211, 238, 0.3)",
          color: "var(--accent)",
        };
      case "frontend":
        return {
          label: "Frontend",
          bg: "rgba(167, 139, 250, 0.12)",
          border: "rgba(167, 139, 250, 0.3)",
          color: "var(--accent-secondary)",
        };
      case "backend":
        return {
          label: "Backend",
          bg: "rgba(52, 211, 153, 0.12)",
          border: "rgba(52, 211, 153, 0.3)",
          color: "#34d399",
        };
      default:
        return {
          label: category,
          bg: "rgba(34, 211, 238, 0.1)",
          border: "rgba(34, 211, 238, 0.2)",
          color: "var(--accent)",
        };
    }
  };

  const style = getBadgeStyle();

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize border"
      style={{
        backgroundColor: style.bg,
        borderColor: style.border,
        color: style.color,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ backgroundColor: style.color }}
      />
      {style.label}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border flex flex-col justify-between overflow-hidden transition-colors"
      style={{
        background: "var(--surface)",
        borderColor: isHovered ? "var(--accent)" : "var(--border)",
        boxShadow: isHovered
          ? "0 22px 45px -12px rgba(0, 0, 0, 0.35), 0 0 20px -5px rgba(34, 211, 238, 0.2)"
          : "0 6px 20px -8px rgba(0, 0, 0, 0.15)",
      }}
    >

      {/* Card Image Area with "View Project" Overlay on Hover */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950/80 border-b border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: isHovered ? 1.07 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full object-cover object-top block"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />

        {/* Hover Overlay with "View Project" Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 z-20 flex items-center justify-center p-4"
          style={{
            background: "rgba(2, 6, 23, 0.72)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="bg-accent inline-flex items-center px-5 py-2.5 rounded-xl font-bold text-white text-xs md:text-sm tracking-wide shadow-lg transform transition-transform group-hover:scale-105 active:scale-95"
          >
            <span>View Project</span>
          </Link>
        </motion.div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Tag & Subtitle Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
                      {/* Project Name (Title) */}
          <h3
            className="text-lg sm:text-xl font-bold mb-2 tracking-tight transition-colors"
            style={{
              fontFamily: "var(--font-heading)",
              color: isHovered ? "var(--accent)" : "var(--text-primary)",
            }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline focus:outline-none"
            >
              {project.title}
            </Link>
          </h3>

          <span className="text-sm uppercase font-bold" style={{ color: "var(--text-secondary)" }}>
            {project.category}
          </span>

          </div>



          {/* Short Description */}
          <p
            className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={{ marginBottom: "4rem" }}
        >
          <p className="section-tag">Featured Work</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Projects I&apos;ve {" "}
            <span className="gradient-text">Built</span>
          </h2>

          <motion.a
              href="https://github.com/oluwaseyipd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
            >
              <Github size={15} />
              View GitHub
            </motion.a>
          </div>
        </motion.div>


        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex items-center justify-start flex-wrap gap-2 sm:gap-3 p-1.5 rounded-2xl border w-fit"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {filterOptions.map((opt) => {
            const isActive = activeFilter === opt.key;
            const Icon = opt.icon;

            return (
              <button
                key={opt.key}
                onClick={() => setActiveFilter(opt.key)}
                className="relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer select-none"
                style={{
                  color: isActive ? "#020617" : "var(--text-secondary)",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      backgroundColor: "var(--accent)",
                    }}
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon size={14} />
                  <span>{opt.label}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* 3 Cards in a Single Row Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
