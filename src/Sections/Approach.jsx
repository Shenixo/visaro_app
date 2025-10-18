import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import { motion } from "framer-motion";

const Approach = () => {
  return (
    <section className=" my-20 lg:my-[10rem] px-4">
      <ContainerWidth>
        <div className="grid grid-cols-1  lg:grid-cols-[30%_70%]">
          <div>
            <Reveal>
              <h1 className="text-black font-semibold text-[2rem] leading-none">
                Our <br /> Approach{" "}
              </h1>
            </Reveal>
          </div>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-4 mt-10 lg:mt-0">
              {approachDetails.map((d) => (
                <motion.li
                  key={d.id}
                  className="bg-[#F5F5F5] rounded-2xl p-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 * (d.id - 1),
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <span className="uppercase tracking-widest text-[#84858C] font-semibold text-xs ">
                    {d.subTitle}
                  </span>
                  <h4 className="text-xl font-bold mt-1 ">{d.title}</h4>
                  <p className="text-gray font-medium mt-10 md:mt-20">{d.details}</p>
                  <span className="absolute -top-12  text-[#e0e0e0] right-0 text-[7rem] font-bold">
                    {d.id}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default Approach;

const approachDetails = [
  {
    id: 1,
    subTitle: "Review",
    title: "Deep Case Review",
    details:
      "We analyze your credentials, achievements, and supporting evidence.",
  },
  {
    id: 2,
    subTitle: "Craft",
    title: "Strategic Petition Crafting",
    details: "We draft compelling narratives aligned with USCIS criteria.",
  },
  {
    id: 3,
    subTitle: "Organize",
    title: "Exhibit & Evidence Packaging",
    details: "We organize your documents to maximize clarity and impact.",
  },
  {
    id: 4,
    subTitle: "ready",
    title: "Submission Ready",
    details: "A petition that meets the highest standard of presentation.",
  },
];
