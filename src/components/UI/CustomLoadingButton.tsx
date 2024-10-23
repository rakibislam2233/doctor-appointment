/* eslint-disable react/prop-types */
"use client";
import React from "react";

interface CustomLoadingButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CustomLoadingButton: React.FC<CustomLoadingButtonProps> = ({
  loading = false,
  children,
  className = "",
  onClick,
}) => {
  return (
    <div className={`w-full p-0.5 border-2 border-[#77C4FE] rounded-xl`}>
      <button
        type="submit" // Use button instead of submit
        className={`${className} w-full bg-[#77C4FE] ${
          loading ? "opacity-75" : "opacity-100"
        } flex px-5 py-3 rounded-lg justify-center items-center gap-5 text-white transition-all duration-500`}
        onClick={onClick}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          // Custom loading spinner design
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-dashed border-t-transparent border-white rounded-full animate-spin"></div>
            {children}
          </div>
        ) : (
          children
        )}
      </button>
    </div>
  );
};

export default CustomLoadingButton;
