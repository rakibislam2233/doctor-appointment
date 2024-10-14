import AboutUs from "@/components/Pages/Home/About-Us";
import HeroSection from "@/components/Pages/Home/HeroSection";
import MyValues from "@/components/Pages/Home/MyValues";
import Pricing from "@/components/Pages/Home/Pricing";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <MyValues/>
      <AboutUs/>
      <Pricing/>
    </>
  );
};

export default MainPage;
