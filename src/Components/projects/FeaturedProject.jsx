import { useState } from "react";
import { motion } from "framer-motion";
import "./FeaturedProject.css";

const FeaturedProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProject = {
    id: 15,
    title: "Myley Hairstylists - Comprehensive Salon Management System",
    description: "A state-of-the-art salon management system designed specifically for Myley Hairstylists. This comprehensive platform streamlines all aspects of salon operations including appointment scheduling, client management, staff management, payroll processing, job queue management, and detailed reporting. The system features an intuitive dashboard that provides real-time insights into business performance, revenue tracking, and operational efficiency. Built with modern web technologies, it offers seamless user experience for both administrators and staff members.",
    url: "https://app.myleyhairstylists.co.ke/dashboard",
    type: "web_app",
    images: [
      "/media/myley/main-dashboard.jpeg",
      "/media/myley/job-items.png",
      "/media/myley/job-que.png",
      "/media/myley/payroll-deductions.png",
      "/media/myley/payroll-detail.png",
      "/media/myley/reportings.png",
      "/media/myley/staff-earning.png"
    ],
    technologies: ["React JS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    features: [
      "Real-time Dashboard Analytics",
      "Appointment Scheduling System",
      "Staff & Client Management",
      "Payroll Processing",
      "Job Queue Management",
      "Comprehensive Reporting",
      "Revenue Tracking",
      "User Role Management"
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === featuredProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? featuredProject.images.length - 1 : prev - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="featured-project-section" id="featured-project">
      <div className="container">
        <motion.div
          className="featured-project-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-badge">
            <span className="badge-icon">⭐</span>
            <span>Featured Project</span>
          </div>
          <h2 className="featured-title">{featuredProject.title}</h2>
          <p className="featured-subtitle">
            Professional Salon Management Solution
          </p>
        </motion.div>

        <div className="featured-project-content">
          <motion.div
            className="featured-project-showcase"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-carousel">
              <div className="carousel-container">
                <img
                  src={featuredProject.images[currentImageIndex]}
                  alt={`${featuredProject.title} Screenshot ${currentImageIndex + 1}`}
                  className="carousel-image"
                  onClick={openModal}
                />
                <div className="carousel-controls">
                  <button className="carousel-btn prev-btn" onClick={prevImage}>
                    ‹
                  </button>
                  <button className="carousel-btn next-btn" onClick={nextImage}>
                    ›
                  </button>
                </div>
                <div className="image-indicators">
                  {featuredProject.images.map((_, index) => (
                    <div
                      key={index}
                      className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="featured-project-details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="project-description">
              <h3>About This Project</h3>
              <p>{featuredProject.description}</p>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <div className="features-grid">
                {featuredProject.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                {featuredProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>View Live Demo</span>
                <span className="btn-icon">→</span>
              </a>
              <button className="btn btn-secondary" onClick={openModal}>
                <span>View Gallery</span>
                <span className="btn-icon">🖼️</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Modal for image gallery */}
        {isModalOpen && (
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
                <h3>Project Gallery</h3>
                <div className="gallery-grid">
                  {featuredProject.images.map((image, index) => (
                    <div key={index} className="gallery-item">
                      <img
                        src={image}
                        alt={`Screenshot ${index + 1}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProject;
