"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Code2, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { navLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 300ms",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          background: scrolled
            ? "transparent"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <nav
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            whileHover={{ scale: 1.02 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            <motion.span
              whileHover={{ rotate: 15 }}
              style={{ color: "var(--accent)", display: "flex" }}
            >
              <Code2 size={20} />
            </motion.span>
            <span>Oluwaseyi</span>
          </motion.a>

          {/* Desktop nav links */}
          <ul
            style={{
              alignItems: "center",
              gap: "0.25rem",
              listStyle: "none",
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    whileHover={{ color: "var(--accent)" }}
                    style={{
                      textDecoration: "none",
                      padding: "0.5rem 0.875rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: isActive ? "var(--accent)" : "var(--text-secondary)",
                      position: "relative",
                      transition: "color 300ms",
                      display: "block",
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        style={{
                          position: "absolute",
                          bottom: "4px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "4px",
                          height: "4px",
                          borderRadius: "99px",
                          background: "var(--accent)",
                        }}
                      />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Right: Theme toggle + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "0.5rem",
                border: "1px solid var(--border)",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                transition: "all 300ms",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Hamburger (mobile) */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              className="flex md:hidden"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "0.5rem",
                border: "1px solid var(--border)",
                background: "transparent",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "var(--background)",
              display: "flex",
              flexDirection: "column",
              padding: "5rem 2rem 2rem",
            }}
            aria-modal="true"
            role="dialog"
          >
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={{
                      display: "block",
                      padding: "1rem 0",
                      textDecoration: "none",
                      fontSize: "1.75rem",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      color: activeSection === link.href.slice(1) ? "var(--accent)" : "var(--text-primary)",
                      borderBottom: "1px solid var(--border)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile: social links at bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: "auto", color: "var(--text-secondary)", fontSize: "0.875rem" }}
              className="flex gap-4 justify-center items-center"
            >
              
                <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem", color: "inherit" }}>
                  <Twitter size={24} />
                </a>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: "1rem", color: "inherit" }}>
                  <Github size={24} />
                </a>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  <Linkedin size={24} />
                </a>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
