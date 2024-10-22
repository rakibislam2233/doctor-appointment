/* eslint-disable react/prop-types */
"use client";
import React from "react";
import { Button } from "antd";

// Define types for props
interface CustomLoadingButtonProps {
  loading?: boolean;
  hover?: boolean; // New hover prop
  children: React.ReactNode;
  className?: string;
  border?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CustomLoadingButton: React.FC<CustomLoadingButtonProps> = ({
  loading = false,
  children,
  className = "",
  onClick,
  onChange,
}) => {
  return (
    <Button
      type="default"
      htmlType="submit"
      loading={loading}
      className={`${className} w-full bg-[#77C4FE] flex px-10 py-6 justify-center items-center gap-5 text-white  transition-all duration-500`}
      style={{
        backgroundColor: "#77C4FE",
      }}
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </Button>
  );
};

export default CustomLoadingButton;
