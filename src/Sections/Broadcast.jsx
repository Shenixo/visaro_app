import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Copy from "../Components/Copy";
import { motion } from "framer-motion";
import Button, { TransparentButton } from "../Components/Button";

const Broadcast = () => {
  return (
    <section className="my-20 md:my-[10rem] ">
      <ContainerWidth>
        <div className="w-full flex  flex-col items-center text-center gap-y-10">
          <Copy>
            <h1 className="text-4xl md:text-[3.5rem] font-semibold">
              Start Your Petition Journey Today
            </h1>
          </Copy>

          <motion.div
            className=" hidden md:flex  items-center gap-6 mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.6 }}
          >
            <Button>Create an Account</Button>
            <TransparentButton backgroundColor={"#F2763F33"}>
              Sign in to your account
            </TransparentButton>
          </motion.div>

          <motion.div
            className=" flex flex-col md:hidden  items-center gap-6  w-full  max-w-[80%] mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.4, delay: 0.6 }}
          >
            <Button width={"100%"}>Create an Account</Button>
            <TransparentButton width={"100%"} backgroundColor={"#F2763F33"}>
              Sign in to your account
            </TransparentButton>
          </motion.div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default Broadcast;
