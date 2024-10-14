import React from "react";

interface IChildren {
  children: React.ReactNode;
}
const MainLayout = ({ children }: IChildren) => {
  return (
    <main>
      <header>
        <h1>Doctor Appointment</h1>
      </header>
      {children}
      <footer>&copy; 2024 Doctor Appointment. All rights reserved.</footer>
    </main>
  );
};

export default MainLayout;
