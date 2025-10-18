import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import visaroWithoutText from "../assets/Images/Logo e.png";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const O1Requirements = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>0-1 Requirements</Reveal>
        </h1>
        <p className="text-[#5B5C66] font-medium mt-10 md:mt-16">
          USCIS looks for sustained national or international recognition. You
          must provide evidence of a major internationally recognized award
          (e.g., Nobel Prize, Academy Award), or at least 3 of the following
          (O-1A and O-1B differ slightly):
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-10 max-w-[1090px] mx-auto">
          <div className="bg-[#F5F5F5] py-10 md:px-6 rounded-2xl shadow-sm">
            <img src={visaroWithoutText} alt="Visaro logo" className="max-w-16"  />
            <h2 className="text-lg font-semibold text-[#090B19] mb-8 mt-10">
              O-1A (Science, Business, Education, Athletics)
            </h2>
            <ul className="space-y-4 list-disc pl-6 font-medium text-[#32343F] ">
              <li>Receipt of prizes or awards for excellence.</li>
              <li>
                Memberships in associations requiring outstanding achievement.
              </li>
              <li>
                Published material about you in professional or major trade
                publications.
              </li>
              <li>Judging the work of others.</li>
              <li>
                Original contributions of major significance in the field.
              </li>
              <li>Authorship of scholarly articles.</li>
              <li>Critical/essential role in distinguished organizations.</li>
              <li>High salary or remuneration compared to peers.</li>
            </ul>
          </div>
          <div className="bg-[#F5F5F5] px-4 md:px-6 py-10 rounded-2xl shadow-sm">
            <img src={visaroWithoutText} alt="Visaro logo"  className="max-w-16"  />
            <h2 className="text-lg font-semibold text-[#090B19] mb-8 mt-10">
              O-1B (Arts, Film, Television)
            </h2>
            <p className="font-medium text-[#32343F] mb-4">
              Evidence of distinction in the arts, or extraordinary achievement
              in film/TV.
            </p>
            <p className="font-medium text-[#32343F] mb-4">
              Examples Includes:
            </p>

            <ul className="space-y-4 list-disc pl-6 font-medium text-[#32343F] ">
              <li>Lead roles in distinguished productions.</li>
              <li>
                Memberships in associations requiring outstanding achievement.
              </li>
              <li>
                National or international recognition (reviews, press, media).
              </li>
              <li>Judging the work of others.</li>
              <li>Major awards or nominations (Grammy, Emmy, etc.).</li>
              <li>Authorship of scholarly articles.</li>
              <li>Box office success or commercial recognition.</li>
            </ul>
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

export default O1Requirements;
