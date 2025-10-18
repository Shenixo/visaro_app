import React from "react";
import Reveal from "../Components/Reveal";
import Copy from "../Components/Copy";
import ContainerWidth from "../Components/ContainerWidth";
import uscis from "../assets/Images/uscis.svg";
import Globe from "../assets/Images/Globe.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" my-10 lg:my-[10rem] px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>About Visaro</Reveal>
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10 md:mt-0">
          <motion.div
            className="w-full mx-auto max-w-[16rem] md:max-w-[25rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src={Globe} alt="globe with locatios marked" />
          </motion.div>
          <div
            className=" font-normal text-base md:text-lg place-content-center font-baseFont 
          "
          >
            <Copy>
              <p className="text-black mb-4 font-medium">
                Visaro Craft LLC was founded with one mission:
              </p>
              <span className="font-medium">
                To empower global talent by expertly crafting strong,
                persuasive, and approvable immigration petitions.
              </span>
              <p className="text-black mt-4 ">
                Our name combines <span className="italic">Visa and Arrow</span>
                , symbolizing clarity, direction, and precision.{" "}
              </p>
              <p className="text-black mt-4 ">
                We believe every client’s journey is unique, and so is every
                petition we write.
              </p>
              <p className="text-black mt-4 ">
                By combining deep understanding of USCIS requirements,
                professional writing, and strategic evidence organization, we
                transform your achievements into a petition that adjudicators
                cannot overlook.
              </p>
               <p className="text-black mt-4 ">
                This does not make us out as lawyers licensed to practice but shows that we have a deep understanding of the requirements which is available on the USCIS website to everyone the only difference is we understand it and we know how to carefully apply it to individual situations.
              </p>
            </Copy>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default About;
