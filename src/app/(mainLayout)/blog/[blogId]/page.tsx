import BlogDetails from "@/components/Pages/Blogs/BlogDetails/BlogDetails";
import React from "react";

const Page = ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  return <BlogDetails blogId={params.blogId} />;
};

export default Page;
