import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

type Errors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  submit?: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors: Errors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    } else if (formData.email.length > 100) {
      newErrors.email = "Email must be less than 100 characters";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters long";
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = "Subject must be less than 100 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "🎉 Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;

    // Validate individual field on blur
    const fieldErrors: Errors = {};

    if (name === "name") {
      if (!formData.name.trim()) {
        fieldErrors.name = "Name is required";
      } else if (formData.name.trim().length < 2) {
        fieldErrors.name = "Name must be at least 2 characters long";
      }
    }

    if (name === "email") {
      if (!formData.email.trim()) {
        fieldErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email.trim())) {
        fieldErrors.email = "Please enter a valid email address";
      }
    }

    if (name === "subject") {
      if (!formData.subject.trim()) {
        fieldErrors.subject = "Subject is required";
      } else if (formData.subject.trim().length < 5) {
        fieldErrors.subject = "Subject must be at least 5 characters long";
      }
    }

    if (name === "message") {
      if (!formData.message.trim()) {
        fieldErrors.message = "Message is required";
      } else if (formData.message.trim().length < 10) {
        fieldErrors.message = "Message must be at least 10 characters long";
      }
    }

    setErrors((prev) => ({
      ...prev,
      ...fieldErrors,
    }));
  };

  let currentYear = new Date().getFullYear();
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Contact Section */}
        <div className="max-w-7xl mx-auto sm:px-6 md:px-12 lg:px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Let's Work{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Currently open to Frontend Developer roles — Let's build something
              amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Global form error */}
                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-700 text-sm">{errors.submit}</p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-slate-700 font-medium mb-2"
                  >
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`bg-white/70 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl ${
                      errors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : ""
                    }`}
                    placeholder="John Doe"
                    maxLength={50}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-600 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-slate-700 font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`bg-white/70 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : ""
                    }`}
                    placeholder="john@example.com"
                    maxLength={100}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-600 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-slate-700 font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`bg-white/70 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl ${
                      errors.subject
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : ""
                    }`}
                    placeholder="Job Opportunity"
                    maxLength={100}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-600 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-700 font-medium mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`bg-white/70 border-slate-200 text-slate-800 focus:border-blue-400 focus:ring-blue-400/20 min-h-[120px] rounded-xl resize-none ${
                      errors.message
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                        : ""
                    }`}
                    placeholder="Let's discuss your project or opportunity..."
                    maxLength={1000}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p id="message-error" className="text-red-600 text-sm">
                        {errors.message}
                      </p>
                    ) : (
                      <div></div>
                    )}
                    <p className="text-slate-400 text-sm">
                      {formData.message.length}/1000
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  Get In Touch
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate
                  on interesting projects, or simply chat about technology and
                  web development.
                </p>
              </div>

              {/* Contact Links */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="mailto:oluwaseyiae@gmail.com"
                  className="flex items-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600 text-sm">
                      oluwaseyiae@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/oluwaseyiae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">LinkedIn</h4>
                    <p className="text-slate-600 text-sm">Connect with me</p>
                  </div>
                </a>

                <a
                  href="https://github.com/oluwaseyipd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">GitHub</h4>
                    <p className="text-slate-600 text-sm">View my projects</p>
                  </div>
                </a>

                <a
                  href="https://x.com/oluwaseyipd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 1200 1227"
                      fill="currentColor"
                    >
                      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      X (Twitter)
                    </h4>
                    <p className="text-slate-600 text-sm">Follow my journey</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200/50 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-600">
                <p className="text-sm">
                  © {currentYear} Abiola John. All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="#about"
                  className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
