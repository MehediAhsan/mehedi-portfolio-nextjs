import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import '../../styles/commonStyle.css';

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      className="border-2 border-[#123333] rounded-xl overflow-hidden shadow-lg mx-auto w-11/12 mb-8"
    >
      <img
        className="h-[340px] w-full object-cover p-2 rounded-xl shadow-lg"
        src={project.image}
        alt={project.name}
        loading="lazy"
      />
      <div className="px-3">
        <div className="flex justify-between items-center mb-3">
          <a
            href={project.live_link}
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5
              className="text-primary text-lg tracking-tight"
              style={{ fontFamily: "cursive" }}
            >
              {project.name}
            </h5>

            <FaExternalLinkAlt size={14} className="mr-2 text-gray-200" />
          </a>
          <button className="btn-details">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
