import React, {
  forwardRef,
  useImperativeHandle,
} from "react";
import { motion } from "framer-motion";

const MenuButton = forwardRef(({ openSidebar, setOpenSidebar }, ref) => {
  useImperativeHandle(ref, () => ({
    open: () => setOpenSidebar(true),
    close: () => setOpenSidebar(false),
    toggle: () => setOpenSidebar((prev) => !prev),
  }));

  return (
    <motion.button
      initial={false}
      animate={openSidebar ? "open" : "closed"}
      onClick={() => setOpenSidebar((prev) => !prev)}
      className="relative h-12 w-12 rounded-md transition-colors hover:bg-[#09a1a4]/20"
    >
      <motion.span
        variants={VARIANTS.top}
        className="absolute h-[2px] w-6 bg-[#EF6223]"
        style={{
          top: "35%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.span
        variants={VARIANTS.middle}
        className="absolute h-[2px] w-6 bg-[#EF6223]"
        style={{
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.span
        variants={VARIANTS.bottom}
        className="absolute h-[2px] w-6 bg-[#EF6223]"
        style={{
          bottom: "35%",
          left: "50%",
          translateX: "-50%",
          translateY: "50%",
        }}
      />
    </motion.button>
  );
});

const VARIANTS = {
  top: {
    open: { rotate: "45deg", top: "50%" },
    closed: { rotate: "0deg", top: "35%" },
  },
  middle: {
    open: { opacity: 0, scaleX: 0 },
    closed: { opacity: 1, scaleX: 1 },
  },
  bottom: {
    open: { rotate: "-45deg", bottom: "50%" },
    closed: { rotate: "0deg", bottom: "35%" },
  },
};

export default MenuButton;
