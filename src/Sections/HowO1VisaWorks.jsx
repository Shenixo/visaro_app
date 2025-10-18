import React from "react";
import Reveal from "../Components/Reveal";
import ContainerWidth from "../Components/ContainerWidth";
import { motion } from "framer-motion";

const HowO1VisaWorks = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            How It Works
          </h1>
        </Reveal>
        <ul className="mt-10 md:mt-16 grid grid-cols-1  md:grid-cols-3 gap-6 ">
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
      </ContainerWidth>
    </section>
  );
};

export default HowO1VisaWorks;

const worksData = [
  {
    title: "Petitioner",
    desc: "A U.S. employer, U.S. agent, or U.S. sponsoring organization must file Form I-129 with USCIS on your behalf.",
  },
  {
    title: "Advisory Opinion",
    desc: "Required written consultation from a peer group, labor organization, or expert in your field. your behalf.",
  },
  {
    title: "Initial Stay",
    desc: "Up to 3 years, covering the specific event, tour, or employment.",
  },
  {
    title: "Extensions",
    desc: "Granted in 1-year increments for ongoing projects.",
  },
  {
    title: "Premium Processing",
    desc: "Available (15 business days).",
  },
  {
    title: "Dependents",
    desc: "Spouse and children under 21 may apply for O-3 visas (not work-authorized, but can study).",
  },
];
