import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import visaroWithoutText from "../assets/Images/Logo e.png";
import Copy from "../Components/Copy";
import { blogs } from "../data/blogs";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <section className=" my-20 md:my-[10rem] px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>Resources & Insights</Reveal>
        </h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-20">
          {blogs.map((r, i) => (
            <li key={i}>
              <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] md:grid-cols-2 gap-2 sm:gap-5">
                <div className="flex items-center justify-center h-[10rem] w-full  rounded-lg shadow-sm bg-[#FCE0D3]">
                  <img src={visaroWithoutText} alt="visaro without text logo" className="max-w-[5rem]" />
                </div>
                <div className="place-content-center">
                    <Link to={`/blogs/${r.id}`} >
                  <Copy>
                    <h2 className="text-base md:text-xl font-medium text-black mt-4 hover:underline cursor-pointer">
                      {r.title}
                    </h2>
                  </Copy>
                    </Link>
                  <Copy>
                    <span className="text-xs text-[#84858C]">7th Sept 2025</span>
                  </Copy>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ContainerWidth>
    </section>
  );
};

export default Resources;

const resources = [
  {
    title: "How to Strengthen Your EB-1A Petition with Independent References",
    date: "7th Sept 2025",
  },
  {
    title: "EB-2 NIW: Making the National Interest Argument Stronger",
    date: "7th Sept 2025",
  },
  {
    title: "O-1 Visa: What USCIS Considers Extraordinary Ability",
    date: "7th Sept 2025",
  },
  {
    title: "Petition Packaging: Why Presentation Matters as Much as Evidence",
    date: "5th Sept 2025",
  },
];
