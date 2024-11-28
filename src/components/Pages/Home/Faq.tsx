"use client";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import Image from "next/image";
import { useState } from "react";
import line from "@/assets/faq/line.png"; // Assuming line.png is a design element
import { FiMinus, FiPlus } from "react-icons/fi";

// Define the types for FAQ items
interface FaqItem {
  question: string;
  answer: string;
}

const Faq = () => {
  // FAQ data
  const faqs: FaqItem[] = [
    {
      question: "Can I see who reads my email campaigns?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
    {
      question: "Do you offer non-profit discounts?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
    {
      question: "Can I see who reads my email campaigns?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
    {
      question: "Can I see who reads my email campaigns?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim.",
    },
  ];

  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(0); // By default, the first FAQ is open

  // Toggle function to open/close FAQs
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-5 py-16 bg-[#F1F9FF]">
      <MainContainer>
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-semibold text-[#32526B]">
            Frequently Ask Question
          </h1>
          <Image
            width={400}
            height={200}
            src={line}
            alt="line"
            className="mx-auto"
          />
          <p className="text-gray-900">
            We use only the best quality materials on the market in order to{" "}
            <br />
            provide the best products to our patients.
          </p>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className={`w-full p-5 cursor-pointer transition-all duration-500 ease-in-out  rounded-xl ${
                openIndex === index
                  ? "bg-[#3780f9]"
                  : "border-b border-gray-900 "
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="w-full space-y-3">
                  <h3
                    className={`text-xl font-semibold ${
                      openIndex === index ? "text-white" : "text-[#32526B]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  {openIndex === index && <hr />}
                </div>
                <span className="text-xl">
                  {openIndex === index ? (
                    <span className="size-5 flex justify-center items-center border rounded-full p-0.5">
                      <FiMinus size={17} className="text-white" />
                    </span>
                  ) : (
                    <span className="size-5 flex justify-center items-center border rounded-full bg-gray-950 p-0.5">
                      <FiPlus size={17} className="text-white" />
                    </span>
                  )}
                </span>
              </div>

              {/* Conditionally render the answer with animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <p
                  className={`mt-3 ${
                    openIndex === index ? "opacity-100 text-white" : "opacity-0"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
};

export default Faq;
