import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import usBadge from "../assets/Images/usBadge.svg";

const HowUscisDecides = () => {
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
              USCIS evaluates EB-1A in two steps:
            </p>
            <ol className=" space-y-4  font-medium list-decimal list-inside">
              <li className="text-[#5B5C66] mt-4 md:mt-8 text-base md:text-xl pl-4 md:pl-10">
                <span className="text-[#32343F] font-semibold text-base md:text-xl mr-1">
                  Regulatory Check:
                </span>
                Does each piece of evidence objectively fit a criterion (by the
                preponderance of the evidence)?
              </li>
              <li className="text-[#5B5C66] text-base md:text-xl pl-4 md:pl-10">
                <span className="text-[#32343F] font-semibold mr-1">
                  Final Merits:
                </span>
                Looking at the totality, does your record show sustained acclaim
                and place you among the very top of the field?
              </li>
            </ol>
            <p className="text-[#5B5C66] font-semibold text-base md:text-xl mt-10">
              This “Kazarian” two-part review is central to EB-1A strategy and
              to how Visaro Craft LLC structures your petition.
            </p>
          </div>
      
        </div>
      </ContainerWidth>
    </section>
  );
};

export default HowUscisDecides;
