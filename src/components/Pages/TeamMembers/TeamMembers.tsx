import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import TeamMemberCard from "./TeamMemberCard";

// Define the TeamMember type (if it's not globally defined already)
interface TeamMember {
  name: string;
  degree: string;
  specialty: string;
  imageUrl: string;
}

// Sample data for team members
const teamMembers: TeamMember[] = [
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png", // Replace with the actual image URL
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
  {
    name: "Dr. Rakib  Islam",
    degree: "MBBS, MCPS, MD",
    specialty: "General surgery",
    imageUrl: "https://i.ibb.co.com/87g3Kwr/doctor.png",
  },
];

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
    title: "Team Members",
  },
];

function TeamMembers() {
  return (
    <section className="w-full px-5 py-10">
      <MainContainer>
        {/* Breadcrumb */}
        <CustomBreadcrumb items={breadcrumbItems} />
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </MainContainer>
    </section>
  );
}

export default TeamMembers;
