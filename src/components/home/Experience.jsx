"use client";
import React, { useState } from "react";
import MotionWrapper from "../shared/MotionWrapper";
import { FaLaptopCode, FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "Jr. Software Engineer",
    company: "Suffix IT Limited",
    period: "Nov 2023 – Present",
    responsibilities: [
      "Develop and integrate APIs for seamless front-end and back-end communication.",
      "Optimize components for maximum performance across multiple devices.",
      "Contribute to projects including ‘KWF’, ‘BIWTA’, ‘Arc Deco’, ‘AKT’.",
    ],
    link: "https://www.suffixit.com/",
    icon: <FaLaptopCode />,
  },
  {
    role: "Frontend Developer",
    company: "Playwise",
    period: "Jan 2023 – Apr 2023",
    responsibilities: [
      "Convert Figma designs into functional React components.",
      "Implement and maintain admin panels for efficient content management.",
      "Collaborate with backend developers to integrate server-side APIs.",
    ],
    link: "https://www.playwise.gg/",
    icon: <FaBuilding />,
  },
];

const Experience = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="experience" className="py-20">
        <h3 className="box mb-16 text-center md:text-left">Experience</h3>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Timeline / Steps */}
          <MotionWrapper variantName="fadeInUp" stagger={0.1}>
            <div className="flex md:flex-col gap-4">
              {experiences.map((exp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    idx === activeStep
                      ? "bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-lg"
                      : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <span className="p-2 bg-gray-800 rounded-full text-teal-400">
                    {exp.icon}
                  </span>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm md:text-base">
                      {exp.role}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400">{exp.period}</p>
                  </div>
                </button>
              ))}
            </div>
          </MotionWrapper>

          {/* Experience Details */}
          <MotionWrapper variantName="fadeInUp" key={activeStep} delay={0.1} className="md:flex md:justify-end">
            <div className="md:w-2/3 p-6 bg-gray-950 rounded-xl shadow-lg border border-gray-800 transition-all duration-300">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {experiences[activeStep].role}
              </h4>
              <p className="text-gray-400 mb-4 text-sm md:text-base">
                <a
                  href={experiences[activeStep].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 underline hover:text-teal-500"
                >
                  {experiences[activeStep].company}
                </a>{" "}
                | {experiences[activeStep].period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                {experiences[activeStep].responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        </div>
    </section>
  );
};

export default Experience;
