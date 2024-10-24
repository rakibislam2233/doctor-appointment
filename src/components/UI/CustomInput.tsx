/* eslint-disable react/prop-types */
import React from "react";
import { Input, Form } from "antd";
import { InputProps, TextAreaProps } from "antd/lib/input"; // Import InputProps and TextAreaProps for additional props
import { Rule } from "antd/lib/form"; // Import Rule for form validation rules

// Define the props for CustomInput
interface CustomInputProps {
  icon?: React.ElementType; // Type for the icon (React component)
  label?: React.ReactNode; // Label can be any React node
  placeholder?: string; // Optional string for placeholder
  className?: string; // Optional string for class names
  type?: string; // Optional string for input type (default is "text")
  isPassword?: boolean; // Boolean to indicate if it's a password input
  isTextArea?: boolean; // Boolean to indicate if it's a TextArea input
  name: string; // Name is required for validation and Form.Item
  rules?: Rule[]; // Validation rules with proper type Rule[]
}

// Conditionally apply InputProps or TextAreaProps based on isTextArea
const CustomInput: React.FC<
  CustomInputProps & (InputProps | TextAreaProps)
> = ({
  icon: Icon, // Dynamic icon component
  label, // Label text
  placeholder, // Placeholder text
  className = "", // Optional className, defaults to empty string
  type = "text", // Default type is "text"
  isPassword = false, // Flag to indicate password input
  isTextArea = false, // Flag to indicate TextArea input
  name, // Name for form validation
  rules = [], // Validation rules for form validation
  ...rest // Additional props (either InputProps or TextAreaProps)
}) => {
  return (
    <Form.Item
      name={name}
      label={label && <span className="text-lg">{label}</span>}
      rules={rules}
    >
      <div className="w-full">
        <div className="relative">
          {/* Render TextArea if isTextArea is true */}
          {isTextArea ? (
            <Input.TextArea
              autoSize={{ minRows: 7, maxRows: 10 }}
              placeholder={placeholder || "Enter text"}
              className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#F3FAFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`}
              {...(rest as TextAreaProps)} // Spread TextAreaProps if isTextArea
            />
          ) : isPassword ? (
            <Input.Password
              prefix={Icon && <Icon className="text-gray-500 text-xl" />} // Dynamic icon
              placeholder={placeholder || "Enter password"} // Dynamic placeholder
              className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#F3FAFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`}
              {...(rest as InputProps)} // Spread InputProps if isPassword
            />
          ) : (
            <Input
              prefix={Icon && <Icon className="text-gray-500 text-xl" />} // Dynamic icon
              placeholder={placeholder || "Enter value"} // Dynamic placeholder
              className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#F3FAFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`} // Apply focus color
              type={type} // Default input type
              {...(rest as InputProps)} // Spread InputProps for regular input
            />
          )}
        </div>
      </div>
    </Form.Item>
  );
};

export default CustomInput;
