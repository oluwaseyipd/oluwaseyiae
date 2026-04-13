"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, BookOpen, Hammer } from "lucide-react";
import { projects } from "@/lib/data";
import { useState } from "react";
import StudyCase from "./StudyCase";

interface CaseStudy {
  problem: string;
  solution: string;
  impact: string;
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  status: "live" | "building";
  caseStudy: CaseStudy;
}

function ProjectCard({ 
  project, 
  index, 
  onCaseStudyClick 
}: { 
  project: Project; 
  index: number;
  onCaseStudyClick: (projectId: number) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      style={{
        borderRadius: "1.25rem",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "border-color 300ms, box-shadow 300ms",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(34,211,238,0.5)";
        el.style.boxShadow = "0 20px 60px -15px rgba(34,211,238,0.2)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Status badge (if building) */}
      {project.status === "building" && (
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.3rem 0.75rem",
            borderRadius: "99px",
            background: "rgba(245, 158, 11, 0.15)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            color: "#f59e0b",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Hammer size={10} />
          </motion.span>
          Currently Building
        </div>
      )}

      {/* Image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: "var(--background)",
        }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background: "linear-gradient(to top, var(--surface), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Title */}
        <div style={{ marginBottom: "0.75rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: "0.2rem",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.03em",
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {project.tech.map((t) => (
            <span key={t} className="badge" style={{ fontSize: "0.7rem" }}>
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div
        className="flex flex-row flex-wrap items-center gap-3 border-t border-border pt-5"
          style={{
            gap: "0.75rem",
            flexWrap: "wrap",
            alignItems: "center",
            borderTop: "1px solid var(--border)",
            paddingTop: "1.25rem",
          }}
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{ padding: "0.5rem 1.125rem", fontSize: "0.8rem", flex: 1, justifyContent: "center" }}
          >
            <ExternalLink size={13} />
            Live Demo
          </motion.a>

          <motion.button
            onClick={() => onCaseStudyClick(project.id)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline"
            style={{ 
              padding: "0.5rem 1rem", 
              fontSize: "0.8rem", 
              flex: 1, 
              justifyContent: "center",
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              cursor: "pointer",
              fontFamily: "inherit",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 300ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "var(--surface-hover)";
              el.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "transparent";
              el.style.color = "var(--text-secondary)";
            }}
          >
            <BookOpen size={13} />
            Case Study
          </motion.button>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "var(--accent)" }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View ${project.title} on GitHub`}
            style={{
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0.5rem",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "all 300ms",
              flexShrink: 0,
            }}
          >
            <Github size={16} />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  return (
    <section id="projects" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
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
              Projects I&apos;ve{" "}
              <span className="gradient-text">Built</span>
            </h2>
            <motion.a
              href="https://github.com/oluwaseyipd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              className="btn-outline"
              style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
            >
              <Github size={15} />
              View GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 520px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {(projects as Project[]).map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i}
              onCaseStudyClick={setSelectedProjectId}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProjectId !== null && (
          <StudyCase
            projectId={selectedProjectId}
            onClose={() => setSelectedProjectId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
