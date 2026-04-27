import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 py-8 sm:py-12 border-t border-gray-300">
      <div className="space-y-6 sm:space-y-8">
        
        {/* Social Links */}
        <div>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center">
            
            <li>
              <a
                href="https://github.com/pankajhamal"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition group text-sm sm:text-md"
              >
                <FaGithub className="text-xl sm:text-2xl group-hover:scale-110 transition" />
                Github
              </a>
            </li>

            <li>
              <a
                href="mailto:pankajhamal0@gmail.com"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition group text-sm sm:text-md"
              >
                <TfiEmail className="text-xl sm:text-2xl group-hover:scale-110 transition" />
                Email
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/pankaj-hamal-a12548283/"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition group text-sm sm:text-md"
              >
                <FaLinkedin className="text-xl sm:text-2xl group-hover:scale-110 transition" />
                Linkedin
              </a>
            </li>

          </ul>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Pankaj Hamal. Built with React ❤️
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;