import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import axios from 'axios';
import './Projects.css';

const Projects = ({ profile }) => {
  const [githubProjects, setGithubProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Fetch GitHub projects
    axios.get('/api/projects/github')
      .then(response => {
        setGithubProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching GitHub projects:', error);
        setLoading(false);
      });
  }, []);

  const allProjects = [
    ...(profile?.projects || []),
    ...githubProjects.map(proj => ({
      ...proj,
      isGithubProject: true
    }))
  ].slice(0, 10);

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return allProjects;
    return allProjects.filter(project => 
      project.technologies?.some(tech => 
        tech.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  };

  const allTechnologies = [...new Set(
    allProjects.flatMap(proj => proj.technologies || [])
  )];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Projects</h2>
        
        {allTechnologies.length > 0 && (
          <div className="project-filters" data-aos="fade-up">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            {['react', 'node', 'python', 'javascript'].map(tech => (
              allTechnologies.some(t => t.toLowerCase().includes(tech)) && (
                <button
                  key={tech}
                  className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tech)}
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </button>
              )
            ))}
          </div>
        )}

        {loading ? (
          <div className="loading-projects">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="projects-grid">
            {getFilteredProjects().map((project, index) => (
              <div
                key={project.id || index}
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="project-image">
                  <img 
                    src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop';
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">
                    {project.description || 'A well-designed project showcasing modern web development practices.'}
                  </p>
                  <div className="project-tech">
                    {project.technologies?.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.isGithubProject && (
                    <div className="project-stats">
                      {project.stars !== undefined && (
                        <span className="stat">
                          <FaStar /> {project.stars}
                        </span>
                      )}
                      {project.forks !== undefined && (
                        <span className="stat">
                          <FaCodeBranch /> {project.forks}
                        </span>
                      )}
                      {project.language && (
                        <span className="stat language">{project.language}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;



