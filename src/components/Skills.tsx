
import { Code, Database, GitBranch, Globe, icons, Palette, Smartphone, Terminal, Zap } from "lucide-react";
import { FaHtml5, FaCss3, FaGithub, FaGitAlt, FaBootstrap, FaReact, FaSass, FaCode, FaJs  } from "react-icons/fa6";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", icon: FaHtml5 , category: "Frontend" },
    { name: "CSS3", icon: FaCss3, category: "Frontend" },
    { name: "JavaScript", icon: FaJs, category: "Frontend" },
    { name: "React.js", icon: FaReact, category: "Frontend" },
    { name: "Tailwind CSS", icon: FaCode, category: "Frontend" },
    { name: "Bootstrap", icon: FaBootstrap, category: "Frontend" },
    { name: "Sass/SCSS", icon: FaSass, category: "Frontend" },
    { name: "Git", icon: FaGitAlt, category: "Tools" },
    { name: "GitHub", icon: FaGithub, category: "Tools" },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration", 
    "Communication",
    "Time Management",
    "Adaptability",
    "Leadership"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8">Technical Skills</h3>

            <div className="mb-8">
              <div className="grid grid-cols-3 gap-4">
                {technicalSkills.map((item, index) => (
                  <div 
                    key={item.name} 
                    className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="text-2xl" />
                    <span className="text-gray-300 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill} 
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Badges */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-gray-300">Experience Level</h4>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full">
                  <span className="text-green-400 font-medium">1+ Years Frontend</span>
                </div>
                <div className="px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full">
                  <span className="text-blue-400 font-medium">React Specialist</span>
                </div>
                <div className="px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-full">
                  <span className="text-purple-400 font-medium">UI/UX Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
