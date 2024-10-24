"use client";
import Image from "next/image";
import { Form, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import logo from "@/assets/logo/logo.png";
import nurseImage from "@/assets/hero-section/nurse.png";
import circle from "@/assets/hero-section/circle.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";
import React, { useState } from "react";
import CustomInput from "@/components/UI/CustomInput";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

// Define the form values interface
interface LoginFormValues {
  email: string;
  password: string;
  remember?: boolean;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission
  const onFinish = (values: LoginFormValues) => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      console.log("Received values from form: ", values);
      setLoading(false);
    }, 2000);
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
            <h2 className="text-3xl font-semibold">Welcome back!</h2>
            <p className="text-gray-500">Please enter your details</p>
          </div>
          <Form<LoginFormValues>
            name="login"
            onFinish={onFinish}
            className="space-y-3 mt-5"
            layout="vertical"
          >
            {/* Email Input */}
            <CustomInput
              name="email"
              label="Email"
              icon={MailOutlined}
              placeholder="Enter your Email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            />
            {/* Password Input */}
            <CustomInput
              name="password"
              label="Password"
              icon={LockOutlined}
              isPassword={true}
              placeholder="Enter your Password"
              rules={[{ required: true, message: "Please input your Password!" }]}
            />

            <div className="flex justify-between items-center">
              {/* Terms and Conditions */}
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link href="/forgot-password">
                <h1 className="underline">Forgot Password</h1>
              </Link>
            </div>

            {/* Submit Button */}
            <Form.Item>
              <CustomLoadingButton loading={loading}>Login</CustomLoadingButton>
            </Form.Item>
          </Form>
          <p className="text-gray-500 mt-5 text-center">
            Already have an account?{" "}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>
          </p>
          <div className="w-full flex justify-center items-center gap-2 mt-5">
            <div className="w-full h-[1px] bg-gray-800"></div>
            <div className="w-full">
              <h1 className="text-center">Or login with</h1>
            </div>
            <div className="w-full h-[1px] bg-gray-800"></div>
          </div>
          <div className="mt-5">
            <div className="size-14 mx-auto border border-[#C0E4FF] rounded-full flex justify-center items-center">
              <FcGoogle size={28} />
            </div>
          </div>
        </div>

        {/* Right side: Nurse image and circle background */}
        <div className="hidden lg:block w-full">
          <div className="w-full bg-[#C0E4FF] py-[92px] flex  flex-col md:flex-row  justify-center  rounded-xl">
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

export default Login;
