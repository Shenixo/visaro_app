import React from "react";
import visaroWithoutText from "../assets/Images/Logo e.png";
import bluePrint from "../assets/Images/blueprint.png";

const BluePrints = () => {
  return (
    <div>
      <div className="bg-white shadow-2xl border border-[#F5F5F5] rounded-2xl max-w-[750px] mx-auto p-8 py-10">
        <div className="flex-col items-center justify-center text-center gap-4">
          <div className="flex items-center justify-center ">
            <img src={visaroWithoutText} alt="Visaro logo" className="max-w-16" />
          </div>
          <h1 className="text-[2rem] font-semibold text-[#090B19] mb-8 mt-4">
            Our EB-1A Blueprint
          </h1>
        </div>
        <img src={bluePrint} alt="Eb-1A document on paper" />

        <ul className="space-y-6 mt-10">
          {details.map((d, i) => (
            <li key={`Yeah ${i}`}>
              <h2 className="text-[#32343F] font-semibold text-lg flex gap-2">
                <span> {i + 1} </span>
                {d.title}
              </h2>
              <div className="text-[#5B5C66] font-medium mt-2 text-lg">
                {Array.isArray(d.desc) ? (
                  d.desc.map((q, i) => (
                    <span key={`Inner ${i}`} className="block pl-4 my-2">&bull; {q}</span>
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

export default BluePrints;

const details = [
  {
    title: "Eligiblity Audit (Free fit Checks)",
    desc: "Rapid review of your CV, portfolio, press, metrics, and goals against all 10 criteria (plus comparable evidence).",
  },
  {
    title: "Evidence Roadmap & Gap Strategy",
    desc: "Tailored list of proofs to collect awards, media analytics, compensation benchmarks, judging invitations, leadership proof. For gaps, we design ethical evidence-building steps (peer review, invited talks, curated showcases, etc.).",
  },
  {
    title: "Source Gathering & Verification",
    desc: "We organize exhibits with provenance (dates, authors, URLs/DOIs, publisher reputation), translations, and independent corroboration.",
  },
  {
    title: "Letters that Carry Weight",
    desc: "Drafted for recognized experts who can cite independent metrics and tie your work to field-wide impact, not generic endorsements.",
  },
  {
    title: "Criterion-by-Criterion Argument Memos",
    desc: "Short briefs showing how your evidence meets regulatory text and Policy Manual examples, pre-empting “doesn’t meet parameters” findings.",
  },
  {
    title: "Final Merits Narrative (“Kazarian”)",
    desc: "A coherent story of sustained acclaim and top-of-field status, backed by comparators, benchmarks, and independent indicators.",
  },
  {
    title: "Risk Controls & RFE Prevention",
    desc: [
      "Consistency checks across documents",
      "Misattribution/duplicate-credit screening",
      "Media authenticity & Circulation validation",
      "Compensation Normalization",
      "Mock-RFE drills based on recent AAO trends",
    ],
  },
  {
    title: "Filing Strategy",
    desc: [
      "I-140 packaging for self-petition",
      "Concurrent filing analysis (visa bulletin, admissibility, travel/work needs)",
      "Premium processing pros/cons",
    ],
  },
  {
    title: "Consular / AOS Playbooks",
    desc: "Guidance for next steps after I-140 approval: Adjustment of Status vs. Consular Processing, interview prep, and document checklists.",
  },
];
