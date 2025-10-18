import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({
  children,
  width = "fit-content",
  delayReveal = 0.5,
  delay = 0.25,
  minWidth = "6px", 
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="relative overflow-hidden inline-block pl-4  "
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 55 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: delayReveal,
        }}
      >
        {children}
      </motion.div>

      {/* The reveal bar */}
      <motion.div
        variants={{
          hidden: { width: "100%" },
          visible: { width: minWidth },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.6, ease: "easeInOut", delay }}
        className="absolute bg-[#EF6223] z-40 "
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          height: "100%",
          borderRadius: "1rem",
        }}
      />
    </motion.div>
  );
};

export default Reveal;
