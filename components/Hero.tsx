"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";

// Floating geometric shape component
function FloatingShape({
  style,
  delay = 0,
}: {
  style: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0.15, 0.3, 0.15],
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        delay,
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
        filter: "blur(1px)",
        ...style,
      }}
    />
  );
}

// Floating code token
function CodeToken({
  children,
  style,
  delay = 0,
}: {
  children: string;
  style: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 0.7, 0],
        y: [20, -20, -60],
      }}
      transition={{
        delay,
        duration: 6,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeOut",
      }}
      style={{
        position: "absolute",
        fontFamily: "monospace",
        fontSize: "0.75rem",
        color: "var(--accent)",
        padding: "0.25rem 0.5rem",
        background: "rgba(34, 211, 238, 0.08)",
        borderRadius: "0.25rem",
        border: "1px solid rgba(34, 211, 238, 0.15)",
        pointerEvents: "none",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

const codeTokens = [
  { text: "const hero = true;", style: { left: "8%", top: "35%" }, delay: 0 },
  { text: "export default App", style: { right: "10%", top: "28%" }, delay: 1.5 },
  { text: "<NextJS />", style: { left: "12%", bottom: "35%" }, delay: 3 },
  { text: "async/await", style: { right: "8%", bottom: "40%" }, delay: 4.5 },
  { text: "npm run build", style: { left: "20%", top: "18%" }, delay: 2 },
  { text: "git push origin", style: { right: "20%", bottom: "25%" }, delay: 1 },
];

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "6rem 1.5rem 4rem",
      }}
    >
      {/* Background dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      {/* Radial gradient spotlight */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating shapes */}
      <FloatingShape
        style={{ width: "300px", height: "300px", left: "-80px", top: "10%", opacity: 0.05 }}
        delay={0}
      />
      <FloatingShape
        style={{ width: "200px", height: "200px", right: "-50px", bottom: "15%", opacity: 0.07 }}
        delay={4}
      />
      <FloatingShape
        style={{ width: "150px", height: "150px", right: "15%", top: "15%", opacity: 0.05 }}
        delay={2}
      />

      {/* Floating code tokens */}
      {codeTokens.map((token, i) => (
        <CodeToken key={i} style={token.style} delay={token.delay}>
          {token.text}
        </CodeToken>
      ))}

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Status badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            borderRadius: "99px",
            background: "rgba(34, 211, 238, 0.08)",
            border: "1px solid rgba(34, 211, 238, 0.2)",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "var(--accent)",
            marginBottom: "2rem",
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "99px",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          <Sparkles size={12} />
          Available for hire
        </motion.div> */}

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            marginBottom: "0.5rem",
            fontWeight: 400,
          }}
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>Abiola John</span>
          <br />
          <span className="gradient-text">Oluwaseyi</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "1.25rem",
            letterSpacing: "0.01em",
          }}
        >
          React &amp; Next.js Specialist{" "}
          <span style={{ color: "var(--accent-secondary)" }}>•</span>{" "}
          Full-Stack Engineer (Django)
        </motion.p>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          {siteConfig.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{ fontSize: "0.95rem", padding: "0.875rem 2rem" }}
          >
            <ExternalLink size={16} />
            View My Work
          </motion.button>

          <motion.a
            href='/ABIOLA_JOHN_OLUWASEYI_FRONTEND_DEVELOPER.pdf'
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-outline"
            style={{ fontSize: "0.95rem", padding: "0.875rem 2rem" }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social links row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            color: "var(--text-secondary)",
            fontSize: "0.85rem",
          }}
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 300ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            GitHub
          </a>
          <span style={{ width: "4px", height: "4px", borderRadius: "99px", background: "var(--border)", display: "inline-block" }} />
          <a
            href={siteConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 300ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Twitter / X
          </a>
          <span style={{ width: "4px", height: "4px", borderRadius: "99px", background: "var(--border)", display: "inline-block" }} />
          <a
            href={`mailto:${siteConfig.email}`}
            style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 300ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--text-secondary)",
          cursor: "pointer",
        }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about section"
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
