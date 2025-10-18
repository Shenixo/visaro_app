import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import usBadge from "../assets/Images/usBadge.svg";

const HowUscisDecidesO1visa = () => {
  return (
    <section className="my-10 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            How USCIS Decides
          </h1>
        </Reveal>
        <div className=" mt-10 md:mt-16 ">
          <div className="">
            <p className="text-[#5B5C66] font-semibold text-base md:text-xl">
              Like EB-1A, USCIS applies a Two-step Analysis:
            </p>
            <ol className=" space-y-4  font-medium list-decimal list-inside">
              <li className="text-[#5B5C66] mt-8 text-base md:text-xl pl-4 md:pl-10">
                <span className="text-[#32343F] font-semibold text-base md:text-xl mr-1">
                  Regulatory Evidence:
                </span>
                Does your documentation fit at least 3 of the required
                categories (or 1 major award)?
              </li>
              <li className="text-[#5B5C66] text-base md:text-xl pl-4 md:pl-10">
                <span className="text-[#32343F] font-semibold mr-1">
                  Final Merits:
                </span>
                Do you truly stand out as extraordinary compared to peers in
                your field?
              </li>
            </ol>
          </div>
          
        </div>
      </ContainerWidth>
    </section>
  );
};

export default HowUscisDecidesO1visa;
