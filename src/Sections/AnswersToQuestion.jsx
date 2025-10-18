import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import AccordionContainer from "../Components/Accordion";
import { TransparentButton } from "../Components/Button";
import { Link } from "react-router-dom";

const AnswersToQuestion = ({ visaro_questions, showButton = true }) => {
  return (
    <section className="my-10 md:my-[10rem] px-4 w-full overflow-x-hidden">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>Answers To Your Questions</Reveal>
        </h1>
        <div className="mt-10 max-w-[980px] w-full mx-auto">
          {visaro_questions.map((q, i) => (
            <AccordionContainer key={q.id + i} questions={q} />
          ))}
        </div>
        {showButton && (
          <div className="flex items-center justify-center mt-20">
            <Link to={"/FAQs"}>
              <TransparentButton className={"border border-[#EF6223]"}>
                View more questions
              </TransparentButton>
            </Link>
          </div>
        )}
      </ContainerWidth>
    </section>
  );
};

export default AnswersToQuestion;
