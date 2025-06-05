
import { Button } from "@/components/ui/button";

const Resume = () => {
  const downloadResume = () => {
    // This would normally trigger a PDF download
    console.log("Downloading resume...");
  };

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Resume
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Download My Resume</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Get a comprehensive overview of my skills, experience, and projects. 
              My resume includes detailed information about my technical expertise, 
              education, and professional journey in frontend development.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">1+ years of frontend development experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Proficient in React.js, JavaScript, and modern CSS</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-gray-300">Experience in project leadership and team collaboration</span>
              </div>
            </div>

            <Button 
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume (PDF)
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[8.5/11] bg-gray-50 rounded border border-gray-200 flex flex-col">
                {/* Resume Preview Header */}
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-bold text-gray-800 text-lg">Abiola John Oluwaseyi</h4>
                  <p className="text-gray-600 text-sm">Frontend Developer</p>
                </div>

                {/* Resume Preview Content */}
                <div className="p-4 space-y-3 text-xs text-gray-600">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Contact</h5>
                    <p>abiolajohn@email.com</p>
                    <p>GitHub | LinkedIn | Portfolio</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Skills</h5>
                    <p>React.js • JavaScript • HTML5 • CSS3</p>
                    <p>Tailwind CSS • Git • Node.js</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Experience</h5>
                    <p className="font-medium">Frontend Developer Intern</p>
                    <p>SQI College of ICT • 2024</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Projects</h5>
                    <p className="font-medium">Thrive Link Platform</p>
                    <p>E-Commerce Dashboard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
