/* eslint-disable react/prop-types */
"use client";
import React from "react";
// Define types for props
interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`${className} bg-secondary flex px-12 py-3.5 justify-center border items-center gap-5 text-white rounded-xl  hover:bg-primary hover:border-primary  transition-all duration-500`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
