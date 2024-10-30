import Skill from "./Skill";
import { skills } from "../../data/skillsData";
import MotionWrapper from "../shared/MotionWrapper";

const AllSkills = () => {
  return (
    <div
      name="skills"
      className="container mx-auto mb-20 overflow-hidden"
    >
      <h3 className="animate-charcter tracking-[10px] font-medium text-center mb-20 text-lg">
        {" "}
        Skills
      </h3>
      <div className="flex flex-col gap-14 justify-center md:mx-10">
        {/* Expertise */}
        <MotionWrapper
          variantName="fadeInUp"
          delay={0.1}
          stagger={0.1}
          duration={1}
        >
          <div className="flex flex-col md:flex-row gap-10 mx-10 items-center">
            <h1
              className="text-2xl text-white mb-5 italic"
              style={{ fontFamily: "cursive" }}
            >
              Expertise:
            </h1>
            <div className="flex flex-wrap gap-8">
              {skills.expert.map((skill, i) => (
                <Skill skill={skill} key={i}></Skill>
              ))}
            </div>
          </div>
        </MotionWrapper>
        {/* Comfotable */}
        <MotionWrapper
          variantName="fadeInUp"
          delay={0.1}
          stagger={0.1}
          duration={1}
        >
          <div className="flex flex-col md:flex-row gap-10 mx-10 items-center">
            <h1
              className="text-2xl text-white mb-5 italic"
              style={{ fontFamily: "cursive" }}
            >
              Comfortable:
            </h1>
            <div className="flex flex-wrap gap-8">
              {skills.comfortable.map((skill, i) => (
                <Skill skill={skill} key={i}></Skill>
              ))}
            </div>
          </div>
        </MotionWrapper>
        {/* Tools */}
        <MotionWrapper
          variantName="fadeInUp"
          delay={0.1}
          stagger={0.1}
          duration={1}
        >
          <div className="flex flex-col md:flex-row gap-10 mx-10 items-center">
            <h1
              className="text-2xl text-white mb-5 italic"
              style={{ fontFamily: "cursive" }}
            >
              Tools:
            </h1>
            <div className="flex flex-wrap gap-8">
              {skills.tools.map((skill, i) => (
                <Skill skill={skill} key={i}></Skill>
              ))}
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};

export default AllSkills;
