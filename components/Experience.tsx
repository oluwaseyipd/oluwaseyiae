"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Briefcase, Lightbulb, Quote, HandHelping, ChevronLeft, ChevronRight, ArrowRight, Star, MessageSquare } from "lucide-react";
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
  id: string | number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  project_type?: string;
  valuable_part?: string;
  linkedin_url?: string;
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      style={{
        padding: "1.25rem 1.5rem",
        borderRadius: "1rem",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        boxSizing: "border-box",
        transition: "border-color 300ms",
      }}
      className="noise"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Quote decoration icon */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          color: "var(--accent)",
          opacity: 0.08,
          pointerEvents: "none"
        }}
      >
        <Quote size={28} />
      </div>

      <div>
        {/* Stars and Project Type */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
          <div style={{ display: "flex", gap: "0.15rem" }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                style={{
                  fill: i < item.rating ? "#fbbf24" : "transparent",
                  color: i < item.rating ? "#fbbf24" : "var(--border)",
                }}
              />
            ))}
          </div>
          {item.project_type && (
            <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {item.project_type}
            </span>
          )}
        </div>

        {/* Quote text */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            margin: "0.5rem 0 0 0",
            fontStyle: "italic",
            position: "relative",
            zIndex: 1,
          }}
        >
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Author details */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          borderTop: "1px solid var(--border)",
          paddingTop: "0.75rem",
          marginTop: "0.25rem"
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "#020617",
            flexShrink: 0,
          }}
        >
          {item.avatar}
        </div>
        <div style={{ overflow: "hidden" }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "var(--text-primary)",
              lineHeight: 1.2,
              margin: 0,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden"
            }}
          >
            {item.name}
          </p>
          <p
            style={{
              fontSize: "0.7rem",
              color: "var(--text-secondary)",
              margin: 0,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden"
            }}
          >
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const [displayTestimonials, setDisplayTestimonials] = useState<Testimonial[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // For horizontal sliding animation direction
  const [isHovered, setIsHovered] = useState(false);

  // Setup mount check and media query event listeners
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Fetch live testimonials
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/feedback");
        const json = await res.json();
        if (json.success && json.data && json.data.length > 0) {
          const mapped = json.data.map((item: any) => {
            const avatar = item.avatar || item.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .substring(0, 2)
              .toUpperCase();

            return {
              id: item.id,
              quote: item.feedback_text,
              name: item.name,
              title: item.role_title && item.company
                ? `${item.role_title} at ${item.company}`
                : item.role_title || item.title || "Client",
              avatar,
              rating: item.rating || 5,
              project_type: item.project_type,
              valuable_part: item.valuable_part,
              linkedin_url: item.linkedin_url,
            };
          });
          setDisplayTestimonials(mapped);
        } else {
          setDisplayTestimonials([]);
        }
      } catch (error) {
        console.error("Error fetching homepage testimonials:", error);
        setDisplayTestimonials([]);
      }
    }

    loadTestimonials();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop/Mobile Autoplay Slider loop
  useEffect(() => {
    if (displayTestimonials.length <= 1 || isHovered) return;

    // On desktop screen (non-mobile), only run the slider loop if testimonials exceed 3
    if (!isMobile && displayTestimonials.length <= 3) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [displayTestimonials, isHovered, isMobile]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  // Slice to show up to 3 feedbacks concurrently in the vertical stack
  const getActiveItems = () => {
    if (displayTestimonials.length === 0) return [];
    const count = Math.min(3, displayTestimonials.length);
    const items = [];
    for (let i = 0; i < count; i++) {
      const idx = (activeIndex + i) % displayTestimonials.length;
      items.push(displayTestimonials[idx]);
    }
    return items;
  };

  // Variants for desktop slide-up transition
  const verticalVariants = {
    enter: {
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: "spring" as const, stiffness: 350, damping: 28 },
        opacity: { duration: 0.2 }
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 0.95,
      transition: {
        y: { type: "spring" as const, stiffness: 350, damping: 28 },
        opacity: { duration: 0.2 }
      }
    }
  };

  // Variants for mobile horizontal slide transition
  const horizontalVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 28 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 28 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
          }}
        >
          {/* Left Column: Experience timeline */}
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

          {/* Right Column: Testimonials Slider */}
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

            {/* Testimonial Presentation Block */}
            {!mounted ? (
              // Server-side / Hydration placeholder
              <div style={{ height: "340px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Loading reviews...</span>
              </div>
            ) : displayTestimonials.length === 0 ? (
              // Empty State CTA
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "2.5rem 2rem",
                  borderRadius: "1.25rem",
                  background: "transparent",
                  border: "1px dashed var(--border)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.25rem",
                  maxWidth: "420px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(34, 211, 238, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                  }}
                >
                  <MessageSquare size={26} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    No Client Reviews Yet
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                    Have we collaborated on a project? I would love to hear your thoughts and showcase our work!
                  </p>
                </div>
                <a
                  href="/feedback"
                  className="btn-outline"
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.8rem",
                    borderRadius: "0.5rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    textDecoration: "none",
                  }}
                >
                  Leave Feedback <ArrowRight size={12} />
                </a>
              </motion.div>
            ) : !isMobile ? (
              // Desktop: 3-Stacked Vertical Slide-Up Slider (Jumps bottom-up one at a time)
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    width: "100%",
                    minHeight: displayTestimonials.length > 3 ? "560px" : "auto"
                  }}
                  onMouseEnter={() => {
                    if (displayTestimonials.length > 3) setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    if (displayTestimonials.length > 3) setIsHovered(false);
                  }}
                >
                  {displayTestimonials.length > 3 ? (
                    <AnimatePresence mode="popLayout">
                      {getActiveItems().map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          variants={verticalVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            y: { type: "spring" as const, stiffness: 350, damping: 28 },
                            opacity: { duration: 0.2 },
                            layout: { type: "spring" as const, stiffness: 350, damping: 28 }
                          }}
                          style={{
                            width: "100%"
                          }}
                        >
                          <TestimonialCard item={item} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  ) : (
                    // Static vertical list if 3 or fewer feedbacks
                    displayTestimonials.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        style={{ width: "100%" }}
                      >
                        <TestimonialCard item={item} />
                      </motion.div>
                    ))
                  )}
                </div>

                {/* Desktop Dots Control */}
                {displayTestimonials.length > 3 && (
                  <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                    {displayTestimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveIndex(idx);
                        }}
                        style={{
                          width: idx === activeIndex ? "20px" : "8px",
                          height: "8px",
                          borderRadius: "99px",
                          background: idx === activeIndex ? "var(--accent)" : "var(--border)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 300ms ease",
                          padding: 0
                        }}
                        aria-label={`Go to review ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Mobile/Tablet: Horizontal Swipable Slider (Single Card layout)
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", position: "relative" }}>
                  {/* Left Arrow Button */}
                  {displayTestimonials.length > 1 && (
                    <button
                      onClick={handlePrev}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "1px solid var(--border)",
                        background: "rgba(15,23,42,0.6)",
                        color: "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 10,
                        flexShrink: 0
                      }}
                      aria-label="Previous review"
                    >
                      <ChevronLeft size={16} />
                    </button>
                  )}

                  {/* Horizontal Sliding Card Window */}
                  <div
                    style={{
                      position: "relative",
                      height: "230px", // compact card height match
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "1rem",
                      flex: 1
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <AnimatePresence custom={direction} mode="popLayout">
                      <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={horizontalVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.7}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipeThreshold = 50;
                          if (offset.x < -swipeThreshold) {
                            handleNext();
                          } else if (offset.x > swipeThreshold) {
                            handlePrev();
                          }
                        }}
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          cursor: "grab",
                        }}
                        whileTap={{ cursor: "grabbing" }}
                      >
                        <TestimonialCard item={displayTestimonials[activeIndex]} />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Arrow Button */}
                  {displayTestimonials.length > 1 && (
                    <button
                      onClick={handleNext}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        border: "1px solid var(--border)",
                        background: "rgba(15,23,42,0.6)",
                        color: "var(--text-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 10,
                        flexShrink: 0
                      }}
                      aria-label="Next review"
                    >
                      <ChevronRight size={16} />
                    </button>
                  )}
                </div>

                {/* Mobile Dots Control */}
                {displayTestimonials.length > 1 && (
                  <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                    {displayTestimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setDirection(idx > activeIndex ? 1 : -1);
                          setActiveIndex(idx);
                        }}
                        style={{
                          width: idx === activeIndex ? "20px" : "8px",
                          height: "8px",
                          borderRadius: "99px",
                          background: idx === activeIndex ? "var(--accent)" : "var(--border)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 300ms ease",
                          padding: 0
                        }}
                        aria-label={`Go to review ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
