import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import '../../styles/commonStyle.css';

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="border border-[#081818] rounded-xl overflow-hidden shadow-lg mx-auto w-11/12 mb-8"
    >
      <img
        className="h-80 w-full object-cover p-5 rounded-xl shadow-lg"
        src={project.image}
        alt={project.name}
        loading="lazy"
      />
      <div className="px-5">
        <div className="flex justify-between items-center mb-4">
          <a
            href={project.live_link}
            className="flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5
              className="text-primary text-lg sm:text-xl tracking-tight"
              style={{ fontFamily: "cursive" }}
            >
              {project.name}
            </h5>

            <FaExternalLinkAlt className="mr-2 text-white" />
          </a>
          <button className="btn-details">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
