"use client";
import Image from "next/image";
import { Form } from "antd";
import { MailOutlined } from "@ant-design/icons";
import logo from "@/assets/logo/logo.png";
import nurseImage from "@/assets/hero-section/nurse.png";
import circle from "@/assets/hero-section/circle.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";
import React from "react";
import CustomInput from "@/components/UI/CustomInput";
import { useRouter } from "next/navigation";

interface IForgotPasswordProps {
  email: string;
}

const ForgotPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  // Handle form submission
  const onFinish = (values: IForgotPasswordProps) => {
    setLoading(true);
    // Simulate a network request
    setTimeout(() => {
      router.push(`/verify-email?email=${values.email}`);
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
            <h2 className="text-3xl font-semibold">Forgot Password!</h2>
            <p className="text-gray-500">
              Please enter your Email to reset your password.
            </p>
          </div>
          <Form
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
              <CustomInput className="bg-white" icon={MailOutlined} placeholder="Enter your Email" />
            </Form.Item>
            {/* Submit Button */}
            <Form.Item>
                <div className="mt-6">
                  <button 
                    type="submit"  // This uses Ant Design's default button style without extra border or background
                    className="bg-primary text-white p-2 w-full text-center rounded-md"
                  >
                    Get OTP
                  </button>
                </div>
              </Form.Item>
          </Form>
        </div>

        {/* Right side: Nurse image and circle background */}
        <div className="w-full bg-[#C0E4FF]  rounded-xl hidden sm:flex justify-center items-center relative order-first md:order-last">
          <img
            src={circle.src}
            alt=""
            className="w-[400px] sm:w-[450px] md:w-[480px] xl:w-[500px] -mr-14 md:-mr-16 xl:-mr-20 2xl:-mr-28"
          />
          <img
            src={nurseImage.src}
            alt=""
            className="h-[280px] sm:h-[320px]  md:h-[310px] xl:h-[380px] 2xl:h-[410px] bottom-0 absolute"
          />
        </div>
      </MainContainer>
    </section>
  );
};

export default ForgotPassword;
