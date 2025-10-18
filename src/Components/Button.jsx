import { ButtonBase } from "@mui/material";
import React from "react";

const Button = ({ children, className, width, color }) => {
  return (
    <div style={{ width }}>
      <ButtonBase sx={{ borderRadius: "0.375rem", width }}>
        <div
          style={{ width: width, color }}
          className={` bg-baseColor text-white px-5 py-3 rounded-md shadow-sm hover:bg-baseColorDarker transition duration-300 easeInOut font-medium ${className} `}
        >
          {children}
        </div>
      </ButtonBase>
    </div>
  );
};

export default Button;

export const TransparentButton = ({
  children,
  className,
  width,
  backgroundColor,
  color
}) => {
  return (
    <div style={{ width }}>
      <ButtonBase sx={{ borderRadius: "0.375rem", width }}>
        <div
          style={{ width: width, backgroundColor: backgroundColor, color }}
          className={`bg-transparent text-baseColor px-5 py-3 rounded-md hover:shadow-sm hover:bg-[#F2763F]/20  transition duration-300 easeInOut font-medium ${className}`}
        >
          {children}
        </div>
      </ButtonBase>
    </div>
  );
};
