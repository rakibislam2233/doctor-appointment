import Image from "next/image";
import about1 from "@/assets/about/about1.png"; // Doctor image
import about2 from "@/assets/about/about2.png"; // Smaller nurse image
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomButton from "@/components/UI/CustomButton";

const AboutUs = () => {
  return (
    <section className="w-full relative px-5 py-10">
      <MainContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Right section with text content (first on mobile, second on larger screens) */}
        <div className="relative order-1 md:order-2">
          <div className="text-center md:text-left">
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

        {/* Left section with doctor and circular nurse image (second on mobile, first on larger screens) */}
        <div className="relative w-full flex justify-center order-2 md:order-1">
          <div className="w-full relative flex justify-center">
            {/* Doctor Image */}
            <Image
              src={about1}
              alt="Doctor"
              className="rounded-lg"
              width={400}
              height={400}
              objectFit="cover"
            />
            {/* Circular overlay image of the nurse */}
            <div className="absolute  left-1/2 md:left-[60%] transform -translate-x-1/2 md:translate-x-0 bottom-4 w-32 h-32 md:w-64 md:h-64 overflow-hidden">
              <Image
                src={about2}
                alt="Nurse smiling"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default AboutUs;
