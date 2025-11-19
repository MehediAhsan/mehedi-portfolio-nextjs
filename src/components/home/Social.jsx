import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Social = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/mehediahsan",
      icon: <FaGithub />,
      color: "#333",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mehediahsan/",
      icon: <FaLinkedin />,
      color: "#1E3E62",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/MehediAhsanShow",
      icon: <FaFacebook />,
      color: "#0D63A5",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@mehediahsan",
      icon: <FaYoutube />,
      color: "#A72703",
    },
  ];

  return (
    <div className="fixed top-1/2 left-2 md:left-4 -translate-y-1/2 flex flex-col gap-4 z-50">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          title={social.name}
          className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
          style={{ backgroundColor: social.color }}
        >
          <span className="text-white text-sm md:text-base">{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default Social;
