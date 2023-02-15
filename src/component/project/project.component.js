import React, { useState, useEffect } from "react";
import "./project.styles.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://api.github.com/users/Ola-rotimi/repos"
      );
      const data = await response.json();
      setProjects(data);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getProjectColor = (language) => {
    switch (language) {
      case "JavaScript":
        return "#F7DF1E";
      case "TypeScript":
        return "#007ACC";
      case "HTML":
        return "#E34C26";
      case "CSS":
        return "#1572B6";
      case "Python":
        return "#3776AB";
      case "Java":
        return "#007396";
      case "Ruby":
        return "#CC342D";
      default:
        return "#6B7280";
    }
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <>
          <div className="project-list">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                style={{ backgroundColor: getProjectColor(project.language) }}
              >
                <a href={project.html_url} target="_blank" rel="noreferrer">
                  <h3>{project.name}</h3>
                </a>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({
              length: Math.ceil(projects.length / projectsPerPage),
            }).map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
