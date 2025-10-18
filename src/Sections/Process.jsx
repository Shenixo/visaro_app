import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import processImage from "../assets/Images/process.png";
import ProcessSteps from "../Components/ProcessSteps";
import Button from "../Components/Button";

const Process = () => {
  return (
    <section className=" my-20 md:my-[10rem] px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>The Visaro Process</Reveal>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <div>
            <ProcessSteps />
            <Button>Power Your Petition Today</Button>
          </div>
          <div className="place-content-center mt-10 lg:mt-0">
            <img
              src={processImage}
              alt="Image of a man and woman talking about the process of visaro"
              className="w-full h-full rounded-lg max-w-full lg:max-w-[46rem] max-h-[32rem] shadow-sm object-center object-cover"
            />
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default Process;
