"use client";

import { motion } from "framer-motion";
import { MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function About() {
  return (
    <section id="about" className="section">
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
          <p className="section-tag">About Me</p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Crafted with{" "}
            <span className="gradient-text">Purpose</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ order: 1 }}
          >
            <div style={{ position: "relative", display: "inline-block", width: "100%", maxWidth: "420px" }}>
              {/* Decorative border */}
              <div
                style={{
                  position: "absolute",
                  inset: "-12px",
                  borderRadius: "1.5rem",
                  border: "2px solid var(--accent)",
                  opacity: 0.25,
                  transform: "rotate(-3deg)",
                }}
              />
              {/* Glow effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "1.25rem",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                  opacity: 0.12,
                  filter: "blur(30px)",
                }}
              />
              {/* Image */}
              <motion.img
                src={siteConfig.photo}
                alt={`${siteConfig.name} - Software Engineer`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "100%",
                  borderRadius: "1.25rem",
                  border: "1px solid var(--border)",
                  objectFit: "cover",
                  aspectRatio: "4/5",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
                onError={(e) => {
                  // Fallback if photo doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.background = "var(--surface)";
                    parent.style.minHeight = "400px";
                    parent.style.display = "flex";
                    parent.style.alignItems = "center";
                    parent.style.justifyContent = "center";
                    parent.style.borderRadius = "1.25rem";
                    parent.style.border = "1px solid var(--border)";
                    parent.innerHTML = `<span style="font-size:5rem">👨‍💻</span>`;
                  }
                }}
              />

              {/* Location badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.5rem 0.875rem",
                  borderRadius: "99px",
                  background: "rgba(2, 6, 23, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                <MapPin size={12} style={{ color: "var(--accent)" }} />
                {siteConfig.location}
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ order: 2 }}
          >
            {/* Values */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              {siteConfig.values.map((val) => (
                <span
                  key={val}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.4rem 1rem",
                    borderRadius: "99px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: "rgba(167, 139, 250, 0.1)",
                    color: "var(--accent-secondary)",
                    border: "1px solid rgba(167, 139, 250, 0.2)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <Heart size={10} />
                  {val}
                </span>
              ))}
            </div>

            {/* Bio paragraphs */}
            {siteConfig.longBio.split("\n\n").map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  fontSize: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { value: "4+", label: "Projects Shipped" },
                { value: "2+", label: "Years Building" },
                { value: "100%", label: "Passion Level" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
