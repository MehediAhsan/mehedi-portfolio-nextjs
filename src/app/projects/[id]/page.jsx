import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Breadcrumb from "@/components/shared/Breadcrumb";

const ProjectDetails = ({ params }) => {
    const { id } = params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                    <Link href="/projects" className="text-primary hover:underline">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] text-gray-300">
            <Breadcrumb main="projects" sub={project.name} />

            <div className="py-10 px-5 md:px-20 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Project Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-xl overflow-hidden border-2 border-[#123333] bg-[#000808]">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {project.name}
                        </h1>

                        <div className="h-1 w-20 bg-primary rounded-full"></div>

                        <p className="text-lg leading-relaxed text-gray-400">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href={project.live_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>

                            {project.github_client && (
                                <a
                                    href={project.github_client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-lg hover:border-primary hover:text-primary transition-all transform hover:-translate-y-1"
                                >
                                    <FaGithub /> Client Repo
                                </a>
                            )}

                            {project.github_server && (
                                <a
                                    href={project.github_server}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-lg hover:border-primary hover:text-primary transition-all transform hover:-translate-y-1"
                                >
                                    <FaGithub /> Server Repo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
