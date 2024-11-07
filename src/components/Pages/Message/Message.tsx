import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import profileImage from "@/assets/about/profile.png";
import Image from "next/image";
import {FaVideo } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { BsImageFill, BsThreeDotsVertical } from "react-icons/bs";
const Message = () => {
  return (
    <section className="w-full px-5 py-10 bg-[#F1F9FF]">
      <MainContainer>
        {/* Message Section */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="w-full flex justify-between items-center px-4 py-4 bg-[#C0E4FF] rounded-xl ">
            <div className="flex items-center gap-2">
              <Image
                width={70}
                height={70}
                src={profileImage}
                alt="profileImage"
                className="rounded-full object-fill"
              />
              <h1 className="text-xl font-semibold">Angela Vatiga</h1>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="size-12 ring-2 ring-[#EDE9E9] bg-white rounded-full flex justify-center items-center text-[#77C4FE]">
                <FaVideo className="size-5" />
              </div>
              <div className="size-12 ring-2 ring-[#EDE9E9] bg-white rounded-full flex justify-center items-center text-[#77C4FE]">
                <IoIosCall className="size-5" />
              </div>
              <div className="size-12 ring-2 ring-[#EDE9E9] bg-white rounded-full flex justify-center items-center text-[#77C4FE]">
                <BsImageFill className="size-5" />
              </div>
              <div className="size-12 ring-2 ring-[#EDE9E9] bg-white rounded-full flex justify-center items-center text-[#77C4FE]">
                <BsThreeDotsVertical className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Message;
