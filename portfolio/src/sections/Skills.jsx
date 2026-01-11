import { FaJs, FaHtml5, FaCss3Alt, FaGitSquare, FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiPostgresql } from "react-icons/si";

const Skills = () => {

  const skills = {
  javascript: {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
    category: "Web Language",
  },
  react: {
    name: "React",
    icon: FaReact,
     color: "text-blue-400",
    category: "UI Library",
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
    category: "Version Control"
  },
  github: {
    name: "GitHub",
    icon: FaGithub,
    color: "text-black",
    category: "Cloud-based Storage"
  },
  postgresql: {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-black",
    category: "Relational DB"
  },
};
  return (
  <div className="overflow-hidden w-4xl cursor-pointer">
    {/* Header Section */}
        <div className=" mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            My Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
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
            className="flex items-center gap-2 mx-6 min-w-[200px]"
          >
            <Icon size={28} className={skill.color} />
            <div>
              <p className="font-semibold">{skill.name}</p>
              <p className="text-sm text-gray-500">{skill.category}</p>
            </div>
          </div>
        );
      }
    )}
  </div>
</div>


  );
}

export default Skills
