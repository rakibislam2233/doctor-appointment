import { MdLocalPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { PiWhatsappLogo } from "react-icons/pi";
import MainContainer from "../MainContainer/MainContainer";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full py-20 bg-[#548BB4] px-5 md:px-0">
      <MainContainer className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 ">
          <div className="space-y-4 text-center md:text-start">
            <div className="w-[160px] h-[100px] relative mx-auto md:mx-0 bg-yellow-300">
              {/* <Image fill src={logo} alt="logo" /> */}
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-white">
                Doctor Appointment Booking
              </h1>
              <h1 className="text-white">
                Take control of your health journey with MediCareSync a trusted
                companion committed to your well-being. Your health, your time,
                your way. Start your journey today.
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white text-center md:text-start">
            Explore
            </h1>
            <ul className="flex flex-col text-center md:text-start gap-4 mt-5">
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                Chat bot
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white text-center md:text-start">
            Support
            </h1>
            <ul className="flex flex-col gap-4 mt-5 text-center md:text-start">
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                FAQ.s
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-700 hover:underline">
                Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white text-center md:text-start">
              Contact
            </h1>
            <ul className="flex flex-col gap-4 mt-5 text-center md:text-start">
              <li className="flex justify-center md:justify-start items-center gap-2 text-white">
                <MdOutlineEmail size={20} />
                <span className="ml-2">info@example.com</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2 text-white">
                <MdLocalPhone size={20} />
                <span className="ml-2">+8801319101179</span>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2 text-white">
                <MdLocationOn size={20} />
                <span className="ml-2">Dhaka Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-white">
            Copyright @2024. All Rights Reserved
          </h1>
          <div className="flex justify-center md:justify-start items-center gap-5">
            <div className="bg-white size-10 rounded-full flex justify-center items-center">
              <FiFacebook className="text-[#548BB4]" size={18} />
            </div>
            <div className="bg-white size-10 rounded-full flex justify-center items-center">
              <FiLinkedin className="text-[#548BB4]" size={18} />
            </div>

            <div className="bg-white size-10 rounded-full flex justify-center items-center">
              <PiWhatsappLogo className="text-[#548BB4]" size={18} />
            </div>
          </div>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
