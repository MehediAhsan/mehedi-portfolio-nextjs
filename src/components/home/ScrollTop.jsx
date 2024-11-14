'use client';
import { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-2 cursor-pointer animate-bounce"
        >
          <FaArrowAltCircleUp color="#D1D5DB" size="24" />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
