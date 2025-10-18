import React from "react";
import Reveal from "../Components/Reveal";
import profile1 from "../assets/Images/profile1.svg";
import { Avatar } from "@mui/material";
import ContainerWidth from "../Components/ContainerWidth";

const NiwProfiles = () => {
  return (
    <section className="my-10 lg:my-[10rem]  px-4">
      <ContainerWidth>
        <Reveal>
          <h1 className="text-black font-semibold text-[2rem] ">
            Strong EB-2 NIW Profiles
          </h1>
        </Reveal>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {data.map((d, i) => (
            <li
              key={i}
              className="bg-white shadow-sm border border-[#F5F5F5] p-6 rounded-xl "
            >
              <div className="flex items-center gap-2">
                <Avatar sx={{color:"#EF6223"}} />
                <div>
                  <p className=" text-base md:text-xl text-black font-semibold">{d.name}</p>
                  <span className="text-sm text-[#909090]">{d.profesh}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-black font-medium text-base md:text-xl">{d.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      </ContainerWidth>
    </section>
  );
};

export default NiwProfiles;

const data = [
  {
    profile: profile1,
    name: "Anonymous",
    profesh: "Researcher",
    comment:
      "A Researcher developing renewable energy technology adopted in multiple countries, now aiming to bring it to U.S. institutions.",
  },
  {
    profile: profile1,
    name: "Anonymous",
    profesh: "Physician",
    comment:
      "A Physician with specialized skills in underserved medical fields, proposing to serve in rural or high-need areas.",
  },
  {
    profile: profile1,
    name: "Anonymous",
    profesh: "Entrepreneur",
    comment:
      "An Entrepreneur with a scalable AI-driven logistics model that addresses U.S. food supply chain inefficiencies.",
  },
  {
    profile: profile1,
    name: "Anonymous",
    profesh: "Academic",
    comment:
      "An Academic who has published influential work, secured funding, and collaborates with U.S. peers on nationally relevant problems.",
  },
];
