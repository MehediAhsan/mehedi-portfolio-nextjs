import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-gray-300 pb-8">
      <div className="container mx-auto px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
          © {year} Mehedi Ahsan. All rights reserved.
        </p>

        <div className="flex items-center space-x-4 justify-center md:justify-end">
          <span className="hidden md:inline text-sm text-gray-400">Built with:</span>
          <SiNextdotjs size={22} className="text-white hover:text-teal-500 transition-colors duration-300" />
          <SiTailwindcss size={22} className="text-teal-500 hover:text-teal-400 transition-colors duration-300" />
          <SiFramer size={22} className="text-purple-400 hover:text-purple-300 transition-colors duration-300" />
          <SiPrisma size={22} className="text-blue-500 hover:text-blue-400 transition-colors duration-300" />
          <SiPostgresql size={22} className="text-blue-600 hover:text-blue-500 transition-colors duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
