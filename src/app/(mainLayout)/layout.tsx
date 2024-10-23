import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import React from "react";

interface IChildren {
  children: React.ReactNode;
}
const MainLayout = ({ children }: IChildren) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
