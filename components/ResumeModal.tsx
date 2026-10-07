"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, Eye } from "lucide-react";
import { siteConfig } from "@/lib/data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
}

export function ResumeModal({
  isOpen,
  onClose,
  resumeUrl = siteConfig.resumeUrl || "/ABIOLA_JOHN_OLUWASEYI_FRONTEND_DEVELOPER.pdf",
}: ResumeModalProps) {
  // Handle ESC key press and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Resume Preview Modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1020px",
              height: "90vh",
              maxHeight: "920px",
              background: "var(--surface)",
              color: "var(--text-primary)",
              borderRadius: "1.25rem",
              border: "1px solid var(--border)",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 35px rgba(34, 211, 238, 0.15)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 1.25rem",
                borderBottom: "1px solid var(--border)",
                background: "var(--surface)",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {/* Left: Info */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "0.625rem",
                    background: "rgba(34, 211, 238, 0.12)",
                    border: "1px solid rgba(34, 211, 238, 0.3)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FileText size={20} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        margin: 0,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {siteConfig.name}
                    </h3>
                    <span className="badge" style={{ fontSize: "0.68rem", padding: "0.15rem 0.5rem" }}>
                      Resume / CV
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    Frontend Developer • React & Next.js
                  </p>
                </div>
              </div>

              {/* Right: Actions */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginLeft: "auto",
                }}
              >
                {/* Download PDF button */}
                <a
                  href={resumeUrl}
                  download="ABIOLA_JOHN_OLUWASEYI_FRONTEND_DEVELOPER.pdf"
                  className="btn-primary"
                  style={{
                    padding: "0.55rem 1.15rem",
                    fontSize: "0.85rem",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    gap: "0.45rem",
                  }}
                >
                  <Download size={15} />
                  <span>Download PDF</span>
                </a>

                {/* Open in new tab button */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  title="Open in new window"
                  aria-label="Open resume in new window"
                  style={{
                    padding: "0.55rem 0.85rem",
                    fontSize: "0.85rem",
                    borderRadius: "0.5rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <ExternalLink size={15} />
                  <span className="hidden sm:inline">Open Tab</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  style={{
                    background: "var(--background)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    width: "36px",
                    height: "36px",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(34, 211, 238, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.background = "var(--background)";
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Viewer */}
            <div
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                background: "var(--background)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <object
                data={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                type="application/pdf"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  flex: 1,
                }}
              >
                {/* Fallback for browsers or devices that do not render inline PDFs */}
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    textAlign: "center",
                    color: "var(--text-secondary)",
                    background: "var(--surface)",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "1rem",
                      background: "rgba(34, 211, 238, 0.1)",
                      border: "1px solid rgba(34, 211, 238, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Eye size={28} />
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Previewing Abiola&apos;s Resume
                  </h4>
                  <p
                    style={{
                      maxWidth: "440px",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    If your browser doesn&apos;t support direct inline PDF embedding, you can download the document or open it directly in a new window.
                  </p>
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                    <a
                      href={resumeUrl}
                      download="ABIOLA_JOHN_OLUWASEYI_FRONTEND_DEVELOPER.pdf"
                      className="btn-primary"
                      style={{ padding: "0.75rem 1.5rem" }}
                    >
                      <Download size={16} />
                      Download Resume (PDF)
                    </a>
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: "0.75rem 1.5rem" }}
                    >
                      <ExternalLink size={16} />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

