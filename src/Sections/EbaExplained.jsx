import React from "react";
import Reveal from "../Components/Reveal";
import ContainerWidth from "../Components/ContainerWidth";

const EbaExplained = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>What is the EB-1A</Reveal>
        </h1>
        <div className="mt-10 md:mt-16">
          <p className="text-[#5B5C66] font-medium">
            EB-1A is the Employment-Based First Preference green card category
            for people with extraordinary ability in the sciences, arts,
            education, business, or athletics. You can self-petition (no
            employer or labor certification required).
          </p>

          <p className="text-[#5B5C66] text-medium mt-6 mb-2">
            To qualify, you must show:
          </p>
          <ol className="text-[#32343F] font-semibold list-decimal list-inside leading-[1.7rem]">
            <li>
              Extraordinary ability demonstrated by sustained national or
              international acclaim, and
            </li>
            <li>
              You will continue working in your area of expertise in the U.S.,
              and
            </li>
            <li>Your entry will substantially benefit the United States.</li>
          </ol>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default EbaExplained;
