"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

interface Skill {
  name: string;
  icon: string;
}

function SkillCard({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, y: -4 }}
      style={{
        padding: "1rem 1.25rem",
        borderRadius: "0.75rem",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        cursor: "default",
        transition: "border-color 300ms, box-shadow 300ms",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--accent)";
        el.style.boxShadow = "0 0 20px -5px var(--accent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Glow on hover */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 30% 50%, rgba(34,211,238,0.04), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <motion.span
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.4 }}
        style={{
          fontSize: "1.25rem",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",
          background: "rgba(34, 211, 238, 0.08)",
          fontFamily: "monospace",
          fontWeight: 700,
          color: "var(--accent)",
          flexShrink: 0,
          lineHeight: 1,
        }}
      >
        {skill.icon}
      </motion.span>

      <span
        style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          letterSpacing: "-0.01em",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

interface SkillGroupProps {
  title: string;
  accent: string;
  skillList: Skill[];
  startDelay?: number;
}

function SkillGroup({ title, accent, skillList, startDelay = 0 }: SkillGroupProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: startDelay }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.25rem",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "99px",
            background: accent,
            flexShrink: 0,
          }}
        />
        <h3
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          {title}
        </h3>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {skillList.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={startDelay + i * 0.05} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="section-tag">Skills & Tools</p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            My{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: "1rem",
              maxWidth: "540px",
              lineHeight: 1.7,
            }}
          >
            A carefully selected set of tools I use to build modern, performant, and scalable web applications.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <SkillGroup
            title="Frontend"
            accent="var(--accent)"
            skillList={skills.frontend}
            startDelay={0.1}
          />
          <SkillGroup
            title="Backend & Full-Stack"
            accent="var(--accent-secondary)"
            skillList={skills.backend}
            startDelay={0.2}
          />
          <SkillGroup
            title="Tools & Workflow"
            accent="#f59e0b"
            skillList={skills.tools}
            startDelay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
