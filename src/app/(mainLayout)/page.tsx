import AboutUs from "@/components/Pages/Home/About-Us";
import HeroSection from "@/components/Pages/Home/HeroSection";
import MyValues from "@/components/Pages/Home/MyValues";
import Pricing from "@/components/Pages/Home/Pricing";
import Review from "@/components/Pages/Home/Review";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <MyValues/>
      <AboutUs/>
      <Pricing/>
      <Review/>
    </>
  );
};

export default MainPage;
