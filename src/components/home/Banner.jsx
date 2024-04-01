import photo from "../../assets/mehediahsan.png";
import "../../styles/bannerStyle.css";
import Image from "next/image";
import TypeWrite from "../shared/TypeWrite";

const Banner = () => {
  return (
    <div className="my-72 flex items-center justify-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute border-2 border-[#012838] w-[450px] h-[450px] rounded-full animate-pulse"></div>
        <div className="absolute border-2 border-[#012838] border-dashed w-[350px] h-[350px] rounded-full"></div>
        <div className="absolute border border-[#012838] w-64 h-64 rounded-full animate-ping"></div>
      </div>
      <Image
        src={photo}
        className="w-[250px] h-[250px] shadow-lg absolute rounded-full bg-black border border-[#012838] object-cover"
        alt="Mehedi"
        loading="lazy"
      />
      <div className="absolute bg-gradient-to-r from-[#012838] via-[#000101] to-[#012838] w-[250px] h-[250px] rounded-full opacity-20"></div>
      <h1 className="absolute mt-48 uppercase text-slate-300 tracking-[6px]">
        Software Engineer
      </h1>
      <h1
        className="absolute font-medium text-3xl md:text-4xl text-white"
        style={{ fontFamily: "cursive" }}
      >
        <TypeWrite/>
      </h1>
      <button className="absolute mt-80 ui-btn">
        <a
          href="https://drive.google.com/file/d/1WEuqyNWP0S805IE4Sx71X4sxH8_-EPaP/view"
          target="_blank"
        >
          <span>RESUME</span>
        </a>
      </button>
    </div>
  );
};

export default Banner;
