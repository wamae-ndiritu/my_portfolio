import projectsData from "../../projects.json";
import "./ProjectsSection.css";

const ProjectSection = () => {
  return (
    <div className='project-section container' id='projects'>
      <div className='title my-3'>
        <h3 className='h3'>Projects</h3>
        <div className='hr'></div>
      </div>
      <div className='row'>
        {projectsData.map((project) => (
          <div key={project.id} className='col-lg-4 col-md-6 padding-medium'>
            <div className='project-item shadow-sm rounded p-2'>
              <a href={project.url} target='_blank' rel='noopener noreferrer'>
                <img
                  src={project.image}
                  className='img-fluid'
                  alt={project.title}
                />
              </a>
              <div className='project-info rounded'>
                <h3>{project.title}</h3>
                <p>Technologies Used: {project.technologies.join(", ")}</p>
                <a
                  href={project.url}
                  className='btn btn-view'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
