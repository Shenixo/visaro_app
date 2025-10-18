import React from "react";
import bigStar from "../assets/Images/bigStarV.svg";
import smallStar from "../assets/Images/smallStarV.svg";
import { motion } from "framer-motion";

const HighlightsCard = ({highlightsDetais}) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 mt-10">
      {highlightsDetais.map((l, i) => (
        <motion.li
          key={i}
          className="relative p-6 rounded-md bg-[#F5F5F5] shadow-sm md:shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeInOut" }}
        >
          <img src={bigStar} aria-hidden className="absolute top-0 right-0" />
          <img src={smallStar} alt="Star badge icon" />
          <p className="text-black font-medium text-base mt-10 md:mt-20">{l}</p>
        </motion.li>
      ))}
    </ul>
  );
};

export default HighlightsCard;


