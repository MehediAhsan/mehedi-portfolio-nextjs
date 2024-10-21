"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import { projects } from "../../data/projectsData";
import ProjectCard from "../shared/ProjectCard";
import "../../styles/projectStyle.css";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      name="projects"
      className="container mx-auto my-28 relative px-5 md:px-10"
    >
      <h3 className="animate-charcter tracking-[10px] font-medium text-center mb-20 text-lg">
        {" "}
        Projects
      </h3>

      <div className="pb-12 mb-5">
        {/* <button className="bg-primary p-2 text-black">Most Views</button> */}
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        // navigation={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper custom-swiper"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <ProjectCard project={project}></ProjectCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <Link href="/projects" className="flex justify-center mt-5">
        <button className="relative py-2 px-5 text-black text-sm font-bold nded-full overflow-hidden bg-gray-300 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default Projects;
