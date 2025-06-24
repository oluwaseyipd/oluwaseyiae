import { Button } from "@/components/ui/button";

const Resume = () => {
  const downloadResume = () => {
    // This would normally trigger a PDF download
    console.log("Downloading resume...");
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto sm:px-6 md:px-12 lg:px-6">
        <div className="text-center mb-16">
 <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">            My Resume
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my skills, experience, and journey in frontend development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                What You'll Find
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                My resume showcases my technical expertise, professional experience, and the projects 
                that have shaped my development journey. It's designed to give you a complete picture 
                of what I bring to the table.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Technical Skills</h4>
                    <p className="text-slate-600">React.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Node.js, and modern development tools</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Professional Experience</h4>
                    <p className="text-slate-600">1+ years of frontend development experience with hands-on project leadership and team collaboration</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Featured Projects</h4>
                    <p className="text-slate-600">Detailed breakdown of major projects including Thrive Link Platform, E-Commerce Dashboard, and more</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={downloadResume}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </Button>
              <p className="text-slate-500 text-sm mt-3">Updated • 2024 • PDF Format</p>
            </div>
          </div>

          {/* Resume Preview Side */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-[8.5/11] bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-100 shadow-inner overflow-hidden">
                {/* Resume Preview Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6">
                  <h4 className="font-bold text-xl mb-1">Abiola John Oluwaseyi</h4>
                  <p className="text-blue-100 text-sm">Frontend Developer</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-blue-100">
                    <span>📧 oluwaseyiae@gmail.com</span>
                    <span>🌐 Portfolio</span>
                  </div>
                </div>

                {/* Resume Preview Content */}
                <div className="p-6 space-y-6 text-sm">
                  <div>
                    <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      Technical Skills
                    </h5>
                    <div className="space-y-2 text-slate-600">
                      <p><span className="font-medium">Frontend:</span> React.js, JavaScript, HTML5, CSS3</p>
                      <p><span className="font-medium">Styling:</span> Tailwind CSS, Styled Components</p>
                      <p><span className="font-medium">Tools:</span> Git, Node.js, Webpack</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                      Experience
                    </h5>
                    <div className="space-y-2 text-slate-600">
                      <p className="font-medium text-slate-800">Frontend Developer Intern</p>
                      <p className="text-xs text-slate-500">SQI College of ICT • 2024</p>
                      <p className="text-xs">Developed responsive web applications using React.js</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      Featured Projects
                    </h5>
                    <div className="space-y-3 text-slate-600">
                      <div>
                        <p className="font-medium text-slate-800 text-xs">Thrive Link Platform</p>
                        <p className="text-xs">Social platform with React.js & modern UI</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 text-xs">E-Commerce Dashboard</p>
                        <p className="text-xs">Admin panel with data visualization</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      Education
                    </h5>
                    <p className="text-xs text-slate-600">Software Development • SQI College of ICT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-slate-800 mb-2">1+</div>
            <div className="text-slate-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-slate-800 mb-2">5+</div>
            <div className="text-slate-600 text-sm">Projects Completed</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-slate-800 mb-2">10+</div>
            <div className="text-slate-600 text-sm">Technologies</div>
          </div>
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-slate-800 mb-2">100%</div>
            <div className="text-slate-600 text-sm">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;