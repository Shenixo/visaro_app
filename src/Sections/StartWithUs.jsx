import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Button from "../Components/Button";
import line1 from "../assets/Images/line-5.svg";
import line2 from "../assets/Images/line-8.svg";
import { ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";

const StartWithUs = ({
  main = `  Start With a Free EB-1A Fit Check`,
  details = `Send us your CV, Google Scholar profile, portfolio, and press links.
            We’ll return a criterion-by-criterion map, a gap plan, and a
            proposal with timeline options (regular vs. premium processing;
            concurrent filing considerations).`,
}) => {
  return (
    <div>
      <ContainerWidth>
        <div className="bg-baseColor rounded-none md:rounded-2xl p-5 md:p-10 py-16 relative flex items-center justify-center flex-col text-white gap-10 mb-20 min-h-[21rem]">
          <h1 className=" text-2xl md:text-[2.5rem] text-center font-semibold">
            {main}
          </h1>
          <p className="leading-[1.5rem] font-normal text-center max-w-[95%] md:max-w-[700px]">
            {details}
          </p>
          <Link to="/contact">
            
            <Button
              className={"bg-white text-baseColor hover:bg-[#FFFFFF]"}
              color={"#EF6223 "}
            >
              Claim EB-1A Eligibility Review
            </Button>
          </Link>
          <img
            src={line1}
            aria-hidden="true"
            alt=""
            className="absolute top-0 left-0"
          />
          <img
            src={line2}
            aria-hidden="true"
            alt=""
            className="absolute bottom-0 right-0"
          />
        </div>
      </ContainerWidth>
    </div>
  );
};

export default StartWithUs;
