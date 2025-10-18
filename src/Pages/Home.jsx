import React from "react";
import Hero from "../Sections/Hero";
import Note from "../Sections/Note";
import Hightlights from "../Sections/Hightlights";
import About from "../Sections/About";
import Approach from "../Sections/Approach";
import Services from "../Sections/Services";
import Serve from "../Sections/Serve";
import WhyVisaro from "../Sections/WhyVisaro";
import Process from "../Sections/Process";
import Clients from "../Sections/Clients";
import Resources from "../Sections/Resources";
import AnswersToQuestion from "../Sections/AnswersToQuestion";
import Contact from "../Sections/Contact";
import Broadcast from "../Sections/Broadcast";
import Footer from "../Sections/Footer";
import { visaro_questions1 } from "../data/questions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Note />
      <Hightlights />
      <About />
      <Approach />
      <Services />
      <Serve />
      <WhyVisaro />
      <Process />
      <Clients />
      <Resources />
      <AnswersToQuestion visaro_questions={visaro_questions1} />
      <Contact />
      <Broadcast />

      <Footer />
    </div>
  );
};

export default Home;
