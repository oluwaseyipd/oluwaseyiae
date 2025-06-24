
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Thrive Link Platform",
      description: "A community platform connecting tech enthusiasts and professionals",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Task Management Tool",
      description: "Collaborative task management with drag-and-drop functionality",
      tech: ["React", "DnD Kit", "Tailwind CSS", "Local Storage"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mb-4">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Live Demo
                    </Button>
                    <Button size="sm" className="border-blue-600 text-blue-600 bg-white hover:text-white hover:bg-gray-700">
                      GitHub
                    </Button>
                  </div>

                  {project.caseStudy && (
                    <div>
                      <Button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        variant="ghost"
                        size="sm"
                        className="text-purple-400 hover:bg-purple-700 hover:text-white"
                      >
                        {expandedProject === project.id ? 'Hide' : 'View'} Case Study
                      </Button>

                      {expandedProject === project.id && (
                        <div className="mt-4 p-4 bg-gray-700/50 rounded-lg border border-gray-600 space-y-3">
                          <div>
                            <h4 className="font-semibold text-blue-400">Problem</h4>
                            <p className="text-sm text-gray-300">{project.caseStudy.problem}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-purple-400">Solution</h4>
                            <p className="text-sm text-gray-300">{project.caseStudy.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-pink-400">Challenges</h4>
                            <p className="text-sm text-gray-300">{project.caseStudy.challenges}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-400">What I Learned</h4>
                            <p className="text-sm text-gray-300">{project.caseStudy.learned}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
