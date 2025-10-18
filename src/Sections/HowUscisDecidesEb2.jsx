import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import usBadge from "../assets/Images/usBadge.svg";

const HowUscisDecidesEb2 = () => {
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
                  Evidence-driven:
                </span>
                The petition must show that your achievements and future plans
                directly connect to U.S. national priorities.
              </li>
              <li className="text-[#5B5C66] text-base md:text-xl pl-4 md:pl-10">
                <span className="text-[#32343F] font-semibold mr-1">
                  Forward-looking:
                </span>
                You need not prove past “extraordinary acclaim” (like EB-1A),
                but you must demonstrate future impact in the U.S.
              </li>
              <li className="text-[#5B5C66] text-base md:text-xl pl-4 md:pl-10">
                <span className="text-[#32343F] font-semibold mr-1">
                  Discretionary decision:
                </span>
                USCIS balances your evidence as a whole to decide if you clear
                the Dhanasar standard.
              </li>
            </ol>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default HowUscisDecidesEb2;
