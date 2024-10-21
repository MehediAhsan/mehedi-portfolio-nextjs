import React from "react";
import { FaYoutube } from "react-icons/fa";

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
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      name="youtube"
      className="container mx-auto  my-28 overflow-hidden"
    >
      <h3 className="animate-charcter tracking-[10px] font-medium text-center mb-20 text-lg">
        {" "}
        Youtube Video
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 p-6 m-0 overflow-hidden">
        {videos.map((video) => (
          <div
            key={video.id}
            className="p-2 aspect-w-16 aspect-h-9 flex items-center justify-center"
          >
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
        ))}
      </div>
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
    </div>
  );
};

export default Youtube;
