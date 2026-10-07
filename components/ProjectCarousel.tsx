"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Image as ImageIcon, Layers, Maximize2, X } from "lucide-react";
import type { ProjectImage } from "@/lib/project";

interface ProjectCarouselProps {
  images: ProjectImage[];
  projectTitle: string;
}

export function ProjectCarousel({ images, projectTitle }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  const total = images.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => (prev + newDirection + total) % total);
    },
    [total]
  );

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate, isFullscreen]);

  const currentImage = images[currentIndex] || images[0];
  const isImageFailed = failedImages[currentIndex];

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <>
      <div
        className="w-full relative select-none rounded-2xl overflow-hidden border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Carousel Frame - Strictly bounded to prevent overflow */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "16 / 10",
            maxHeight: "520px",
            minHeight: "260px",
            background: "var(--background)",
          }}
        >
          {/* Top Status Bar (Counter & Expand Button) */}
          <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
            <div
              className="pointer-events-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border shadow-sm"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <Layers size={13} style={{ color: "var(--accent)" }} />
              <span>
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={() => setIsFullscreen(true)}
              className="pointer-events-auto p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all border shadow-sm cursor-pointer"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              aria-label="View Fullscreen"
              title="Expand view"
            >
              <Maximize2 size={14} />
            </button>
          </div>

          {/* Sliding Track */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              {!isImageFailed ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentImage.src}
                  alt={currentImage.alt || `${projectTitle} screenshot ${currentIndex + 1}`}
                  onError={() => handleImageError(currentIndex)}
                  className="w-full h-full object-cover object-top block"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  loading="lazy"
                />
              ) : (
                /* Fallback stylized preview card if local path is not yet created */
                <div
                  className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
                  style={{
                    background: "var(--surface)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                    style={{
                      background: "rgba(34, 211, 238, 0.12)",
                      border: "1px solid rgba(34, 211, 238, 0.3)",
                      color: "var(--accent)",
                    }}
                  >
                    <ImageIcon size={26} />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider mb-1 px-2.5 py-0.5 rounded-full"
                    style={{
                      color: "var(--accent)",
                      background: "rgba(34, 211, 238, 0.08)",
                      border: "1px solid rgba(34, 211, 238, 0.2)",
                    }}
                  >
                    {projectTitle} • Slide {currentIndex + 1}
                  </span>
                  <h4
                    className="text-base md:text-lg font-bold mb-2 max-w-md"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {currentImage.title || currentImage.alt}
                  </h4>
                  <p
                    className="text-xs md:text-sm max-w-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {currentImage.caption}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer border shadow-md"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => paginate(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer border shadow-md"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Caption & Navigation Controls Bar Below Image */}
        <div
          className="p-3.5 sm:p-4 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {/* Caption info */}
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>
                {currentImage.title || `Preview ${currentIndex + 1}`}
              </span>
            </div>
            <p className="text-xs sm:text-sm line-clamp-1" style={{ color: "var(--text-secondary)" }}>
              {currentImage.caption}
            </p>
          </div>

          {/* Dot indicators (8 dots) */}
          <div className="flex items-center gap-1.5 self-center sm:self-auto flex-shrink-0">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${img.title || img.alt}`}
                className="h-2 rounded-full transition-all cursor-pointer"
                style={{
                  width: currentIndex === idx ? "22px" : "7px",
                  backgroundColor:
                    currentIndex === idx ? "var(--accent)" : "var(--border)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <div className="absolute top-4 right-4 flex items-center gap-3 z-50">
              <span className="text-sm text-slate-300 font-mono">
                {currentIndex + 1} / {total}
              </span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-white hover:text-cyan-400 cursor-pointer"
                aria-label="Close fullscreen"
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {!isImageFailed ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg border border-slate-700"
                />
              ) : (
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl text-center max-w-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{currentImage.title}</h3>
                  <p className="text-slate-300 text-sm">{currentImage.caption}</p>
                </div>
              )}

              {/* Fullscreen Arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-cyan-400 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-cyan-400 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div
              className="mt-4 text-center max-w-xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm text-slate-200">{currentImage.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
