"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  User,
  Layout,
  Tag,
  CheckCircle2,
  Share2,
  GitFork,
} from "lucide-react";
import type { Project } from "@/lib/project";

interface ProjectTechStackProps {
  project: Project;
}

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  const { techStack, meta, links } = project.details;

  const stackCategories = [
    { label: "Frontend", items: techStack.frontend },
    { label: "Backend & APIs", items: techStack.backend },
    { label: "Database", items: techStack.database },
    { label: "Services & Cloud", items: techStack.services },
    { label: "Tools & DevOps", items: techStack.tools },
  ].filter((cat) => cat.items && cat.items.length > 0);

  return (
    <aside className="w-full flex flex-col gap-6">
      {/* Primary Action Buttons Card */}
      <div
        className="p-5 rounded-2xl border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex items-center gap-2 mb-4 pb-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <Share2 size={16} style={{ color: "var(--accent)" }} />
          <h3
            className="text-xs font-bold uppercase tracking-wider"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Project Links
          </h3>
        </div>

        <div className="flex flex-col gap-2.5">
          {links.liveUrl && (
            <motion.a
              href={links.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2.5 px-4 rounded-lg font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              style={{
                backgroundColor: "var(--accent)",
                color: "#020617",
              }}
            >
              <ExternalLink size={15} />
              <span>Visit Live Demo</span>
            </motion.a>
          )}

          {links.githubUrl && (
            <motion.a
              href={links.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2.5 px-4 rounded-lg font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              <Github size={15} />
              <span>Frontend Repository</span>
            </motion.a>
          )}

          {links.backendUrl && (
            <motion.a
              href={links.backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2.5 px-4 rounded-lg font-semibold text-xs md:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer border"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              <GitFork size={15} />
              <span>Backend Repository</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Tech Stacks Card (Categorized) */}
      <div
        className="p-5 rounded-2xl border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex items-center gap-2 mb-4 pb-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <Tag size={16} style={{ color: "var(--accent)" }} />
          <h3
            className="text-xs font-bold uppercase tracking-wider"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-primary)",
            }}
          >
            Technologies Used
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {stackCategories.map((category) => (
            <div key={category.label}>
              <h4
                className="text-xs font-semibold mb-2 uppercase tracking-wider"
                style={{ color: "var(--text-secondary)" }}
              >
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {category.items?.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors"
                    style={{
                      background: "var(--background)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <CheckCircle2 size={12} style={{ color: "var(--accent)" }} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
