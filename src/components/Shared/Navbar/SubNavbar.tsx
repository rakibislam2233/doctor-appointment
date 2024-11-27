import { IoMailUnread } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import MainContainer from "../MainContainer/MainContainer";

const SubNavbar = () => {
  return (
    <section className="w-full bg-primary px-3 py-4 text-white">
      <MainContainer className="flex flex-wrap items-center gap-8">
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
