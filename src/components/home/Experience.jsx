'use client'
// src/components/Experience.js
import React, { useState } from "react";
import MotionWrapper from "../shared/MotionWrapper";
import { FaLaptopCode, FaBuilding } from "react-icons/fa"; // Import icons

const experiences = [
  {
    role: "Jr. Software Engineer",
    company: "Suffix IT Limited",
    period: "November, 2023 – Present",
    responsibilities: [
      "Develop and integrate APIs for seamless front-end and back-end communication.",
      "Optimize components for maximum performance across a vast array of devices.",
      "Actively contribute to various projects including ‘KWF’, ‘BIWTA’, ‘Arc Deco’, ‘AKT’.",
    ],
    link: "https://www.suffixit.com/",
    icon: <FaLaptopCode />,
  },
  {
    role: "Frontend Developer",
    company: "Playwise",
    period: "January, 2023 – April, 2023",
    responsibilities: [
      "Integrate APIs to fetch and convert designs from Figma into functional React components.",
      "Implement and maintain admin panels for efficient content management and control.",
      "Collaborate with back-end developers to integrate front-end interfaces with server-side.",
    ],
    link: "https://www.playwise.gg/",
    icon: <FaBuilding />,
  },
];

const Experience = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="experience" className="pt-16">
      <div className="container mx-auto w-full md:w-9/12 px-4">
        <h3 className="animate-charcter tracking-[10px] font-medium text-center mb-20 text-lg">
          Experience
        </h3>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Iconic Stepper Navigation */}
          <MotionWrapper variantName="fadeInUp" stagger={0.1}>
            <div className="flex flex-col space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 py-2 px-3 rounded text-sm ${
                    index === activeStep
                      ? "bg-gray-900 text-gray-300"
                      : "border border-gray-800 text-gray-200 hover:bg-gray-900 hover:text-white"
                  }`}
                >
                  <span className={`text-xl ${index === activeStep ? "text-gray-300" : "text-blue-500"}`}>
                    {exp.icon}
                  </span>
                  <span>{exp.role}</span>
                </button>
              ))}
            </div>
          </MotionWrapper>

          {/* Experience Details */}
          <MotionWrapper variantName="fadeInUp" key={activeStep} delay={0.1}>
            <div className="md:w-11/12 p-6 bg-gray-950 rounded shadow-md">
              <h3 className="text-xl mb-1 text-gray-300">{experiences[activeStep].role}</h3>
              <p className="text-gray-400 text-sm">
                <a
                  href={experiences[activeStep].link}
                  target="_blank"
                  className="text-blue-500 underline"
                  rel="noopener noreferrer"
                >
                  {experiences[activeStep].company}
                </a>{" "}
                | {experiences[activeStep].period}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                {experiences[activeStep].responsibilities.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Experience;
