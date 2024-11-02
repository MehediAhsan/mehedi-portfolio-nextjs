"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { projects } from "../../data/projectsData";
import ProjectCard from "../shared/ProjectCard";
import "../../styles/projectStyle.css";
import Link from "next/link";
import MotionWrapper from "../shared/MotionWrapper";

const Projects = () => {
  return (
    <MotionWrapper
      id="projects"
      variantName="fadeInUp"
      className="container mx-auto my-28 relative px-5 md:px-10"
    >
      <MotionWrapper variantName="fadeInUp">
        <h3 className="animate-charcter tracking-[10px] font-medium text-center mb-20 text-lg">
          Projects
        </h3>
      </MotionWrapper>

      <div className="pb-12 mb-5">
        {/* <button className="bg-primary p-2 text-black">Most Views</button> */}
      </div>

      <MotionWrapper variantName="fadeInUp">
        <Swiper
          effect="coverflow"
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          // Responsive breakpoints for adjusting number of slides
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile screens
            640: { slidesPerView: 1, spaceBetween: 20 }, // Small screens
            768: { slidesPerView: 2, spaceBetween: 30 }, // Medium screens
            1024: { slidesPerView: 3, spaceBetween: 40 }, // Large screens
          }}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          className="mySwiper custom-swiper"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <MotionWrapper variantName="fadeIn" delay={i * 0.1}>
                <ProjectCard project={project} />
              </MotionWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </MotionWrapper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <Link href="/projects" className="flex justify-center mt-5">
        <button className="relative py-2 px-5 text-black text-sm font-bold rounded-full overflow-hidden bg-gray-300 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          Show All
        </button>
      </Link>
    </MotionWrapper>
  );
};

export default Projects;
