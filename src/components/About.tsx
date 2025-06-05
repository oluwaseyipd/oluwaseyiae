
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey into tech began with curiosity and has evolved into a passion for creating digital experiences that matter. 
              As a Frontend Developer, I specialize in building responsive, accessible, and visually stunning web applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently completing my internship at <span className="text-blue-400 font-semibold">SQI College of ICT</span>, 
              I've also founded <span className="text-purple-400 font-semibold">Thrive Link</span>, a platform connecting like-minded 
              individuals in the tech space. I believe in the power of community and continuous learning.
            </p>

            <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Why I Chose My Stack</h3>
              <p className="text-gray-300">
                React.js gives me the component-based architecture I need for scalable applications, while Tailwind CSS 
                enables rapid, consistent styling. This combination allows me to focus on user experience and clean code.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors">
                <p className="text-sm text-gray-400">Currently Learning</p>
                <p className="font-semibold text-blue-400">React.js</p>
              </div>
              <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-purple-400 transition-colors">
                <p className="text-sm text-gray-400">Building</p>
                <p className="font-semibold text-purple-400">Thrive Link</p>
              </div>
              <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-pink-400 transition-colors">
                <p className="text-sm text-gray-400">Reading</p>
                <p className="font-semibold text-pink-400">Clean Code</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gray-700 rounded-lg border-2 border-gray-600 flex items-center justify-center hover:border-blue-400 transition-colors">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l7-5z"/>
                  </svg>
                </div>
                <p className="text-gray-300">Video: My Developer Journey</p>
                <p className="text-sm text-gray-500 mt-2">30-second elevator pitch</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
