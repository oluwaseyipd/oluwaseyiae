"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Heart, Code2 } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <Github size={18} />, href: siteConfig.github, label: "GitHub" },
    { icon: <Twitter size={18} />, href: siteConfig.twitter, label: "Twitter" },
    { icon: <Linkedin size={18} />, href: siteConfig.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Logo + tagline */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              <Code2 size={18} style={{ color: "var(--accent)" }} />
              Oluwaseyi
            </a>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", maxWidth: "280px" }}>
              React &amp; Next.js Specialist crafting exceptional digital experiences.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(link.href.slice(1))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      transition: "color 300ms",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--border)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "all 300ms",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--accent)";
                  el.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-secondary)";
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
