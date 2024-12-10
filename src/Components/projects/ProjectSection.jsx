import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../../projects.json";
import "./ProjectsSection.css";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className='project-section container' id='projects'>
      <div className='title my-3'>
        <h3 className='h3'>Projects</h3>
        <div className='hr'></div>
      </div>
      <div className='row'>
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className='col-lg-4 col-md-6 padding-medium'
            initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }} // Alternate top/bottom entry
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className='project-item shadow-sm rounded p-2'
              onClick={() => handleCardClick(project)}
            >
              <img
                src={project.images[0]}
                // className='h-[400px] object-cover'
                alt={project.title}
              />
              <div className='project-info rounded'>
                <h3>{project.title}</h3>
                <p>{project.technologies.join(", ")}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className='modal-overlay' onClick={closeModal}>
          <motion.div
            className='modal-content'
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className='close-modal bg-white absolute top-[5px] right-[5px] h-6 w-6 border border-gray-300 rounded-lg' onClick={closeModal}>
              &times;
            </button>
            <div className='modal-header'>
              <h3>{selectedProject.title}</h3>
              <p className="bg-blue-100 text-blue-500 p-2 rounded"> {selectedProject.type === "website" ? "Website" : selectedProject.type === "web_app" ? "Web App" : "Mobile App"}</p>
            </div>
            <div className='modal-body'>
              <div className='modal-images'>
                {selectedProject.images?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Slide ${idx}`}
                    className='img-fluid'
                  />
                ))}
              </div>
              <p className='text-gray-600 text-sm p-2'>
                {selectedProject.description}
              </p>
              <p className="text-gray-600 text-xs">Technologies: {selectedProject.technologies?.join(", ")}</p>
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  className='btn btn-demo text-white'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Demo
                </a>
              )}
              {selectedProject.sourceCode && (
                <a
                  href={selectedProject.sourceCode}
                  className='btn btn-source'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Source Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
