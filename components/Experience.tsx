"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Lightbulb, Quote, HandHelping } from "lucide-react";
import { experience, testimonials } from "@/lib/data";

const typeIcon = {
  certification: <Award size={16} />,
  work: <Briefcase size={16} />,
  volunteer: <HandHelping size={16} />,
  project: <Lightbulb size={16} />,
};

const typeColor = {
  certification: "var(--accent)",
  work: "var(--accent-secondary)",
  volunteer: "#34d399",
  project: "#f59e0b",
};

interface ExperienceItem {
  id: number;
  title: string;
  org: string;
  period: string;
  description: string;
  type: "certification" | "work" | "project" | "volunteer";
}

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        gap: "1.5rem",
        position: "relative",
      }}
    >
      {/* Timeline line */}
      {index < experience.length - 1 && (
        <div
          style={{
            position: "absolute",
            left: "19px",
            top: "40px",
            bottom: "-3rem",
            width: "1px",
            background: "var(--border)",
          }}
        />
      )}

      {/* Icon */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: `${typeColor[item.type]}15`,
          border: `2px solid ${typeColor[item.type]}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: typeColor[item.type],
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        {typeIcon[item.type]}
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingBottom: "2.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontSize: "0.85rem", color: typeColor[item.type], fontWeight: 600 }}>
              {item.org}
            </p>
          </div>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              background: "var(--surface)",
              padding: "0.25rem 0.75rem",
              borderRadius: "99px",
              border: "1px solid var(--border)",
              whiteSpace: "nowrap",
            }}
          >
            {item.period}
          </span>
        </div>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      style={{
        padding: "2rem",
        borderRadius: "1.25rem",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 300ms",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Quote icon */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          color: "var(--accent)",
          opacity: 0.15,
        }}
      >
        <Quote size={36} />
      </div>

      {/* Quote text */}
      <p
        style={{
          fontSize: "0.95rem",
          color: "var(--text-secondary)",
          lineHeight: 1.8,
          marginBottom: "1.5rem",
          fontStyle: "italic",
          position: "relative",
          zIndex: 1,
        }}
      >
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#020617",
            flexShrink: 0,
          }}
        >
          {item.avatar}
        </div>
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "var(--text-primary)",
              lineHeight: 1.3,
            }}
          >
            {item.name}
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
            {item.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <>
      {/* Experience */}
      <section
        id="experience"
        className="section"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
            }}
          >
            {/* Experience timeline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: "3rem" }}
              >
                <p className="section-tag">Journey</p>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  Experience &{" "}
                  <span className="gradient-text">Achievements</span>
                </h2>
              </motion.div>

              <div>
                {experience.map((item: ExperienceItem, i) => (
                  <ExperienceCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ marginBottom: "3rem" }}
              >
                <p className="section-tag">Kind Words</p>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  What People{" "}
                  <span className="gradient-text">Say</span>
                </h2>
              </motion.div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {testimonials.map((item, i) => (
                  <TestimonialCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
