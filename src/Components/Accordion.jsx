import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import plus_v from "../assets/Images/plus_v.svg";

const PlusIcon = () => {
  return <img src={plus_v} alt="panel drop down icon" />;
};
export default function AccordionContainer({ questions }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#84858C] mt-6 sm:mt-4 ">
        {questions.title}
      </h2>

      <div>
        {questions.questions.map((q, i) => (
          <Accordion key={i} elevation={false}>
            <AccordionSummary
              expandIcon={<PlusIcon />}
              aria-controls={`panel${i}-content`}
              id={`panel${i}-header`}
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                },
                "&.Mui-expanded": {
                  minHeight: "auto",
                },
              }}
            >
              <span className="text-[#32343F]  font-semibold text-base">
                {q.question}
              </span>
            </AccordionSummary>

            <AccordionDetails>
              {Array.isArray(q.answer) ? (
                <ul className="pl-6 -mt-4 space-y-2 list-disc font-medium">
                  {q.answer.map((u, i) => (
                    <li key={`uiu ${i}`} className="text-[#555] text-base  font-medium">{u}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[#555] text-base -mt-4">{q.answer}</p>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
//y
