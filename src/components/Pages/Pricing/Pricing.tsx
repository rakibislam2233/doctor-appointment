import MainContainer from "@/components/Shared/MainContainer/MainContainer";
import CustomBreadcrumb from "@/components/UI/CustomBreadcrumb";
import { HomeOutlined } from "@ant-design/icons";
import HomePricing from "../Home/HomePricing";
const Pricing = () => {
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
      title: "Pricing",
    },
  ];
  return (
        <section className="w-full px-5 py-10 bg-[#F4FCF8]">
      <MainContainer>
        <CustomBreadcrumb items={breadcrumbItems} />
        <HomePricing/>
      </MainContainer>
    </section>
  );
};

export default Pricing;
