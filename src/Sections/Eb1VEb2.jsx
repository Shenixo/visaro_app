import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import visaroWithoutText from "../assets/Images/visaroWithoutText.svg";
import blueprint1 from "../assets/Images/blueprint.png";
import blueprint2 from "../assets/Images/blueprint2.png";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Eb1VEb2 = () => {
  return (
    <section className="my-10 lg:my-[10rem] px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            EB-2 NIW vs EB-1A
          </h1>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-10 mt-10">
          <div className="bg-[#F5F5F5] py-10 px-4 md:px-6 rounded-2xl shadow-sm">
            <img src={visaroWithoutText} alt="Visaro logo" />
            <h2 className="text-lg font-semibold text-[#090B19] mb-4 mt-5 md:mt-10">
              EB-2 NIW
            </h2>
            <img src={blueprint2} alt="Eb-2 document" />
            <ul className="text-[#32343F] space-y-4 list-disc list-inside">
              <li className="mt-6 font-medium text-[#32343F]">
                Focused on extraordinary acclaim (past recognition, sustained at
                top of field).
              </li>
              <li className="font-medium text-[#32343F]">
                If you already have top-tier acclaim, EB-1A can be faster.
              </li>
            </ul>
          </div>
          <div className="bg-[#F5F5F5] py-10 px-4 md:px-6 rounded-2xl shadow-sm">
            <img src={visaroWithoutText} alt="Visaro logo" />
            <h2 className="text-lg font-semibold text-[#090B19] mb-4 mt-5 md:mt-10">
              EB-2 NIW
            </h2>
            <img src={blueprint1} alt="Eb-1A document" />
            <ul className="text-[#32343F] space-y-4 list-disc list-inside">
              <li className="mt-6 font-medium text-[#32343F]">
                Focused on future national benefit (how your work serves U.S.
                priorities).
              </li>
              <li className="font-medium text-[#32343F]">
                If your record is strong but not “extraordinary,” NIW may be the
                more strategic route
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 md:mt-20">
          <Link to="/contact">
            <Button className={"px-12"}>Let's get Started</Button>
          </Link>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default Eb1VEb2;
