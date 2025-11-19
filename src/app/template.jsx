"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const name = "Mehedi Ahsan";

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-[#000101]">
          <motion.div
            className="text-4xl md:text-6xl font-bold text-[#4290a4] flex space-x-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
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
