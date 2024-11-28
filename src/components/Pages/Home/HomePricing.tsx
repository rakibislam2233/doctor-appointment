import CustomButton from "@/components/UI/CustomButton";
import { IoCheckmarkOutline } from "react-icons/io5";

const HomePricing = () => {
  return (
    <section className="w-full bg-[#F4FCF8] px-5 py-20">
      {/* Header Section */}
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-4xl font-semibold text-[#32526B]">Pricing</h1>
        <p className="">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Free Plan */}
        <div className="bg-primary  rounded-2xl text-white">
          <h2 className="text-4xl font-bold  py-7 text-center">Free</h2>
          <div className="border-b border-white"></div>
          <div className="flex gap-2 py-3 justify-center items-center ">
            <p className="text-3xl md:text-6xl font-bold">0</p>
            <div className="text-xl">
              <p className="font-bold">$</p>
              <p className="font-bold">Per Month</p>
            </div>
          </div>
          <div className="p-8">
            <ul className="text-left space-y-4 text-white">
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-white text-primary">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-white text-primary">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-white text-primary">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#BDBDBD] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Appointment reminders</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#BDBDBD] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Email and community support</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-white py-3 rounded-xl text-primary">
              Try Free
            </button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-secondary  rounded-2xl text-center text-white">
          <h2 className="text-4xl font-bold  py-7">Standard</h2>
          <div className="border-b border-white"></div>
          <div className="flex gap-2 py-3 justify-center items-center ">
            <p className="text-3xl md:text-6xl font-bold  ">12</p>
            <div className="text-xl">
              <p className="font-bold">$</p>
              <p className="font-bold">Per Month</p>
            </div>
          </div>
          <div className="p-8">
            <ul className="text-left space-y-4">
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#6CB2E7] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#6CB2E7] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#6CB2E7] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#BDBDBD] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Appointment reminders</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#BDBDBD] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Email and community support</span>
              </li>
            </ul>
            <CustomButton className="w-full mt-8"> Buy Now</CustomButton>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-secondary  rounded-2xl text-white">
          <h2 className="text-4xl font-bold  py-7 text-center">
            Premium
          </h2>
          <div className="border-b border-white"></div>
          <div className="flex gap-2 py-3 justify-center items-center ">
            <p className="text-3xl md:text-6xl font-bold  ">39</p>
            <div className="text-xl">
              <p className="font-bold">$</p>
              <p className="font-bold">Per Month</p>
            </div>
          </div>
          <div className="p-8">
            <ul className="text-left space-y-4">
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#6CB2E7] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#6CB2E7] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#6CB2E7] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Unlimited product updates</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#BDBDBD] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Appointment reminders</span>
              </li>
              <li className="flex items-center">
                <span className="size-8 rounded-full flex justify-center items-center bg-[#BDBDBD] text-white">
                  <IoCheckmarkOutline size={20} />
                </span>
                <span className="ml-2">Email and community support</span>
              </li>
            </ul>
            <CustomButton className="w-full mt-8"> Buy Now</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
