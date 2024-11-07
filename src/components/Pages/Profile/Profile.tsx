"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { HiOutlineHome } from "react-icons/hi";
import { IoCameraOutline } from "react-icons/io5";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import CustomInput from "@/components/UI/CustomInput";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomButton from "@/components/UI/CustomButton";
import CustomSelect from "@/components/UI/CustomSelect";
import CustomDatePicker from "@/components/UI/CustomDatePicker";

const breadcrumbItems = [
  {
    href: "/",
    title: (
      <div className="flex gap-2 items-center">
        <HiOutlineHome size={18} />
        <span>Home</span>
      </div>
    ),
  },
  {
    title: "My Profile",
  },
];

const ProfileForm: React.FC = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [previewImage, setPreviewImage] = useState<string>(
    "/path/to/default/profile-pic.jpg"
  );

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const showImage = URL.createObjectURL(file);
      setPreviewImage(showImage);
    }
  };

  return (
    <section className="min-h-screen px-10 py-10">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        <div className="max-w-6xl mx-auto mt-8">
          <h1 className="text-2xl font-semibold mb-6">Add Profile Picture</h1>
          {/* Profile Picture Section */}
          <div className="flex items-center gap-8 mb-8">
            <div className="size-[120px] relative">
              <Image
                width={120}
                height={120}
                src={previewImage}
                alt="userImage"
                className="rounded-full"
              />
              <label
                htmlFor="image"
                className="absolute size-[120px] bg-gray-800 top-0 left-0 right-0 bottom-0 rounded-full border opacity-45 hover:opacity-70 duration-300 transition-all flex justify-center items-center text-white cursor-pointer"
              >
                <IoCameraOutline size={30} />
              </label>
              <input
                onChange={handleImage}
                id="image"
                type="file"
                style={{ display: "none" }}
              />
            </div>
            <div className="space-y-3">
              <CustomButton>Change Profile</CustomButton>
              <div className="text-sm text-gray-500">
                <p>Maximum size: 5MB</p>
                <p>Formats: jpg, jpeg, png</p>
              </div>
            </div>
          </div>
          {/* Form Section */}
          <Form layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <Form.Item label="Full Name" name="fullName">
                <CustomInput placeholder="Smith" readOnly={!isEditing} />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName">
                <CustomInput placeholder="Anthony" readOnly={!isEditing} />
              </Form.Item>
              <Form.Item label="Gender" name="gender">
                <CustomSelect
                  placeholder="Select Gender"
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                  disabled={!isEditing}
                />
              </Form.Item>
              <Form.Item label="Date of Birth" name="dateOfBirth">
                <CustomDatePicker disabled={!isEditing} />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <CustomInput
                  placeholder="james@gmail.com"
                  readOnly={!isEditing}
                />
              </Form.Item>
              <Form.Item label="Height" name="height">
                <CustomInput placeholder="168 cm" readOnly={!isEditing} />
              </Form.Item>
              <Form.Item label="Weight" name="weight">
                <CustomInput placeholder="72 kg" readOnly={!isEditing} />
              </Form.Item>
              <Form.Item label="Past Medical History" name="pastMedicalHistory">
                <CustomInput
                  placeholder="Breathing problem and chest pain"
                  readOnly={!isEditing}
                />
              </Form.Item>
              <Form.Item label="Social History" name="socialHistory">
                <CustomInput placeholder="Description" readOnly={!isEditing} />
              </Form.Item>
              <Form.Item label="Allergy History" name="allergyHistory">
                <CustomInput placeholder="Description" readOnly={!isEditing} />
              </Form.Item>
              <Form.Item label="Drug History" name="drugHistory">
                <CustomInput placeholder="Description" readOnly={!isEditing} />
              </Form.Item>
              <Form.Item label="Medical Condition" name="medicalCondition">
                <CustomInput placeholder="Description" readOnly={!isEditing} />
              </Form.Item>
            </div>

            {/* Upload Files Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Form.Item label="Attach Prescription" name="prescription">
                <Upload>
                  <Button icon={<UploadOutlined />}>Upload file</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Attach Medical Documents"
                name="medicalDocuments"
              >
                <Upload>
                  <Button icon={<UploadOutlined />}>Upload file</Button>
                </Upload>
              </Form.Item>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-4">
              <button
                onClick={toggleEdit}
                className="px-8 py-2 border border-gray-400 rounded-xl"
              >
                Cancel
              </button>
              <CustomButton>Save Changes</CustomButton>
            </div>
          </Form>
        </div>
      </MainContainer>
    </section>
  );
};

export default ProfileForm;
