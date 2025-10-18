import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import { motion } from "framer-motion";
import get1 from "../assets/Images/get7.png";
import get2 from "../assets/Images/get8.png";
import get3 from "../assets/Images/get9.png";
import get4 from "../assets/Images/get10.png";
import get5 from "../assets/Images/get11.png";
import get6 from "../assets/Images/get12.png";
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

const WhatYouGetO1Visa = () => {
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
                backgroundPosition: "top",
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
              <p className="text-white font-normal text-sm">{i.details}</p>
            </motion.li>
          ))}
        </ul>
      </ContainerWidth>
    </section>
  );
};

export default WhatYouGetO1Visa;

const whatYouGetDetails1 = [
  {
    id: 1,
    title: "O-1 Eligibility Matrix",
    details: "Criterion-by-criterion evaluation of your eligibility.",
    image: get1,
  },
  {
    id: 2,
    title: "Complete Exhibit Pack",
    details: "Guidance and templates for strong consultations.",
    image: get2,
  },
];

const whatYouGetDetails2 = [
  {
    id: 3,
    title: "Support Letters",
    details: "Clear, persuasive arguments aligned with USCIS standards.",
    image: get3,
  },
  {
    id: 4,
    title: "Advisory Opinion Preparation",
    details: "Prepared for faster approvals without delays.",
    image: get4,
  },
];

const whatYouGetDetails3 = [
  {
    id: 5,
    title: "Cover Letter & Petition Brief",
    image: get5,
  },
  {
    id: 6,
    title: "Premium Processing Readiness",
    image: get6,
  },
];
