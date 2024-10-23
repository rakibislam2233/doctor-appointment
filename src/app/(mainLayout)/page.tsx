import AboutUs from "@/components/Pages/Home/About-Us";
import Faq from "@/components/Pages/Home/Faq";
import HeroSection from "@/components/Pages/Home/HeroSection";
import MyValues from "@/components/Pages/Home/MyValues";
import Pricing from "@/components/Pages/Home/Pricing";
import RecentBlogs from "@/components/Pages/Home/RecentBlogs";
import Review from "@/components/Pages/Home/Review";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <MyValues/>
      <AboutUs/>
      <Pricing/>
      <Review/>
      <Faq/>
      <RecentBlogs/>
    </>
  );
};

export default MainPage;
