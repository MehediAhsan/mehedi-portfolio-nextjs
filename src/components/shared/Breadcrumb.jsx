import Link from "next/link";
import React from "react";
import { FaAngleRight, FaHome } from "react-icons/fa";

const Breadcrumb = ({ main, sub }) => {
  return (
    <div
      className="flex text-gray-400 py-6 px-5 md:px-10"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3 uppercase tracking-wider text-xs md:text-sm font-semibold">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center hover:text-primary transition-colors duration-300"
          >
            <FaHome className="mr-2 text-base mb-0.5" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <FaAngleRight className="text-gray-600 mx-2" />
            <Link
              href={`/${main}`}
              className="hover:text-primary transition-colors duration-300"
            >
              {main}
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <FaAngleRight className="text-gray-600 mx-2" />
            <span className="text-primary">
              {sub}
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
