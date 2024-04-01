'use client'
import Typewriter from "typewriter-effect";

const TypeWrite = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["This is Mehedi Ahsan", "A Software Engineer"],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </>
  );
};

export default TypeWrite;
