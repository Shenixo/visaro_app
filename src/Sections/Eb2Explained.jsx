import React from "react";
import Reveal from "../Components/Reveal";
import ContainerWidth from "../Components/ContainerWidth";

const Eb2Explained = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>What is EB-2 NIW?</Reveal>
        </h1>
        <div className="mt-10 md:mt-16">
          <p className="text-[#5B5C66] font-medium">
            TEB-2 NIW stands for Employment-Based Second Preference, National
            Interest Waiver. Unlike a standard EB-2 petition, you do not need an
            employer sponsor or PERM labor certification. Instead, you can
            self-petition if you show that your work is of substantial merit and
            national importance, and that granting you a green card without a
            job offer is in the U.S. national interest.
          </p>

          <p className="text-[#5B5C66] text-medium mt-6 mb-2">
            This makes NIW especially attractive for:
          </p>
          <ol className="text-[#32343F] font-semibold list-decimal list-inside leading-[1.7rem]">
            <li>Entrepreneurs & Innovators</li>
            <li>Researchers & Academics</li>
            <li>Healthcare Professionals</li>
            <li>
              Professionals in Tech, Education, Clean energy, Food security, and
              other priority sectors
            </li>
          </ol>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default Eb2Explained;
