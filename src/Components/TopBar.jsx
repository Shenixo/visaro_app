import React from "react";
import { motion } from "framer-motion";
import MenuButton from "./MenuButton";
import { Link, useLocation } from "react-router-dom";

const navlist = [
  { label: "Home", path: "/" },
  { label: "EB-1A", path: "/service/eb-1a" },
  { label: "EB-2NW", path: "/service/eb-2nw" },
  { label: "O1 Visa", path: "/service/o1-visa" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -30 },
  open: { opacity: 1, y: 0 },
};

const borderVariants = {
  closed: { scaleX: 0, opacity: 0 },
  open: { scaleX: 1, opacity: 1 },
};

const TopBar = ({ setOpenSidebar, openSidebar }) => {
  const location = useLocation();

  return (
    <motion.div
      className="bg-[#16161C] backdrop-blur-md fixed inset-0 h-screen p-4 z-50"
      animate={openSidebar ? "open" : "closed"}
      initial="closed"
      variants={{
        open: { y: 0 },
        closed: { y: "-100%" },
      }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <div className="text-right">
        <MenuButton setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />

        <motion.ul
          className="flex flex-col gap-4 text-left"
          variants={containerVariants}
        >
          {navlist.map((item, i) => {
            const isActive = location.pathname === item.path;

            return (
              <Link key={i} to={item.path}>
                <motion.li
                  variants={itemVariants}
                  className={`text-2xl uppercase transition-colors ml-4 ${
                    isActive ? "text-baseColor" : "text-[#878787] hover:text-white"
                  }`}
                  onClick={() => setOpenSidebar(false)}
                >
                  {item.label}
                </motion.li>
                <motion.div
                  className={`my-2 ${
                    navlist.length - 1 === i
                      ? "border-none"
                      : "border-b border-[#5b5b5c]"
                  } origin-left`}
                  variants={borderVariants}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            );
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default TopBar;
