import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Code, 
  GraduationCap,
  Database,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import "./ServiceSection.css";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Web Development",
      description: "I create modern, responsive web applications that deliver exceptional user experiences. From simple websites to complex web platforms, I build scalable solutions using cutting-edge technologies.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern UI/UX"],
      technologies: ["React.js", "Next.js", "JavaScript", "HTML5/CSS3"],
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile Development",
      description: "I develop high-performance mobile applications for both iOS and Android platforms. Using cross-platform technologies, I ensure your app reaches maximum audience with native-like performance.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Offline Capabilities"],
      technologies: ["React Native", "JavaScript", "TypeScript", "Expo"],
      gradient: "from-red-500 to-red-700",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 3,
      icon: Code,
      title: "Custom Software Development",
      description: "I design and develop tailored software solutions that address your specific business needs. From automation tools to complex management systems, I build software that drives efficiency.",
      features: ["Custom Solutions", "API Integration", "Database Design", "Cloud Deployment"],
      technologies: ["Python", "Django", "Node.js", "JavaScript"],
      gradient: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: GraduationCap,
      title: "Training & Mentorship",
      description: "I'm passionate about sharing knowledge and helping others grow in tech. I provide comprehensive training in programming, web development, and software engineering best practices.",
      features: ["Hands-on Learning", "Real Projects", "Career Guidance", "Industry Best Practices"],
      technologies: ["JavaScript", "Python", "React", "Full-Stack Development"],
      gradient: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  const techStack = {
    frontend: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
    backend: ["Python", "Django", "Node.js", "Express.js", "REST APIs", "GraphQL"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Linux"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive development services to help bring your ideas to life. 
            From concept to deployment, I'm here to build solutions that drive your success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={serviceVariants}
                className="group"
              >
                <div className={`relative p-8 rounded-2xl ${service.bgColor} border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className={`w-4 h-4 ${service.iconColor} mr-2 flex-shrink-0`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-white text-gray-700 border border-gray-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ChevronRight className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-800">Technology Stack</h3>
            </div>
            <p className="text-gray-600">
              I work with modern technologies to build robust and scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                  {category}
                </h4>
                <div className="space-y-2">
                  {technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and turn them into reality. I'm here to help you build 
            something amazing that drives your business forward.
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
