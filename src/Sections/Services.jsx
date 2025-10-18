import React, { useEffect, useState } from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import visaroWithoutText from "../assets/Images/visaroWithoutText.svg";
import Copy from "../Components/Copy";

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = isMobile ? serviceData.slice(0, 2) : serviceData;

  return (
    <section className=" my-20 lg:my-[10rem] py-12 bg-[#F5F5F5] px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>Our Services</Reveal>
        </h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-[7rem]">
          {data.map((d, i) => (
            <li
              key={i}
              className="bg-white rounded-xl shadow-sm py-8 pb-[6rem] px-4"
            >
              <img src={visaroWithoutText} alt="Visaro without text logo" />
              <Copy>
                <h2 className="text-xl mt-8 text-black font-semibold">
                  {d.title}
                </h2>
              </Copy>
              <div className="mt-6" />
              <Copy>
                <p className="text-[#32343F] font-medium">{d.subtitle}</p>
              </Copy>
              <ul className="space-y-4 pl-3 md:pl-6 text-[#32343F] font-medium mt-5 md:mt-10">
                {d.list.map((l, idx) => (
                  <Copy key={idx}>
                    <li className="font-medium">&bull; {l}</li>
                  </Copy>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {isMobile && (
          <div className="mt-6">
            <li className="bg-white rounded-xl shadow-sm py-8 pb-[6rem] px-4 list-none">
              <img src={visaroWithoutText} alt="Visaro without text logo" />
              <Copy>
                <h2 className="text-xl mt-8 text-black font-semibold">
                  {serviceData[serviceData.length - 1].title}
                </h2>
              </Copy>
              <div className="mt-6" />
              <Copy>
                <p className="text-[#32343F] font-medium">
                  {serviceData[serviceData.length - 1].subtitle}
                </p>
              </Copy>
              <ul className="space-y-4 pl-6 text-[#32343F] font-medium mt-10">
                {serviceData[serviceData.length - 1].list.map((l, idx) => (
                  <Copy key={idx}>
                    <li className="font-medium">&bull; {l}</li>
                  </Copy>
                ))}
              </ul>
            </li>
          </div>
        )}
      </ContainerWidth>
    </section>
  );
};

export default Services;

const serviceData = [
  {
    title: "EB-1A Extraordinary Ability",
    subtitle:
      "For academics, researchers, entrepreneurs, and professionals at the top of their filed.",
    list: [
      "Cirteria Mapping & Gap Analysis",
      "Recomendation Letter Drafting",
      "Awards, Publication & Media Evidence Strategy",
      "Final Merits Argument Writing",
    ],
  },

  {
    title: "EB-2 NIW (National Interest Waiver)",
    subtitle:
      "For professionals and researchers, whose work significantly benefits the US.",
    list: [
      "National Importance Argument Development",
      "Proposed Endeavour Statements",
      "Evidence Organizaton & Presentation",
      "Comprehensive Petition Writing",
    ],
  },
  {
    title: "O-1A Extraordinary Ability",
    subtitle:
      "For individuals in sciences, education, business, or the arts seeking temporary work authorization.",
    list: [
      "O-1A Criteria Strategy (Science, Education, Business)",
      "Employer Support Letter Drafting",
      "Evidence Curation (Media, Memberships, Judging, Impact)",
      "USCIS-Ready Petition Package",
    ],
  },
];
