"use client";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import CustomButton from "@/components/UI/CustomButton";
import CustomInput from "@/components/UI/CustomInput";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { Input } from "postcss";
import { MdEmail } from "react-icons/md";
const ChatBot = () => {
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
      title: "Chat Bot",
    },
  ];

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <section className="w-full px-5 py-10">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        <h1 className="text-5xl font-semibold text-[#32526B] text-center my-5">
          Asking Your question
        </h1>
        <div className="w-full py-8">
          <div className="w-full max-w-2xl mx-auto border px-8 py-14 bg-[#F1F9FF] rounded-xl border-[#77C4FE]">
            <Form onFinish={handleSubmit} layout="vertical" className="space-y-3">
              <CustomInput
                name="name"
                label="Your Name"
                placeholder="Name"
                icon={UserOutlined}
              />
              <CustomInput
                name="email"
                label="Your Email"
                placeholder="Email"
                icon={MdEmail}
              />
              <CustomInput
                name="message"
                label="Your Question"
                placeholder="Write Now"
                isTextArea
              />
              <Form.Item>
               <div className="mt-6">
               <CustomLoadingButton className="">
                Start Chat
                </CustomLoadingButton>
               </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default ChatBot;
