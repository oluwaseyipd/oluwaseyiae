import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Developer at TechCorp",
      content: "Abiola's attention to detail and problem-solving skills are exceptional. His ability to translate complex requirements into elegant solutions is impressive.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Project Manager at SQI",
      content: "Working with Abiola has been a pleasure. He consistently delivers high-quality code and brings creative solutions to challenging problems.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Thrive Link Community Member",
      content: "Abiola's leadership in building Thrive Link shows his commitment to the tech community. He's always willing to help and share knowledge.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">
            What People Say
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from colleagues, mentors, and community members about their experiences working with me
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                <span className="text-2xl sm:text-3xl text-blue-500 font-serif">"</span>
                {testimonials[currentIndex].content}
                <span className="text-2xl sm:text-3xl text-blue-500 font-serif">"</span>
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4 sm:gap-6">
            {/* Previous Button */}
            <button 
              onClick={prevTestimonial}
              className="group w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 sm:w-10 h-3 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full' 
                      : 'w-3 sm:w-4 h-3 sm:h-4 bg-gray-300 hover:bg-gray-400 rounded-full'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={nextTestimonial}
              className="group w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;