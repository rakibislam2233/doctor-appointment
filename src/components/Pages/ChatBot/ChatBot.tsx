"use client";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import CustomInput from "@/components/UI/CustomInput";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";
import { HomeOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
import React from "react";

// Define form values interface
interface ChatBotFormValues {
  name: string;
  email: string;
  message: string;
}

const ChatBot: React.FC = () => {
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

  // Handle form submission
  const handleSubmit = (values: ChatBotFormValues) => {
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
            <Form
              onFinish={handleSubmit}
              layout="vertical"
              className="space-y-3"
            >
              <CustomInput
                name="name"
                label="Your Name"
                placeholder="Name"
                icon={UserOutlined}
                rules={[{ required: true, message: "Please input your name!" }]}
              />
              <CustomInput
                name="email"
                label="Your Email"
                placeholder="Email"
                icon={MailOutlined}
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              />
              <CustomInput
                name="message"
                label="Your Question"
                placeholder="Write Now"
                isTextArea
                rules={[
                  { required: true, message: "Please input your question!" },
                ]}
              />
              <Form.Item>
                <div className="mt-6">
                  <CustomLoadingButton className="">Start Chat</CustomLoadingButton>
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
