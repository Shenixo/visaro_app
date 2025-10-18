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

const WhatYouGet = () => {
  return (
    <section className="my-10 lg:my-[10rem] px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            What Strong EB-1A Evidence Looks Like
          </h1>
        </Reveal>

        {/* First Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:gap-6 mt-10 md:mt-16">
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
        <h2 className="text-red-600 font-semibold text-xl mt-16">
          <span className="mr-1">⚠</span> IMPORTANT
        </h2>
        <ul className="text-[#5B5C66] text-base md:text-xl font-medium  pl-6 space-y-1 mt-4 overflow-hidden">
          <li>
            <span className="mr-5 inline-block">&bull;</span>
            Visaro Craft LLC provides high-level petition strategy,
            documentation drafting, and assembly.
          </li>
          <li>
            <span className="mr-5 inline-block">&bull;</span>
            We are not a law firm and do not provide legal representation.
          </li>
          <li>
            <span className="mr-5 inline-block">&bull;</span>
            If you need an attorney of record (Form G-28), we coordinate
            smoothly with your counsel.
          </li>
        </ul>
      </ContainerWidth>
    </section>
  );
};

export default WhatYouGet;

const whatYouGetDetails1 = [
  {
    id: 1,
    title: "EB-1A Eligibility Matrix (criterion-by-criterion scorecard)",
    image: get1,
  },
  {
    id: 2,
    title: "Evidence Index & Exhibit Pack (with provenance notes & labels)",
    image: get2,
  },
];

const whatYouGetDetails2 = [
  {
    id: 3,
    title: "Up to 8 tailored expert letters (independent and dependent)",
    image: get3,
  },
  {
    id: 4,
    title:
      "Criterion briefs + Final Merits memorandum aligned to USCIS language",
    image: get4,
  },
];

const whatYouGetDetails3 = [
  {
    id: 5,
    title: "Filing cover letter & forms guidance (I-140; I-485/DS-260)",
    image: get5,
  },
  {
    id: 6,
    title: "RFE-ready file with draft responses prepared in advance",
    image: get6,
  },
];
