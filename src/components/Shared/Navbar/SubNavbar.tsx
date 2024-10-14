import React from "react";
import { IoMailUnread } from "react-icons/io5";
import MainContainer from "../MainContainer/MainContainer";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const SubNavbar = () => {
  return (
    <section className="w-full bg-[#77C4FE] px-3 py-4">
      <MainContainer className="flex items-center gap-8">
        <div className="flex items-center gap-3 font-medium">
          <IoMailUnread size={24} />
          <h1>rakib2020.tkg@gmail.com</h1>
        </div>
        <div className="flex items-center gap-3 font-medium">
          <TfiHeadphoneAlt size={24} />
          <h1>+8801319101179</h1>
        </div>
      </MainContainer>
    </section>
  );
};

export default SubNavbar;
