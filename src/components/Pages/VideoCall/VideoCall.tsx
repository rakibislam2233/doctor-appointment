import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import React from "react";

const VideoCall: React.FC = () => {
  return (
    <section className="w-full  bg-[#F1F9FF]">
      <MainContainer className="flex h-screen justify-center items-center">
        <div className="w-96 h-[600px] bg-pink-100 rounded-lg p-5 relative flex flex-col items-center">
          {/* Header */}
          <div className="w-full bg-blue-300 text-white text-left px-4 py-2 rounded-t-lg text-lg">
            Back
          </div>

          {/* Center Circle */}
          <div className="bg-gray-300 rounded-full w-40 h-40 flex justify-center items-center mt-10 relative">
            <div className="bg-pink-500 w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl">
              🔊
            </div>
          </div>

          {/* User Name */}
          <div className="mt-4 text-lg text-gray-600">Angela Vatiga</div>

          {/* Timestamp */}
          <div className="absolute bottom-24 text-sm text-gray-500">
            27 Jan 2023 10:15 AM
          </div>

          {/* Footer Icons */}
          <div className="flex justify-between w-full px-6 absolute bottom-5">
            <button className="w-12 h-12 bg-pink-500 text-white rounded-full text-xl flex justify-center items-center">
              🎤
            </button>
            <button className="w-12 h-12 bg-gray-300 text-black rounded-full text-xl flex justify-center items-center">
              📎
            </button>
            <button className="w-12 h-12 bg-gray-300 text-black rounded-full text-xl flex justify-center items-center">
              📸
            </button>
            <button className="w-12 h-12 bg-gray-300 text-black rounded-full text-xl flex justify-center items-center">
              🎥
            </button>
            <button className="w-12 h-12 bg-pink-500 text-white rounded-full text-xl flex justify-center items-center">
              📞
            </button>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default VideoCall;
