/* eslint-disable react/prop-types */
"use client";
import React from "react";
// Define types for props
interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  border?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`${className} bg-[#77C4FE] flex px-12 py-3.5 justify-center border items-center gap-5 text-white rounded-xl hover:bg-transparent hover:border-[#77C4FE] hover:text-[#77C4FE] transition-all duration-500`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
