import React from "react";
import { FaYoutube } from "react-icons/fa";
import MotionWrapper from "../shared/MotionWrapper";

const Youtube = () => {
  const videos = [
    {
      id: "1",
      source: "https://www.youtube.com/embed/aqZU8729Mb0",
    },
    {
      id: "2",
      source: "https://www.youtube.com/embed/hPECq-UrS7I",
    },
    {
      id: "3",
      source: "https://www.youtube.com/embed/dS_QE0ltS1g",
    },
  ];

  return (
    <MotionWrapper
      id="youtube"
      variantName="fadeInUp"
      className="container mx-auto my-20 overflow-hidden px-10 md:px-20"
    >
      <h3 className="box mb-14">Youtube Video</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-hidden">
        {videos.map((video, index) => (
          <MotionWrapper
            key={video.id}
            variantName="fadeInUp"
            delay={index * 0.2}
          >
            <div className="p-2 aspect-w-16 aspect-h-9 flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src={video.source}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              ></iframe>
            </div>
          </MotionWrapper>
        ))}
      </div>

      <MotionWrapper variantName="fadeInUp" delay={0.5}>
        <div className="flex justify-center items-center mt-8">
          <a
            href="https://www.youtube.com/@mehediahsan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn-details flex">
              <FaYoutube className="text-xl mr-2" />
              See all videos
            </button>
          </a>
        </div>
      </MotionWrapper>
    </MotionWrapper>
  );
};

export default Youtube;
