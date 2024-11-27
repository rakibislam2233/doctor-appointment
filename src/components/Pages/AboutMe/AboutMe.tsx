import circle from "@/assets/hero-section/circle.png";
import profileImage from "@/assets/hero-section/nurse.png"; // Add your profile image path
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import CustomButton from "@/components/UI/CustomButton";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { FaAward } from "react-icons/fa";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  MdLocalPhone,
  MdOutlineCalendarMonth,
  MdOutlineEmail,
  MdOutlineTimer,
  MdSchool,
  MdWork,
} from "react-icons/md";
const breadcrumbItems = [
  {
    href: "/",
    title: (
      <div className="flex gap-2 texl">
        <HomeOutlined />
        <span>Home</span>
      </div>
    ),
  },
  {
    title: "About Me",
  },
];

const AboutMe = () => {
  return (
    <section className="w-full px-5 py-10">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        <div className="w-full hidden lg:block p-36 my-5 rounded-xl bg-[#F1F9FF]"></div>
        {/* Main content container */}
        <div className="w-full md:w-[80%] mx-auto flex flex-col lg:flex-row gap-20 mt-10">
          {/* Left Section (Doctor Image and Contact Info) */}
          <div className="w-full lg:w-1/3 rounded-xl">
            <div className="flex flex-col items-center">
              <div className="w-full h-full max-w-[500px] mx-auto bg-[#C0E4FF] flex justify-center relative rounded-xl px-5 py-8 -mt-0 lg:-mt-32">
                <img
                  src={circle.src}
                  alt=""
                  className="w-[300px] md:w-[380px] lg:w-[390px] xl:w-[400px] -mr-14 md:-mr-16 xl:-mr-20 2xl:-mr-28"
                />
                <img
                  src={profileImage.src}
                  alt=""
                  className="h-[280px] lg:h-[180px] xl:h-[270px] 2xl:h-[320px] bottom-0 absolute "
                />
              </div>
            </div>
            <div className="w-full space-y-4 my-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-[#274760]">
                  Contact Us
                </h1>
                <div className="flex space-x-3">
                  <Link
                    href={"/"}
                    className="size-9 border border-[#6CB2E7] text-[#6CB2E7] rounded-full flex justify-center items-center hover:bg-[#6CB2E7] hover:text-white transition-all duration-300"
                  >
                    <FiFacebook size={18} />
                  </Link>
                  <Link
                    href={"/"}
                    className="size-9 border border-[#6CB2E7] text-[#6CB2E7] rounded-full flex justify-center items-center hover:bg-[#6CB2E7] hover:text-white transition-all duration-300"
                  >
                    <FiLinkedin size={18} />
                  </Link>
                  <Link
                    href={"/"}
                    className="size-9 border border-[#6CB2E7] text-[#6CB2E7] rounded-full flex justify-center items-center hover:bg-[#6CB2E7] hover:text-white transition-all duration-300"
                  >
                    <FiTwitter size={18} />
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdLocalPhone color="#77C4FE" size={24} />
                <h1 className="font-semibold">013191179</h1>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineEmail color="#77C4FE" size={24} />
                <h1 className="font-semibold">rakib2020.tkg@gmail.com</h1>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineCalendarMonth color="#77C4FE" size={24} />
                <h1 className="text-2xl font-semibold">
                  Appointment Schedules
                </h1>
              </div>
              <div className="w-full space-y-4 p-8 rounded-xl bg-secondary">
                <div className="flex justify-between items-center">
                  <h1>Monday</h1>
                  <h1 className="font-semibold flex items-center gap-1">
                    <MdOutlineTimer size={18} />
                    09.00-12.00
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Wednesday</h1>
                  <h1 className="font-semibold flex items-center gap-1">
                    <MdOutlineTimer size={18} />
                    09.00-12.00
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Friday</h1>
                  <h1 className="font-semibold flex items-center gap-1">
                    <MdOutlineTimer size={18} />
                    09.00-12.00
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center my-5">
              <Link href={"/book-appointment"}>
                <CustomButton>Book an appointment</CustomButton>
              </Link>
            </div>
          </div>

          {/* Right Section (Doctor Info and Biography) */}
          <div className="w-full md:w-[600px] mx-auto rounded-xl -mt-0 lg:-mt-56">
            <div className="space-y-16 text-[#274760]">
              {/* Header Section */}
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold">
                  Dr. Evans Onwubiko, MD, MPH, FAPA
                </h1>
                <p className="text-xl font-semibold">
                  Board-certified Psychiatrist
                </p>
                <p>
                  With more than 15 years of experience learning human
                  psychology and behavior, Dr. Evans is an expert in managing
                  mood disorders and anxiety disorders.
                </p>
              </div>

              {/* Degrees Section */}
              <div>
                <h3 className="font-bold text-2xl mb-3 text-[#32526B] flex items-center gap-3">
                  <MdSchool color="#77C4FE" size={32} /> Degrees
                </h3>
                <ul className="space-y-4 px-6">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <div>
                      <h1 className="text-xl font-semibold text-[#32526B]">
                        University of California, San Francisco
                      </h1>
                      <p className="text-[#627D98]">Medical degree</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <div>
                      <h1 className="text-xl font-semibold text-[#32526B]">
                        University of California, Los Angeles (UCLA) Medical
                        Center
                      </h1>
                      <p className="text-[#627D98]">
                        Completed residency training in psychiatry
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <div>
                      <h1 className="text-xl font-semibold text-[#32526B]">
                        University of California, Berkeley
                      </h1>
                      <p className="text-[#627D98]">
                        Master of Public Health degree
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Experiences Section */}
              <div>
                <h3 className="font-bold text-2xl mb-3 text-[#32526B] flex items-center gap-3">
                  <MdWork color="#77C4FE" size={32} /> Experiences
                </h3>
                <ul className="space-y-4 px-6">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <div>
                      <h1 className="font-semibold text-[#32526B]">
                        Community Mental Health Clinics
                      </h1>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <h1 className="font-semibold text-[#32526B]">
                      Worked in community mental health clinics, private
                      practice, and academic medical centers.
                    </h1>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <h1 className="font-semibold text-[#32526B]">
                      Expertise in the treatment of mood disorders, anxiety
                      disorders, and psychotic disorders.
                    </h1>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <h1 className="font-semibold text-[#32526B]">
                      Complex Case Management
                    </h1>
                  </li>
                </ul>
              </div>

              {/* Awards/Achievements Section */}
              <div>
                <h3 className="font-bold text-2xl mb-3 text-[#32526B] flex items-center gap-3">
                  <FaAward color="#77C4FE" size={32} /> Awards/Achievements
                </h3>
                <ul className="space-y-4 px-6">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <div>
                      <h1 className="text-xl font-semibold text-[#32526B]">
                        FAPA Fellow
                      </h1>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary w-2 h-2 mt-2 rounded-full inline-block"></span>
                    <div>
                      <h1 className="text-xl font-semibold text-[#32526B]">
                        Research Contributions
                      </h1>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default AboutMe;
