"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);

  // Simulate a loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          {/* Video Loader */}
          <video
            src="/loader.mp4" // Updated path to the public directory
            autoPlay
            loop
            muted
            className=""
          ></video>
        </div>
      ) : (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
