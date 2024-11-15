import Image from "next/image";
import about from "../../assets/mehedi.png";
import MotionWrapper from "../shared/MotionWrapper";

const About = () => {
  const info = [
    { text: "Years of Experience", count: "01+" },
    { text: "Completed Projects", count: "15+" },
    { text: "Companies Worked", count: "02+" },
  ];

  return (
    <section id="about" className="py-24 md:pb-44 px-10 md:px-28">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <MotionWrapper variantName="slideInLeft">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className="mt-10 md:mt-0 shadow-md transition duration-300 cursor-pointer"
          >
            <Image
              src={about}
              className="w-80 md:w-96 rounded drop-shadow-2xl"
              alt="Mehedi"
              loading="lazy"
            />
          </div>
        </MotionWrapper>
        <div className="md:w-1/2 text-left">
          <MotionWrapper variantName="slideInRight">
            <h1
              className="text-3xl text-gray-300 mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Mehedi Ahsan
            </h1>
            <p
              className="text-primary mb-10 text-justify italic text-sm md:text-base"
            >
              A dedicated and driven Software Engineer, from Dhaka, Bangladesh.
              Completed my graduation B.Sc in Computer Science and Engineering.
              Dynamic frontend wizard skilled in transforming design visions
              into captivating user interfaces. Expertise in Tailwind CSS,
              JavaScript, React, Next, Express, MongoDB. Proven collaborator,
              elevating cross-functional teamwork to ensure seamless,
              high-performance web experiences. Design-oriented, detail-focused,
              and committed to staying ahead of the curve in evolving web
              trends.Detail-oriented and driven problem solver, dedicated to
              staying ahead in the ever-evolving world of web development.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {info.map((content) => (
                <div key={content.text} className="text-center">
                  <h3 className="text-3xl font-medium text-teal-600">
                    {content.count}
                  </h3>
                  <p className="text-sm text-gray-300">{content.text}</p>
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
