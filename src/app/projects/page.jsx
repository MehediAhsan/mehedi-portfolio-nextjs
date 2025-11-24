import React from "react";
import { projects } from "../../data/projectsData";
import ProjectCard from "@/components/shared/ProjectCard";
import Breadcrumb from "@/components/shared/Breadcrumb";
import MotionWrapper from "@/components/shared/MotionWrapper";

const AllProjects = () => {
  return (
    <div className="font-primary bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] overflow-hidden min-h-screen">
      <Breadcrumb main="projects" sub="all projects" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        {/* Hero Section */}
        <MotionWrapper variantName="fadeInUp" className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a collection of my recent work, showcasing my skills in web development, design, and problem-solving.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full"></div>
        </MotionWrapper>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <MotionWrapper
              key={i}
              variantName="fadeInUp"
              delay={i * 0.1}
              className="h-full"
            >
              <ProjectCard project={project} />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
