import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Copy from "../Components/Copy";
import Button from "../Components/Button";
import { motion } from "framer-motion";
import serviceImage1 from "../assets/Images/serviceImage1.png";
import HighlightsCard from "../Components/HighlightsCard";
import EbaExplained from "../Sections/EbaExplained";
import EbaRequirements from "../Sections/EbaRequirements";
import HowUscisDecides from "../Sections/HowUscisDecides";
import HowItWorks from "../Sections/HowItWorks";
import StrongEvidence from "../Sections/StrongEvidence";
import WhyVisaroCraftLLC from "../Sections/WhyVisaroCraftLLC";
import BluePrints from "../Components/BluePrints";
import WhatYouGet from "../Sections/WhatYouGet";
import AnswersToQuestion from "../Sections/AnswersToQuestion";
import { visaro_questions2 } from "../data/questions";
import Clients from "../Sections/Clients";
import StartWithUs from "../Sections/StartWithUs";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";
import { Link } from "react-router-dom";

const highlightsDetais = [
  "EB-1A expertise",
  "Premium Processing ready",
  "Support letters & Advisory Opinion strategy",
  "Trusted by academics, creatives, and executives",
];
const Eb1A = () => {
  return (
     <div className="mt-5 md:mt-10">
      <ContainerWidth>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-[4rem] md:mb-[8rem] px-4">
          <div>
            <Copy>
              <h1 className="text-[#090B19] font-semibold text-4xl md:text-[2.507rem] leading-snug">
                EB-1A (Extraordinary Ability)
              </h1>
            </Copy>
            <Copy>
              <p className="text-[#5B5C66] font-semibold mt-5 mb-2">
                Turn your record of excellence into a U.S. green card strategy.
              </p>
            </Copy>
            <Copy>
              <span className="text-[#84858C] text-base">
                We crafts evidence-driven EB-1A petitions that map your
                achievements to USCIS criteria, build a persuasive final-merits
                narrative, and anticipate adjudicator questions—so your case is
                presented at its strongest from day one.
              </span>
            </Copy>
            <motion.div
              className=" mt-10 md:mt-20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.25 }}
            >
              <Link to="/contact">
              <Button>Claim EB-1A Eligibility Review</Button>
              </Link>
            </motion.div>
            <Copy>
              <p className="text-[#84858C] ">
                Includes criterion-by-criterion evaluation —{" "}
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
            <img src={serviceImage1} alt="A man in an office" />
          </motion.div>
        </div>
        <div className="px-4">
          <HighlightsCard highlightsDetais={highlightsDetais} />
        </div>
        <EbaExplained />
        <EbaRequirements />
        <HowUscisDecides />
        <HowItWorks />
        <StrongEvidence />
        <WhyVisaroCraftLLC />
        <BluePrints />
        <WhatYouGet />
        <AnswersToQuestion visaro_questions={visaro_questions2} />
        <Clients />
        <StartWithUs />
        <Contact />
      </ContainerWidth>
      <Footer />
    </div>
  );
};

export default Eb1A;
