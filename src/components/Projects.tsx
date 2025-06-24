import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ExternalLink, Github, ChevronRight, Eye, Code, Zap, Target, Lightbulb, TrendingUp } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Thrive Link Platform",
      description: "A community platform connecting tech enthusiasts and professionals",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      status: "Live",
      caseStudy: {
        problem: "Tech professionals needed a dedicated space to connect and collaborate",
        solution: "Built a full-stack platform with user profiles, messaging, and project collaboration features",
        challenges: "Implementing real-time messaging and scalable user management",
        learned: "Advanced React patterns, state management, and backend architecture"
      }
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard for e-commerce management",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      status: "Live",
      caseStudy: {
        problem: "Small businesses needed an intuitive way to manage their online stores",
        solution: "Created a comprehensive dashboard with analytics, inventory management, and order tracking",
        challenges: "Data visualization and real-time updates",
        learned: "TypeScript integration and advanced data visualization techniques"
      }
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      gradient: "from-orange-500 via-red-500 to-rose-500",
      status: "Live"
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Collaborative task management with drag-and-drop functionality",
      tech: ["React", "DnD Kit", "Tailwind CSS", "Local Storage"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      status: "In Progress"
    }
  ];

  const getCaseStudyIcon = (section: string) => {
    switch (section) {
      case 'problem': return <Target className="w-4 h-4" />;
      case 'solution': return <Zap className="w-4 h-4" />;
      case 'challenges': return <TrendingUp className="w-4 h-4" />;
      case 'learned': return <Lightbulb className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
        <div className="text-center mb-16">
             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
             Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover the innovative solutions I've crafted, from concept to deployment
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
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10">
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-30">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105"
                        style={{
                          animationDelay: `${techIndex * 100}ms`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mb-6">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-gray-600/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>

                  {/* Case Study Toggle */}
                  {project.caseStudy && (
                    <div>
                      <Button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        variant="ghost"
                        className="w-full justify-between text-purple-400 hover:bg-purple-900/20 hover:text-purple-300 transition-all duration-300 group/btn"
                      >
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-2" />
                          {expandedProject === project.id ? 'Hide' : 'View'} Case Study
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${expandedProject === project.id ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
                      </Button>

                      {/* Case Study Content */}
                      {expandedProject === project.id && (
                        <div className="mt-6 p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 space-y-6 animate-in slide-in-from-top-4 duration-300">
                          {Object.entries(project.caseStudy).map(([key, value]) => (
                            <div key={key} className="group/item">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                                  {getCaseStudyIcon(key)}
                                </div>
                                <h4 className="font-bold text-white capitalize tracking-wide">
                                  {key === 'learned' ? 'What I Learned' : key}
                                </h4>
                              </div>
                              <p className="text-gray-300 leading-relaxed pl-12 group-hover/item:text-gray-200 transition-colors duration-300">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} p-[1px] opacity-30`}>
                    <div className="w-full h-full bg-gray-800/50 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
            <span className="text-gray-300">Want to see more projects?</span>
            <Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-900/20 p-2">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;