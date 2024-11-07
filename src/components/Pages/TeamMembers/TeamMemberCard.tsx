import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the TeamMember type
interface TeamMember {
  id: number;
  name: string;
  degree: string;
  specialty: string;
  imageUrl: string;
}
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-[#EEE2EE] shadow-lg rounded-xl overflow-hidden px-5 py-3">
      {/* Profile Image */}
      <div className="relative w-full h-96 rounded-t-xl">
        <Link href={`/team-members/${member.id}`}>
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>

      {/* Profile Info */}
      <div className="py-2">
        <h2 className="text-xl font-semibold text-[#32526B]">{member.name}</h2>
        <p className="text-gray-600">{member.degree}</p>

        {/* Specialties */}
        <div className="mt-2 flex justify-between items-center">
          <p className="text-gray-600 ">Specialties</p>
          <div className="relative">
            <Image
              width={180}
              height={120}
              src="https://i.ibb.co.com/R64gCDv/Rectangle-18831.png"
              alt="image"
              className="relative "
            />
            <span className="absolute top-2 left-8 text-white">
              {" "}
              {member.specialty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
