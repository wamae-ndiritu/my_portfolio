import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, ShoppingCart, BarChart3, Package, Users, CreditCard, Truck } from 'lucide-react';

const FeaturedRozzette = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const project = {
    id: "rozzette-ecommerce",
    title: "Rozzette E-commerce Platform",
    description: "A modern, full-featured e-commerce platform with advanced product management, order tracking, and analytics dashboard. Built with Next.js for optimal performance and SEO, featuring secure payment integration, inventory management, and comprehensive admin controls.",
    images: [
      "/media/rozzette/home.png",
      "/media/rozzette/admin-dashboard.png",
      "/media/rozzette/products.png",
      "/media/rozzette/product-details.png",
      "/media/rozzette/orders.png",
      "/media/rozzette/order-details.png",
      "/media/rozzette/order-tracking.png",
      "/media/rozzette/categories.png",
      "/media/rozzette/user-orders.png",
      "/media/rozzette/admin-order-details.png"
    ],
    technologies: ["Next.js", "MySQL", "TailwindCSS", "Shadcn/ui", "TypeScript", "Prisma"],
    liveLink: "https://rozzette.co.ke",
    githubLink: "https://github.com/wamae-ndiritu/rozzette-ecommerce",
    features: [
      { icon: ShoppingCart, title: "Modern Shopping Experience", desc: "Intuitive product browsing and seamless checkout" },
      { icon: BarChart3, title: "Advanced Analytics", desc: "Comprehensive sales and performance dashboards" },
      { icon: Package, title: "Inventory Management", desc: "Real-time stock tracking and alerts" },
      { icon: Users, title: "Customer Management", desc: "User profiles, order history, and support" },
      { icon: CreditCard, title: "Secure Payments", desc: "Multiple payment gateways integration" },
      { icon: Truck, title: "Order Tracking", desc: "Real-time delivery status updates" }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured-rozzette');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="featured-rozzette" className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              <ShoppingCart className="w-4 h-4" />
              Featured E-commerce Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Rozzette
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Carousel */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                <div className="aspect-[16/10] relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-orange-500 w-6' : 'bg-white/70 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Technologies */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Built With</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                <div className="grid gap-3">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-medium hover:border-orange-300 hover:text-orange-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRozzette;
