"use client";
import { Form } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { HiOutlineHome } from "react-icons/hi";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import CustomInput from "@/components/UI/CustomInput";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomButton from "@/components/UI/CustomButton";
import React from "react";

const breadcrumbItems = [
  {
    href: "/",
    title: (
      <div className="flex gap-2 items-center">
        <HiOutlineHome size={18} />
        <span>Home</span>
      </div>
    ),
  },
  {
    title: "Change Password",
  },
];

const ChangePassword: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    console.log(values);
  };

  const validateConfirmPassword = (_: unknown, value: string) => {
    if (value && value !== form.getFieldValue("newPassword")) {
      return Promise.reject(new Error("Passwords do not match!"));
    }
    return Promise.resolve();
  };

  return (
    <section className="w-full min-h-screen px-5 py-10 bg-[#F1F9FF]">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-6">Change Password</h1>
          {/* Form Section */}
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <div className="space-y-4">
              <Form.Item
                label="Current Password"
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password!",
                  },
                ]}
              >
                <CustomInput
                  icon={LockOutlined}
                  isPassword={true}
                  placeholder="********"
                />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters long!",
                  },
                ]}
              >
                <CustomInput
                  icon={LockOutlined}
                  isPassword={true}
                  placeholder="********"
                />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  { validator: validateConfirmPassword },
                ]}
              >
                <CustomInput
                  icon={LockOutlined}
                  isPassword={true}
                  placeholder="********"
                />
              </Form.Item>
              <div className="flex justify-end mt-6 gap-4">
                <button className="px-8 py-2 border border-gray-400 rounded-xl">
                  Cancel
                </button>
                <CustomButton>Save Changes</CustomButton>
              </div>
            </div>
          </Form>
        </div>
      </MainContainer>
    </section>
  );
};

export default ChangePassword;
