import Image from "next/image";
import about from "../../assets/mehedi.png";
import MotionWrapper from "../shared/MotionWrapper";

const About = () => {
  const info = [
    { text: "Years of Experience", count: "02+" },
    { text: "Completed Projects", count: "15+" },
    { text: "Companies Worked", count: "02+" },
  ];

  return (
    <section id="about" className="py-24 md:pb-44 px-10 md:px-28">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <MotionWrapper variantName="slideInLeft">
          <div className="relative group w-80 md:w-96">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-primary group-hover:opacity-40 transition duration-500"></div>
            <div className="relative overflow-hidden transform group-hover:scale-105 transition duration-500">
              <Image
                src={about}
                alt="Mehedi"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </MotionWrapper>
        <div className="md:w-1/2 text-left">
          <MotionWrapper variantName="slideInRight">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 mb-4 tracking-wide">
              Mehedi Ahsan
            </h2>
             <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-10 text-justify">
              A passionate and driven Software Engineer from Dhaka, Bangladesh. 
              I completed my B.Sc. in Computer Science and Engineering and have 
              excelled as a dynamic frontend developer transforming design 
              concepts into polished interactive experiences. Skilled in Tailwind, 
              JavaScript, React, Next.js, Node.js, Express, and MongoDB.
              <br /><br />
              I thrive in collaborative environments, pushing high-quality, 
              scalable, and visually refined web applications. Detail-focused 
              and design-oriented — always learning, always improving.
            </p>
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {info.map((item) => (
                <div
                  key={item.text}
                  className="text-center p-2 md:p-4 rounded-lg bg-[#021820]/40 border border-[#013345] backdrop-blur-md hover:scale-105 transition duration-300"
                >
                  <h3 className="text-xl md:text-3xl font-semibold text-primary">
                    {item.count}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm mt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
