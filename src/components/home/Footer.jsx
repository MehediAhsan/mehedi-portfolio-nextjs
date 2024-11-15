import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-4">
      <div className="container mx-auto px-14 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright Info */}
        <div className="text-sm text-teal-500">
          © {new Date().getFullYear()} Mehedi Ahsan. All Rights Reserved.
        </div>

        {/* Technology Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="text-sm">Created By</span>
          <div className="flex items-center space-x-2">
            <SiNextdotjs size={20} className="text-white" />
          </div>
          <div className="flex items-center space-x-2">
            <SiTailwindcss size={20} className="text-teal-500" />
          </div>
          <div className="flex items-center space-x-2">
            <SiFramer size={20} className="text-purple-400" />
          </div>
          <div className="flex items-center space-x-2">
            <SiPrisma size={20} className="text-blue-500" />
          </div>
          <div className="flex items-center space-x-2">
            <SiPostgresql size={20} className="text-blue-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
