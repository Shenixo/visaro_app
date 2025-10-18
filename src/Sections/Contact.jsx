import React from "react";
import ContainerWidth from "../Components/ContainerWidth";
import Reveal from "../Components/Reveal";
import ContactForm from "../Components/ContactForm";
import envelope from "../assets/Images/EnvelopeOpen.svg";
import phone from "../assets/Images/phone.svg";
import location from "../assets/Images/location.svg";
import x from "../assets/Images/x.svg";
import facebook from "../assets/Images/facebook.svg";
import instagram from "../assets/Images/ig.svg";
import linkedIn from "../assets/Images/linkedIn.svg";

const socials = [x, facebook, instagram, linkedIn];
//ty
const Contact = () => {
  return (
    <section className=" my-5 md:my-[10rem] px-4">
      <ContainerWidth>
        <h1 className="text-black font-semibold text-[2rem] ">
          <Reveal>Contact Us</Reveal>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-16">
          <div className="pl-6 md:pl-0">
            {contactDetails.map((d, i) => (
              <div key={`yty ${i}`} className="flex flex-col gap-4 my-10">
                <div className="flex items-center justify-center p-2 bg-[#F5F5F5] shadow-sm w-11 h-11 rounded-md">
                  <img src={d.icon} alt={` ${d.title} Icon`} />
                </div>
                <h3 className="text-lg font-semibold text-[#090B19]">
                  {d.title}
                </h3>
                <span className="text-sm text-[#84858C] font-medium">
                  {d.details}
                </span>
                <p className="text-base font-semibold text-[#090B19] -mt-3">
                  {d.action}
                </p>
              </div>
            ))}
            <div className="flex items-center gap-6">
              {socials.map((s) => (
                <a key={s} href="#" className="hover:underline">
                  <img src={s} alt={s} className="cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
          <div className=" mt-10 md:mt-0  ">
            <ContactForm />
          </div>
        </div>
      </ContainerWidth>
    </section>
  );
};

export default Contact;

const contactDetails = [
  {
    id: 1,
    icon: envelope,
    title: "Email",
    details: "Stay updated and get in touch directly.",
    action: "Info@visarocraft.com",
  },
  {
    id: 2,
    icon: phone,
    title: "Phone",
    details: "Speak to Our team for Support",
    action: "+1 (470) 583-7872",
  },
  {
    id: 3,
    icon: location,
    title: "Office",
    details: "Vist or write to us at:",
    action: "539 W Commerce St Dallas, TX, 75208",
  },
];
