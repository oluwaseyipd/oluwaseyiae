import { Code, Database, GitBranch, Globe, icons, Palette, Smartphone, Terminal, Zap } from "lucide-react";
import { FaHtml5, FaCss3, FaGithub, FaGitAlt, FaBootstrap, FaReact, FaSass, FaCode, FaJs  } from "react-icons/fa6";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", icon: FaHtml5 , category: "Frontend", color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3, category: "Frontend", color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, category: "Frontend", color: "text-yellow-500" },
    { name: "React.js", icon: FaReact, category: "Frontend", color: "text-cyan-500" },
    { name: "Tailwind CSS", icon: FaCode, category: "Frontend", color: "text-teal-500" },
    { name: "Bootstrap", icon: FaBootstrap, category: "Frontend", color: "text-purple-500" },
    { name: "Sass/SCSS", icon: FaSass, category: "Frontend", color: "text-pink-500" },
    { name: "Git", icon: FaGitAlt, category: "Tools", color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, category: "Tools", color: "text-gray-700" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "🧠" },
    { name: "Team Collaboration", icon: "🤝" }, 
    { name: "Communication", icon: "💬" },
    { name: "Time Management", icon: "⏰" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Leadership", icon: "👑" }
  ];

  const categories = [...new Set(technicalSkills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-cyan-50">
      <div className="max-w-6xl mx-auto sm:px-6 md:px-12 lg:px-6 ">
<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">          Skills & Expertise
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">Technical Skills</h3>
              <p className="text-sm sm:text-base text-gray-600">Technologies I work with</p>
            </div>

            {/* Skills by Category */}
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-md">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    {category}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {technicalSkills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className="group flex flex-col items-center gap-2 bg-gradient-to-br from-white to-gray-50 p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <skill.icon className={`text-2xl sm:text-3xl ${skill.color} group-hover:scale-110 transition-transform`} />
                          <span className="text-xs sm:text-sm text-gray-700 font-medium text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">Soft Skills</h3>
              <p className="text-sm sm:text-base text-gray-600">Personal strengths & abilities</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="group flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 sm:p-4 rounded-xl border border-purple-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 font-medium flex-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Badges */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-md">
              <h4 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">Experience Level</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-sm">
                  <span className="text-xs sm:text-sm font-medium">1+ Years Frontend</span>
                </div>
                <div className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-sm">
                  <span className="text-xs sm:text-sm font-medium">React Specialist</span>
                </div>
                <div className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-sm">
                  <span className="text-xs sm:text-sm font-medium">UI/UX Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default Skills;