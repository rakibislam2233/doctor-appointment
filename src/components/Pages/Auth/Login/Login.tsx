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
      <MainContainer>
        <div className="size-[80px] relative mx-auto md:mx-0 mb-5">
          <Image fill src={logo} alt="logo" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left side: Form */}
          <div className="order-last md:order-first">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">Welcome back!</h2>
              <p className="text-gray-500">Please enter your details</p>
            </div>
            <Form<LoginFormValues>
              name="login"
              onFinish={onFinish}
              className="space-y-3 mt-5"
              layout="vertical"
            >
              {/* Email Input Wrapped in Form.Item */}
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <CustomInput className="bg-white"
                  icon={MailOutlined}
                  placeholder="Enter your Email"
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
                <CustomInput className="bg-white"
                  icon={LockOutlined}
                  isPassword={true}
                  placeholder="Enter your Password"
                />
              </Form.Item>

              <div className="flex justify-between items-center">
                {/* Remember Me Checkbox */}
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link href="/forgot-password">
                  <h1 className="underline">Forgot Password</h1>
                </Link>
              </div>

              {/* Submit Button */}
              <Form.Item>
                <div className="mt-6">
                  <button 
                    type="submit"  // This uses Ant Design's default button style without extra border or background
                    className="bg-primary text-white p-2 w-full text-center rounded-md"
                  >
                   Login
                  </button>
                </div>
              </Form.Item>
            </Form>

            <p className="text-gray-500 mt-5 text-center">
              Already have an account?{" "}
              <Link href="/register" className="text-secondary">
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
          <div className="w-full bg-[#C0E4FF]  rounded-xl flex justify-center items-center relative order-first md:order-last">
            <img
              src={circle.src}
              alt=""
              className="w-[400px] sm:w-[450px] md:w-[480px] xl:w-[500px] -mr-14 md:-mr-16 xl:-mr-20 2xl:-mr-28"
            />
            <img
              src={nurseImage.src}
              alt=""
              className="h-[280px] sm:h-[320px]  md:h-[330px] xl:h-[400px] 2xl:h-[430px] bottom-0 absolute "
            />

         
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Login;
