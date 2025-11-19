import { skills } from "../../data/skillsData";
import MotionWrapper from "../shared/MotionWrapper";

const AllSkills = () => {
  const sections = [
    { title: "Frontend", data: skills.frontend },
    { title: "Backend", data: skills.backend },
    { title: "Database", data: skills.database },
    { title: "Tools", data: skills.tools },
    { title: "UI / UX & Design", data: skills.uiux },
  ];
  return (
    <div
      name="skills"
      className="mb-20"
    >
      <h3 className="box mb-14">
        Skills
      </h3>
      <div className="flex flex-col gap-3 justify-center">
        {sections.map((section, idx) => (
          <MotionWrapper
            key={idx}
            variantName="fadeInUp"
            delay={0.1}
            stagger={0.12}
            duration={0.9}
          >
            <div
              className="w-full rounded p-3 border border-primary/40 shadow-xl backdrop-blur-xl"
            >
              <h3 className="text-xl md:text-2xl font-semibold italic tracking-wide mb-3 text-primary">
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.data.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-primary/20 rounded-lg text-gray-300">
                    <skill.icon className="md:text-xl" />
                    <span className="capitalize max-md:text-xs">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
