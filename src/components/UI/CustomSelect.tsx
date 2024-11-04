"use client";
import { Select } from "antd";
import { FC } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface CustomSelectProps {
  icon?: FC<any>;
  placeholder?: string;
  className?: string;
  options?: Option[];
  [key: string]: unknown;
}

const CustomSelect: FC<CustomSelectProps> = ({
  icon: Icon,
  placeholder,
  className = "",
  options = [],
  ...rest
}) => {
  return (
    <div className="relative">
      <Select
        size="large"
        style={{
          padding: "20px",
        }}
        placeholder={placeholder || "Select value"}
        className={`w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#D5EDFF] text-gray-700 rounded-lg focus:border-[#77C4FE] ${className}`}
        suffixIcon={Icon && <Icon className="text-gray-500 text-xl" />}
        {...rest}
      >
        {options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
