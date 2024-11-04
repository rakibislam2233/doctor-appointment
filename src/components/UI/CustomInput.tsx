/* eslint-disable react/prop-types */
import { Input } from "antd";
import { Rule } from "antd/lib/form"; // Import Rule for form validation rules
import { InputProps, TextAreaProps } from "antd/lib/input"; // Import InputProps and TextAreaProps for additional props
import React from "react";

// Define the props for CustomInput
interface CustomInputProps {
  icon?: React.ElementType;
  label?: React.ReactNode;
  placeholder?: string;
  className?: string;
  type?: string;
  isPassword?: boolean;
  isTextArea?: boolean;
  rules?: Rule[];
}

// Conditionally apply InputProps or TextAreaProps based on isTextArea
const CustomInput: React.FC<
  CustomInputProps & (InputProps | TextAreaProps)
> = ({
  icon: Icon,
  placeholder,
  className = "",
  type = "text",
  isPassword = false,
  isTextArea = false,
  ...rest
}) => {
  return (
    <div className="w-full relative">
      {/* Render TextArea if isTextArea is true */}
      {isTextArea ? (
        <Input.TextArea
          autoSize={{ minRows: 7, maxRows: 10 }}
          placeholder={placeholder || "Enter text"}
          className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#D5EDFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`}
          {...(rest as TextAreaProps)} // Spread TextAreaProps if isTextArea
        />
      ) : isPassword ? (
        <Input.Password
          prefix={Icon && <Icon className="text-gray-500 text-xl" />} // Dynamic icon
          placeholder={placeholder || "Enter password"} // Dynamic placeholder
          className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#D5EDFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`}
          {...(rest as InputProps)} // Spread InputProps if isPassword
        />
      ) : (
        <Input
          prefix={Icon && <Icon className="text-gray-500 text-xl" />} // Dynamic icon
          placeholder={placeholder || "Enter value"} // Dynamic placeholder
          className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#D5EDFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`} // Apply focus color
          type={type} // Default input type
          {...(rest as InputProps)} // Spread InputProps for regular input
        />
      )}
    </div>
  );
};

export default CustomInput;
