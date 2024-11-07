import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomButton from "@/components/UI/CustomButton";
import React from "react";
import doctorImage from "@/assets/hero-section/main-image.png";
import circle from "@/assets/hero-section/circle.png";
import emoji from "@/assets/hero-section/emoji.png";
import checked from "@/assets/hero-section/checked.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#F1F9FF] px-5">
      <MainContainer className="w-full h-full md:h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center place-content-center pt-10 md:pt-0">
        {/* Left side: Heading, Text, and Button */}
        <div className="w-full space-y-10">
          {/* Hero title */}
          <h1 className="text-6xl font-semibold flex flex-col gap-3">
            <span className="text-[#414141]">Doctor live</span>
            <span className="text-[#2AA7FF]">Consultation.</span>
          </h1>
          {/* Description */}
          <p className="text-[16px] leading-relaxed text-gray-600">
            We are committed to delivering the best medical and healthcare
            services to help you live a healthy and happy life.
          </p>
          {/* Appointment button */}
          <div className="space-x-5">
            <CustomButton>Book an appointment</CustomButton>
          </div>
        </div>

        {/* Right side: Nurse image with circle background */}
        <div className="hidden md:block">
          <div className="w-full flex justify-center relative ">
            <div className="w-full">
              <Image
                width={550}
                height={550}
                src={circle}
                alt="background circle"
                className="mx-auto mt-0 md:-mt-20 ml-6"
              />
            </div>
            <div className="absolute left-[84px] top-[40px]">
              <Image
                width={330}
                height={300}
                src={doctorImage}
                alt="nurse image"
              />
            </div>
            <div className="flex gap-3 items-center -left-24 absolute top-24 bg-white px-8 py-4 rounded-3xl ">
              <Image width={50} height={50} src={emoji} alt="emoji" />
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-[#77C4FE]">84k+</h1>
                <h1>Happy Client</h1>
              </div>
            </div>
            <div className="flex gap-5 items-center right-40 absolute bottom-9 bg-white px-10 py-5 rounded-3xl">
              <Image width={50} height={50} src={checked} alt="emoji" />
              <h1 className="font-semibold">
                Regular <br /> Checkup
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] relative block md:hidden">
          <Image
            fill
            src={doctorImage}
            alt="nurse image"
            className="absolute"
          />
        </div>

        {/* info side */}
      </MainContainer>
    </section>
  );
};

export default HeroSection;
