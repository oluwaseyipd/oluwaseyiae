"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, Loader, Star, Send, Link as LinkIcon, User, Briefcase, Mail, MessageSquare, Heart } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FeedbackInput {
  name: string;
  email: string;
  role_title: string;
  company: string;
  project_type: string;
  rating: number;
  feedback_text: string;
  valuable_part: string;
  linkedin_url: string;
  allow_public_display: boolean;
}

interface TestimonialData {
  id: string;
  name: string;
  role_title: string;
  company: string;
  project_type: string;
  rating: number;
  feedback_text: string;
  valuable_part: string;
  linkedin_url?: string;
  avatar?: string;
  created_at: string;
}

const PROJECT_TYPES = [
  "Full-Stack Web App",
  "Frontend Development",
  "Backend API Dev",
  "UI/UX Design",
  "Technical Consulting",
  "Other"
];

const RATING_DESCRIPTIONS = [
  "",
  "1 - Unsatisfactory",
  "2 - Needs Improvement",
  "3 - Good / Satisfactory",
  "4 - Very Good / Professional",
  "5 - Outstanding / Exceptional!"
];

export default function Feedbacks() {
  const [formData, setFormData] = useState<FeedbackInput>({
    name: "",
    email: "",
    role_title: "",
    company: "",
    project_type: PROJECT_TYPES[0],
    rating: 5,
    feedback_text: "",
    valuable_part: "",
    linkedin_url: "",
    allow_public_display: true,
  });

  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [liveTestimonials, setLiveTestimonials] = useState<TestimonialData[]>([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  // Fetch testimonials on load
  useEffect(() => {
    async function getTestimonials() {
      try {
        const response = await fetch("/api/feedback");
        const json = await response.json();
        if (json.success) {
          setLiveTestimonials(json.data);
        }
      } catch (err) {
        console.error("Failed to load live testimonials", err);
      } finally {
        setLoadingTestimonials(false);
      }
    }
    getTestimonials();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleRatingSelect = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleProjectTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, project_type: type }));
  };

  const handleToggleChange = () => {
    setFormData((prev) => ({ ...prev, allow_public_display: !prev.allow_public_display }));
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = "Full name is required";
    else if (formData.name.trim().length < 2) errors.name = "Name must be at least 2 characters";

    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Please enter a valid email address";

    if (!formData.role_title.trim()) errors.role_title = "Professional role is required";
    if (!formData.company.trim()) errors.company = "Company or Organization is required";
    
    if (!formData.valuable_part.trim()) errors.valuable_part = "Please share what you found most valuable";
    else if (formData.valuable_part.trim().length < 5) errors.valuable_part = "Please provide a bit more detail";

    if (!formData.feedback_text.trim()) errors.feedback_text = "Main testimonial message is required";
    else if (formData.feedback_text.trim().length < 10) errors.feedback_text = "Testimonial must be at least 10 characters";

    if (formData.linkedin_url.trim()) {
      if (!/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/.test(formData.linkedin_url.trim())) {
        errors.linkedin_url = "Please enter a valid LinkedIn profile URL (or leave blank)";
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setFormState("loading");
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormState("success");
        setSuccessMessage("Thank you! Your feedback was recorded. Testimonials appear on the homepage once verified.");
        
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          role_title: "",
          company: "",
          project_type: PROJECT_TYPES[0],
          rating: 5,
          feedback_text: "",
          valuable_part: "",
          linkedin_url: "",
          allow_public_display: true,
        });

        // Redirect to homepage after a brief delay
        setTimeout(() => {
          window.location.href = "/";
        }, 3500);
      } else {
        setFormState("error");
        setErrorMessage(result.message || "Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      setFormState("error");
      setErrorMessage("A network error occurred. Please verify your connection and try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  // Helper to generate initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "var(--background)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%", margin: "0 auto" }}>
        
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.p variants={itemVariants} className="section-tag" style={{ margin: "0 auto" }}>
            Collaboration Review
          </motion.p>
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginTop: "0.75rem",
            }}
          >
            Client <span className="gradient-text">Feedback & Review</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              marginTop: "1rem",
              maxWidth: "580px",
              margin: "1rem auto 0",
              lineHeight: 1.6,
            }}
          >
            Thank you for collaborating with me! Your constructive feedback helps me refine my process and showcases the impact of our partnership.
          </motion.p>
        </motion.div>

        {/* Feedback Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            borderRadius: "1.75rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            padding: "2.5rem",
            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)",
            marginBottom: "6rem",
            position: "relative",
            overflow: "hidden"
          }}
          className="noise"
        >
          {/* Accent Glow Background */}
          <div
            style={{
              position: "absolute",
              top: "-150px",
              right: "-150px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
              zIndex: 0,
              pointerEvents: "none"
            }}
          />

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative", zIndex: 1 }}>
            
            {/* Row 1: Name and Email */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              <div>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  <User size={16} className="gradient-text" /> Full Name <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Jane Doe"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.75rem",
                    border: `1px solid ${fieldErrors.name ? "#ef4444" : "var(--border)"}`,
                    background: "var(--background)",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    transition: "border-color 200ms",
                    boxSizing: "border-box",
                  }}
                />
                {fieldErrors.name && (
                  <p style={{ fontSize: "0.75rem", color: "#ef4444", marginTop: "0.35rem" }}>{fieldErrors.name}</p>
                )}
              </div>

              <div>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  <Mail size={16} className="gradient-text" /> Email Address <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@company.com"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.75rem",
                    border: `1px solid ${fieldErrors.email ? "#ef4444" : "var(--border)"}`,
                    background: "var(--background)",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    transition: "border-color 200ms",
                    boxSizing: "border-box",
                  }}
                />
                {fieldErrors.email && (
                  <p style={{ fontSize: "0.75rem", color: "#ef4444", marginTop: "0.35rem" }}>{fieldErrors.email}</p>
                )}
              </div>
            </div>

            {/* Row 2: Role and Company */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              <div>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  <Briefcase size={16} className="gradient-text" /> Your Job Title / Role <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="role_title"
                  value={formData.role_title}
                  onChange={handleInputChange}
                  placeholder="e.g., Founder, CTO, Product Manager"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.75rem",
                    border: `1px solid ${fieldErrors.role_title ? "#ef4444" : "var(--border)"}`,
                    background: "var(--background)",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    transition: "border-color 200ms",
                    boxSizing: "border-box",
                  }}
                />
                {fieldErrors.role_title && (
                  <p style={{ fontSize: "0.75rem", color: "#ef4444", marginTop: "0.35rem" }}>{fieldErrors.role_title}</p>
                )}
              </div>

              <div>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                  <Briefcase size={16} className="gradient-text" /> Company / Organization <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g., TechStartup"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    borderRadius: "0.75rem",
                    border: `1px solid ${fieldErrors.company ? "#ef4444" : "var(--border)"}`,
                    background: "var(--background)",
                    color: "var(--text-primary)",
                    fontSize: "0.95rem",
                    transition: "border-color 200ms",
                    boxSizing: "border-box",
                  }}
                />
                {fieldErrors.company && (
                  <p style={{ fontSize: "0.75rem", color: "#ef4444", marginTop: "0.35rem" }}>{fieldErrors.company}</p>
                )}
              </div>
            </div>

            {/* Interactive Rating Component */}
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                Overall Experience Rating <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "0.35rem" }}>
                  {[1, 2, 3, 4, 5].map((starValue) => {
                    const isActive = starValue <= (hoverRating !== null ? hoverRating : formData.rating);
                    return (
                      <motion.button
                        key={starValue}
                        type="button"
                        onClick={() => handleRatingSelect(starValue)}
                        onMouseEnter={() => setHoverRating(starValue)}
                        onMouseLeave={() => setHoverRating(null)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "0.25rem",
                        }}
                      >
                        <Star
                          size={28}
                          style={{
                            fill: isActive ? "#fbbf24" : "transparent",
                            color: isActive ? "#fbbf24" : "var(--border)",
                            transition: "color 150ms, fill 150ms",
                          }}
                        />
                      </motion.button>
                    );
                  })}
                </div>
                
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    marginLeft: "0.5rem",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "0.5rem",
                    background: "rgba(34, 211, 238, 0.08)",
                    border: "1px solid rgba(34, 211, 238, 0.15)",
                  }}
                >
                  {RATING_DESCRIPTIONS[hoverRating !== null ? hoverRating : formData.rating]}
                </span>
              </div>
            </div>

            {/* Project / Service Type Pill Selector */}
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                Project / Service Type <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {PROJECT_TYPES.map((type) => {
                  const isSelected = formData.project_type === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleProjectTypeSelect(type)}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "99px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        border: "1px solid",
                        borderColor: isSelected ? "var(--accent)" : "var(--border)",
                        background: isSelected ? "rgba(34, 211, 238, 0.12)" : "var(--background)",
                        color: isSelected ? "var(--accent)" : "var(--text-secondary)",
                        cursor: "pointer",
                        transition: "all 200ms",
                      }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* LinkedIn Profile */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                <LinkIcon size={16} className="gradient-text" /> LinkedIn URL <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 400 }}>(Optional)</span>
              </label>
              <input
                type="text"
                name="linkedin_url"
                value={formData.linkedin_url}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/username"
                style={{
                  width: "100%",
                  padding: "0.85rem 1rem",
                  borderRadius: "0.75rem",
                  border: `1px solid ${fieldErrors.linkedin_url ? "#ef4444" : "var(--border)"}`,
                  background: "var(--background)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  transition: "border-color 200ms",
                  boxSizing: "border-box",
                }}
              />
              {fieldErrors.linkedin_url && (
                <p style={{ fontSize: "0.75rem", color: "#ef4444", marginTop: "0.35rem" }}>{fieldErrors.linkedin_url}</p>
              )}
            </div>

            {/* Structured Question: Valuable Part */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                <Heart size={16} className="gradient-text" /> What was the most valuable part of working together? <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                name="valuable_part"
                value={formData.valuable_part}
                onChange={handleInputChange}
                placeholder="e.g. Prompt communication, code modularity, post-launch assistance..."
                rows={2}
                maxLength={500}
                style={{
                  width: "100%",
                  padding: "0.85rem 1rem",
                  borderRadius: "0.75rem",
                  border: `1px solid ${fieldErrors.valuable_part ? "#ef4444" : "var(--border)"}`,
                  background: "var(--background)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  resize: "vertical",
                  fontFamily: "inherit",
                  lineHeight: 1.5,
                  boxSizing: "border-box",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.35rem" }}>
                {fieldErrors.valuable_part && (
                  <p style={{ fontSize: "0.75rem", color: "#ef4444", margin: 0 }}>{fieldErrors.valuable_part}</p>
                )}
                <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginLeft: "auto" }}>
                  {formData.valuable_part.length}/500
                </span>
              </div>
            </div>

            {/* Testimonial Core Content */}
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                <MessageSquare size={16} className="gradient-text" /> Detailed Testimonial / Review <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                name="feedback_text"
                value={formData.feedback_text}
                onChange={handleInputChange}
                placeholder="Share your detailed experience collaborating with me..."
                rows={5}
                maxLength={1000}
                style={{
                  width: "100%",
                  padding: "0.85rem 1rem",
                  borderRadius: "0.75rem",
                  border: `1px solid ${fieldErrors.feedback_text ? "#ef4444" : "var(--border)"}`,
                  background: "var(--background)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  resize: "vertical",
                  fontFamily: "inherit",
                  lineHeight: 1.5,
                  boxSizing: "border-box",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.35rem" }}>
                {fieldErrors.feedback_text && (
                  <p style={{ fontSize: "0.75rem", color: "#ef4444", margin: 0 }}>{fieldErrors.feedback_text}</p>
                )}
                <span style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginLeft: "auto" }}>
                  {formData.feedback_text.length}/1000
                </span>
              </div>
            </div>

            {/* Public display approval checkbox/toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0" }}>
              <input
                type="checkbox"
                id="allow_public_display"
                checked={formData.allow_public_display}
                onChange={handleToggleChange}
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "4px",
                  border: "1px solid var(--border)",
                  accentColor: "var(--accent)",
                  cursor: "pointer",
                }}
              />
              <label htmlFor="allow_public_display" style={{ fontSize: "0.85rem", color: "var(--text-secondary)", cursor: "pointer", userSelect: "none" }}>
                I agree to display this feedback on the portfolio homepage.
              </label>
            </div>

            {/* Feedback Response messages */}
            {formState === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  color: "#22c55e",
                  alignItems: "flex-start",
                }}
              >
                <CheckCircle size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.5 }}>
                  {successMessage}
                </p>
              </motion.div>
            )}

            {formState === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  color: "#ef4444",
                  alignItems: "flex-start",
                }}
              >
                <AlertCircle size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.5 }}>
                  {errorMessage}
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={formState === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                cursor: formState === "loading" ? "not-allowed" : "pointer",
                opacity: formState === "loading" ? 0.7 : 1,
              }}
            >
              {formState === "loading" ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader size={18} />
                  </motion.div>
                  Submitting Feedback...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Professional Feedback
                </>
              )}
            </motion.button>

          </form>
        </motion.div>

        {/* Existing Testimonials Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Check out reviews and testimonials from other client collaborations.
          </p>
        </div>

        {/* Testimonials Display Grid */}
        {loadingTestimonials ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ color: "var(--accent)" }}
            >
              <Loader size={36} />
            </motion.div>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {liveTestimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  borderRadius: "1.25rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 300ms",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(34,211,238,0.5)";
                  el.style.boxShadow = "0 15px 40px -15px rgba(34,211,238,0.15)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div>
                  {/* Rating Stars */}
                  <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        style={{
                          fill: i < item.rating ? "#fbbf24" : "transparent",
                          color: i < item.rating ? "#fbbf24" : "var(--border)"
                        }}
                      />
                    ))}
                  </div>

                  {/* Valuable part highlighted badge */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent)", fontWeight: 700 }}>
                      Most Valuable:
                    </span>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 500, margin: "0.2rem 0 0 0" }}>
                      {item.valuable_part}
                    </p>
                  </div>

                  {/* Feedback text */}
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{item.feedback_text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1.25rem",
                    marginTop: "auto"
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#020617",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.avatar || getInitials(item.name)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {item.name}
                      </p>
                      {item.linkedin_url && (
                        <a
                          href={item.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--text-secondary)", transition: "color 200ms" }}
                          onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                          onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
                        >
                          <LinkIcon size={12} />
                        </a>
                      )}
                    </div>
                    <p style={{ margin: "0.15rem 0 0 0", fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.2 }}>
                      {item.role_title} at <span style={{ fontWeight: 600 }}>{item.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}