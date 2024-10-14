import React from "react";
import Navbar from "../Navbar/Navbar";
import SubNavbar from "../Navbar/SubNavbar";

const Header = () => {
  return (
    <header className="hidden md:block">
      <SubNavbar />
      <Navbar />
    </header>
  );
};

export default Header;
