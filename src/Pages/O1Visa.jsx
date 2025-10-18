import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Copy from "../Components/Copy";
import serviceImage from "../assets/Images/serviceImage3.png";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import HighlightsCard from "../Components/HighlightsCard";
import O1VisaExplained from "../Sections/O1VisaExplained";
import O1Requirements from "../Sections/O1Requirements";
import HowUscisDecidesO1visa from "../Sections/HowUscisDecidesO1visa";
import HowO1VisaWorks from "../Sections/HowO1VisaWorks";
import WhyVisaroCraftLLC from "../Sections/WhyVisaroCraftLLC";
import BluePrint3 from "../Components/BluePrint3";
import WhatYouGetO1Visa from "../Sections/WhatYouGetO1Visa";
import O1vEB1 from "../Sections/O1vEB1";
import AnswersToQuestion from "../Sections/AnswersToQuestion";
import Clients from "../Sections/Clients";
import Footer from "../Sections/Footer";
import { o1Visa } from "../data/questions";
import { Link } from "react-router-dom";

const highlightsDetais = [
  "O-1A & O-1B expertise",
  "Premium Processing (15 business days) ready",
  "Support letters & Advisory Opinion strategy",
  "Trusted by academics, creatives, and executives",
];
const O1Visa = () => {
  return (
    <div className="mt-5 md:mt-10">
      <ContainerWidth>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2  mb-[4rem] md:mb-[8rem]  px-4">
          <div>
            <Copy>
              <h1 className="text-[#090B19] font-semibold text-4xl md:text-[2.507rem] leading-snug">
                O-1 Visa: Work in the U.S. for Extraordinary Talent
              </h1>
            </Copy>
            <Copy>
              <p className="text-[#5B5C66] font-semibold mt-5 mb-2">
                Bring your talent to the U.S. without waiting for permanent
                residency.
              </p>
            </Copy>
            <Copy>
              <span className="text-[#84858C] text-base">
                We map your achievements to USCIS criteria and craft an
                approvable petition that highlights your top-tier impact.
              </span>
            </Copy>
            <motion.div
              className=" mt-10 md:mt-20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.25 }}
            >
              <Link to="/contact">
              <Button>Claim O-1 Eligibility Review</Button>
              </Link>
            </motion.div>
            <Copy>
              <p className="text-[#84858C] ">
                Includes criterion-by-criterion evaluation
                <span className="italic">$250</span>.
              </p>
            </Copy>
          </div>
          <motion.div
            className=" mb-6 place-content-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.25 }}
          >
            <img src={serviceImage} alt="A man in an office" />
          </motion.div>
        </div>
        <div className="px-4">
          <HighlightsCard highlightsDetais={highlightsDetais} />
        </div>
        <O1VisaExplained />
        <O1Requirements />
        <HowO1VisaWorks />
        <HowUscisDecidesO1visa />
        <WhyVisaroCraftLLC />
        <BluePrint3 />
        <WhatYouGetO1Visa />
        <O1vEB1 />
        <AnswersToQuestion visaro_questions={o1Visa} />
      </ContainerWidth>
      <Clients />
      <Footer />
    </div>
  );
};

export default O1Visa;
