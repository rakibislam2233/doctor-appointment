import React from "react";
import Image from "next/image";
import nurseImage from "@/assets/hero-section/nurse.png";
import circle from "@/assets/hero-section/circle.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";

const Login = () => {
  return (
    <section className="w-full h-full md:h-screen flex justify-center items-center">
      {/* Main container */}
      <MainContainer className=" grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
        {/* Left side: Form */}
        <div className="p-10">
          <h2 className="text-3xl font-semibold mb-6">Create an Account</h2>
          <p className="text-gray-500 mb-6">
            Hello there, Let's start your journey with us.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-500">
                I accept the Terms of Service and Privacy Policy
              </span>
            </div>
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Already have an account? <a href="#" className="text-blue-500">Login</a>
          </p>
        </div>

        {/* Right side: Nurse image and circle background */}
        <div className="hidden md:flex w-full relative justify-center items-center bg-[#C0E4FF] rounded-xl p-10">
          {/* Circle background */}
          <Image
            width={550}
            height={550}
            src={circle.src}
            alt="circle"
            className="absolute"
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
      </MainContainer>
    </section>
  );
};

export default Login;
