import React from "react";
import { FaYoutube, FaPlay } from "react-icons/fa";
import MotionWrapper from "../shared/MotionWrapper";

const Youtube = () => {
  const videos = [
    {
      id: "1",
      title: "HTML Tutorial",
      source: "https://www.youtube.com/embed/aqZU8729Mb0",
    },
    {
      id: "2",
      title: "Mordern Web Design",
      source: "https://www.youtube.com/embed/hPECq-UrS7I",
    },
    {
      id: "3",
      title: "Rest API",
      source: "https://www.youtube.com/embed/dS_QE0ltS1g",
    },
  ];

  return (
    <div id="youtube" className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <MotionWrapper variantName="fadeInUp" className="container mx-auto">

        <h3 className="box mb-20">Youtube Video</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <MotionWrapper
              key={video.id}
              variantName="fadeInUp"
              delay={index * 0.2}
            >
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]">

                <div className="relative aspect-video w-full overflow-hidden">
                  <iframe
                    src={video.source}
                    title={video.title}
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-600/20 rounded-full text-red-500">
                      <FaYoutube size={20} />
                    </div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">YouTube</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper variantName="fadeInUp" delay={0.5} className="flex justify-center mt-16">
          <a
            href="https://www.youtube.com/@mehediahsan"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 bg-transparent border border-primary/30 text-primary font-bold rounded-full overflow-hidden transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaPlay className="text-sm" /> Visit Channel
            </span>
            <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </MotionWrapper>

      </MotionWrapper>
    </div>
  );
};

export default Youtube;
