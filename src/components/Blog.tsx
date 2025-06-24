import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Building Responsive Components with Tailwind CSS",
      description: "Learn how to create flexible, mobile-first components using Tailwind's utility classes and responsive modifiers.",
      tags: ["CSS", "Tailwind", "Responsive Design"],
      date: "2024-01-15",
      readTime: "5 min read",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "React Hooks: Beyond useState and useEffect",
      description: "Exploring custom hooks and advanced React patterns to write cleaner, more maintainable code.",
      tags: ["React", "JavaScript", "Hooks"],
      date: "2024-01-08",
      readTime: "8 min read",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Debugging JavaScript: Tools and Techniques",
      description: "A comprehensive guide to debugging JavaScript applications using browser dev tools and advanced techniques.",
      tags: ["JavaScript", "Debugging", "Development"],
      date: "2024-01-01",
      readTime: "6 min read",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-4 h-4 bg-gradient-to-r from-purple-300/40 to-pink-300/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/5 w-6 h-6 border border-purple-200/40 rounded-lg rotate-12 animate-pulse delay-1500"></div>
        <div className="absolute top-2/3 left-2/3 w-8 h-8 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-6 md:px-12 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Learning <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journal</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts from my development journey
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white/80 backdrop-blur-xl rounded-3xl"></div>
              
              {/* Content Container */}
              <div className="relative z-10 p-8">
                {/* Header with Date and Read Time */}
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 bg-gradient-to-r ${post.gradient} bg-opacity-10 text-slate-700 rounded-full text-sm border border-purple-200/30 hover:border-purple-300/50 transition-all duration-300 transform hover:scale-105`}
                      style={{
                        animationDelay: `${tagIndex * 150}ms`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 group/btn transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-12 h-12 bg-gradient-to-r ${post.gradient} opacity-10 rounded-full`}></div>
                </div>
                
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`w-6 h-6 bg-gradient-to-r ${post.gradient} opacity-20 rounded-full animate-pulse`}></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-slate-500 text-sm">
              Discover more insights and tutorials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;