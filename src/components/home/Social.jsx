import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const Social = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/mehediahsan",
      icon: <FaGithub/>
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mehediahsan/",
      icon: <FaLinkedin />
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/MehediAhsanShow",
      icon: <FaFacebook />
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@mehediahsan",
      icon: <FaYoutube />,
    },
  ];
  return (
    <div className="grid grid-cols-1 fixed top-1/2 -translate-y-1/2 left-1 md:left-4 z-50 gap-6">
      {
        socials?.map((social, index) => {
          return (
            <a href={social.link} target="_blank" title={social.name} key={index} className="transform hover:-translate-y-1 hover:skew-x-2 duration-500 drop-shadow text-[#0b6a8f] hover:text-white text-xl">
              {social.icon}
            </a>
          )
        })
      }
    </div>
  );
};

export default Social;
