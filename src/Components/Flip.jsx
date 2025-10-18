import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Flip = ({ text = "" }) => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  
  const isActive =
    (currentPath === "/" && text.toLowerCase() === "home") ||
    currentPath === `/${text.toLowerCase()}` ||
    (text.toLowerCase() === "services" && currentPath.startsWith("/service/"));

  return (
    <motion.div
      className="relative w-20 h-8 overflow-hidden cursor-pointer flex items-center justify-center"
      initial="initial"
      whileHover="hovered"
    >
      <motion.div
        variants={{
          initial: { y: "0%" },
          hovered: { y: "-100%" },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="absolute inset-0 flex items-center justify-start gap-2"
      >
        <span
          className={`font-medium ${
            isActive ? "text-[#EF6223]" : "text-black"
          }`}
        >
          {text}
        </span>
      </motion.div>

      <motion.div
        variants={{
          initial: { y: "100%" },
          hovered: { y: "0%" },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="absolute inset-0 flex items-center justify-start gap-2"
      >
        <span
          className={`font-medium ${
            isActive ? "text-[#EF6223]" : "text-black"
          }`}
        >
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Flip;