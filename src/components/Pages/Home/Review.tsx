"use client";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import Image from "next/image";
import React from "react";
import Slider from "react-slick"; // Importing react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reviews data
const reviews = [
  {
    name: "Elza R",
    location: "New York, USA",
    review:
      "Navigating my husband's chronic illness felt overwhelming until we joined Cliniva. Our MVR has been with us every step of the way, ensuring we make informed decisions.",
    rating: 5,
    image: "https://i.ibb.co.com/YDBLTZF/Street.jpg", // Replace with your image path
  },
  {
    name: "John D",
    location: "Los Angeles, USA",
    review:
      "The experience has been nothing short of life-changing. With Cliniva, we felt secure.",
    rating: 5,
    image: "https://i.ibb.co.com/YDBLTZF/Street.jpg", // Replace with your second image path
  },
  {
    name: "Jane M",
    location: "Chicago, USA",
    review:
      "We have had such peace of mind thanks to Cliniva. Highly recommended for families!",
    rating: 4,
    image: "https://i.ibb.co.com/YDBLTZF/Street.jpg", // Replace with your third image path
  },
  // Add more reviews as needed
];

// Custom Arrow Component
const CustomArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#D3B5D3",
        padding: "20px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    ></div>
  );
};

const Review = () => {
  // Settings for react-slick
  const settings = {
    dots: false, // No pagination dots
    infinite: true, // Infinite looping of slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 slide at a time on mobile
    slidesToScroll: 1, // Scroll 1 slide at a time
    arrows: true, // Enable arrows
    nextArrow: <CustomArrow />, // Custom next arrow
    prevArrow: <CustomArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 768, // Tablet view
        settings: {
          slidesToShow: 1, // Show 2 reviews at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Desktop view
        settings: {
          slidesToShow: 3, // Show 3 reviews at a time on desktop
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full px-5 py-16">
      <MainContainer>
        <div className="text-center space-y-3 mb-10">
          <h1 className="text-4xl font-semibold text-[#32526B]">
            {" "}
            Some Reviews
          </h1>
          <p className="text-gray-900">What Are People Saying About Us</p>
        </div>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="w-full px-4">
              <div className="w-full flex items-center">
                <div className=" hidden md:block w-[13%] h-[520px] bg-[#D3B5D3] rounded-xl"></div>
                <div className="w-full md:w-[87%] h-full flex flex-col md:flex-row items-center gap-10 md:z-50 -ml-0 md:-ml-10">
                 <div className="w-full h-[300px] md:w-[300px] relative">
                 <Image
                    fill
                    src={review.image}
                    alt="image"
                    className="rounded-xl absolute"
                  />
                 </div>
                  <div>
                    <h4 className="text-3xl font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <h1 className="text-gray-500">{review.location}</h1>
                    <p className="mt-4 text-gray-700">{review.review}</p>
                    <div className="mt-4 text-yellow-500 text-2xl">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </MainContainer>
    </section>
  );
};

export default Review;
