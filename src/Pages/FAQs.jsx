import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import AnswersToQuestion from "../Sections/AnswersToQuestion";
import { fullQuestions} from "../data/questions";
import StartWithUs from "../Sections/StartWithUs";
import Footer from "../Sections/Footer";

const FAQs = () => {
  return (
    <div>
      <div className="bg-[#1B214C]">
        <ContainerWidth>
          <div className="text-center mt-5 md:Lmt-10 py-6">
            <h1 className=" text-2xl md:text-[2.5rem] font-semibold text-white">
              Frequently Asked Questions
            </h1>
          </div>
        </ContainerWidth>
      </div>
      <ContainerWidth>
        <div>
          <AnswersToQuestion
            showButton={false}
            visaro_questions={fullQuestions}
          />
          <StartWithUs
            main="Invest in Your U.S. Future Today"
            details="Book your consultation for just $250 and take the first step toward a strong, approvable immigration petition."
          />
        </div>
      </ContainerWidth>
      <Footer/>
    </div>
  );
};

export default FAQs;
