"use client";
import Slider from "react-slick";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const reviews = [
  {
    id: 1,
    name: "Elba R",
    location: "New York, USA",
    review:
      "Navigating my husband's chronic illness felt overwhelming until we joined Cline. Our MVR has been with us every step of the way, ensuring we make informed decisions.",
    image: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    id: 2,
    name: "John D",
    location: "California, USA",
    review:
      "Amazing service! Cline helped us find clarity during challenging times and provided the best solutions for my family.",
    image: "https://via.placeholder.com/150",
    rating: 4,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Review = () => {
  return (
    <section className="w-full px-5 py-20">
      {/* Header Section */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-4xl font-semibold text-[#32526B]">Some Reviews</h1>
        <p className="text-gray-900">What Are People Saying About Us</p>
      </div>

      <MainContainer>
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <div className="w-full flex bg-[#D3B5D3]">
                <div className="flex bg-yellow-400 rounded-xl">
                  <div className="size-40 p-5">
                    <Image
                      width={100}
                      height={100}
                      src={review.image}
                      alt={review.name}
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-2/3 p-5 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {review.name}
                    </h2>
                    <p className="text-gray-500">{review.location}</p>
                    <p className="text-gray-700 italic">"{review.review}"</p>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <span key={index} className="text-blue-400 text-xl">
                          ★
                        </span>
                      ))}
                      {Array.from({ length: 5 - review.rating }).map(
                        (_, index) => (
                          <span key={index} className="text-gray-300 text-xl">
                            ★
                          </span>
                        )
                      )}
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
