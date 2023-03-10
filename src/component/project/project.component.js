import projects from "./projectData";
import "./project.styles.scss";
import { ImGithub } from "react-icons/im";

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map((project) => {
          const { id, title, description, image, link } = project;
          return (
            <div className="project" key={id}>
              <div className="project-image">
                <img src={image} alt={title} />
              </div>
              <div className="project-info">
                <div className="title">
                  <h3>{title}</h3>
                  <a href={link} target="_blank" rel="noreferrer">
                    <button>
                      <ImGithub />
                    </button>
                  </a>
                </div>
                <div className="description">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
