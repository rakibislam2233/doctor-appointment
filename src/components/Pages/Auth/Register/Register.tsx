"use client";
import Image from "next/image";
import { Form, Checkbox } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
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
interface RegisterFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  terms?: boolean;
}

const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // Handle form submission
  const onFinish = (values: RegisterFormValues) => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      console.log("Received values from form: ", values);
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="w-full h-full px-5 py-10">
      {/* Main container */}
      <MainContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white">
        {/* Left side: Form */}
        <div>
          <div className="space-y-2">
            <div className="size-[80px] relative mx-auto md:mx-0">
              <Image fill src={logo} alt="logo" />
            </div>
            <h2 className="text-3xl font-semibold">Create an Account</h2>
            <p className="text-gray-500">
              Hello there, Let’s start your journey with us.
            </p>
          </div>
          <Form<RegisterFormValues>
            name="register"
            onFinish={onFinish}
            className="space-y-3 mt-5"
            layout="vertical"
          >
            {/* Name Input Wrapped in Form.Item */}
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <CustomInput icon={UserOutlined} placeholder="Enter your Name" />
            </Form.Item>

            {/* Email Input Wrapped in Form.Item */}
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <CustomInput icon={MailOutlined} placeholder="Enter your Email" />
            </Form.Item>

            {/* Phone Number Input Wrapped in Form.Item */}
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your Phone Number!" },
              ]}
            >
              <CustomInput
                icon={PhoneOutlined}
                placeholder="Enter your Phone Number"
              />
            </Form.Item>

            {/* Address Input Wrapped in Form.Item */}
            <Form.Item
              name="address"
              label="Address"
              rules={[
                { required: true, message: "Please input your Address!" },
              ]}
            >
              <CustomInput
                icon={HomeOutlined}
                placeholder="Enter your Address"
              />
            </Form.Item>

            {/* Password Input Wrapped in Form.Item */}
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <CustomInput
                icon={LockOutlined}
                isPassword={true}
                placeholder="Enter your Password"
              />
            </Form.Item>

            {/* Terms and Conditions Wrapped in Form.Item */}
            <Form.Item name="terms" valuePropName="checked">
              <Checkbox>
                I accept the Terms of Service and Privacy Policy
              </Checkbox>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <CustomLoadingButton loading={loading}>
                Sign Up
              </CustomLoadingButton>
            </Form.Item>
          </Form>
          <p className="text-gray-500 mt-5 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
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

export default Register;
