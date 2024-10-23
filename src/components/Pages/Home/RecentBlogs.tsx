import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import RecentBlogCard from "./RecentBlogCard";
import CustomButton from "@/components/UI/CustomButton";

// Array of blog objects
const blogs = [
  {
    id: 1,
    imgSrc: "https://i.ibb.co.com/nM71Lx8/Digital-Art.jpg",
    date: "June 23, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.",
  },
  {
    id: 2,
    imgSrc: "https://i.ibb.co.com/nM71Lx8/Digital-Art.jpg",
    date: "June 23, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.",
  },
  {
    id: 3,
    imgSrc: "https://i.ibb.co.com/nM71Lx8/Digital-Art.jpg",
    date: "June 23, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa.",
  },
];

const RecentBlogs = () => {
  return (
    <section className="w-full px-5 py-16 bg-white">
      <MainContainer>
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-semibold text-[#32526B]">Recent Blog</h1>
          <p className="text-gray-900">What Are People Saying About Us</p>
        </div>

        {/* Grid of Blog Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <RecentBlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 flex justify-end">
          <CustomButton>
            View All
          </CustomButton>
        </div>
      </MainContainer>
    </section>
  );
};

export default RecentBlogs;
