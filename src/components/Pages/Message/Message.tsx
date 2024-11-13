/* eslint-disable no-unused-vars */
import {
  FiPhone,
  FiVideo,
  FiImage,
  FiSmile,
  FiLink,
  FiMoreVertical,
} from "react-icons/fi";
import Link from "next/link";
import React from "react";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import Image from "next/image";

interface Member {
  id: number;
  name: string;
  image: string;
  bio: string;
  lastActive: string;
}

interface MessageBubbleProps {
  message: string;
  sender: string;
  position: "left" | "right";
}

interface ChatWindowProps {
  member: Member;
}

const Message: React.FC = () => {
  const member1: Member = {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Hiking lover",
    lastActive: "5 mins ago",
  };

  return (
    <section className="w-full bg-[#F1F9FF] py-10">
      <MainContainer>
        <ChatWindow member={member1} />
      </MainContainer>
    </section>
  );
};

const ChatWindow: React.FC<ChatWindowProps> = ({ member }) => (
  <div className="w-full flex flex-col h-1/2 lg:h-[92%] p-2 py-2">
    {/* Chat Header */}
    <div className="flex items-center justify-between px-5 py-4 bg-[#C0E4FF] rounded-xl">
      {/* User Info on the Left */}
      <div className="flex items-center space-x-3">
        <Image
          src={member.image}
          alt={member.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>

      {/* Action Buttons on the Right */}
      <div className="flex items-center space-x-3">
        <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-200">
          <FiImage className="text-[#77C4FE]" size={18} />
        </button>
        <Link href="/chat/callaudio">
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-200">
            <FiPhone className="text-[#77C4FE]" size={18} />
          </button>
        </Link>
        <Link href="/chat/videocall">
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-200">
            <FiVideo className="text-[#77C4FE]" size={18} />
          </button>
        </Link>
        <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-200">
          <FiMoreVertical className="text-[#77C4FE]" size={18} />
        </button>
      </div>
    </div>

    {/* Chat Messages Area */}
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="space-y-4">
        <MessageBubble
          message="Hello, I’d like to book an appointment with Dr. Smith."
          sender="Patient"
          position="left"
        />
        <MessageBubble
          message="Sure, may I know your preferred date and time?"
          sender="Receptionist"
          position="right"
        />
        <MessageBubble
          message="I’m available on Monday, around 10 AM."
          sender="Patient"
          position="left"
        />
        <MessageBubble
          message="Let me check Dr. Smith’s schedule... One moment."
          sender="Receptionist"
          position="right"
        />
        <MessageBubble
          message="Yes, please."
          sender="Patient"
          position="left"
        />
        <MessageBubble
          message="10 AM is available. Shall I book it for you?"
          sender="Receptionist"
          position="right"
        />
        <MessageBubble message="Thank you!" sender="Patient" position="left" />
        <MessageBubble
          message="Your appointment with Dr. Smith is confirmed for Monday at 10 AM."
          sender="Receptionist"
          position="right"
        />
      </div>
    </div>

    {/* Message Input */}
    <div className="p-4 bg-white rounded-xl">
      <div className="flex items-center bg-white rounded-full border border-gray-300 px-4 py-2 shadow-sm">
        <button className="text-gray-500 hover:text-blue-500 transition duration-200">
          <FiSmile size={24} />
        </button>
        <input
          type="text"
          placeholder="Send your message..."
          className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none rounded-full"
        />
        <button className="text-gray-500 hover:text-blue-500 transition duration-200">
          <FiImage size={24} />
        </button>
        <button className="text-gray-500 hover:text-blue-500 mx-2 transition duration-200">
          <FiLink size={24} />
        </button>
      </div>
    </div>
  </div>
);

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  sender,
  position,
}) => (
  <div className={`flex ${position === "right" ? "justify-end" : ""}`}>
    <div
      className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg shadow-sm ${
        position === "right"
          ? "bg-[#77C4FE] text-black rounded-br-none"
          : "bg-[#D5EDFF] text-gray-900 rounded-bl-none"
      }`}
    >
      <p className="text-sm">{message}</p>
      <p className="text-xs text-gray-400 mt-1">{sender}</p>
    </div>
  </div>
);

export default Message;
