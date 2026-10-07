"use client";

import {
  Info,
  UserCheck,
  CheckCircle2,
  Cpu,
  AlertTriangle,
  Check,
  XCircle,
} from "lucide-react";
import type { Project } from "@/lib/project";

interface ProjectMainContentProps {
  project: Project;
}

export function ProjectMainContent({ project }: ProjectMainContentProps) {
  const { overview, role, keyFeatures, technicalDecisions } = project.details;

  return (
    <div className="w-full flex flex-col gap-8 mt-8">
      {/* 1. OVERVIEW: The problem and who it was for */}
      <section
        id="overview"
        className="p-6 md:p-8 rounded-2xl border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex items-center gap-2.5 mb-5 pb-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(34, 211, 238, 0.12)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              color: "var(--accent)",
            }}
          >
            <Info size={18} />
          </div>
          <div>
            <h2
              className="text-lg md:text-xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Overview
            </h2>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              The problem and who it was built for
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 text-sm md:text-base leading-relaxed">
          {overview.summary && (
            <p style={{ color: "var(--text-primary)" }}>{overview.summary}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            {/* The Problem */}
            <div
              className="p-4 rounded-xl border"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"
                style={{ color: "var(--accent)" }}
              >
                <AlertTriangle size={14} />
                <span>The Problem</span>
              </h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {overview.problem}
              </p>
            </div>

            {/* Who It Was For */}
            <div
              className="p-4 rounded-xl border"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5"
                style={{ color: "var(--accent)" }}
              >
                <UserCheck size={14} />
                <span>Who It Was For</span>
              </h3>
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {overview.audience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MY ROLE: What you built and what you didn't */}
      <section
        id="role"
        className="p-6 md:p-8 rounded-2xl border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex items-center gap-2.5 mb-5 pb-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(34, 211, 238, 0.12)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              color: "var(--accent)",
            }}
          >
            <UserCheck size={18} />
          </div>
          <div>
            <h2
              className="text-lg md:text-xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              My Role
            </h2>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              What I built and architectural boundaries
            </p>
          </div>
        </div>

        {role.summary && (
          <p className="text-sm md:text-base mb-5" style={{ color: "var(--text-primary)" }}>
            {role.summary}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* What I Built */}
          <div
            className="p-4 rounded-xl border"
            style={{
              background: "var(--background)",
              borderColor: "var(--border)",
            }}
          >
            <h3
              className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5"
              style={{ color: "var(--accent)" }}
            >
              <Check size={15} />
              <span>What I Built</span>
            </h3>
            <ul className="flex flex-col gap-2.5">
              {role.built.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Didn't Build */}
          <div
            className="p-4 rounded-xl border"
            style={{
              background: "var(--background)",
              borderColor: "var(--border)",
            }}
          >
            <h3
              className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5"
              style={{ color: "var(--text-secondary)" }}
            >
              <XCircle size={15} />
              <span>What I Didn&apos;t Build (Scope &amp; Limits)</span>
            </h3>
            <ul className="flex flex-col gap-2.5">
              {role.notBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: "var(--border)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES: 4–6 bullets */}
      <section
        id="key-features"
        className="p-6 md:p-8 rounded-2xl border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex items-center gap-2.5 mb-5 pb-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(34, 211, 238, 0.12)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              color: "var(--accent)",
            }}
          >
            <CheckCircle2 size={18} />
          </div>
          <div>
            <h2
              className="text-lg md:text-xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Key Features
            </h2>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Core functionalities and workflows
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {keyFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border flex flex-col justify-between"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="text-xs font-mono font-bold px-1.5 py-0.5 rounded border"
                    style={{
                      background: "rgba(34, 211, 238, 0.1)",
                      color: "var(--accent)",
                      borderColor: "rgba(34, 211, 238, 0.25)",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <h3
                    className="text-sm font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL DECISIONS: Why Supabase, Why TanStack Query, and similar choices */}
      <section
        id="technical-decisions"
        className="p-6 md:p-8 rounded-2xl border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div
          className="flex items-center gap-2.5 mb-5 pb-3 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(34, 211, 238, 0.12)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              color: "var(--accent)",
            }}
          >
            <Cpu size={18} />
          </div>
          <div>
            <h2
              className="text-lg md:text-xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
              }}
            >
              Technical Decisions
            </h2>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Why specific tools and architectural patterns were chosen
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {technicalDecisions.map((tech, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border flex flex-col md:flex-row md:items-start justify-between gap-3"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <div className="md:w-1/3 flex-shrink-0">
                <span
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-bold mb-1 border"
                  style={{
                    background: "rgba(34, 211, 238, 0.1)",
                    color: "var(--accent)",
                    borderColor: "rgba(34, 211, 238, 0.25)",
                  }}
                >
                  {tech.technology}
                </span>
                <p className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
                  {tech.decision}
                </p>
              </div>

              <div
                className="md:w-2/3 border-t md:border-t-0 md:border-l pt-2 md:pt-0 md:pl-4"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-xs md:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {tech.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
