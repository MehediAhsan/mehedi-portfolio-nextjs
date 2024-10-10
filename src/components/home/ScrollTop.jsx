'use client'
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
  return (
    <>
      <ScrollToTop
        className="animate-bounce"
        smooth={true}
        height="22"
        color="#fff"
        style={{
          backgroundColor: "#0b6a8f",
          borderRadius: "100%",
          padding: "6px",
          right: "15px",
        }}
      />
    </>
  );
};

export default ScrollTop;
