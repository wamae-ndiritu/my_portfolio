import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './FeaturedProject.css';

const FeaturedProjects = () => {
  const [salonImageIndex, setSalonImageIndex] = useState(0);
  const [rozzetteImageIndex, setRozzetteImageIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const projects = {
    salon: {
      id: 1,
      title: "Myley Hairstylists - Comprehensive Salon Management System",
      subtitle: "Professional Salon Management Solution",
      description: "A state-of-the-art salon management system designed specifically for Myley Hairstylists. This comprehensive platform streamlines all aspects of salon operations including appointment scheduling, client management, staff management, payroll processing, job queue management, and detailed reporting. The system features an intuitive dashboard that provides real-time insights into business performance, revenue tracking, and operational efficiency.",
      url: "https://app.myleyhairstylists.co.ke/dashboard",
      images: [
        "/media/myley/main-dashboard.jpeg",
        "/media/myley/job-items.png",
        "/media/myley/job-que.png",
        "/media/myley/payroll-deductions.png",
        "/media/myley/payroll-detail.png",
        "/media/myley/reportings.png",
        "/media/myley/staff-earning.png"
      ],
      technologies: ["React JS", "Django", "PostgreSQL", "Tailwind CSS", "Chart.js"],
      features: [
        "Real-time Dashboard Analytics",
        "Appointment Scheduling System", 
        "Staff & Client Management",
        "Payroll Processing",
        "Job Queue Management",
        "Comprehensive Reporting",
        "Revenue Tracking",
        "User Role Management"
      ],
      badgeColor: "linear-gradient(135deg, #ff0000, #dc3545)",
      badgeIcon: "💄"
    },
    rozzette: {
      id: 2,
      title: "Rozzette - Modern E-commerce Platform",
      subtitle: "Full-Featured Online Store Solution",
      description: "A modern, full-featured e-commerce platform built with cutting-edge technologies. Includes comprehensive admin dashboard, real-time order tracking, secure payment processing, inventory management, and responsive design optimized for all devices. The platform supports multiple payment methods and provides detailed analytics for business insights.",
      url: "https://rozzette.co.ke",
      images: [
        "/media/rozzette/admin-dashboard.png",
        "/media/rozzette/home.png",
        "/media/rozzette/products.png",
        "/media/rozzette/product-details.png",
        "/media/rozzette/orders.png",
        "/media/rozzette/order-details.png",
        "/media/rozzette/categories.png",
        "/media/rozzette/admin-login.png",
        "/media/rozzette/login.png",
        "/media/rozzette/order-tracking.png",
        "/media/rozzette/admin-order-details.png",
        "/media/rozzette/user-orders.png"
      ],
      technologies: ["Next.js", "MySQL", "TailwindCSS", "Shadcn UI", "Stripe API"],
      features: [
        "Product Catalog Management",
        "Order Processing System",
        "Payment Gateway Integration",
        "Admin Dashboard",
        "User Authentication",
        "Order Tracking",
        "Inventory Management",
        "Sales Analytics"
      ],
      badgeColor: "linear-gradient(135deg, #007bff, #0056b3)", 
      badgeIcon: "🛒"
    }
  };

  const nextImage = (project) => {
    if (project === 'salon') {
      setSalonImageIndex((prev) => 
        prev === projects.salon.images.length - 1 ? 0 : prev + 1
      );
    } else {
      setRozzetteImageIndex((prev) => 
        prev === projects.rozzette.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (project) => {
    if (project === 'salon') {
      setSalonImageIndex((prev) => 
        prev === 0 ? projects.salon.images.length - 1 : prev - 1
      );
    } else {
      setRozzetteImageIndex((prev) => 
        prev === 0 ? projects.rozzette.images.length - 1 : prev - 1
      );
    }
  };

  const setImageIndex = (project, index) => {
    if (project === 'salon') {
      setSalonImageIndex(index);
    } else {
      setRozzetteImageIndex(index);
    }
  };

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  const ProjectCard = ({ project, imageIndex, projectKey }) => (
    <section className="featured-project-section" style={{marginBottom: '40px'}}>
      <div className="container">
        <motion.div
          className="featured-project-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-badge" style={{ background: project.badgeColor }}>
            <span className="badge-icon">{project.badgeIcon}</span>
            <span>Featured Project</span>
          </div>
          <h2 className="featured-title">{project.title}</h2>
          <p className="featured-subtitle">{project.subtitle}</p>
        </motion.div>

        <div className="featured-project-content">
          <motion.div
            className="featured-project-showcase"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-carousel">
              <div className="carousel-container">
                <img
                  src={project.images[imageIndex]}
                  alt={`${project.title} Screenshot ${imageIndex + 1}`}
                  className="carousel-image"
                  onClick={() => openModal(projectKey)}
                />
                <div className="carousel-controls">
                  <button className="carousel-btn prev-btn" onClick={() => prevImage(projectKey)}>
                    ‹
                  </button>
                  <button className="carousel-btn next-btn" onClick={() => nextImage(projectKey)}>
                    ›
                  </button>
                </div>
                <div className="image-indicators">
                  {project.images.map((_, index) => (
                    <div
                      key={index}
                      className={`indicator ${index === imageIndex ? 'active' : ''}`}
                      onClick={() => setImageIndex(projectKey, index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="featured-project-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="project-description">
              <h3>About This Project</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <div className="features-grid">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <span className="feature-icon">✓</span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="project-technologies">
              <h3>Technologies Used</h3>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>View Live Demo</span>
                <span className="btn-icon">→</span>
              </a>
              <button className="btn btn-secondary" onClick={() => openModal(projectKey)}>
                <span>View Gallery</span>
                <span className="btn-icon">🖼️</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <div id="featured-projects">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Featured <span className="text-blue-600">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Showcase of my comprehensive full-stack applications that demonstrate 
          expertise in modern web technologies and real-world problem solving.
        </p>
      </motion.div>

      {/* Salon Management System */}
      <ProjectCard 
        project={projects.salon} 
        imageIndex={salonImageIndex} 
        projectKey="salon" 
      />

      {/* Rozzette E-commerce */}
      <ProjectCard 
        project={projects.rozzette} 
        imageIndex={rozzetteImageIndex} 
        projectKey="rozzette" 
      />

      {/* Modal for image gallery */}
      {modalProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <motion.div
            className="modal-content-gallery"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-modal-gallery" onClick={closeModal}>
              ×
            </button>
            <div className="modal-gallery">
              <h3>Project Gallery - {projects[modalProject].title}</h3>
              <div className="gallery-grid">
                {projects[modalProject].images.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      onClick={() => setImageIndex(modalProject, index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProjects;
