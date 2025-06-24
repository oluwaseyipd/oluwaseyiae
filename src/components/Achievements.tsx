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
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">          
           Achievements & Highlights
        </h2>

        <div className="relative">
          {/* Timeline Line - Only visible on larger screens */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-0.5 lg:w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-30"></div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {achievements.map((achievement, index) => (
              <div key={achievement.id} className={`relative flex ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-4 sm:left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-full border-2 lg:border-4 border-blue-500 z-10 shadow-lg mt-2"></div>

                {/* Content Container */}
                <div className={`w-full lg:w-5/12 pl-12 sm:pl-16 lg:pl-0 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md">
                    
                    {/* Mobile/Tablet Layout - Stacked */}
                    <div className="block lg:hidden">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl sm:text-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-2 sm:p-3 rounded-full border border-blue-200 flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 min-w-0">
                          <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-medium shadow-sm whitespace-nowrap">
                            {achievement.type}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500 font-medium">
                            {achievement.date}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Desktop Layout - Side by side */}
                    <div className="hidden lg:flex items-start gap-4">
                      <div className="text-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-full border border-blue-200 flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs font-medium shadow-sm">
                            {achievement.type}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">
                            {achievement.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side - Desktop only */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default Achievements;