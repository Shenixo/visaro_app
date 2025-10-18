import React from "react";
import { motion } from "framer-motion";
import ContainerWidth from "../Components/ContainerWidth";
import Copy from "../Components/Copy";
import Button from "../Components/Button";
import serviceImage from "../assets/Images/serviceImage2.png";
import HighlightsCard from "../Components/HighlightsCard";
import Eb2Explained from "../Sections/Eb2Explained";
import CoreRequirements from "../Sections/CoreRequirements";
import HowUscisDecidesEb2 from "../Sections/HowUscisDecidesEb2";
import NiwProfiles from "../Sections/NiwProfiles";
import HowEb2Works from "../Sections/HowEb2Works";
import WhyVisaroCraftLLC from "../Sections/WhyVisaroCraftLLC";
import BluePrints from "../Components/BluePrints";
import BluePrints2 from "../Components/BluePrints2";
import WhatYouGetEb2 from "../Sections/WhatYouGetEb2";
import Eb1VEb2 from "../Sections/Eb1VEb2";
import AnswersToQuestion from "../Sections/AnswersToQuestion";
import { eb2Questions } from "../data/questions";
import Clients from "../Sections/Clients";
import StartWithUs from "../Sections/StartWithUs";
import Contact from "../Sections/Contact";
import Broadcast from "../Sections/Broadcast";
import Footer from "../Sections/Footer";
import { Link } from "react-router-dom";
const highlightsDetais = [
  "NIW specialists",
  "Dhanasar prong-by-prong expertise",
  "Exhibit pack & expert letters",
  "Premium Processing available",
];
const Eb2Nw = () => {
  return (
   <div className="mt-5 md:mt-10">
      <ContainerWidth>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2  mb-[4rem] md:mb-[8rem]  px-4">
          <div>
            <Copy>
              <h1 className="text-[#090B19] font-semibold text-4xl md:text-[2.507rem] leading-snug">
                EB-2 NIW: National Interest Waiver
              </h1>
            </Copy>
            <Copy>
              <p className="text-[#5B5C66] font-semibold mt-5 mb-2">
                Turn your expertise into a pathway to permanent U.S. residence.
              </p>
            </Copy>
            <Copy>
              <span className="text-[#84858C] text-base">
                We craft NIW petitions that align your work with U.S. national
                priorities and build a Dhanasar-ready case for waiver of the job
                offer and PERM.
              </span>
            </Copy>
            <motion.div
             className=" mt-10 md:mt-20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.25 }}
            >
              <Link to="/contact">
              <Button>Claim NIW Strategy Review</Button>
              </Link>
            </motion.div>
            <Copy>
              <p className="text-[#84858C] ">
                Includes prong-by-prong evaluation —
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
        <Eb2Explained />
        <CoreRequirements />
        <HowUscisDecidesEb2 />
        <NiwProfiles />
        <HowEb2Works />
        <WhyVisaroCraftLLC />
        <BluePrints2 />
        <WhatYouGetEb2 />
        <Eb1VEb2 />
        <AnswersToQuestion visaro_questions={eb2Questions} />
        <Clients />
        <StartWithUs
          main="Start Your NIW Journey"
          details="Send us your CV, project proposal, and any publications or press. We’ll return a Dhanasar prong-by-prong evaluation, highlight evidence gaps, and outline a petition strategy tailored to your field."
        />
        <Contact />
        <Broadcast />
        <Footer />
      </ContainerWidth>
    </div>
  );
};

export default Eb2Nw;
