import React from "react";
import Reveal from "../Components/Reveal";
import ContainerWidth from "../Components/ContainerWidth";
import Button from "../Components/Button";

const O1VisaExplained = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>What is the O-1 Visa?</Reveal>
        </h1>
        <div className="mt-10 md:mt-16">
          <p className="text-[#5B5C66] font-medium">
            The O-1 Visa is a temporary work visa for individuals with
            Extraordinary Ability or Achievement in the Sciences, Arts,
            Education, Business, Athletics, or the Motion Picture/Television
            Industry.
          </p>

          <ol className="text-[#32343F] font-semibold list-decimal list-inside leading-[1.7rem] my-6">
            <li>O-1A: For individuals in Science, Education, Business, or Athletics.</li>
            <li>O-1B: For individuals in the Arts, Motion Picture, or Television Industry.</li>
          </ol>
          <p className="text-[#5B5C66] text-medium ">
            The O-1 Visa is valid for the duration of the Event or Engagement (up to 3 years initially), with 1-year extensions available. You must have a U.S. Petitioner (Employer or Agent) file on your behalf.
          </p>
              </div>
                <div className="flex items-center justify-center mt-10 md:mt-20">
            <Button>Start My Eligibility Check</Button>
          </div>
      </ContainerWidth>
    </section>
  );
};

export default O1VisaExplained;
