import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Eye,
  Code,
  Zap,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Acta",
      description:
        "A modern and responsive task management web app built with React and Tailwind CSS, connected to a Django REST API backend.",
      tech: ["React", "Typescript", "Tailwind CSS", "Axios", "Lucide React", "Framer Motion"],
      liveDemo: "https://acta-psi.vercel.app",
      github: "https://github.com/oluwaseyipd/acta-frontend",
      image:
        "https://res.cloudinary.com/ddk9omr4r/image/upload/v1768639376/Screenshot_from_2026-01-14_10-17-52_wuvwxn.png",
      status: "Live",
      caseStudy: {
        problem:
          "The initial version of Acta had only a backend API. There was no intuitive or user-friendly way for users to interact with their tasks visually.",
        solution:
          "Designed and developed a production-ready frontend using React and Tailwind CSS, featuring a clean interface, light and dark modes, reusable components, and smooth animations. The frontend integrates seamlessly with the Django REST API for task creation, updates, and management.",
        challenges:
          "Building a responsive layout that works across devices, maintaining a clean UI with minimal gradients, and ensuring smooth API communication while keeping animations lightweight and interactive.",
        learned:
          "Improved understanding of API integration in React, component-based design with Tailwind CSS, state management for CRUD operations, and applying modern UI/UX principles with accessibility and theme switching.",
      },
    },
    {
      id: 2,
      title: "Thrive Link Community",
      description:
        "Elegant and responsive brand website showcasing natural hair care products.",
      tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "Vercel"],
      liveDemo: "https://thrivelinks.vercel.app",
      github: "https://github.com/oluwaseyipd/thrivelinks",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop",
      status: "Live",
      caseStudy: {
        problem:
          "The brand needed a professional online presence to showcase its hair care products and build customer trust.",
        solution:
          "Developed a modern, mobile-responsive website with product highlights, testimonials, and a compelling brand story using Next.js and Tailwind CSS.",
        challenges:
          "Designing a layout that balanced aesthetics and performance while maintaining brand authenticity.",
        learned:
          "Improved skills in structuring responsive layouts with Tailwind, integrating UI components, and aligning design with brand identity.",
      },
    },
    {
      id: 3,
      title: "LeafMind",
      description:
        "A sleek and interactive book discovery web application powered by the Google Books API. Built with React and Tailwind CSS, LeafMind helps users search, explore, and view detailed information about books with elegant UI animations and category filters.",
      tech: [
        "React",
        "Tailwind CSS",
        "@tanstack/react-query",
        "Lucide React",
        "React Router DOM",
      ],
      liveDemo: "https://leafmind.vercel.app",
      github: "https://github.com/oluwaseyipd/leafmind",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
      status: "Live",
      caseStudy: {
        problem:
          "Many book enthusiasts lack a simple, modern web interface for discovering and organizing books based on categories or topics. Existing platforms often feel cluttered or lack personalization.",
        solution:
          "Developed a fast, responsive React application integrated with the Google Books API to allow users to search books, filter by categories, and view detailed descriptions. Implemented pagination, animated UI states, and an intuitive design that emphasizes readability and exploration.",
        challenges:
          "Implementing efficient pagination using React Query, ensuring seamless API fetching, and handling dynamic book data with varying metadata formats. Another challenge was balancing minimalism with visual appeal in UI design.",
        learned:
          "Deepened understanding of React Query for data fetching and caching, improved pagination and search handling in React, and enhanced skills in creating polished user experiences with Tailwind CSS and clean component structures.",
      },
    },
    {
      id: 4,
      title: "QuillInsight",
      description:
        "An AI-powered note-taking and insight generation platform that helps users capture, organize, and transform their thoughts into actionable knowledge effortlessly.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
        "Vercel",
        "Framer Motion",
      ],
      liveDemo: "https://quillinsight.vercel.app",
      github: "https://github.com/oluwaseyipd/quillinsight",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      status: "In Progress",
      caseStudy: {
        problem:
          "Many individuals and teams struggle to organize scattered notes and ideas, making it hard to extract meaningful insights or track learning progress.",
        solution:
          "Built QuillInsight, an AI-driven note management system that allows users to take notes, summarize content, auto-tag key ideas, and gain intelligent insights using machine learning integration.",
        challenges:
          "Designing a smooth and authentic user experience while integrating AI-assisted features without overwhelming the user interface. Managing real-time synchronization with Supabase also required optimization.",
        learned:
          "Enhanced expertise in full-stack Next.js development, Supabase authentication and database management, and integrating AI features effectively into user-centric workflows.",
      },
    },
  ];

  const getCaseStudyIcon = (section: string) => {
    switch (section) {
      case "problem":
        return <Target className="w-4 h-4" />;
      case "solution":
        return <Zap className="w-4 h-4" />;
      case "challenges":
        return <TrendingUp className="w-4 h-4" />;
      case "learned":
        return <Lightbulb className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-purple-200/30 rounded-lg rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-6 md:px-12 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the innovative solutions I've crafted, from concept to
            deployment
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Main Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-3">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[1px] bg-white/80 backdrop-blur-xl rounded-3xl"></div>

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 z-30">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                        project.status === "Live"
                          ? "bg-emerald-500/20 text-emerald-700 border border-emerald-300/50"
                          : "bg-amber-500/20 text-amber-700 border border-amber-300/50"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden rounded-t-3xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-sky-500 to-tide-light opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-tide-light animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-tide-light animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-tide-light opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-tide-light opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm border border-slate-200/80 hover:border-blue-300/60 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                          style={{
                            animationDelay: `${techIndex * 100}ms`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mb-6">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 transition-all duration-300 transform hover:scale-105">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 transform hover:scale-105"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                    </div>

                    {/* Case Study Toggle */}
                    {project.caseStudy && (
                      <div>
                        <Button
                          onClick={() =>
                            setExpandedProject(
                              expandedProject === project.id
                                ? null
                                : project.id,
                            )
                          }
                          variant="ghost"
                          className="w-full justify-between text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 group/btn"
                        >
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-2" />
                            {expandedProject === project.id
                              ? "Hide"
                              : "View"}{" "}
                            Case Study
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform duration-300 ${expandedProject === project.id ? "rotate-90" : "group-hover/btn:translate-x-1"}`}
                          />
                        </Button>

                        {/* Case Study Content */}
                        {expandedProject === project.id && (
                          <div className="mt-6 p-6 bg-gradient-to-br from-slate-50/80 to-blue-50/60 backdrop-blur-sm rounded-2xl border border-slate-200/60 space-y-6 animate-in slide-in-from-top-4 duration-300">
                            {Object.entries(project.caseStudy).map(
                              ([key, value]) => (
                                <div key={key} className="group/item">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 via-sky-500 to-tide-light bg-opacity-10 border border-blue-200/30">
                                      <div className="text-slate-700">
                                        {getCaseStudyIcon(key)}
                                      </div>
                                    </div>
                                    <h4 className="font-bold text-slate-800 capitalize tracking-wide">
                                      {key === "learned"
                                        ? "What I Learned"
                                        : key}
                                    </h4>
                                  </div>
                                  <p className="text-slate-600 leading-relaxed pl-12 group-hover/item:text-slate-700 transition-colors duration-300">
                                    {value}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-xl rounded-full border border-white/70 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <a
              href="https://github.com/oluwaseyipd?tab=repositories"
              target="_blank"
              className="text-slate-700 font-medium"
            >
              Want to see more projects?
            </a>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:bg-blue-50 p-2 rounded-full group-hover:translate-x-1 transition-transform duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
