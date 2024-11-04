import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import React from "react";
import { Toaster } from "sonner";

interface IChildren {
  children: React.ReactNode;
}
const MainLayout = ({ children }: IChildren) => {
  return (
    <main>
      <Header />
      {children}
      <Toaster richColors position="top-center" />
      <Footer />
    </main>
  );
};

export default MainLayout;
