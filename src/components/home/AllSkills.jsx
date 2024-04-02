import Skill from "./Skill";
import { skills } from '../../data/skillsData';

const AllSkills = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      name="skills"
      className="container mx-auto mb-20 overflow-hidden"
    >
      {/* <h1 className='text-3xl font-bold text-center mb-10 text-slate-200'>My <span className='text-teal-500'>Skills</span></h1> */}
      <div className="container mb-20">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter tracking-[10px] font-medium">
              {" "}
              SKILLS
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 justify-center md:mx-10">
        {/* Expertise */}
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
        {/* Comfotable */}
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

        {/* Tools */}
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
      </div>
    </div>
  );
};

export default AllSkills;
