import React from "react";
import highlight from "../assets/Images/highlight.svg";
import ContainerWidth from "../Components/ContainerWidth";
import Copy from "../Components/Copy";

const Note = () => {
  return (
    <div className="bg-baseColor mt-[8rem]">
      <ContainerWidth>
        <div className="  px-6 sm:px-8 py-[4rem] md:py-[6rem] mb-20">
          <Copy>
            <h2 className="text-2xl md:text-[2.5rem] font-normal text-white leading-snug md:leading-[5rem]">
              At <span className="italic font-semibold">Visaro Craft LLC</span> <br />
              <span className="text-[#f5a17b]"> We specialize in building</span>
              compelling immigration petitions <span> for</span>
              high-achieving individuals. <span> Whether you are </span>
              <span className="relative">
                <img
                  src={highlight}
                  alt=""
                  aria-hidden
                  className="absolute -top-5 -left-5"
                />{" "}
                an
              </span>{" "}
              Academic 👨🏾‍🏫 Our team{" "}
              <span className="text-[#f5a17b]"> ensures</span> your petition is
              strategically crafted, evidence-backed,{" "}
              <span className="text-[#f5a17b]"> and </span>
              submission-ready.
            </h2>
          </Copy>
        </div>
      </ContainerWidth>
    </div>
  );
};

export default Note;
