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
          Asking Your Question
        </h1>
        <div className="w-full py-8">
          <div className="w-full max-w-2xl mx-auto border px-8 py-14 bg-[#fff] rounded-xl border-secondary">
            <Form
              onFinish={handleSubmit}
              layout="vertical"
              className="space-y-3"
            >
              <Form.Item
                name="name"
                label="Your Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <CustomInput
                  placeholder="Name"
                  icon={UserOutlined}
                  className="bg-transparent"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Your Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <CustomInput
                  placeholder="Email"
                  icon={MailOutlined}
                  className="bg-transparent"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="Your Question"
                rules={[
                  { required: true, message: "Please input your question!" },
                ]}
              >
                <CustomInput
                  placeholder="Write Now"
                  isTextArea
                  className="bg-transparent"
                />
              </Form.Item>

              {/* Submit Button */}
        
              <Form.Item>
              <div className="mt-2">
                <CustomLoadingButton>
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
