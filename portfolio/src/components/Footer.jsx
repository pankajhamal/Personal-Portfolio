import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
  <div className="w-4xl text-center  px-6 py-12 border-t border-gray-300">
      <div className="space-y-8">
        {/* Social Links */}
        <div>
          <ul className="flex gap-8 items-center">
            <li>
              <a 
                href="/" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition group"
              >
                <FaGithub className="text-2xl group-hover:scale-110 transition" />
                <span className="text-md">Github</span>
              </a>
            </li>
            <li>
              <a 
                href="/" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition group"
              >
                <TfiEmail className="text-2xl group-hover:scale-110 transition" />
                <span className="text-md">Email</span>
              </a>
            </li>
            <li>
              <a 
                href="/" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition group"
              >
                <FaLinkedin className="text-2xl group-hover:scale-110 transition" />
                <span className="text-md">LinkedIn</span>
              </a>
            </li>
            <li>
              <a 
                href="/" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition group"
              >
                <FaTwitterSquare className="text-2xl group-hover:scale-110 transition" />
                <span className="text-md">Twitter</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm text-gray-500">
            © 2025 Pankaj Hamal. Built with React ❤️
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
