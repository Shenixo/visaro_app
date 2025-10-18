import React from "react";
import Reveal from "../Components/Reveal";
import ContainerWidth from "../Components/ContainerWidth";
import { motion } from "framer-motion";


const HowEb2Works = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            How It Works
          </h1>
        </Reveal>
        <ul className="mt-10 md:mt-16 grid grid-cols-1  md:grid-cols-3 gap-4 ">
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
              <p className="text-[#84858C] mt-10 md:mt-16">{w.desc}</p>
            </motion.li>
          ))}
        </ul>

        <p className="font-medium text-[#5B5C66] mt-10 mb-4">Why It matters:</p>
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
              <p className="text-[#84858C] mt-8 md:mt-16">{w.desc}</p>
            </motion.li>
          ))}
        </ul>
      </ContainerWidth>
    </section>
  );
};

export default HowEb2Works;

const worksData = [
  {
    title: "Core Petition",
    desc: "Form I-140 (Immigrant Petition for Alien Worker). You can self-petition.",
  },
  {
    title: "Inside the U.S",
    desc: "If the EB-2 category is current for you, you may be able to file I-485 Adjustment of Status concurrently (plus I-765 for work permit and I-131 for travel).",
  },
  {
    title: "Outside the U.S.",
    desc: "After I-140 approval, you proceed via consular processing.",
  },
];

const itMatters = [
  {
    title: "Premium Processing",
    desc: "USCIS allows Premium Processing for NIW petitions, generally with a 45-calendar-day timeline. (Always check USCIS for current fees and timing.)",
  },
  {
    title: "Visa Bulletin Check",
    desc: "Because EB-2 is not always “current,” timing depends on your country of chargeability.",
  },
];
