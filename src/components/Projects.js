import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project">
          <h3>Project 1</h3>
          <p>A description of the first project. Include tools used and the outcome achieved.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>A description of the second project. Include tools used and the outcome achieved.</p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>A description of the third project. Include tools used and the outcome achieved.</p>
          <a href="#">View Project</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
