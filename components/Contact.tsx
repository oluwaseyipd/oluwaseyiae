"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Twitter, CheckCircle2, Loader2, AlertCircle, X, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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

      setSubmittedName(form.name.trim());
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please reach out directly via email."
      );
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
                disabled={status === "sending"}
                whileHover={status !== "sending" ? { scale: 1.02, y: -2 } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "1rem",
                  fontSize: "0.95rem",
                  opacity: status === "sending" ? 0.75 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                <AnimatePresence mode="wait">
                  {status === "sending" ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        style={{ display: "inline-flex" }}
                      >
                        <Loader2 size={16} />
                      </motion.span>
                      Sending Message...
                    </motion.span>
                  ) : (
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
                </AnimatePresence>
              </motion.button>
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

      {/* Floating Bottom-Right Toast Confirmations */}
      <AnimatePresence>
        {status === "sent" && (
          <motion.aside
            role="status"
            aria-live="polite"
            aria-label="Message Sent Notification"
            initial={{ opacity: 0, y: 40, x: 20, scale: 0.92, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            style={{
              position: "fixed",
              bottom: "1.5rem",
              right: "1.5rem",
              zIndex: 9999,
              width: "calc(100vw - 2rem)",
              maxWidth: "400px",
              borderRadius: "1rem",
              background: "var(--surface)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(34, 211, 238, 0.4)",
              boxShadow: "0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px -5px rgba(34, 211, 238, 0.3)",
              padding: "1.125rem 1.25rem 1.35rem",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
              {/* Glowing Success Badge */}
              <div
                style={{
                  position: "relative",
                  width: "40px",
                  height: "40px",
                  borderRadius: "0.75rem",
                  background: "linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(167, 139, 250, 0.2))",
                  border: "1px solid rgba(34, 211, 238, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  flexShrink: 0,
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.3)",
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.1 }}
                >
                  <CheckCircle2 size={22} style={{ color: "var(--accent)" }} />
                </motion.div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    <Sparkles size={11} />
                    Message Delivered
                  </span>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    aria-label="Close notification"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "4px",
                      transition: "color 150ms, transform 150ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>

                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.975rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: "0 0 0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Message Sent Successfully!
                </h4>

                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {submittedName ? (
                    <>Thank you, <strong style={{ color: "var(--text-primary)" }}>{submittedName}</strong>! I&apos;ve received your note and will get back to you soon.</>
                  ) : (
                    <>Thank you! Your message has been sent to my inbox and I&apos;ll get back to you soon.</>
                  )}
                </p>
              </div>
            </div>

            {/* Countdown progress bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "3px",
                background: "linear-gradient(90deg, var(--accent), var(--accent-secondary))",
              }}
            />
          </motion.aside>
        )}

        {status === "error" && (
          <motion.aside
            role="alert"
            aria-live="assertive"
            aria-label="Message Failed Notification"
            initial={{ opacity: 0, y: 40, x: 20, scale: 0.92, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            style={{
              position: "fixed",
              bottom: "1.5rem",
              right: "1.5rem",
              zIndex: 9999,
              width: "calc(100vw - 2rem)",
              maxWidth: "400px",
              borderRadius: "1rem",
              background: "var(--surface)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(239, 68, 68, 0.4)",
              boxShadow: "0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px -5px rgba(239, 68, 68, 0.25)",
              padding: "1.125rem 1.25rem 1.35rem",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
              {/* Error Badge */}
              <div
                style={{
                  position: "relative",
                  width: "40px",
                  height: "40px",
                  borderRadius: "0.75rem",
                  background: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid rgba(239, 68, 68, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ef4444",
                  flexShrink: 0,
                  boxShadow: "0 0 15px rgba(239, 68, 68, 0.3)",
                }}
              >
                <AlertCircle size={22} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#f87171",
                    }}
                  >
                    Delivery Failed
                  </span>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    aria-label="Close notification"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      padding: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "4px",
                      transition: "color 150ms, transform 150ms",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>

                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.975rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    margin: "0 0 0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Failed to send message
                </h4>

                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {errorMessage || (
                    <>Please try again or reach out directly at <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--accent)", textDecoration: "underline" }}>{siteConfig.email}</a>.</>
                  )}
                </p>
              </div>
            </div>

            {/* Countdown progress bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "3px",
                background: "linear-gradient(90deg, #ef4444, #f97316)",
              }}
            />
          </motion.aside>
        )}
      </AnimatePresence>
    </section>
  );
}
