
const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "SQI College of ICT Internship",
      description: "Currently completing Frontend Development internship, working on real-world projects",
      date: "2024 - Present",
      icon: "🎓",
      type: "Education"
    },
    {
      id: 2,
      title: "Founded Thrive Link",
      description: "Created and launched a community platform for tech professionals and enthusiasts",
      date: "2023",
      icon: "🚀",
      type: "Entrepreneurship"
    },
    {
      id: 3,
      title: "20-Day Coding Challenge",
      description: "Completed intensive coding challenge, building 20 projects in 20 days",
      date: "2023",
      icon: "💪",
      type: "Personal Growth"
    },
    {
      id: 4,
      title: "First React Application",
      description: "Built and deployed my first full-stack React application with user authentication",
      date: "2022",
      icon: "⚛️",
      type: "Technical Milestone"
    },
    {
      id: 5,
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects and community initiatives",
      date: "2022 - Present",
      icon: "🌟",
      type: "Community"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Achievements & Highlights
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-400 z-10 hidden md:block"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs border border-blue-600/30">
                            {achievement.type}
                          </span>
                          <span className="text-sm text-gray-400">{achievement.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-blue-400 mb-2">{achievement.title}</h3>
                        <p className="text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
