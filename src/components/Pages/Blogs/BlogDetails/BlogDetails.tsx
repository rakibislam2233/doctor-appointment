import React from "react";
import line from "@/assets/faq/line.png";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import Image from "next/image";
import { HomeOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import { FiCalendar, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
interface BlogDetailsProps {
  blogId: string;
}

const BlogDetails = (props: BlogDetailsProps) => {
  const { blogId } = props;
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
      href: "/",
      title: "Blogs",
    },
    {
      title: "Blog Details",
    },
  ];
  const blog = {
    id: 1,
    imgSrc: "https://i.ibb.co.com/nM71Lx8/Digital-Art.jpg",
    date: "June 23, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.",
  };
  return (
    <section className="w-full px-5 py-10">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        <div className="text-center space-y-3 my-5">
          <h1 className="text-4xl font-semibold text-[#32526B]">
            Blog Details
          </h1>
          <Image
            width={300}
            height={200}
            src={line}
            alt="line"
            className="mx-auto"
          />
          <p className="text-gray-900">What Are People Saying About Us</p>
        </div>
        <div className="w-full p-5 rounded-xl">
      {/* Blog Image */}
      <div className="w-full h-56 md:h-[600px] relative">
        <Image
          src={blog.imgSrc}
          alt="Blog Image"
          fill
          className="rounded-xl  w-full absolute"
        />
      </div>

      {/* Blog Info */}
      <div className="mt-4 space-y-3">
        {/* Date and Social Icons */}
        <div className="flex justify-between items-center text-gray-500">
          <div className="flex items-center space-x-2">
            <FiCalendar />
            <span>{blog.date}</span>
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
        <p className="text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae itaque sit quam cumque at saepe dolores fugit mollitia delectus voluptates ullam praesentium velit excepturi quas fugiat dignissimos aspernatur, doloremque culpa dolorem, modi possimus rerum. Inventore beatae aut ea quae placeat eum debitis sapiente accusantium commodi optio eius aliquid expedita obcaecati, amet, nesciunt harum similique in quibusdam laborum enim dignissimos quo exercitationem porro? Ut doloribus sapiente explicabo, illo laborum aspernatur facilis tempore in reiciendis odio laudantium ad dignissimos veritatis repudiandae est! Maxime nulla nam ad. Consequuntur voluptates maiores aut atque nobis, eos voluptate numquam ipsum quae? Sequi culpa soluta optio dolorem! Excepturi quibusdam consequatur dignissimos distinctio, ex optio. Pariatur sequi aperiam soluta commodi porro sint exercitationem maxime labore dolor, ipsam, quidem enim mollitia sit facere iste illo error, assumenda harum natus dolorum possimus. Ea veritatis nobis delectus commodi quod recusandae cum, aliquid dignissimos laboriosam odio quasi ex, optio dicta id omnis adipisci debitis asperiores! Blanditiis error esse placeat repudiandae quam natus, quod neque tenetur ipsam ipsum eos eveniet amet tempora sed aut eligendi! Soluta, autem earum error cumque assumenda laborum suscipit quo animi placeat magnam velit necessitatibus ab distinctio reprehenderit atque iusto blanditiis minima molestiae. Alias quas culpa, quo aspernatur ex consequatur quae illum inventore soluta maxime perspiciatis odio, asperiores consequuntur id tempora? Eaque minima deserunt dolorum vero natus numquam dignissimos qui cumque iusto dolor accusantium dolorem iure facilis commodi id unde magnam assumenda nobis provident, molestiae sint! Labore iusto iste accusantium expedita nobis impedit excepturi qui quam magni unde vitae ducimus, soluta molestias dicta, vero nam quae cupiditate reiciendis consectetur, ratione a? Eos maiores nisi fuga labore. Temporibus qui quae quasi libero possimus sit sequi consectetur nostrum et, ipsum nesciunt placeat saepe voluptas earum tempora, aut tempore repellat. Labore consequuntur ad perferendis veritatis. Accusamus doloribus excepturi velit ad sed similique.</p>
      </div>
    </div>
      </MainContainer>
    </section>
  );
};

export default BlogDetails;
