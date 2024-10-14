/* eslint-disable react/prop-types */
"use client";
import React from "react";
import { Button } from "antd";

// Define types for props
interface CustomButtonProps {
  loading?: boolean;
  hover?: boolean; // New hover prop
  children: React.ReactNode;
  className?: string;
  border?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  loading = false,
  hover = false, // Default to true (hover effect is enabled by default)
  children,
  className = "",
  border = false,
  onClick,
  onChange,
}) => {
  return (
    <div
      className={`${
        border ? "w-full border-2 border-[#77C4FE]" : ""
      } p-0.5 rounded-xl inline-block`}
    >
      <Button
        type="default"
        htmlType="submit"
        loading={loading}
        className={`${className} bg-[#77C4FE] flex px-10 py-6 justify-center items-center gap-5 text-white ${
          border ? "rounded-lg" : "rounded-xl"
        } transition-all duration-500`}
        style={{
          backgroundColor: "#77C4FE", // Custom background color
          border: border ? "2px solid #77C4FE" : "none", // Custom border
        }}
        // Conditionally apply hover effects based on the hover prop
        onMouseEnter={(e) => {
          if (hover) {
            e.currentTarget.style.backgroundColor = "transparent"; // Transparent on hover
            e.currentTarget.style.color = "#77C4FE"; // Change text color on hover
            e.currentTarget.style.border = "2px solid #77C4FE"; // Keep the custom border color
          }
        }}
        onMouseLeave={(e) => {
          if (hover) {
            e.currentTarget.style.backgroundColor = "#77C4FE"; // Restore background color
            e.currentTarget.style.color = "#ffffff"; // Restore text color
            e.currentTarget.style.border = "2px solid #77C4FE"; // Keep the custom border color
          }
        }}
        onClick={onClick}
        onChange={onChange}
      >
        {children}
      </Button>
    </div>
  );
};

export default CustomButton;
