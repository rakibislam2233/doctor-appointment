"use client";
import Image from "next/image";
import { Form } from "antd";
import { LockOutlined } from "@ant-design/icons";
import logo from "@/assets/logo/logo.png";
import nurseImage from "@/assets/hero-section/nurse.png";
import circle from "@/assets/hero-section/circle.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";
import React, { useState } from "react";
import CustomInput from "@/components/UI/CustomInput";

// Define form values interface
interface ResetPasswordFormValues {
  new_password: string;
  confirm_password: string;
}

const ResetPassword: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm(); // Hook for handling form

  // Handle form submission
  const onFinish = (values: ResetPasswordFormValues) => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      console.log("Received values from form: ", values);
      setLoading(false);
    }, 2000);
  };

  // Validator for confirming password
  const validateConfirmPassword = (_: unknown, value: string) => {
    if (value && value !== form.getFieldValue("new_password")) {
      return Promise.reject(new Error("Passwords do not match!"));
    }
    return Promise.resolve();
  };

  return (
    <section className="w-full h-full lg:h-screen flex justify-between items-center p-5">
      {/* Main container */}
      <MainContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white">
        {/* Left side: Form */}
        <div>
          <div className="space-y-2">
            <div className="size-[80px] relative mx-auto md:mx-0">
              <Image fill src={logo} alt="logo" />
            </div>
            <h2 className="text-3xl font-semibold">Reset Password!</h2>
            <p className="text-gray-500">
              Your password must be 8-10 characters long.
            </p>
          </div>
          <Form<ResetPasswordFormValues>
            form={form}
            name="reset-password"
            onFinish={onFinish}
            className="space-y-3 mt-5"
            layout="vertical"
          >
            {/* New Password Input Wrapped in Form.Item */}
            <Form.Item
              name="new_password"
              label="New Password"
              rules={[
                { required: true, message: "Please input your new password!" },
                {
                  min: 8,
                  max: 10,
                  message: "Password must be between 8-10 characters!",
                },
              ]}
            >
              <CustomInput
                icon={LockOutlined}
                isPassword={true}
                placeholder="Enter your new password"
              />
            </Form.Item>

            {/* Confirm Password Input Wrapped in Form.Item */}
            <Form.Item
              name="confirm_password"
              label="Confirm Password"
              rules={[
                { required: true, message: "Please confirm your password!" },
                { validator: validateConfirmPassword },
              ]}
            >
              <CustomInput
                icon={LockOutlined}
                isPassword={true}
                placeholder="Confirm your password"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <div className="mt-5">
                <CustomLoadingButton loading={loading}>
                  Reset Password
                </CustomLoadingButton>
              </div>
            </Form.Item>
          </Form>
        </div>

        {/* Right side: Nurse image and circle background */}
        <div className="hidden lg:block w-full">
          <div className="w-full bg-[#C0E4FF] py-[92px] flex flex-col md:flex-row justify-center rounded-xl">
            {/* Circle background */}
            <Image
              width={550}
              height={550}
              src={circle.src}
              alt="circle"
              className="absolute mx-auto"
            />
            {/* Nurse image */}
            <Image
              width={250}
              height={250}
              src={nurseImage}
              alt="nurse"
              className="relative -left-16 top-[92px] bottom-0 z-10"
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default ResetPassword;
