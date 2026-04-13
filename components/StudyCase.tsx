// The Study case will be a responsive pop up modal that shows whenever the CASE STUDY button is clicked in components/projects. The Case study will contain:
// 1. Problem 
// 2. Solution
// 3. IMPACT
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Github, X } from "lucide-react";
import { projects } from "../lib/data";

interface StudyCaseProps {
  projectId: number;
  onClose: () => void;
}

interface CaseStudy {
  problem: string;
  solution: string;
  impact: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  caseStudy: CaseStudy;
}

export default function StudyCase({ projectId, onClose }: StudyCaseProps) {
  const project = projects.find((p) => p.id === projectId) as Project | undefined;
  if (!project || !project.caseStudy) return null;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "var(--surface)",
          borderRadius: "1.5rem",
          padding: "2.5rem",
          maxWidth: "700px",
          width: "90%",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
          border: "1px solid var(--border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "transparent",
            border: "1px solid var(--border)",
            borderRadius: "0.5rem",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--text-secondary)",
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
          aria-label="Close case study"
        >
          <X size={18} />
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.875rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Case Study
          </p>
        </motion.div>

        {/* Problem Section */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            background: "rgba(239, 68, 68, 0.05)",
            border: "1px solid rgba(239, 68, 68, 0.15)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginBottom: "0.75rem",
              color: "#ef4444",
            }}
          >
            🎯 Problem
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            {project.caseStudy.problem}
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            background: "rgba(59, 130, 246, 0.05)",
            border: "1px solid rgba(59, 130, 246, 0.15)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginBottom: "0.75rem",
              color: "#3b82f6",
            }}
          >
            💡 Solution
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            {project.caseStudy.solution}
          </p>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            borderRadius: "1rem",
            background: "rgba(34, 197, 94, 0.05)",
            border: "1px solid rgba(34, 197, 94, 0.15)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginBottom: "0.75rem",
              color: "#22c55e",
            }}
          >
            📈 Impact
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            {project.caseStudy.impact}
          </p>
        </motion.div>

        {/* Action Links */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
          }}
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "var(--accent)",
              fontSize: "0.9rem",
              fontWeight: 500,
              padding: "0.75rem 1.25rem",
              border: "1px solid var(--accent)",
              borderRadius: "0.5rem",
              transition: "all 300ms",
              flex: 1,
              justifyContent: "center",
              minWidth: "150px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--accent)";
              el.style.color = "var(--background)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "var(--accent)";
            }}
          >
            <ExternalLink size={16} />
            View Live
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "var(--text-secondary)",
              fontSize: "0.9rem",
              fontWeight: 500,
              padding: "0.75rem 1.25rem",
              border: "1px solid var(--border)",
              borderRadius: "0.5rem",
              transition: "all 300ms",
              flex: 1,
              justifyContent: "center",
              minWidth: "150px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--surface-hover)";
              el.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "var(--text-secondary)";
            }}
          >
            <Github size={16} />
            View Code
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

