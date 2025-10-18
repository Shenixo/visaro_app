import React from "react";
import visaroWithoutText from "../assets/Images/Logo e.png";
import bluePrint from "../assets/Images/blueprint3.png";

const BluePrint3 = () => {
  return (
    <div>
      <div className="bg-white shadow-xl border border-[#F5F5F5] rounded-2xl max-w-[750px] mx-auto p-8 py-10">
        <div className="flex-col items-center justify-center text-center gap-4">
          <div className="flex items-center justify-center  ">
            <img src={visaroWithoutText} alt="Visaro logo" className="max-w-16"  />
          </div>
          <h1 className="text-[2rem] font-semibold text-[#090B19] mt-4 mb-8">
            Our O-1 Blueprint
          </h1>
        </div>
        <img src={bluePrint} alt="Eb-1A document on paper"  />

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

export default BluePrint3;

const details = [
  {
    title: "Eligibility Review",
    desc: "Audit your Achievements against O-1A or O-1B Criteria.",
  },
  {
    title: "Engagement Mapping",
    desc: "Align your planned U.S. Activities (Employment, Tours, Projects, Contracts) with the O-1 Requirement of a defined “Event.”",
  },
  {
    title: "Evidence Development",
    desc: [
      "Collect Awards, Memberships, Press, and Contracts.",
      "Normalize Salary/Compensation Data against Industry Standards.",
      "Secure Peer Consultation Letters where required.",
    ],
  },
  {
    title: "Expert Letters",
    desc: "We draft strong Support Letters from recognized Authorities in your Field, detailing the Significance of your Work.",
  },
  {
    title: "Advisory Opinion Strategy",
    desc: "Guidance on approaching Peer Groups and ensuring their Letters strengthen (not weaken) your Petition.",
  },
  {
    title: "Final Merits Narrative",
    desc: "A USCIS-ready Argument showing your Work has sustained Recognition and you are at the very Top of your Field.",
  },
  {
    title: "Risk Controls",
    desc: [
      "Consistency across Contracts, CVs, and Letters.",
      "Authentication of Press and Awards.",
      "Anticipates common USCIS pushbacks (e.g., “speculative impact,” “not national in scope”).",
      "Anticipation of USCIS Pushbacks (e.g., “Membership is too broad,” “Award not nationally significant”).",
    ],
  },
];
