import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code, Sparkles, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroPicture from "@/img/hero-img.png"; 

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"];
  const skills = ["React", "TypeScript", "Next.js", "Tailwind", "Node.js", "SQL"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-blue-200/40 font-mono text-sm animate-float">{'<div>'}</div>
        <div className="absolute top-1/3 right-1/4 text-indigo-200/40 font-mono text-sm animate-float" style={{animationDelay: '1s'}}>{'</>'}</div>
        <div className="absolute bottom-1/3 left-1/6 text-blue-300/40 font-mono text-sm animate-float" style={{animationDelay: '2s'}}>{'{ }'}</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Sparkles className="w-5 h-5" />
              <span>Available for Hire</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Abiola John
              </span>
            </h1>
            
            <div className="h-16 flex items-center">
              <span className="text-2xl lg:text-3xl text-slate-600 font-medium">
                A{' '}
                <span className="relative inline-block">
                  <span 
                    key={currentRole}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold animate-fade-in"
                  >
                    {roles[currentRole]}
                  </span>
                </span>
              </span>
            </div>
          </div>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            I craft exceptional digital experiences with modern web technologies. 
            Passionate about clean code, intuitive design, and solving complex problems with elegant solutions.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a href="#" className="p-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative lg:justify-self-end">
          <div className="relative w-80 h-80 mx-auto">
            {/* Profile Picture */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                {/* Placeholder for your image - replace src with your actual image */}
                <img 
                  src="/api/placeholder/320/320" 
                  alt="Abiola John Oluwaseyi" 
                  className="w-full h-full object-cover"
                />
                {/* If you don't have an image yet, this will show a professional placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center text-6xl font-bold text-white backdrop-blur-sm">
                 <img src={heroPicture} alt="myPicture" />
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-4 animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-xs text-slate-600 font-medium">Projects</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-4 animate-float" style={{animationDelay: '1s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">1+</div>
                <div className="text-xs text-slate-600 font-medium">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes grow {
          from { width: 0%; }
          to { width: var(--final-width); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-grow {
          animation: grow 1.5s ease-out forwards;
          --final-width: 95%;
        }
        
        .animate-grow:nth-child(2) {
          --final-width: 90%;
        }
        
        .animate-grow:nth-child(3) {
          --final-width: 85%;
        }
      `}</style>
    </section>
  );
};

export default Hero;