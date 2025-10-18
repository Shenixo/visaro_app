import React from "react";
import arrowDownIcon from "../assets/Images/dropdownArrow.svg";
import DropMenu from "./Menu";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Flip from "./Flip";

const navlist = ["home", "services", "FAQs", "Contact"];
const Navlist = () => {
  const menuRef = React.useRef(null);
  const navigate = useNavigate();
  return (
    <ul className="flex items-center gap-6">
      {navlist.map((nav, idx) => (
        <motion.li
          initial={"initial"}
          whileHover={"hovered"}
          onClick={(e) =>
            idx === 1
              ? menuRef.current?.openMenu(e.currentTarget)
              : navigate(`/${nav === "home" ? "" : nav}`)
          }
          key={idx}
          className="capitalize font-medium flex items-center gap-2 cursor-pointer"
        >
          <Flip text={nav} swapColor="text-black" />
          {idx === 1 && (
            <img src={arrowDownIcon} alt="arrow icon" className="-ml-4" />
          )}
        </motion.li>
      ))}
      <DropMenu list={["EB-1A", "EB-2 NIW", "O-1 Visa"]} ref={menuRef} />
    </ul>
  );
};

export default Navlist;
