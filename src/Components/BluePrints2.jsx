import React from "react";
import visaroWithoutText from "../assets/Images/Logo e.png";
import bluePrint from "../assets/Images/blueprint2.png";

const BluePrints2 = () => {
  return (
    <div>
      <div className="bg-white shadow-xl border border-[#F5F5F5] rounded-2xl max-w-[750px] mx-auto p-8 py-10">
        <div className="flex-col items-center justify-center text-center gap-4">
          <div className="flex items-center justify-center ">
            <img src={visaroWithoutText} alt="Visaro logo" className="max-w-16"  />
          </div>
          <h1 className="text-[2rem] font-semibold text-[#090B19] mt-4 mb-6">
            Our EB-2 NIW Blueprint
          </h1>
        </div>
        <img src={bluePrint} alt="Eb-1A document on paper" />

        <ul className="space-y-6 mt-10">
          {details.map((d, i) => (
            <li>
              <h2 className="text-[#32343F] font-semibold text-lg flex gap-2">
                <span> {i + 1} </span>
                {d.title}
              </h2>
              <div className="text-[#5B5C66] font-medium mt-2 text-lg">
                {Array.isArray(d.desc) ? (
                  d.desc.map((q, i) => (
                    <span key={`Inner ${i}`} className="block pl-4 my-2">
                      &bull; {q}
                    </span>
                  ))
                ) : (
                  <span>{d.desc}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BluePrints2;

const details = [
  {
    title: "Eligibility Review",
    desc: "Audit of your degrees, experience, and exceptional ability criteria.",
  },
  {
    title: "Endeavor Mapping",
    desc: "Align your project or field of expertise with U.S. priority areas (STEM, health, environment, education, infrastructure, food security).",
  },
  {
    title: "Prong-by-Prong Strategy",
    desc: [
      "Prong 1: Show National importance with Data (Policy reports, Industry demand, Federal priorities).",
      "Prong 2: Show you are positioned through past impact (citations, revenue, patents, leadership, grants).",
      "Prong 3: Argue why your work justifies skipping PERM—supported by expert attestations and U.S. need.",
    ],
  },
  {
    title: "Evidence Assembly",
    desc: [
      "Publications, media, and reports proving merit.",
      "Patents, projects, or businesses showing scalability.",
      "Letters from independent experts confirming your role and importance.",
      "Funding records, awards, or contracts showing recognition.",
    ],
  },
  {
    title: "Letters of Support",
    desc: "We draft targeted expert letters that validate your past record and forecast your U.S. contributions, crucial for the NIW test.",
  },
  {
    title: "National Interest Narrative",
    desc: "Our final merits brief synthesizes your work into a forward-looking argument showing how your contributions align with U.S. national priorities.",
  },
  {
    title: "Risk Controls",
    desc: [
      "Avoids over-claiming impact.",
      "Checks consistency across CV, publications, and letters.",
      "Anticipates common USCIS pushbacks (e.g., “speculative impact,” “not national in scope”).",
    ],
  },
];
