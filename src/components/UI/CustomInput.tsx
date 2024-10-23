/* eslint-disable react/prop-types */
import React from "react";
import { Input } from "antd";
import { InputProps } from "antd/lib/input"; // Import InputProps for additional props
import { Form } from "antd"; // Import Ant Design's Form for validation

// Define the props for CustomInput
interface CustomInputProps extends InputProps {
  icon?: React.ElementType; // Type for the icon (React component)
  label?: React.ReactNode; // Label can be any React node
  placeholder?: string; // Optional string for placeholder
  className?: string; // Optional string for class names
  type?: string; // Optional string for input type (default is "text")
  isPassword?: boolean; // Boolean to indicate if it's a password input
  name: any; // Name is required for validation and Form.Item
  rules?: any[]; // Validation rules for the form
}

const CustomInput: React.FC<CustomInputProps> = ({
  icon: Icon, // Dynamic icon component
  label, // Label text
  placeholder, // Placeholder text
  className = "", // Optional className, defaults to empty string
  type = "text", // Default type is "text"
  isPassword = false, // Flag to indicate password input
  name, // Name for form validation
  rules = [], // Validation rules for form validation
  ...rest // Any additional props (from Ant Design Input)
}) => {
  return (
    <Form.Item
      name={name}
      rules={rules}
      className="custom-form-item" // Apply custom form styles
    >
      <div className="w-full">
        {/* Dynamic Label */}
        {label && (
          <label className="block mb-3 text-gray-700 text-sm font-medium">
            {label}
          </label>
        )}

        <div className="relative">
          {/* Use Input.Password if isPassword is true */}
          {isPassword ? (
            <Input.Password
              prefix={Icon && <Icon className="text-gray-500 text-xl" />} // Dynamic icon
              placeholder={placeholder || "Enter password"} // Dynamic placeholder
              className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#F3FAFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`}
              {...rest} // Additional props
            />
          ) : (
            <Input
              prefix={Icon && <Icon className="text-gray-500 text-xl" />} // Dynamic icon
              placeholder={placeholder || "Enter value"} // Dynamic placeholder
              className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#F3FAFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`} // Apply focus color
              type={type} // Default input type
              {...rest} // Additional props
            />
          )}
        </div>
      </div>
    </Form.Item>
  );
};

export default CustomInput;
