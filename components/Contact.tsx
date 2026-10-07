"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Twitter, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send message. Please try again.");
      }

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please reach out directly via email."
      );
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    borderRadius: "0.625rem",
    background: "var(--background)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    fontSize: "0.925rem",
    outline: "none",
    transition: "border-color 300ms, box-shadow 300ms",
    fontFamily: "var(--font-body)",
  };

  return (
    <section id="contact" className="section">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem", maxWidth: "620px" }}
        >
          <p className="section-tag">Get In Touch</p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1rem" }}>
            I&apos;m currently open to full-time Frontend role, internships and freelancing . Whether you have a project in mind or just want to say hello —
            my inbox is always open.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
                    (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(34,211,238,0.1)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--border)";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
                    (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(34,211,238,0.1)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--border)";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Frontend role inquiry / Project collaboration"
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
                    (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(34,211,238,0.1)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--border)";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.5rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                  onFocus={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor = "var(--accent)";
                    (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(34,211,238,0.1)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)";
                    (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileHover={status === "idle" ? { scale: 1.02, y: -2 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "1rem",
                  fontSize: "0.95rem",
                  opacity: status === "sending" ? 0.8 : 1,
                }}
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <Send size={16} />
                      Send Message
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
                        <Loader2 size={16} />
                      </motion.span>
                      Sending...
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <CheckCircle size={16} />
                      Message Sent!
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#ef4444" }}
                    >
                      <AlertCircle size={16} />
                      Failed to send
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Error feedback message */}
              <AnimatePresence>
                {status === "error" && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#f87171",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <AlertCircle size={15} style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right column: contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Direct contact methods */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Reach out directly
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.875rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    textDecoration: "none",
                    color: "var(--text-primary)",
                    transition: "all 300ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "0.5rem",
                      background: "rgba(34,211,238,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "0.1rem" }}>Email</p>
                    <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>{siteConfig.email}</p>
                  </div>
                </a>

                <a
                  href={siteConfig.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.875rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    textDecoration: "none",
                    color: "var(--text-primary)",
                    transition: "all 300ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "0.5rem",
                      background: "rgba(167,139,250,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-secondary)",
                      flexShrink: 0,
                    }}
                  >
                    <Twitter size={18} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "0.1rem" }}>Twitter / X</p>
                    <p style={{ fontSize: "0.9rem", fontWeight: 600 }}>{siteConfig.handle}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Open to work banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                padding: "1.75rem",
                borderRadius: "1.25rem",
                background: "linear-gradient(135deg, rgba(34,211,238,0.08), rgba(167,139,250,0.08))",
                border: "1px solid rgba(34,211,238,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "99px",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#22c55e", letterSpacing: "0.05em" }}>
                  OPEN TO WORK
                </span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Open to <strong style={{ color: "var(--text-primary)" }}>entry-level Frontend roles</strong> and{" "}
                <strong style={{ color: "var(--text-primary)" }}>internships</strong>, remote or on-site in Lagos, Ibadan and Ogbomoso, with
                relocation possible. Also available for{" "} <strong style={{ color: "var(--text-primary)" }}>freelance projects.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
