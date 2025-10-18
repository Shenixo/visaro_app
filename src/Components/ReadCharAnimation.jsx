import React from "react";
import { motion } from "framer-motion";

const ReadCharAnimation = ({ children, useDelay = false }) => {
  const words = children.split(" ");

  return (
    <div className="  leading-none w-full  ">
      {words.map((word, i) => (
        <Word key={i} index={i} useDelay={useDelay}>
          {word}
        </Word>
      ))}
    </div>
  );
};

const Word = ({ children, index, useDelay }) => {
  const characters = children.split("");

  return (
    <span className="mr-[12px] relative inline-block leading-none">
      {characters.map((char, i) => (
        <Character key={i} index={index * 10 + i} useDelay={useDelay}>
          {char}
        </Character>
      ))}
    </span>
  );
};

const Character = ({ children, index, useDelay = { useDelay } }) => {
  const animationDelay = !useDelay ? 0.01 : 0.095;
  return (
    <motion.span
      className="relative inline-block leading-none overflow-hidden"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
    >
      {/* <span className="absolute left-[0px] top-[1px] opacity-40 pointer-events-none">
        {children}
      </span> */}
      <span className="leading-none font-medium text-[1rem] sm:text-xl text-darkPurple">
        {children}
      </span>
    </motion.span>
  );
};

export default ReadCharAnimation;
