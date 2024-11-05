import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import profileImage from '@/assets/about/profile.png'
import Image from "next/image";
const Message = () => {
  return (
    <section className="w-full px-5 py-10 bg-[#F1F9FF]">
      <MainContainer>
        {/* Message Section */}
        <div className="w-full max-w-6xl mx-auto bg-yellow-300">
          {/* Header */}
          <div className="w-full px-4 py-4 bg-[#C0E4FF] ">
            <div>
              <h1 className="text-2xl font-semibold">Angela Vatiga</h1>
            </div>
            <Image width={70} height={70} src={profileImage} alt="profileImage" className="rounded-full object-fill"/>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Message;
