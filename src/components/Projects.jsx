import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    { id: 1, name: "Project 1", image: "/path/to/image1.jpg" },
    { id: 2, name: "Project 2", image: "/path/to/image2.jpg" },
    { id: 3, name: "Project 3", image: "/path/to/image3.jpg" },
    // Add more projects
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3 className="text-xl">{project.name}</h3>
            <Link to={`/projects/${project.id}`} className="btn btn-primary">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
