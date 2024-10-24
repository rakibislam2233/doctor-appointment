import Faq from "@/components/Pages/Home/Faq";
import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import { HomeOutlined } from "@ant-design/icons";
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
    title: "FAQ",
  },
];
const page = () => {
  return (
    <section className="w-full px-5 py-10 bg-[#F1F9FF]">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        <Faq />
      </MainContainer>
    </section>
  );
};

export default page;
