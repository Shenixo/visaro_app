import React from "react";
import Input from "./Input";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="bg-[#FAFAFA] border border-[#F5F5F5] rounded-xl shadow-sm p-6">
      <Input placeholder={"Jacob"} labelText="First name" />
      <Input placeholder={"Moore"} labelText="Last Name" />
      <Input
        placeholder={"jacobmoore@email.com"}
        labelText="Email"
        type="email"
      />
      <Input placeholder={"Jacob"} labelText="Email" type="email" />
      <Input placeholder={"Leave us a message..."} labelText="Message" useTextArea />
      <div className="mt-20" />
      <Button width={"100%"}>Send message</Button>
    </div>
  );
};

export default ContactForm;
