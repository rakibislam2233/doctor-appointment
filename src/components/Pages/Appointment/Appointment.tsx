"use client";
import React from "react";
import {
  HomeOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import {
  Form,
  Input,
  Radio,
  Button,
  DatePicker,
  TimePicker,
  Row,
  Col,
} from "antd";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import moment from "moment";
import CustomInput from "@/components/UI/CustomInput";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";

// Breadcrumb items
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
    title: "Appointment Form",
  },
];

const Appointment = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <section className="w-full px-5 py-10 bg-[#EFF8FE]">
      <MainContainer>
        {/* Breadcrumb */}
        <CustomBreadcrumb items={breadcrumbItems} />

        <div className="w-full max-w-7xl mx-auto mt-10">
          {/* Appointment Form */}
          <h1 className="text-3xl font-semibold mb-8">Book Appointment</h1>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="w-full"
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-16 place-items-center place-content-center">
              <div className="w-full grid grid-cols-2 gap-2">
                <CustomInput
                  name="name"
                  label="Name"
                  placeholder="Enter Your Name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                />
                <CustomInput
                  name="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                />
                <div className="w-full col-span-full">
                  <CustomInput
                    type="number"
                    name="phone"
                    label="Phone"
                    placeholder="Enter Your Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  />
                </div>
                <div className="w-full col-span-full">
                  <CustomInput
                    name="address"
                    label="Address"
                    placeholder="Enter Your Address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  />
                </div>
                <Form.Item
                  name="preferredTime"
                  label={<span className="text-lg">Preferred Time</span>}
                  rules={[{ required: true, message: "Please select a time" }]}
                >
                  <TimePicker
                    placeholder="--:-- --"
                    className="w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#F3FAFF] text-gray-700 rounded-lg focus:border-[#77C4FE]"
                    format="HH:mm"
                    suffixIcon={
                      <ClockCircleOutlined style={{ color: "#77C4FE" }} />
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="preferredDate"
                  label={<span className="text-lg">Preferred Date</span>}
                  rules={[{ required: true, message: "Please select a date" }]}
                >
                  <DatePicker
                    placeholder="dd/mm/yyyy"
                    className="w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-[#F3FAFF] text-gray-700 rounded-lg focus:border-[#77C4FE]"
                    suffixIcon={
                      <CalendarOutlined style={{ color: "#77C4FE" }} />
                    }
                  />
                </Form.Item>
                <Form.Item
                  className="w-full col-span-full"
                  name="reasonForVisit"
                  label={<span className="text-lg">Reason for Visit</span>}
                  rules={[{ required: true, message:"Please select Reason" }]}
                >
                  <Radio.Group className="flex gap-4">
                    <Radio value="oldPatient" className="text-lg">
                      Old Patient Visit
                    </Radio>
                    <Radio value="newPatient" className="text-lg">
                      New Patient Visit
                    </Radio>
                    <Radio value="specificConcern" className="text-lg">
                      Specific Concern
                    </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="w-full col-span-full"
                  name="department"
                  label={<span className="text-lg">Department</span>}
                  rules={[{ required: true, message:"Please select Department" }]}
                >
                  <Radio.Group className="grid grid-cols-3 gap-4">
                    <Radio value="pediatric" className="text-lg">
                      Pediatric
                    </Radio>
                    <Radio value="generalSurgery" className="text-lg">
                      General Surgery
                    </Radio>
                    <Radio value="ophthalmology" className="text-lg">
                      Ophthalmology
                    </Radio>
                    <Radio value="dentistry" className="text-lg">
                      Dentistry
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="w-full">
                <h1>Contact Info</h1>
              </div>
            </div>
            <Form.Item
              name="bodyPart"
              label={<span className="text-lg">Part of Body</span>}
              rules={[{ required: true , message:"Please select at least 1 Body part"}]}
            >
              <Radio.Group className="flex flex-wrap gap-4">
                <Radio value="stomach" className="text-lg">
                  Stomach
                </Radio>
                <Radio value="ears" className="text-lg">
                  Ears
                </Radio>
                <Radio value="eyes" className="text-lg">
                  Eyes
                </Radio>
                <Radio value="leg" className="text-lg">
                  Leg
                </Radio>
                <Radio value="stomach" className="text-lg">
                  Stomach
                </Radio>
                <Radio value="ears" className="text-lg">
                  Ears
                </Radio>
                <Radio value="eyes" className="text-lg">
                  Eyes
                </Radio>
                <Radio value="leg" className="text-lg">
                  Leg
                </Radio>
                <Radio value="stomach" className="text-lg">
                  Stomach
                </Radio>
                <Radio value="ears" className="text-lg">
                  Ears
                </Radio>
                <Radio value="eyes" className="text-lg">
                  Eyes
                </Radio>
                <Radio value="leg" className="text-lg">
                  Leg
                </Radio>
                <Radio value="stomach" className="text-lg">
                  Stomach
                </Radio>
                <Radio value="ears" className="text-lg">
                  Ears
                </Radio>
                <Radio value="eyes" className="text-lg">
                  Eyes
                </Radio>
                <Radio value="leg" className="text-lg">
                  Leg
                </Radio>
                <Radio value="stomach" className="text-lg">
                  Stomach
                </Radio>
                <Radio value="ears" className="text-lg">
                  Ears
                </Radio>
                <Radio value="eyes" className="text-lg">
                  Eyes
                </Radio>
                <Radio value="leg" className="text-lg">
                  Leg
                </Radio>
                <Radio value="stomach" className="text-lg">
                  Stomach
                </Radio>
                <Radio value="ears" className="text-lg">
                  Ears
                </Radio>
                <Radio value="eyes" className="text-lg">
                  Eyes
                </Radio>
                <Radio value="leg" className="text-lg">
                  Leg
                </Radio>
                <Radio value="stomach" className="text-lg">
                  Stomach
                </Radio>
                <Radio value="ears" className="text-lg">
                  Ears
                </Radio>
                <Radio value="eyes" className="text-lg">
                  Eyes
                </Radio>
                <Radio value="leg" className="text-lg">
                  Leg
                </Radio>
                <Radio value="stomach" className="text-lg">
                  Stomach
                </Radio>
                <Radio value="ears" className="text-lg">
                  Ears
                </Radio>
                <Radio value="eyes" className="text-lg">
                  Eyes
                </Radio>
                <Radio value="leg" className="text-lg">
                  Leg
                </Radio>
              </Radio.Group>
            </Form.Item>
            {/* Submit Button */}
            <Form.Item className="w-full md:w-[30%] mt-10">
             <CustomLoadingButton border={false}>Book Appointment</CustomLoadingButton>
            </Form.Item>
          </Form>
        </div>
      </MainContainer>
    </section>
  );
};

export default Appointment;
