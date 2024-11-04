"use client";
import Image from "next/image";
import { Form } from "antd";
import { MailOutlined } from "@ant-design/icons";
import logo from "@/assets/logo/logo.png";
// import doctorImage from "@/assets/hero-section/main-image.png";
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
            <h2 className="text-3xl font-semibold ">Forgot Password!</h2>
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
            {/* Submit Button */}
            <Form.Item>
            <div className="mt-2">

              <CustomLoadingButton loading={loading}>
                Get Otp
              </CustomLoadingButton>
              </div>
            </Form.Item>
          </Form>
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

export default ForgotPassword;
