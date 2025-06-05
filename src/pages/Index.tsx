
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import OpenToWork from "@/components/OpenToWork";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <OpenToWork />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Skills />
      <Achievements />
      <Testimonials />
      <Resume />
      <Contact />
    </div>
  );
};

export default Index;
