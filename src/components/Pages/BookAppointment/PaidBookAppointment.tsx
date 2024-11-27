"use client";
import aboutBg from "@/assets/about/aboutbg.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import CustomDatePicker from "@/components/UI/CustomDatePicker";
import CustomInput from "@/components/UI/CustomInput";
import CustomLoadingButton from "@/components/UI/CustomLoadingButton";
import { ClockCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { Form, Radio, TimePicker } from "antd";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  preferredTime: string;
  preferredDate: string;
  reasonForVisit: string;
  department: string;
  bodyPart: string;
}

// Breadcrumb items
const breadcrumbItems = [
  {
    href: "/",
    title: (
      <div className="flex gap-2">
        <HomeOutlined />
        <span>Home</span>
      </div>
    ),
  },
  {
    title: "Appointment Form",
  },
];

const departmentOptions = [
  { label: "Pediatric", value: "pediatric" },
  { label: "General Surgery", value: "generalSurgery" },
  { label: "Ophthalmology", value: "ophthalmology" },
  { label: "Dentistry", value: "dentistry" },
];

const visitReasons = [
  { label: "Old Patient Visit", value: "oldPatient" },
  { label: "New Patient Visit", value: "newPatient" },
  { label: "Specific Concern", value: "specificConcern" },
];

const bodyParts = [
  { label: "Stomach", value: "stomach" },
  { label: "Ears", value: "ears" },
  { label: "Eyes", value: "eyes" },
  { label: "Leg", value: "leg" },
];

const PaidBookAppointment = () => {
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
    console.log("Form Values:", values);
  };

  const renderRadioOptions = (options: { label: string; value: string }[]) =>
    options.map((option) => (
      <Radio key={option.value} value={option.value} className="text-lg">
        {option.label}
      </Radio>
    ));

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
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 place-items-center place-content-center mb-5">
              <div className="w-full grid grid-cols-2 gap-2">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <CustomInput placeholder="Enter Your Name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <CustomInput placeholder="Enter Your Email" />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                  className="w-full col-span-full"
                >
                  <CustomInput type="number" placeholder="Enter Your Phone" />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Address"
                  rules={[
                    { required: true, message: "Please input your address!" },
                  ]}
                  className="w-full col-span-full"
                >
                  <CustomInput placeholder="Enter Your Address" />
                </Form.Item>

                <Form.Item
                  name="preferredTime"
                  label={<span className="text-lg">Preferred Time</span>}
                  rules={[{ required: true, message: "Please select a time" }]}
                >
                  <TimePicker
                    placeholder="--:-- --"
                    className="w-full border border-[#77C4FE] px-4 py-2 text-[16px] bg-secondary text-gray-700 rounded-lg focus:border-[#77C4FE]"
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
                  <CustomDatePicker />
                </Form.Item>

                <Form.Item
                  name="reasonForVisit"
                  label={<span className="text-lg">Reason for Visit</span>}
                  rules={[{ required: true, message: "Please select Reason" }]}
                  className="w-full col-span-full"
                >
                  <Radio.Group className="flex flex-wrap gap-4">
                    {renderRadioOptions(visitReasons)}
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  name="department"
                  label={<span className="text-lg">Department</span>}
                  rules={[
                    { required: true, message: "Please select Department" },
                  ]}
                  className="w-full col-span-full"
                >
                  <Radio.Group className="flex flex-wrap gap-4">
                    {renderRadioOptions(departmentOptions)}
                  </Radio.Group>
                </Form.Item>
              </div>
              <div
                className="w-full h-full flex justify-center items-center bg-cover bg-center order-1 md:order-2"
                style={{ backgroundImage: `url(${aboutBg.src})` }}
              >
                <div className="space-y-3">
                  <div>
                    <h1 className="text-2xl">Contact Info</h1>
                    <div className="border-b border-gray-900 my-3" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-xl">Phone</p>
                    <p className="text-gray-600">+1 123 456 7890</p>
                  </div>
                  <div>
                    <p className="text-gray-900 text-xl">Email</p>
                    <p className="text-gray-600">doctor@example.com</p>
                  </div>
                  <div>
                    <p className="text-gray-900 text-xl">Address</p>
                    <p className="text-gray-600">
                      123 Main St, City, State, Zip
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Form.Item
              name="bodyPart"
              label={<span className="text-lg">Part of Body</span>}
              rules={[
                {
                  required: true,
                  message: "Please select at least 1 Body part",
                },
              ]}
            >
              <Radio.Group className="flex flex-wrap gap-4">
                {renderRadioOptions(bodyParts)}
              </Radio.Group>
            </Form.Item>
            {/* Submit Button */}
            <Form.Item className="w-full md:w-[30%] mt-10">
              <CustomLoadingButton border={false}>
                Book Appointment
              </CustomLoadingButton>
            </Form.Item>
          </Form>
        </div>
      </MainContainer>
    </section>
  );
};

export default PaidBookAppointment;
