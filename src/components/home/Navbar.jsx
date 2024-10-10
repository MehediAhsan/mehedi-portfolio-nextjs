'use client'
import Image from "next/image";
import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container px-4 py-3 mx-auto md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between uppercase">
        {/* <a href="/" className="inline-flex items-center ">
          <span className="ml-2 text-2xl font-medium tracking-wide text-primary transform -skew-y-3">
            Mehedi <span className="text-slate-300">Ahsan</span>
          </span>
        </a> */}
        <Link to="/">
          <Image src={logo} alt="" className="w-10 md:w-12 cursor-pointer" />
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to={"about"}
              smooth
              duration={500}
              className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to={"skills"}
              smooth
              duration={500}
              className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to={"projects"}
              smooth
              duration={500}
              className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to={"youtube"}
              smooth
              duration={500}
              className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
            >
              Youtube
            </Link>
          </li>
          <li>
            <Link
              to={"contact"}
              smooth
              duration={500}
              className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition-all duration-500 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-primary" viewBox="0 0 24 24">
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
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-50 top-0 left-0 w-full">
              <div className="p-3 bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] overflow-hidden rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {/* <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-2xl font-medium tracking-wide text-primary transform -skew-y-3">
                        Mehedi <span className="text-slate-300">Ahsan</span>
                      </span>
                    </a> */}
                    <Link to="/">
                      <img src={logo} alt="" className="w-10 cursor-pointer" />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition-all duration-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-primary" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-5 text-center py-5">
                    <li>
                      <Link
                        to={"about"}
                        smooth
                        duration={500}
                        className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
                      >
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"skills"}
                        smooth
                        duration={500}
                        className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
                      >
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"projects"}
                        smooth
                        duration={500}
                        className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"youtube"}
                        smooth
                        duration={500}
                        className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
                      >
                        Youtube
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"contact"}
                        smooth
                        duration={500}
                        className="transition-colors duration-200 hover:text-slate-200 cursor-pointer text-sm text-primary"
                      >
                        Contact Me
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
