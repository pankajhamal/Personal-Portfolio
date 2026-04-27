import React from "react";
import { Github } from "lucide-react";
import { Element } from "react-scroll";

const projects = [
  {
    title: "Note API",
    description:
      "RESTful API with CRUD operations and JWT authentication. Designed relational schema using PostgreSQL and tested with Postman.",
    tech: ["Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/pankajhamal/Notes-API",
  },
  {
    title: "Movie Watchlist",
    description:
      "Backend service to manage watchlist with add/remove functionality and persistent storage using PostgreSQL.",
    tech: ["Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/pankajhamal/Movie-Watchlist",
  },
  {
    title: "Airbnb Clone",
    description:
      "Full-stack rental platform with authentication, protected routes, and responsive UI built with React.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/pankajhamal/Airbnb-Clone",
  },
  {
    title: "Expense-Tracker",
    description:
      "Frontend project to track the daily expenses which helps to track income and expenses monthly",
    tech: ["Reactjs", "Tailwind Css"],
    github: "https://github.com/pankajhamal/Expense-Tracker",
  },
];

const Projects = () => {
  return (
    <Element name="project">
      <div className="w-full max-w-4xl mx-auto px-4 py-10 sm:py-12">
        
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-left">
          Projects
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-[#f5f7fa]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-3 sm:p-4 hover:shadow-md transition"
            >
              {/* Title + GitHub */}
              <div className="flex justify-between items-center mb-2 text-base sm:text-lg">
                <h2 className="font-semibold text-left">
                  {project.title}
                </h2>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 bg-black rounded-full p-2"
                >
                  <Github size={18} className="text-gray-200" />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-md text-gray-600 mb-3 text-left">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs border px-2 py-1 rounded bg-gray-50"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </Element>
  );
};

export default Projects;