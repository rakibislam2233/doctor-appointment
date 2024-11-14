"use client";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import { HomeOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const MyAppointment: React.FC = () => {
  const [showCompletedAppointments, setShowCompletedAppointments] = useState(false);

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
      href: "/my-appointment",
      title: "My Appointment",
    },
    {
      title: "Complete Appointment",
    },
    {
      title: "Prescription document",
    },
  ];

  const handleShowCompleted = () => {
    setShowCompletedAppointments(!showCompletedAppointments);
  };

  return (
    <section className="w-full px-5 py-10 bg-blue-50">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        <h2 className="text-3xl font-semibold text-gray-800 text-center mt-8 mb-10">
          My Appointment
        </h2>

        {/* Button to show completed appointments */}
        <div className="flex justify-center">
          <button
            onClick={handleShowCompleted}
            className="px-6 py-2 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors"
          >
            {showCompletedAppointments ? "Hide Completed Appointments" : "Show Completed Appointments"}
          </button>
        </div>

        {/* Conditionally rendered completed appointments section */}
        {showCompletedAppointments && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((appointment) => (
              <div
                key={appointment}
                className="bg-blue-100 p-6 rounded-lg border border-blue-200"
              >
                <p className="border-b border-blue-200 py-2">
                  <span className="font-medium text-gray-700">Doctor Name: </span>
                  Bashar Islam
                </p>
                <p className="border-b border-blue-200 py-2">
                  <span className="font-medium text-gray-700">Name: </span>
                  David John
                </p>
                <p className="border-b border-blue-200 py-2">
                  <span className="font-medium text-gray-700">Email: </span>
                  DavidJohn@gmail.com
                </p>
                <div className="text-right mt-4">
                  <a href="#" className="text-blue-500 hover:underline">See all</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </MainContainer>
    </section>
  );
};

export default MyAppointment;
