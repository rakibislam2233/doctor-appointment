"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import nurseImage from "@/assets/hero-section/nurse.png";
import circle from "@/assets/hero-section/circle.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";


const VerifyEmail = () => {
  const { email } = useParams();
  const [otp, setOtp] = useState<string>(""); // Explicitly set the OTP as a string
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  // Handle OTP change
  const handleOtpChange = (otpValue: string) => {
    setOtp(otpValue);
  };

  // Handle verification when the button is clicked
  const handleVerify = () => {
    setLoading(true);

    // Simulate OTP validation
    setTimeout(() => {
      if (otp.length === 6) {
        // Assuming successful OTP verification
        console.log("OTP Verified:", otp);
        router.push("/reset-password"); // Navigate to reset password page
      } else {
        alert("Invalid OTP. Please enter a valid code.");
      }
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
            <h2 className="text-3xl font-semibold ">Verify Email!</h2>
            <p className="text-gray-500">
              Please check your email and enter the code
            </p>
          </div>

          {/* Full width OTP Input */}
          <div className="flex justify-center mt-5">
            <OTPInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              containerStyle="otp-container"
              inputStyle={{
                width: "100%",
                maxWidth: "6.5rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "2rem",
                fontWeight:"bold",
                borderBottom: "1px solid #4E4E4E",
                textAlign: "center",
                outline: "none", 
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <CustomLoadingButton onClick={handleVerify} loading={loading}>
              Verify
            </CustomLoadingButton>
          </div>

          {/* Resend Section */}
          <div className="mt-5 flex justify-between items-center">
            <span className="text-gray-600">Didn’t receive code? </span>
            <Link href="/" className="underline">
              Resend
            </Link>
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

export default VerifyEmail;
