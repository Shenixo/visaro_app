import React, { useRef } from "react";
import ContainerWidth from "../Components/ContainerWidth";
import visaroLogo from "../assets/Images/Logo b.png";
import Button from "../Components/Button";
import x from "../assets/Images/x.svg";
import facebook from "../assets/Images/facebook.svg";
import instagram from "../assets/Images/ig.svg";
import linkedIn from "../assets/Images/linkedIn.svg";
import arrowDownIcon from "../assets/Images/dropdownArrow.svg";
import { useNavigate } from "react-router-dom";
import DropMenu from "../Components/Menu";

const socials = [x, facebook, instagram, linkedIn];
const navlist = ["home", "services", "FAQs", "Contact"];
const Footer = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  
  return (
    <div className="bg-[#F5F5F5] pt-10 px-6">
      <ContainerWidth>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={visaroLogo} alt="Visaro logo craft"      className=" w-24 md:w-full max-w-[113px]" />
            <p className="text-sm text-[#5B5C66] mt-2">
              
              Your Petition, Our Craft
            </p>
          </div>
          <div className="text-right">
            <h3 className="text-[#5B5C66] font-semibold text-lg">
              Join Our Newsletter
            </h3>
            <div className="flex items-center gap-2 justify-end my-4">
              <input
                type="text"
                placeholder="Jessica@email.com"
                className="bg-transparent rounded-lg border  max-w-[20rem] border-[#E5E5E5] w-full p-2 outline-none py-3"
              />
              <Button className={"rounded-3xl bg-[#32343F]"}  > Subscribe</Button>
            </div>
            <p className="text-[#ABABAB]">
              By clicking, you're agreeing to our Terms.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row  pb-10 mt-12 w-full gap-4">
          <ul className="flex items-center gap-6 border-b border-gray/25 w-full mb-4 pb-2">
            {navlist.map((nav, idx) => (
              <li
                onClick={(e) =>
                  idx === 1
                    ? menuRef.current?.openMenu(e.currentTarget)
                    : navigate(`/${nav === "home" ? "" : nav}`)
                }
                key={idx}
                className="capitalize font-medium flex items-center gap-2 cursor-pointer pb-4 md:pb-0"
              >
                {nav}
                {idx === 1 && <img src={arrowDownIcon} alt="arrow icon" />}
              </li>
            ))}
            <DropMenu list={["EB-1A", "EB-2 NIW", "O-1 Visa"]} ref={menuRef} />
          </ul>
          <div>
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a key={s} href="#" className="hover:underline">
                  <img src={s} alt={s} className="cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-center pb-2 -mt-4">
          <p className="text-[#84858C]">
            {"\u00A9"} 2025 Visaro Craft LLC - All Rights Reserved &bull; Terms
            &bull; Privacy
          </p>
        </div>
      </ContainerWidth>
    </div>
  );
};

export default Footer;
