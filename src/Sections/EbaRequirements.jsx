import React from "react";
import Reveal from "../Components/Reveal";
import ContainerWidth from "../Components/ContainerWidth";
import visaroLogo from "../assets/Images/Logo e.png";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const EbaRequirements = () => {
  return (
    <section className="my-20 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>EB-1A Requirements</Reveal>
        </h1>
        <div className="mt-10">
          <p className="text-[#5B5C66] font-medium">
            You may qualify by one-time achievement (a major internationally
            recognized award), or by meeting at least 3 of 10 types of evidence
            below (with “comparable evidence” allowed where appropriate):
          </p>

          <div className="rounded-lg py-10 px-6 bg-[#F5F5F5] shadow-sm w-full max-w-[32.2rem] mx-auto mt-10 md:mt-16">
            <img src={visaroLogo} alt="visaro logo" className="max-w-16" />
            <h2 className="text-[#090B19]  text-lg font-bold  my-6 mt-4">
              EB-1A (Extraordinary Ability)
            </h2>
            <ol className="text-[#32343F] font-semibold list-decimal list-inside  space-y-6">
              <li>
                Lesser nationally or internationally recognized prizes/awards
              </li>
              <li>
                Memberships in associations requiring outstanding achievement.
              </li>
              <li>
                Published material about you in major media or trade journals.
              </li>
              <li>Judging the work of others (panel or individual).</li>
              <li>
                Original contributions of major significance in the field.
              </li>
              <li>Authorship of scholarly articles.</li>
              <li>Artistic exhibitions/showcases (arts).</li>
              <li>Leading/critical role for distinguished organizations.</li>
              <li>
                High salary or remuneration relative to others in the field.
              </li>
              <li>
                Commercial successes in the performing arts (box office, sales).
              </li>
            </ol>
          </div>
          <p className="text-[#5B5C66] font-semibold mt-10 mb-12 md:mb-20">
            You must also prove you’ll continue working in your field and that
            your work will benefit the U.S.
          </p>
          <div className="flex items-center justify-center mt-10 md:mt-20">
            <Link to="/contact">
              <Button>Start My Eligibility Check</Button>
            </Link>
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default EbaRequirements;
