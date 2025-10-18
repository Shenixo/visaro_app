import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import quote from "../assets/Images/quote.svg";
import profile1 from "../assets/Images/profile1.svg";
import profile2 from "../assets/Images/profile2.svg";
import profile3 from "../assets/Images/profile3.svg";
import Copy from "../Components/Copy";
import { Avatar } from "@mui/material";

const Clients = () => {
  return (
    <section className=" my-20 md:my-[10rem] px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>What Our Clients Say</Reveal>
        </h1>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 mt-10 md:mt-20">
          {whatClientSays.map((c, i) => (
            <li
              key={i}
              className="bg-[#FAFAFA] rounded-lg p-6 w-full h-full min-h-[20rem] flex flex-col"
            >
              <img src={quote} alt="quote" className="w-10 mb-8" style={{filter: 'brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(1377%) hue-rotate(210deg) brightness(93%) contrast(92%)'}} />

              <Copy>
                <p>{c.comment}</p>
              </Copy>

              <div className="flex items-center gap-2 mt-auto">
                <Avatar src={c.profile} alt={c.name} />
                <div>
                  <Copy>
                    <h3 className="text-[#090B19] capitalize font-semibold text-base">
                      {c.name}
                    </h3>
                  </Copy>
                  <Copy>
                    <p className="text-[#84858C] text-sm">{c.profession}</p>
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

export default Clients;

const whatClientSays = [
  {
    comment:
      "“Visaro Craft LLC crafted my EB-1A petition with such precision. I was overwhelmed with the process before, but their team made it straightforward. Approved in 8 days with premium processing!”",
    profile: profile1,
    name: "Dr. A Johnson",
    profession: "Research Scientist",
  },
  {
    comment:
      "“The attention to detail in my O-1 petition was outstanding. I felt truly represented.”",
    profile: profile2,
    name: "M. Adedeji",
    profession: "Entrepreneur",
  },
  {
    comment:
      "“From recommendation letters to final merits, everything was handled professionally. I highly recommend Visaro Craft LLC.”",
    profile: profile3,
    name: "Ologbenla Adedapo",
    profession: "Entrepreneur",
  },
];
