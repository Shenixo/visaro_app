import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import { motion } from "framer-motion";
import get1 from "../assets/Images/get1.png";
import get2 from "../assets/Images/get2.png";
import get3 from "../assets/Images/get3.png";
import get4 from "../assets/Images/get4.png";
import get5 from "../assets/Images/get5.png";
import get6 from "../assets/Images/get6.png";
import Reveal from "../Components/Reveal";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhatYouGetEb2 = () => {
  return (
    <section className="my-10 lg:my-[10rem] px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            What Strong EB-1A Evidence Looks Like
          </h1>
        </Reveal>

        {/* First Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-6 mt-10 md:mt-16 overflow-hidden">
          {whatYouGetDetails1.map((i) => (
            <motion.li
              key={i.id}
              custom={i.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            className=" h-[18rem] md:h-[25rem] relative rounded-2xl shadow-md overflow-hidden"
              style={{
                backgroundImage: `url(${i.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
              <h2 className="absolute bottom-6 left-6 right-6 text-white text-xl font-semibold leading-snug drop-shadow-lg">
                {i.title}
              </h2>
            </motion.li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-6 mt-4 md:mt-6 overflow-hidden">
          {whatYouGetDetails2.map((i) => (
            <motion.li
              key={i.id}
              custom={i.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            className=" h-[18rem] md:h-[25rem] relative rounded-2xl shadow-md overflow-hidden"
              style={{
                backgroundImage: `url(${i.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
              <h2 className="absolute bottom-6 left-6 right-6 text-white text-xl font-medium leading-snug drop-shadow-lg">
                {i.title}
              </h2>
            </motion.li>
          ))}
        </ul>

        {/* Third Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-6 mt-4 md:mt-6 overflow-hidden">
          {whatYouGetDetails3.map((i) => (
            <motion.li
              key={i.id}
              custom={i.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            className=" h-[18rem] md:h-[25rem] relative rounded-2xl shadow-md overflow-hidden"
              style={{
                backgroundImage: `url(${i.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
              <h2 className="absolute bottom-6 left-6 right-6 text-white text-xl font-semibold leading-snug drop-shadow-lg">
                {i.title}
              </h2>
            </motion.li>
          ))}
        </ul>
      
      </ContainerWidth>
    </section>
  );
};

export default WhatYouGetEb2;

const whatYouGetDetails1 = [
  {
    id: 1,
    title: "Prong-by-Prong Petition Brief tied to Dhanasar",
    image: get1,
  },
  {
    id: 2,
    title:
      "Exhibit Pack with provenance evidence (publications, reports, contracts, patents)",
    image: get2,
  },
];

const whatYouGetDetails2 = [
  {
    id: 3,
    title: "Letters of Support (U.S. & international experts)",
    image: get3,
  },
  {
    id: 4,
    title: "National Interest Narrative Memo",
    image: get4,
  },
];

const whatYouGetDetails3 = [
  {
    id: 5,
    title: "Filing cover letter & I-140 assembly",
    image: get5,
  },
  {
    id: 6,
    title: "Guidance on I-485 vs. consular path",
    image: get6,
  },
];
