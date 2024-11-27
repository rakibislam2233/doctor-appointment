import idea from "@/assets/my-values/idea.png";
import life from "@/assets/my-values/life.png";
import set from "@/assets/my-values/set.png";
import rakib from "@/assets/my-values/true.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import Image from "next/image";
const MyValues = () => {
  const values = [
    {
      title: "Compassion",
      description:
        " We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.",
      image: life,
    },
    {
      title: "Integrity",
      description:
        "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one",
      image: idea,
    },
    {
      title: "Patience",
      description:
        "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one",
      image: set,
    },
    {
      title: "Professionalism",
      description:
        "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one",
      image: rakib,
    },
  ];
  return (
    <div className="w-full bg-[#FAF6FA] py-16 my-16 px-5">
      <MainContainer>
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-semibold text-[#32526B]">My Values</h1>
          <p className="text-gray-900">
            Being in the healthcare sector, we consider it our paradigm dutyto
            ensure Safety of our patients, effectiveness of our <br />{" "}
            treatments,transparency in our practices, and absolute timely care.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
          {values?.map((value, i) => (
            <div
              key={i}
              className="w-full h-full bg-primary py-0.5 rounded-3xl"
            >
              <div className="w-full bg-[#F1F9FF] p-6 space-y-4 rounded-3xl">
                <div className="size-16 bg-primary rounded-full flex justify-center items-center">
                  <Image src={value.image} alt="life" width={35} height={35} />
                </div>
                <h1 className="text-3xl font-semibold text-[#32526B]">
                  {value.title}
                </h1>
                <h1>{value.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </div>
  );
};

export default MyValues;
