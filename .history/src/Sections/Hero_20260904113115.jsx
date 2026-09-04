import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Button, { TransparentButton } from "../Components/Button";
import heroImage from "../assets/Images/heroImage.png";
import Copy from "../Components/Copy";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <ContainerWidth>
        <div className="w-full max-w-[39rem] mx-auto mt-5 md:mt-20">
          <Copy>
            <h1 className="text-black text-[2.2rem] md:text-[3.625rem] font-semibold leading-tight tracking-tight text-center  px-4 sm:px-0">
              Your Petition, Our Craft
            </h1>
          </Copy>
          <Copy>
            <p className="text-gray font-medium text-center mt-2 md:mt-6 px-4">
              Expertly Crafted Immigration Petitions for Academics, Students,
              and Professionals.
            </p>
          </Copy>

          <div className=" flex items-center justify-center">
            <motion.div
              className="hidden md:flex  items-center justify-center gap-4 mt-10 w-full max-w-[60%] "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.4, delay: 0.5 }}
              // onClick={() =>
              //   window.open("https://visaro-dashboard.vercel.app/", "_blank")
              // }
            >
              <Button
                width={"100%"}
                className={"  bg-baseColor overflow-hidden"}
              >
                Get on board
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex md:hidden flex-col items-center justify-center gap-4 mt-10 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.5 }}
             onClick={() =>
                  window.open("https://visaro-dashboard.vercel.app/", "_blank")
                }
          >
            <div className="w-full max-w-[80%] mx-auto ">
              <Button
               
                width={"100%"}
                className={"px-14"}
              >
                Get on board
              </Button>
            </div>
            {/* <div className="w-full max-w-[80%] mx-auto ">
              <TransparentButton backgroundColor={"#F2763F33"} width={"100%"}>
                Create an account
              </TransparentButton>
            </div> */}
          </motion.div>
        </div>
        <div className=" mt-10 md:mt-20">
          <motion.div
            className="flex items-center justify-center gap-4 mt-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.6 }}
          >
            <img
              src={heroImage}
              alt="Hero image 'A hand writing on a paper'"
              className="w-full h-[23rem] md:h-full  object-cover object-center rounded-3xl"
            />
          </motion.div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default Hero;
