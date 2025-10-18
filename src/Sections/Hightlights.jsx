import React from "react";
import Reveal from "../Components/Reveal";
import ContainerWidth from "../Components/ContainerWidth";
import HighlightsCard from "../Components/HighlightsCard";


const highlightsDetais = [
  "100% Tailored Petition Writing",
  "Specialized in EB-1A, EB-2 NIW, and O-1 Visas",
  "Proven Track Record with Academics & Professionals",
  "Evidence Strategy + Document Packaging",
];
const Hightlights = () => {
  return (
    <section className="my-10 lg:my-[10rem] pb-20 px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>Our Highlights</Reveal>
        </h1>
        <HighlightsCard highlightsDetais={highlightsDetais} />
      </ContainerWidth>
    </section>
  );
};

export default Hightlights;
