import Image from "next/image";
import about1 from "@/assets/about/about1.png"; // Doctor image
import about2 from "@/assets/about/about2.png"; // Smaller nurse image
import about3 from "@/assets/about/about3.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomButton from "@/components/UI/CustomButton";

const AboutUs = () => {
  return (
    <section className="w-full py-10 relative">
      <MainContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {/* Left section with doctor and circular nurse image */}
        <div className="relative w-full flex justify-center">
          <div className="w-full relative">
            <Image
              src={about1} // Main doctor image
              alt="Doctor"
              className="rounded-lg "
              width={400}
              height={400}
              objectFit="cover"
            />
            {/* Circular overlay image of the nurse */}
            <div className="absolute left-60 bottom-4 w-64 h-64 overflow-hidden">
              <Image
                src={about2} // Circular nurse image
                alt="Nurse smiling"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Right section with text */}
        {/* <div className="w-full h-full md:h-[500px] relative ">
          <Image fill src={about3} alt="about3" className="absolute" />
        </div> */}
        <div>
          <div className=" relative">
            <h2 className="text-3xl font-bold text-gray-800">About</h2>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">
              World-Class Preventive, Prescriptive & Curative Medical Practices
            </h3>
            <p className="text-lg text-gray-600 mt-4">
              Discover quality healthcare close to you with our easy-to-use
              platform. Quickly locate and connect with nearby healthcare
              professionals who meet your needs. Take charge of your
              well-being—find a doctor today. Your health journey starts here.
            </p>

            <div className="mt-5">
              <CustomButton hover>See More</CustomButton>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default AboutUs;
