import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-4 z-50 flex justify-center mt-4 px-2 sm:px-4">
      <nav
        className={`flex items-center justify-between w-full max-w-xl rounded-full px-3 sm:px-6 md:px-8 lg:gap-6 py-2 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            : "bg-white/70 backdrop-blur-sm border border-gray-200/40 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 text-sm sm:text-base md:text-lg font-bold tracking-tight">
          <span className="text-gray-400 font-light">{"{"}</span>
          <span className="text-violet-600">Pankaj</span>
          <span className="text-gray-500 font-light text-sm sm:text-base md:text-lg">.com</span>
          <span className="text-gray-400 font-light">{"}"}</span>
        </a>

        {/* Nav links */}
        <ul className="flex items-center gap-1 sm:gap-2 lg:gap-4">
          {["home", "project", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer capitalize px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base md:text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Download CV button */}
          <a
            href="/resume.pdf"
            download="Pankaj_Hamal_CV.pdf"
            className="ml-1 sm:ml-2 inline-flex items-center gap-1 rounded-full bg-violet-600 px-2 sm:px-3 py-1 text-sm sm:text-base md:text-lg font-medium text-white hover:bg-violet-700 active:scale-95 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;