import { FaJs, FaHtml5, FaCss3Alt, FaGitSquare, FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiPostgresql, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

const Skills = () => {
  const skills = {
    javascript: {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
      category: "Web Language",
    },
    nodejs: {
      name: "NodeJS",
      icon: FaNodeJs,
      color: "text-green-400",
      category: "Backend language",
    },
    expressjs: {
      name: "ExpressJS",
      icon: SiExpress,
      color: "text-green-400",
      category: "Backend Framework",
    },
    react: {
      name: "React",
      icon: FaReact,
      color: "text-blue-400",
      category: "UI Library",
    },
    postgresql: {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-black",
      category: "Relational DB",
    },
    tailwind: {
      name: "Tailwind CSS",
      icon: FaCss3Alt,
      color: "text-blue-400",
      category: "Utility-first CSS",
    },
    git: {
      name: "Git",
      icon: FaGitSquare,
      color: "text-red-400",
      category: "Version Control",
    },
    github: {
      name: "GitHub",
      icon: FaGithub,
      color: "text-black",
      category: "Cloud-based Storage",
    },
  };

  return (
    <div className="overflow-hidden w-full max-w-4xl mx-auto px-4 cursor-pointer">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          My Skills
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl">
          These are some of my skills I have developed over time.
        </p>
      </div>

      <div className="infinite-scroll">
        {[...Object.values(skills), ...Object.values(skills)].map(
          (skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 mx-3 sm:mx-6 min-w-[160px] sm:min-w-[200px]"
              >
                <Icon size={22} className={`${skill.color} sm:text-[28px]`} />
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {skill.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {skill.category}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Skills;