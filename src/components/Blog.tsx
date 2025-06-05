
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Building Responsive Components with Tailwind CSS",
      description: "Learn how to create flexible, mobile-first components using Tailwind's utility classes and responsive modifiers.",
      tags: ["CSS", "Tailwind", "Responsive Design"],
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "React Hooks: Beyond useState and useEffect",
      description: "Exploring custom hooks and advanced React patterns to write cleaner, more maintainable code.",
      tags: ["React", "JavaScript", "Hooks"],
      date: "2024-01-08",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Debugging JavaScript: Tools and Techniques",
      description: "A comprehensive guide to debugging JavaScript applications using browser dev tools and advanced techniques.",
      tags: ["JavaScript", "Debugging", "Development"],
      date: "2024-01-01",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Learning Journal
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 hover:border-blue-400 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">{post.title}</h3>
                <p className="text-gray-300 leading-relaxed">{post.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-sm border border-purple-600/30">
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-0">
                Read More →
              </Button>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
