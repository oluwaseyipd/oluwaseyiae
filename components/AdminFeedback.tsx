"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, Eye, EyeOff, ShieldCheck, LogOut, CheckCircle, XCircle, 
  Trash2, Edit, ExternalLink, Search, Star, Loader, AlertTriangle, Briefcase, Mail
} from "lucide-react";

interface TestimonialData {
  id: string;
  name: string;
  email: string;
  role_title: string;
  company: string;
  project_type: string;
  rating: number;
  feedback_text: string;
  valuable_part: string;
  linkedin_url?: string;
  approved: boolean;
  allow_public_display: boolean;
  created_at: string;
}

export default function AdminFeedback() {
  const [passcode, setPasscode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const [feedbacks, setFeedbacks] = useState<TestimonialData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState<"all" | "pending" | "approved">("all");
  
  // Shake animation trigger on incorrect passcode
  const [shakeTrigger, setShakeTrigger] = useState(false);

  // Edit Modal State
  const [editingItem, setEditingItem] = useState<TestimonialData | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<TestimonialData>>({});
  const [isSavingEdit, setIsSavingEdit] = useState(false);

  // Delete Double Confirmation State
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Check sessionStorage on load
  useEffect(() => {
    const savedPasscode = sessionStorage.getItem("admin_passcode");
    if (savedPasscode) {
      verifyPasscode(savedPasscode);
    }
  }, []);

  const verifyPasscode = async (codeToVerify: string) => {
    setIsVerifying(true);
    setAuthError("");
    try {
      const response = await fetch("/api/feedback", {
        headers: { "x-admin-passcode": codeToVerify }
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_passcode", codeToVerify);
        setFeedbacks(result.data || []);
      } else {
        setAuthError("Invalid admin passcode. Please try again.");
        sessionStorage.removeItem("admin_passcode");
        triggerShake();
      }
    } catch (err) {
      setAuthError("A connection error occurred. Check your server status.");
      triggerShake();
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setAuthError("Passcode cannot be empty");
      triggerShake();
      return;
    }
    verifyPasscode(passcode);
  };

  const triggerShake = () => {
    setShakeTrigger(true);
    setTimeout(() => setShakeTrigger(false), 500);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_passcode");
    setIsAuthenticated(false);
    setPasscode("");
    setFeedbacks([]);
  };

  // Reload data from API
  const refreshData = async () => {
    const code = sessionStorage.getItem("admin_passcode") || "";
    setIsLoading(true);
    try {
      const response = await fetch("/api/feedback", {
        headers: { "x-admin-passcode": code }
      });
      const result = await response.json();
      if (result.success) {
        setFeedbacks(result.data || []);
      }
    } catch (err) {
      console.error("Failed to refresh dashboard data", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle feedback approval (true/false)
  const handleToggleApproval = async (id: string, currentApproved: boolean) => {
    const code = sessionStorage.getItem("admin_passcode") || "";
    try {
      const response = await fetch("/api/feedback", {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "x-admin-passcode": code
        },
        body: JSON.stringify({ id, approved: !currentApproved })
      });
      const result = await response.json();
      if (result.success) {
        // Update local state directly
        setFeedbacks((prev) => 
          prev.map((item) => (item.id === id ? { ...item, approved: !currentApproved } : item))
        );
      } else {
        alert(result.message || "Failed to toggle status");
      }
    } catch (err) {
      alert("Network error: Failed to toggle status");
    }
  };

  // Open Edit Dialog
  const openEditModal = (item: TestimonialData) => {
    setEditingItem(item);
    setEditFormData({ ...item });
  };

  // Handle Edit Input Change
  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  // Submit Edit changes
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    
    setIsSavingEdit(true);
    const code = sessionStorage.getItem("admin_passcode") || "";
    try {
      const response = await fetch("/api/feedback", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-passcode": code
        },
        body: JSON.stringify({ id: editingItem.id, ...editFormData })
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setFeedbacks((prev) => 
          prev.map((item) => (item.id === editingItem.id ? { ...item, ...editFormData as TestimonialData } : item))
        );
        setEditingItem(null);
      } else {
        alert(result.message || "Failed to update database entry");
      }
    } catch (err) {
      alert("Network error updating feedback row");
    } finally {
      setIsSavingEdit(false);
    }
  };

  // Delete rows
  const handleDeleteItem = async (id: string) => {
    setIsDeleting(true);
    const code = sessionStorage.getItem("admin_passcode") || "";
    try {
      const response = await fetch(`/api/feedback?id=${id}`, {
        method: "DELETE",
        headers: { "x-admin-passcode": code }
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setFeedbacks((prev) => prev.filter((item) => item.id !== id));
        setDeletingId(null);
      } else {
        alert(result.message || "Failed to delete item");
      }
    } catch (err) {
      alert("Network error deleting row");
    } finally {
      setIsDeleting(false);
    }
  };

  // Filter and Search logic
  const filteredFeedbacks = feedbacks.filter((item) => {
    const searchString = `${item.name} ${item.email} ${item.company} ${item.role_title} ${item.feedback_text} ${item.project_type}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    
    if (filterTab === "pending") return matchesSearch && !item.approved;
    if (filterTab === "approved") return matchesSearch && item.approved;
    return matchesSearch;
  });

  // Calculate statistics metrics
  const statsTotal = feedbacks.length;
  const statsApproved = feedbacks.filter((item) => item.approved).length;
  const statsPending = statsTotal - statsApproved;

  // Passcode entry form layout
  if (!isAuthenticated) {
    return (
      <div 
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--background)",
          padding: "1.5rem"
        }}
      >
        <motion.div
          animate={shakeTrigger ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
          transition={{ duration: 0.4 }}
          style={{
            maxWidth: "400px",
            width: "100%",
            padding: "2.5rem",
            borderRadius: "1.5rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 50px -15px rgba(0,0,0,0.4)",
            textAlign: "center",
            position: "relative"
          }}
          className="noise"
        >
          {/* Lock Icon Emblem */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(34, 211, 238, 0.08)",
              border: "1px solid rgba(34, 211, 238, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
              color: "var(--accent)"
            }}
          >
            <Lock size={28} />
          </div>

          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            Admin Access Portal
          </h1>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
            This workspace is passcode protected. Please enter your secret key to manage client feedback.
          </p>

          <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter admin passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.85rem 3rem 0.85rem 1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid var(--border)",
                  background: "rgba(2, 6, 23, 0.4)",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  boxSizing: "border-box"
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {authError && (
              <p style={{ color: "#ef4444", fontSize: "0.8rem", margin: "0 0 0.5rem 0", textAlign: "left", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <AlertTriangle size={14} /> {authError}
              </p>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "0.85rem",
                borderRadius: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontWeight: 600,
                cursor: isVerifying ? "not-allowed" : "pointer"
              }}
            >
              {isVerifying ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                    <Loader size={18} />
                  </motion.div>
                  Verifying portal key...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} /> Unlock Dashboard
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard Panel Layout
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Header Block */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ShieldCheck style={{ color: "var(--accent)" }} size={24} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>
                Moderator Space
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "2.25rem", fontWeight: 800, letterSpacing: "-0.02em", marginTop: "0.25rem" }}>
              Feedback Control <span className="gradient-text">Dashboard</span>
            </h1>
          </div>

          <button
            onClick={handleLogout}
            style={{
              padding: "0.6rem 1.25rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 200ms"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#ef4444";
              e.currentTarget.style.color = "#ef4444";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            <LogOut size={16} /> Logout Admin Session
          </button>
        </div>

        {/* Statistics Widgets */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ padding: "1.5rem", borderRadius: "1rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-secondary)", margin: 0 }}>
              Total Submissions
            </p>
            <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0.5rem 0 0 0", color: "var(--text-primary)" }}>
              {statsTotal}
            </p>
          </div>
          
          <div style={{ padding: "1.5rem", borderRadius: "1rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#fbbf24", margin: 0 }}>
              Pending Moderation
            </p>
            <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0.5rem 0 0 0", color: "#fbbf24" }}>
              {statsPending}
            </p>
          </div>

          <div style={{ padding: "1.5rem", borderRadius: "1rem", background: "var(--surface)", border: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#34d399", margin: 0 }}>
              Live Testimonials
            </p>
            <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0.5rem 0 0 0", color: "#34d399" }}>
              {statsApproved}
            </p>
          </div>
        </div>

        {/* Filter and Search Panel */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2rem", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
          
          {/* Filter Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", background: "rgba(15,23,42,0.4)", padding: "0.35rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
            {(["all", "pending", "approved"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterTab(tab)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  background: filterTab === tab ? "var(--accent)" : "transparent",
                  color: filterTab === tab ? "#020617" : "var(--text-secondary)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  transition: "all 200ms"
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div style={{ position: "relative", maxWidth: "350px", width: "100%" }}>
            <Search size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }} />
            <input
              type="text"
              placeholder="Search by client name, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.6rem 1rem 0.6rem 2.5rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text-primary)",
                fontSize: "0.9rem",
                boxSizing: "border-box"
              }}
            />
          </div>
        </div>

        {/* Content Listings */}
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ color: "var(--accent)" }}>
              <Loader size={40} />
            </motion.div>
          </div>
        ) : filteredFeedbacks.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem 2rem", background: "rgba(15,23,42,0.2)", borderRadius: "1.5rem", border: "1px dotted var(--border)" }}>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              No feedback entries match your query or selected filters.
            </p>
          </div>
        ) : (
          <motion.div 
            layout 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", 
              gap: "2rem" 
            }}
          >
            <AnimatePresence>
              {filteredFeedbacks.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "2rem",
                    borderRadius: "1.25rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative"
                  }}
                  className="noise"
                >
                  <div>
                    {/* Header: Date and Approval Indicator */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                        {new Date(item.created_at).toLocaleDateString(undefined, { dateStyle: "medium" })}
                      </span>
                      
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        {item.approved ? (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", fontWeight: 700, color: "#34d399", padding: "0.25rem 0.6rem", borderRadius: "99px", background: "rgba(52, 211, 153, 0.08)", border: "1px solid rgba(52, 211, 153, 0.15)" }}>
                            <CheckCircle size={12} /> Approved / Live
                          </span>
                        ) : (
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", fontWeight: 700, color: "#fbbf24", padding: "0.25rem 0.6rem", borderRadius: "99px", background: "rgba(251, 191, 36, 0.08)", border: "1px solid rgba(251, 191, 36, 0.15)" }}>
                            <AlertTriangle size={12} /> Pending Moderation
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Star Rating and Project Type */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                      <div style={{ display: "flex", gap: "0.15rem" }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} style={{ fill: i < item.rating ? "#fbbf24" : "transparent", color: i < item.rating ? "#fbbf24" : "var(--border)" }} />
                        ))}
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {item.project_type}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 1.5rem 0", fontStyle: "italic" }}>
                      &ldquo;{item.feedback_text}&rdquo;
                    </p>

                    {/* Valuable Part Details */}
                    <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(2, 6, 23, 0.3)", border: "1px solid var(--border)", marginBottom: "1.5rem" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "0.25rem" }}>
                        Valuable Part:
                      </span>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
                        {item.valuable_part}
                      </p>
                    </div>
                  </div>

                  {/* Footer details: Client Profile and Action Row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.25rem", borderTop: "1px solid var(--border)", paddingTop: "1.25rem", marginTop: "auto" }}>
                    
                    {/* Client Details */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))", display: "flex", alignItems: "center", justifyContent: "center", color: "#020617", fontSize: "0.75rem", fontWeight: 700 }}>
                        {item.name.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                          <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>{item.name}</p>
                          {item.linkedin_url && (
                            <a href={item.linkedin_url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-secondary)", transition: "color 200ms" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                        <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-secondary)" }}>{item.role_title} at {item.company}</p>
                        <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "0.2rem" }}><Mail size={10} /> {item.email}</p>
                      </div>
                    </div>

                    {/* Actions panel */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      
                      {/* Approve / Reject Toggle */}
                      <button
                        onClick={() => handleToggleApproval(item.id, item.approved)}
                        style={{
                          padding: "0.45rem 0.75rem",
                          borderRadius: "0.5rem",
                          border: "1px solid",
                          borderColor: item.approved ? "#f59e0b" : "#10b981",
                          background: "transparent",
                          color: item.approved ? "#f59e0b" : "#10b981",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          transition: "all 200ms"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = item.approved ? "rgba(245,158,11,0.06)" : "rgba(16,185,129,0.06)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {item.approved ? (
                          <>
                            <XCircle size={14} /> Revoke Approval
                          </>
                        ) : (
                          <>
                            <CheckCircle size={14} /> Approve Review
                          </>
                        )}
                      </button>

                      {/* Edit Button */}
                      <button
                        onClick={() => openEditModal(item)}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "0.5rem",
                          border: "1px solid var(--border)",
                          background: "transparent",
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "all 200ms"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.color = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                      >
                        <Edit size={14} />
                      </button>

                      {/* Delete confirmation selector */}
                      {deletingId === item.id ? (
                        <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            disabled={isDeleting}
                            style={{
                              padding: "0.45rem 0.6rem",
                              borderRadius: "0.5rem",
                              border: "none",
                              background: "#ef4444",
                              color: "#fff",
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              cursor: "pointer"
                            }}
                          >
                            {isDeleting ? "..." : "Confirm"}
                          </button>
                          <button
                            onClick={() => setDeletingId(null)}
                            style={{
                              padding: "0.45rem 0.6rem",
                              borderRadius: "0.5rem",
                              border: "1px solid var(--border)",
                              background: "transparent",
                              color: "var(--text-secondary)",
                              fontSize: "0.75rem",
                              cursor: "pointer"
                            }}
                          >
                            No
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeletingId(item.id)}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "0.5rem",
                            border: "1px solid var(--border)",
                            background: "transparent",
                            color: "var(--text-secondary)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 200ms"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#ef4444";
                            e.currentTarget.style.color = "#ef4444";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.color = "var(--text-secondary)";
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      )}

                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>

      {/* Edit Modal Overlay */}
      <AnimatePresence>
        {editingItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(2, 6, 23, 0.8)",
              backdropFilter: "blur(8px)",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem"
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              style={{
                maxWidth: "600px",
                width: "100%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "1.5rem",
                padding: "2.25rem",
                maxHeight: "90vh",
                overflowY: "auto",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                position: "relative"
              }}
              className="noise"
            >
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>
                Edit Feedback Details
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                Modify client details or review content to correct spelling mistakes.
              </p>

              <form onSubmit={handleEditSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                
                {/* Row 1: Name and Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name || ""}
                      onChange={handleEditInputChange}
                      style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", boxSizing: "border-box" }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email || ""}
                      onChange={handleEditInputChange}
                      style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", boxSizing: "border-box" }}
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Role and Company */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                      Job Title / Role
                    </label>
                    <input
                      type="text"
                      name="role_title"
                      value={editFormData.role_title || ""}
                      onChange={handleEditInputChange}
                      style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", boxSizing: "border-box" }}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={editFormData.company || ""}
                      onChange={handleEditInputChange}
                      style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", boxSizing: "border-box" }}
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Project Type and Rating */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                      Project Type
                    </label>
                    <select
                      name="project_type"
                      value={editFormData.project_type || ""}
                      onChange={handleEditInputChange}
                      style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", cursor: "pointer", boxSizing: "border-box" }}
                    >
                      <option value="Full-Stack Web App">Full-Stack Web App</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="Backend API Dev">Backend API Dev</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Technical Consulting">Technical Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                      Rating (1 - 5)
                    </label>
                    <select
                      name="rating"
                      value={editFormData.rating || 5}
                      onChange={handleEditInputChange}
                      style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", cursor: "pointer", boxSizing: "border-box" }}
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
                      <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
                      <option value={3}>⭐⭐⭐ 3 Stars</option>
                      <option value={2}>⭐⭐ 2 Stars</option>
                      <option value={1}>⭐ 1 Star</option>
                    </select>
                  </div>
                </div>

                {/* LinkedIn link */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                    LinkedIn URL
                  </label>
                  <input
                    type="text"
                    name="linkedin_url"
                    value={editFormData.linkedin_url || ""}
                    onChange={handleEditInputChange}
                    placeholder="https://linkedin.com/in/username"
                    style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", boxSizing: "border-box" }}
                  />
                </div>

                {/* Valuable Part */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                    What was the most valuable part?
                  </label>
                  <textarea
                    name="valuable_part"
                    value={editFormData.valuable_part || ""}
                    onChange={handleEditInputChange}
                    rows={2}
                    style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", fontFamily: "inherit", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }}
                    required
                  />
                </div>

                {/* Feedback Text */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "var(--text-primary)" }}>
                    Testimonial Message
                  </label>
                  <textarea
                    name="feedback_text"
                    value={editFormData.feedback_text || ""}
                    onChange={handleEditInputChange}
                    rows={4}
                    style={{ width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--border)", background: "rgba(2, 6, 23, 0.4)", color: "var(--text-primary)", fontFamily: "inherit", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box" }}
                    required
                  />
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem", marginTop: "1rem", justifyContent: "flex-end" }}>
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    style={{
                      padding: "0.6rem 1.25rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--border)",
                      background: "transparent",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      fontWeight: 600
                    }}
                  >
                    Cancel
                  </button>
                  
                  <button
                    type="submit"
                    disabled={isSavingEdit}
                    className="btn-primary"
                    style={{
                      padding: "0.6rem 1.25rem",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: isSavingEdit ? "not-allowed" : "pointer"
                    }}
                  >
                    {isSavingEdit ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                          <Loader size={16} />
                        </motion.div>
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
