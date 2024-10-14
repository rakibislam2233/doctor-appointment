import Header from "@/components/Shared/Header/Header";
import React from "react";

interface IChildren {
  children: React.ReactNode;
}
const MainLayout = ({ children }: IChildren) => {
  return (
    <main>
     <Header/>
      {children}
      <footer>&copy; 2024 Doctor Appointment. All rights reserved.</footer>
    </main>
  );
};

export default MainLayout;
