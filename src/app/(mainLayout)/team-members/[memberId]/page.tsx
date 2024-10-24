import MemberDetails from "@/components/Pages/TeamMembers/MemberDetails/MemberDetails";
import React from "react";

const page = ({ params }: { params: { memberId: number } }) => {
  const { memberId } = params;
  return <MemberDetails memberId={memberId} />;
};

export default page;
