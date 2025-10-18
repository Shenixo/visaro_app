import React from "react";
import Reveal from "../Components/Reveal";
import ContainerWidth from "../Components/ContainerWidth";
import { motion } from "framer-motion";
import europe from "../assets/Images/europe.svg";
import others from "../assets/Images/others.svg";

const HowItWorks = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            How It Works
          </h1>
        </Reveal>
        <ul className="mt-10 md:mt-16 grid grid-cols-1  md:grid-cols-3 gap-6">
          {worksData.map((w, i) => (
            <motion.li
              key={i}
              className="bg-[#F5F5F5] rounded-2xl shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-black font-bold text-lg">
                {i + 1} {w.title}
              </h3>
              <p className="text-[#84858C] mt-8 md:mt-16">{w.desc}</p>
            </motion.li>
          ))}
        </ul>

        <p className="font-medium text-[#5B5C66] mt-10 mb-4">Why It matter:</p>
        <ul className=" grid grid-cols-1 md:grid-cols-3 gap-6">
          {itMatters.map((w, i) => (
            <motion.li
              key={i}
              className="bg-[#F5F5F5] rounded-2xl shadow-sm p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-black font-bold text-lg">
                {i + 1} {w.title}
              </h3>
              <p className="text-[#84858C] mt-16">{w.desc}</p>
              <img src={w.image} alt="Continent" className="absolute top-0 right-0" />
            </motion.li>
          ))}
        </ul>
      </ContainerWidth>
    </section>
  );
};

export default HowItWorks;

const worksData = [
  {
    title: "Core Petition",
    desc: "Form I-140 (Immigrant Petition for Alien Worker). You can self-petition.",
  },
  {
    title: "Premium Processing",
    desc: "USCIS offers Premium Processing for I-140 petitions, with a 15 business-day adjudication clock for most subcategories. (Always check USCIS for current fees and timelines.)",
  },
  {
    title: "Processing times",
    desc: "Fluctuate depending on caseload—always verify with USCIS before filing.",
  },
];

const itMatters = [
  {
    image: europe,
    title: "Inside the U.S",
    desc: "If the EB-1 category is “current” for you, you may file I-485 (Adjustment of Status) concurrently with the I-140 (plus I-765 for work authorization and I-131 for travel).",
  },
  {
    image: others,
    title: "Outside the U.S",
    desc: "After I-140 approval, you complete consular processing through the National Visa Center and a U.S. Embassy/Consulate.",
  },
];
