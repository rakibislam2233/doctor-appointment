"use client";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomButton from "@/components/UI/CustomButton";
import React, { useState } from "react";

const Review: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <section className="w-full px-5 py-10 bg-[#F1F9FF]">
      <MainContainer className="flex flex-col items-center p-8 rounded-lg w-full max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
          How was your experience with Dr. Evans Onwubiko?
        </h2>

        {/* Star Rating */}
        <div className="flex space-x-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className={`text-3xl ${
                star <= rating ? "text-blue-400" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>

        {/* Review Input */}
        <label className="w-full text-left text-gray-700 mb-2">
          Write Your Review
        </label>
        <textarea
          className="w-full h-32 p-3 rounded border border-blue-300 bg-blue-50 text-gray-800 resize-none focus:outline-none focus:border-blue-400"
          placeholder="Write now"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        {/* Send Button */}
        <div className="w-full flex justify-end mt-5">
           <CustomButton>Send</CustomButton>
        </div>
      </MainContainer>
    </section>
  );
};

export default Review;
