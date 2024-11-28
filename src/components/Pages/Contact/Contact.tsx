"use client";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import CustomInput from "@/components/UI/CustomInput";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Form } from "antd";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall, IoMdMail } from "react-icons/io";

// Define the interface for form values
interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

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
    title: "Contact",
  },
];

// Define the Contact component with TypeScript
const Contact: React.FC = () => {
  const [form] = Form.useForm<ContactFormValues>(); // Use the defined interface for form values

  const handleSubmit = (values: ContactFormValues) => {
    console.log("Form Submitted:", values);
  };

  return (
    <section className="w-full px-5 py-10 bg-[#F1F9FF]">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        {/* Contact Section */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 my-16">
          {/* Left Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-secondary p-10 rounded-2xl">
              <div className="mb-16 flex gap-5">
                <div className="bg-primary p-2 rounded-full size-14 flex justify-center items-center">
                  <IoMdCall className="text-white" size={20} />
                </div>
                <div className="mt-2">
                  <h1 className="text-white text-xl font-semibold">
                    Call To Us
                  </h1>
                  <div className="space-y-4 mt-7">
                    <p className="text-white text-lg">
                      We are available 24/7, 7 days a week.
                    </p>
                    <p className="text-white font-medium">
                      Phone: +156343-453233
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b border-[#929292] my-5"></div>
              <div className="mb-6 flex gap-5">
                <div className="bg-primary p-2 rounded-full size-14 flex justify-center items-center">
                  <IoMdMail className="text-white" size={20} />
                </div>
                <div className="mt-2">
                  <h1 className="text-white text-xl font-semibold">
                    Send us an email
                  </h1>
                  <div className="space-y-4 mt-7">
                    <p className="text-white text-lg">
                      Fill out our form and we will contact you within 24 hours.
                    </p>
                    <p className="text-white font-medium">
                      Email: rakib2020.tkg@gmail.com
                    </p>
                    <p className="text-white font-medium">
                      Email: Support@Website.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-[60%] p-4 md:p-6 rounded-md">
          <Form
  form={form}
  layout="vertical"
  onFinish={handleSubmit}
  className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4"
>
  <Form.Item
    name="firstName"
    label="First Name"
    rules={[{ required: true, message: "Please input your first name!" }]}
  >
    <CustomInput
      icon={UserOutlined}
      placeholder="Enter your first name"
      className="bg-white"
    />
  </Form.Item>

  <Form.Item
    name="lastName"
    label="Last Name"
    rules={[{ required: true, message: "Please input your last name!" }]}
  >
    <CustomInput
      icon={UserOutlined}
      placeholder="Enter your last name"
      className="bg-white"
    />
  </Form.Item>

  <Form.Item
    name="email"
    label="Your Email"
    rules={[
      { required: true, type: "email", message: "Please input a valid email!" },
    ]}
  >
    <CustomInput
      icon={MailOutlined}
      placeholder="Enter your email"
      className="bg-white"
    />
  </Form.Item>

  <Form.Item
    name="phone"
    label="Your Phone Number"
    rules={[{ required: true, message: "Please input your phone number!" }]}
  >
    <CustomInput
      icon={PhoneOutlined}
      placeholder="Enter your phone number"
      className="bg-white"
    />
  </Form.Item>

  <Form.Item
    name="address"
    label="Your Address"
    className="col-span-full"
    rules={[{ required: true, message: "Please input your address!" }]}
  >
    <CustomInput
      icon={CiLocationOn}
      placeholder="Enter your address"
      className="bg-white"
    />
  </Form.Item>

  <Form.Item
    name="message"
    label="Your Message"
    className="col-span-full"
    rules={[{ required: true, message: "Please input your message!" }]}
  >
    <CustomInput
      placeholder="Write your message here"
      isTextArea
      className="bg-white"
    />
  </Form.Item>

  <Form.Item className="col-span-full">
    <CustomLoadingButton>Submit</CustomLoadingButton>
  </Form.Item>
</Form>

          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default Contact;
