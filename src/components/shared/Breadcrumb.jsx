import Link from "next/link";
import React from "react";
import { FaAngleRight, FaHome } from "react-icons/fa";

const Breadcrumb = ({ main, sub }) => {
  return (
    <div
        className="flex text-gray-700 p-5 bg-gray-900"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="text-sm inline-flex items-center text-gray-300 hover:text-white"
            >
              <FaHome className="mr-2 text-lg" />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <FaAngleRight className="text-xl text-gray-300" />
              <Link
                href={`/${main}`}
                className="ml-1 md:ml-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                {main}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <FaAngleRight className="text-xl text-gray-300" />
              <span className="ml-1 md:ml-2 text-sm font-medium text-gray-400">
                {sub}
              </span>
            </div>
          </li>
        </ol>
      </div>
  );
};

export default Breadcrumb;
