/* eslint-disable react/prop-types */
import React from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib/select";

// Define types for props
interface CustomSelectProps extends SelectProps<unknown> {
  icon?: React.ElementType; // Type for the icon (React component)
  label?: React.ReactNode; // Label can be any React node
  placeholder?: string; // Optional string for placeholder
  className?: string; // Optional string for class names
  options?: { value: string | number; label: React.ReactNode }[]; // Options array with value and label
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  icon: Icon, // Dynamic icon component
  label, // Label text
  placeholder, // Placeholder text
  className = "", // Optional className, defaults to empty string
  options = [], // Default empty options array
  ...rest // Any additional props (from Ant Design SelectProps)
}) => {
  return (
    <div className="w-full">
      {/* Dynamic Label */}
      {label && (
        <label className="block mb-2 text-gray-700 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <Select
          size="large"
          style={{
            background: "#EEF3FF",
          }}
          placeholder={placeholder || "Select value"} // Dynamic placeholder
          className={`w-full text-[16px] bg-[#EEF3FF] text-gray-700 rounded-lg ${className}`}
          suffixIcon={Icon && <Icon className="text-gray-500 text-xl" />} // Dynamic icon
          {...rest} // Additional props
        >
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CustomSelect;
