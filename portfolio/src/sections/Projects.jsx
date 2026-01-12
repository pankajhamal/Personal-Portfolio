import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  // Array for storing project data
  const projectData = [
    {
      id: 1,
      cardTitle: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with user authentication, shopping cart, and payment integration using React and Node.js",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      githubLink: "https://github.com",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      cardTitle: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      githubLink: "https://github.com",
      tags: ["React", "Firebase", "Tailwind"],
    },
    {
      id: 3,
      cardTitle: "Weather Dashboard",
      description:
        "Real-time weather tracking application with interactive maps, forecasts, and location-based alerts using weather APIs",
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      githubLink: "https://github.com",
      tags: ["React", "API", "Charts"],
    },
  ];

  return (
    <div className="w-4xl py-16">
      <div className="">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-">
            These are some of the projects I've built over time, showcasing my skills in web development and design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.cardTitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* GitHub Link Button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110 transform"
                >
                  <Github className="w-5 h-5 text-gray-800" />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.cardTitle}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;