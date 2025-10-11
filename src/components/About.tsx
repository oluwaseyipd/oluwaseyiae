import { useState } from "react";
import {
  Code2,
  Users,
  BookOpen,
  Trophy,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import VideoModal from "./VideoModal";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const achievements = [
    { icon: Code2, label: "Projects Completed", value: "10+", color: "blue" },
    { icon: Users, label: "Clients Served", value: "3+", color: "indigo" },
    { icon: Trophy, label: "Years Experience", value: "2+", color: "purple" },
    { icon: BookOpen, label: "Technologies", value: "10+", color: "teal" },
  ];

  const colorClasses = {
    blue: {
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
      text: "text-blue-600",
    },
    indigo: {
      gradient: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      text: "text-indigo-600",
    },
    purple: {
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600",
      text: "text-purple-600",
    },
    teal: {
      gradient: "bg-gradient-to-r from-teal-500 to-teal-600",
      text: "text-teal-600",
    },
  };

  const currentFocus = [
    {
      title: "Currently Learning",
      subtitle: "Advanced React Patterns",
      description:
        "Diving deep into hooks, context, and performance optimization",
      icon: Code2,
      color: "blue",
    },
    {
      title: "Building",
      subtitle: "Thrive Link Platform",
      description:
        "Connecting tech professionals and fostering community growth",
      icon: Users,
      color: "indigo",
    },
    {
      title: "Reading",
      subtitle: "System Design Primer",
      description: "Understanding scalable architecture and best practices",
      icon: BookOpen,
      color: "purple",
    },
  ];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-6 md:px-12 lg:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate developer with a mission to create meaningful digital
            experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex gap-2 p-1 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm">
              <button
                onClick={() => setActiveTab("story")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 ${
                  activeTab === "story"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                My Story
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 ${
                  activeTab === "vision"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                My Vision
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === "story" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600 font-medium">
                        Based in Ogbomoso, Nigeria
                      </span>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      My journey into tech began with curiosity about how
                      websites work and evolved into a deep passion for creating
                      digital experiences that solve real problems. What started
                      as tinkering with HTML has grown into expertise in modern
                      web technologies.
                    </p>

                    <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 rounded-r-lg p-4">
                      <p className="text-slate-700 italic">
                        "I believe great software combines technical excellence
                        with genuine empathy for users. Every line of code is an
                        opportunity to make someone's day a little better."
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      Current Journey
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      My passion for building extends beyond client projects.
                      I'm actively building{" "}
                      <a
                        href="https://x.com/Thrive_Links"
                        target="_blank"
                        className="font-semibold text-blue-600"
                      >
                        Thrive Link
                      </a>
                      , a platform that connects tech enthusiasts for
                      collaboration and learning. This project has been a
                      valuable opportunity to apply my skills in real-world
                      problem-solving, showcasing my technical leadership and my
                      commitment to community and continuous learning.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Tech Philosophy
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      I choose React.js for its component-based architecture
                      that enables scalable, maintainable applications. Combined
                      with TypeScript for type safety and Tailwind CSS for
                      rapid, consistent styling, this stack allows me to focus
                      on what matters most: user experience and clean, readable
                      code.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          Code Quality
                        </h4>
                        <p className="text-sm text-blue-700">
                          Clean, maintainable, and well-documented code that
                          stands the test of time.
                        </p>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <h4 className="font-semibold text-indigo-900 mb-2">
                          User First
                        </h4>
                        <p className="text-sm text-indigo-700">
                          Every decision is made with the end user's experience
                          in mind.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Future Goals
                    </h3>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Master advanced React patterns and contribute to
                          open-source projects
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Scale Thrive Link to connect thousands of tech
                          professionals
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Mentor junior developers and give back to the tech
                          community
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">
                  Let's Build Something Amazing
                </h3>
                <p className="text-blue-100 mb-4">
                  Ready to bring your ideas to life? I'm always excited to work
                  on projects that make a difference.
                </p>
                <button
                  onClick={scrollToProjects}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center gap-2 group"
                >
                  View My Work
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Video Elevator Pitch */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 5v10l7-5z" />
                </svg>
                Meet me in 30 seconds
              </h3>

              <div
                className="relative group cursor-pointer"
                onClick={openModal}
              >
                <div className="aspect-video rounded-xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    poster="https://res.cloudinary.com/ddk9omr4r/video/upload/v1758730316/samples/dance-2.jpg"
                  >
                    <source
                      src="https://res.cloudinary.com/ddk9omr4r/video/upload/v1758730316/samples/dance-2.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6 transition-opacity duration-300 opacity-100 group-hover:opacity-100">
                  <div className="w-16 h-16 bg-white bg-opacity-25 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 5v10l7-5z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg">
                    30-Second Introduction
                  </h4>
                  <p className="text-sm">Get to know me beyond the resume.</p>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 ${colorClasses[achievement.color].gradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`text-2xl font-bold ${colorClasses[achievement.color].text} mb-1`}
                  >
                    {achievement.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc="https://res.cloudinary.com/ddk9omr4r/video/upload/v1758730316/samples/dance-2.mp4"
      />

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default About;
