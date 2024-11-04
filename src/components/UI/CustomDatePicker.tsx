/* eslint-disable react/prop-types */
"use client";
import { DatePicker } from "antd";
import { FC } from "react";

interface CustomDatePickerProps {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  [key: string]: any; // To allow additional props
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  placeholder,
  className = "",
  disabled = false,
  ...rest
}) => {
  return (
    <DatePicker
      size="large"
      disabled={disabled}
      placeholder={placeholder || "Select date"}
      className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#D5EDFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`}
      {...rest} // Additional props
    />
  );
};

export default CustomDatePicker;
