import photo from "../../assets/mehediahsan.png";
import "../../styles/bannerStyle.css";
import Image from "next/image";
import TypeWrite from "../shared/TypeWrite";
import MotionWrapper from "../shared/MotionWrapper";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

const Banner = () => {
  return (
    <MotionWrapper duration={1}>
      <div className="my-56 md:my-72 flex items-center justify-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute border-2 border-[#012838] w-[450px] h-[450px] rounded-full animate-pulse hidden md:block"></div>
          <div className="absolute w-[350px] h-[350px] flex justify-center items-center animate-spin-slow">
            <SiReact className="absolute top-0 text-primary opacity-60 text-3xl animate-bounce-slow" />
            <SiNextdotjs className="absolute right-0 text-primary opacity-60 text-3xl animate-bounce-slow delay-1000" />
            <SiTailwindcss className="absolute bottom-0 text-primary opacity-60 text-4xl animate-bounce-slow delay-2000" />
            <SiJavascript className="absolute left-0 text-primary opacity-60 text-3xl animate-bounce-slow delay-3000" />
          </div>
          <div className="absolute border-2 border-primary opacity-40 border-dashed w-[350px] h-[350px] rounded-full"></div>
          <div className="absolute border border-[#012838] w-64 h-64 rounded-full animate-ping"></div>
        </div>
        <Image
          src={photo}
          className="w-[250px] h-[250px] absolute rounded-full border-2 border-primary border-opacity-60 object-cover"
          alt="Mehedi"
          loading="lazy"
        />
        <div className="absolute bg-gradient-to-r from-[#012838] via-[#000101] to-[#012838] w-[250px] h-[250px] rounded-full opacity-5"></div>
        <h1 className="absolute text-xl md:text-2xl mt-48 text-white uppercase font-sans tracking-[4px] font-semibold">
          <TypeWrite />
        </h1>
        <button className="absolute mt-80 ui-btn">
          <a
            href="https://drive.google.com/file/d/1RZD9s02-2mGVW4ebX07avbt5a9IMg70N/view?usp=drive_link"
            target="_blank"
          >
            <span>RESUME</span>
          </a>
        </button>
      </div>
      <div className="pointer-events-none absolute right-10 bottom-6 md:right-20 md:bottom-20 text-xs md:text-sm text-[#00ffcc]/40 font-mono tracking-tight max-md:hidden">
        <pre style={{ lineHeight: 1.05 }}>{`(async function boot(){\n for(let i=0;i<40;i++){\n console.log('init', i);\n await new Promise(r=>setTimeout(r, 28));\n }\n console.log('ready');\n})();`}</pre>
      </div>
    </MotionWrapper>
  );
};

export default Banner;
