"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import motionVariants from "@/lib/motionVariants";
import { FaUser, FaCode, FaBriefcase, FaFolderOpen, FaYoutube, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const menuItems = [
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
    { id: "youtube", label: "Youtube", icon: <FaYoutube /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];


  return (
    <div className="container px-4 py-3 mx-auto md:px-24 lg:px-8">
      <div className="relative flex items-center justify-center uppercase">
        {/* Desktop Menu */}
        <ul className="hidden space-x-6 md:flex">
          {menuItems.map(({ id, label, icon }) => (
            <motion.li key={id} whileHover="hover" className="cursor-pointer">
              <Link
                to={id}
                smooth
                duration={500}
                className="flex items-center gap-1.5 text-xs text-primary border border-primary border-opacity-35 tracking-wider rounded-full px-4 py-2 font-semibold"
              >
                {icon}
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center w-full md:hidden">
          <Image src={logo} alt="logo" className="w-6 h-6 md:hidden" />
          <button
            aria-label="Toggle Menu"
            className="p-2 transition duration-500 rounded md:hidden"
            onClick={toggleMenu}
          >
            <motion.svg
              className="w-5 text-primary"
              variants={motionVariants.iconRotate}
              animate={isMenuOpen ? "open" : "closed"}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </motion.svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-0 left-0 z-50 w-full p-3 bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] rounded shadow-sm"
              variants={motionVariants.menuOpen}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-end mb-2">
                <button
                  aria-label="Close Menu"
                  onClick={toggleMenu}
                  className="transition duration-500"
                >
                  <svg className="w-5 text-primary" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>
              <nav>
                <ul className="space-y-5 text-center py-5">
                  {menuItems.map(({ id, label, icon }) => (
                    <motion.li key={id} whileHover="hover" className="cursor-pointer">
                      <Link
                        to={id}
                        smooth
                        duration={500}
                        className="flex items-center justify-center gap-2 text-sm text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {icon}
                        {label}
                      </Link>
                    </motion.li>
                  ))}

                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
