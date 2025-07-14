import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full py-6 mt-12 bg-gray-900 text-gray-200 flex flex-col items-center gap-2">
    <div className="flex gap-4 mb-2">
      <a
        href="https://github.com/sakrfaisal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
        <FaGithub className="text-2xl hover:text-green-400 transition-colors" />
      </a>
      <a
        href="https://www.linkedin.com/in/%D8%B5%D8%AE%D8%B1-%D9%81%D9%8A%D8%B5%D9%84-%D8%A7%D9%84%D9%87%D8%AA%D8%A7%D8%B1-865145270"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
        <FaLinkedin className="text-2xl hover:text-green-400 transition-colors" />
      </a>
      <a href="#" aria-label="Twitter (coming soon)">
        <FaTwitter className="text-2xl text-gray-500" />
      </a>
    </div>
    <div className="text-sm">
      &copy; {new Date().getFullYear()} Sakhr Faisal. All rights reserved.
    </div>
  </footer>
);

export default Footer;
