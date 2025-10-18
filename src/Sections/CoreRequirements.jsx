import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import visaroWithoutText from "../assets/Images/Logo e.png";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const CoreRequirements = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>Core Requirements</Reveal>
        </h1>
        <p className="text-[#5B5C66] font-medium mt-10 md:mt-16">
          To qualify, you must meet two layers of eligibility:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-10 max-w-[1090px] mx-auto">
          <div className="bg-[#F5F5F5] py-10 md:px-6 rounded-2xl shadow-sm">
            <img src={visaroWithoutText} alt="Visaro logo"  className="max-w-16" />
            <h2 className="text-lg font-semibold text-[#090B19] mb-8 mt-10">
              1. Basic EB-2 Eligibility
            </h2>
            <ul className="space-y-4 list-disc pl-6 font-medium text-[#32343F] ">
              <li>Advanced degree (Master’s or higher), OR</li>
              <li>Bachelor’s degree + 5 years of progressive experience, OR</li>
              <li>
                Exceptional ability in sciences, arts, or business (shown by at
                least 3 of 7 regulatory criteria).
              </li>
            </ul>
          </div>
          <div className="bg-[#F5F5F5] px-4 md:px-6 py-10 rounded-2xl shadow-sm">
            <img src={visaroWithoutText} alt="Visaro logo"  className="max-w-16"  />
            <h2 className="text-lg font-semibold text-[#090B19] mb-8 mt-10">
              2. National Interest Waiver (NIW) Test
            </h2>
            <p className="font-medium text-[#32343F] mb-4">
              USCIS applies the Matter of Dhanasar (2016) Three-prong test:
            </p>
            <p className="font-medium text-[#32343F] mb-4">
              Examples Includes:
            </p>
            <h4 className="text-base font-medium text-[#32343F] mb-2">
              1 Substantial Merit & National Importance
            </h4>
            <p className="font-medium text-[#32343F]">
              <span className="mr-2">&bull;</span> Does your work address areas
              of significant U.S. need (e.g., public health, technology
              innovation, education reform, energy, national security, food
              systems)?
            </p>
            <h4 className="text-base font-medium text-[#32343F] mb-2 mt-6">
              2 Well Positioned to Advance Your Endeavor
            </h4>
            <p className="font-medium text-[#32343F]">
              <span className="mr-2">&bull;</span> Do your past record, skills,
              and trajectory show you can actually deliver results in the U.S.?
            </p>

            <h4 className="text-base font-medium text-[#32343F] mb-2 mt-6">
              2 Benefit of Waiving the Job Offer / PERM
            </h4>
            <p className="font-medium text-[#32343F]">
              <span className="mr-2">&bull;</span> Is it in the national
              interest to let you skip employer sponsorship and labor
              certification because the U.S. gains more from your contributions
              than from protecting the local labor market?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 md:mt-20">
          <Link to="/contact">
          <Button>Start My Eligibility Check</Button>
          </Link>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default CoreRequirements;
