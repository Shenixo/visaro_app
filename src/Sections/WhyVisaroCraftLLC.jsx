import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import bulls_eye from "../assets/Images/bulls_eye.svg";
import verified from "../assets/Images/verified.svg";
import search from "../assets/Images/search.svg";
import agree from "../assets/Images/agree.svg";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const WhyVisaroCraftLLC = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            Why Visaro Craft LLC
          </h1>
        </Reveal>
        <div className="mt-10 ">
          <p className="text-[#5B5C66] font-medium">
            We’re builders, analysts, and storytellers. Our approach is
            engineered around USCIS’s two-step adjudication and the exact
            language officers use to decide EB-1A cases.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ">
            {perksData.map((d, idx) => (
              <motion.li
                key={idx}
                className="bg-[#FAFAFA] shadow-sm rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 * (d.id - 1),
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                <span className="bg-[#D5D7E5] p-2 rounded-md shadow-sm flex items-center justify-center w-10 h-10">
                  <img src={d.icon} alt="" />
                </span>
                <h2 className="text-lg font-semibold text-black mt-4">
                  {d.title}
                </h2>
                <p className="text-[#84858C] text-sm">{d.details}</p>
              </motion.li>
            ))}
          </ul>
          <div className="mt-14" />
          <Link to="/contact">
          <Button>Book Your Consultation</Button>
          </Link>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default WhyVisaroCraftLLC;

const perksData = [
  {
    icon: verified,
    title: "Specialized Strategy",
    details: "Focused on EB-1A, EB-2 NIW, and O-1 petitions only.",
  },
  {
    icon: bulls_eye,
    title: "Story telling with Precision",
    details: "We creaft petitions that read convincingly, not mechanically",
  },
  {
    icon: search,
    title: "Evidence Strategy",
    details: "We kow what USCIS looks for, and we present it clearly.",
  },
  {
    icon: agree,
    title: "End-to-End Support",
    details: "From Initial strategy to submission-ready binders",
  },
];
