import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import ServiceMarquee from "../Components/ServiceMarquee";

const Serve = () => {
  return (
    <section className=" my-20 lg:my-[10rem] ">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] px-4">
          <Reveal>Who We Serve</Reveal>
        </h1>
      </ContainerWidth>
      <ServiceMarquee />
    </section>
  );
};

export default Serve;
