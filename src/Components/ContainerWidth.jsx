import React from "react";

const ContainerWidth = ({ children }) => {
  return <div className="w-full max-w-[1320px] mx-auto " style={{ "--containerWidth": "1320px" }} >{children}</div>;
};

export default ContainerWidth;
