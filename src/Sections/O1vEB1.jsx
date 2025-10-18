import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import visaroWithoutText from "../assets/Images/visaroWithoutText.svg";
import blueprint1 from "../assets/Images/blueprint.png";
import blueprint2 from "../assets/Images/blueprint3.png";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const O1vEB1 = () => {
  return (
    <section className="my-10 lg:my-[10rem] px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            O-1 vs EB-1A
          </h1>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-10 mt-10">
          <div className="bg-[#F5F5F5] py-10 px-4 md:px-6 rounded-2xl shadow-sm">
            <img src={visaroWithoutText} alt="Visaro logo" />
            <h2 className="text-lg font-semibold text-[#090B19] mb-4 mt-10">
              O-1: Non-Immigrant
            </h2>
            <img src={blueprint2} alt="Eb-2 document" />
            <ul className="text-[#32343F] space-y-4 list-disc list-inside">
              <li className="mt-6 font-medium text-[#32343F]">Temporary</li>
              <li className="font-medium text-[#32343F]">
                Requires a U.S. Petitioner/Agent
              </li>
              <li>Faster Entry to U.S. for Short-Term or Project-Based Work</li>
            </ul>
          </div>
          <div className="bg-[#F5F5F5] py-10 px-4  md:px-6 rounded-2xl shadow-sm">
            <img src={visaroWithoutText} alt="Visaro logo" />
            <h2 className="text-lg font-semibold text-[#090B19] mb-4 mt-10">
              EB-1A: Immigrant
            </h2>
            <img src={blueprint1} alt="Eb-1A document" />
            <ul className="text-[#32343F] space-y-4 list-disc list-inside">
              <li className="mt-6 font-medium text-[#32343F]">Green Card</li>
              <li className="font-medium text-[#32343F]">
                Self-Petition Possible
              </li>
              <li>No Employer Needed</li>
              <li>Long-Term Residence Option</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center mt-10 md:mt-20 gap-4">
          <p className="text-center text-xs text-[#84858C]">
            Many clients use O-1 as a stepping stone towards EB-1A or EB-2 NIW
            once they establish a stronger U.S. record.
          </p>
          <Link to="/contact">
            <Button className={"px-12"}>Book a Pathway Call</Button>
          </Link>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default O1vEB1;
//