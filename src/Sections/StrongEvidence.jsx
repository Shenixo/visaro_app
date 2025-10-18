import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import strongEvidence from "../assets/Images/strongEvidence.png";

const StrongEvidence = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            What Strong EB-1A Evidence Looks Like
          </h1>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 md:mt-16">
          <div className="text-right flex items-center justify-center">
            <img
              src={strongEvidence}
              alt="US Department of security homeland"
              className="rounded-2xl shadow-sm"
            />
          </div>
          <div className="">
            <p className="text-[#5B5C66] font-semibold text-base md:text-xl">
              USCIS Policy Manual guidance and AAO decisions emphasize quality
              over quantity:
            </p>
            <ul className=" space-y-4 md:space-y-8 font-medium list-decimal list-inside">
              <li className="text-[#32343F] font-semibold  mt-4 md:mt-8 text-base md:text-xl pl-4 md:pl-10">
                Detailed, corroborated documentation
              </li>
              <li className="text-[#32343F] font-semibold  mt-8 text-base md:text-xl pl-4 md:pl-10">
                Third-party Validation
              </li>
              <li className="text-[#32343F] font-semibold  mt-8 text-base md:text-xl pl-4 md:pl-10">
                Clear impact metrics (citations, commercialization data,
                adoption by leaders, audience reach, revenues, rankings, etc.)
              </li>
            </ul>
            <p className="text-[#5B5C66] font-semibold text-base md:text-xl mt-10">
              Letters of support help most when they provide specifics tied to
              independent proof, not just praise.
            </p>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default StrongEvidence;
