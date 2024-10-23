import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

// Define the types for the blog card props
interface RecentBlogCardProps {
  key: number;
  blog: {
    imgSrc: string;
    date: string;
    description: string;
  };
}

const RecentBlogCard = (blog: RecentBlogCardProps) => {
  return (
    <div className="w-full bg-[#F1F9FF] p-5 rounded-xl shadow-lg">
      {/* Blog Image */}
      <div className="w-full h-56 md:h-96 relative">
        <Image
          src={blog.blog.imgSrc}
          alt="Blog Image"
          fill
          className="rounded-t-xl  w-full absolute"
        />
      </div>

      {/* Blog Info */}
      <div className="mt-4 space-y-3">
        {/* Date and Social Icons */}
        <div className="flex justify-between items-center text-gray-500">
          <div className="flex items-center space-x-2">
            <FiCalendar />
            <span>{blog.blog.date}</span>
          </div>
          <div className="flex space-x-3">
            <Link
              href={"/"}
              className="size-9 border border-[#6CB2E7] text-[#6CB2E7] rounded-full flex justify-center items-center hover:bg-[#6CB2E7] hover:text-white transition-all duration-300"
            >
              <FiFacebook size={18} />
            </Link>
            <Link
              href={"/"}
              className="size-9 border border-[#6CB2E7] text-[#6CB2E7] rounded-full flex justify-center items-center hover:bg-[#6CB2E7] hover:text-white transition-all duration-300"
            >
              <FiLinkedin size={18} />
            </Link>
            <Link
              href={"/"}
              className="size-9 border border-[#6CB2E7] text-[#6CB2E7] rounded-full flex justify-center items-center hover:bg-[#6CB2E7] hover:text-white transition-all duration-300"
            >
              <FiTwitter size={18} />
            </Link>
          </div>
        </div>

        {/* Blog Description */}
        <p className="text-gray-700">{blog.blog.description}</p>

        {/* Read More Link */}
        <Link href="#" className="text-[#32526B] font-semibold underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogCard;
