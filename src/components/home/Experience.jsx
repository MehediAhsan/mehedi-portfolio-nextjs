// src/components/Experience.js
import React from "react";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Suffix IT Limited",
    period: "November, 2023 – Present",
    responsibilities: [
      "Develop and integrate APIs for seamless front-end and back-end communication.",
      "Optimize components for maximum performance across a vast array of devices.",
      "Actively contribute to various projects including ‘KWF’, ‘BIWTA’, ‘Arc Deco’, ‘AKT’.",
    ],
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
  },
];

const Experience = () => {
  return (
    <section id="experience" className="pt-16">
      <div className="container mx-auto w-full md:w-9/12 px-4">
        <h2 className="text-2xl uppercase font-medium text-center text-white mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" shadow-slate-900 bg-opacity-60 backdrop-filter backdrop-blur-lg p-6 rounded shadow-md transition duration-300 ease-in-out transform"
            >
              <h3 className="text-xl text-white mb-1">{exp.role}</h3>
              <p className="text-gray-400">{exp.company} | {exp.period}</p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
