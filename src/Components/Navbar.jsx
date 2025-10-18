import React, { useState } from "react";
import visaroLogo from "../assets/Images/Logo b.png";
import Navlist from "./Navlist";
import Button from "./Button";
import ContainerWidth from "./ContainerWidth";
import MenuButton from "./MenuButton";
import TopBar from "./TopBar";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div>
      <ContainerWidth>
        <div className="flex items-center justify-between px-4 py-8">
          <img
            src={visaroLogo}
            alt="Visaro logo craft"
            className=" w-24 md:w-full max-w-[113px]"
          />
          <div className="hidden md:flex">
            <Navlist />
          </div>
          <div className="hidden md:inline-block ">
            <Button>Create an Account</Button>
          </div>
          <div className="inline-block md:hidden">
            <MenuButton
              setOpenSidebar={setOpenSidebar}
              openSidebar={openSidebar}
            />
            <TopBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          </div>
        </div>
      </ContainerWidth>
    </div>
  );
};

export default Navbar;
