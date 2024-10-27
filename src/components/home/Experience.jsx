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
    link: 'https://www.suffixit.com/'
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
    link: 'https://www.playwise.gg/'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="pt-16">
      <div className="container mx-auto w-full md:w-9/12 px-4">
        
        <h3 className="animate-charcter tracking-[10px] font-medium text-center mb-20 text-lg">
          {" "}
          Experience
        </h3>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" shadow-slate-900 p-6 rounded shadow-md"
            >
              <h3 className="text-xl mb-1 text-gray-300">{exp.role}</h3>
              <p className="text-gray-400 text-sm">
                <a href={exp.link} target="_blank" className="text-blue-700">{exp.company}</a> | {exp.period}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm">
                    {item}
                  </li>
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
