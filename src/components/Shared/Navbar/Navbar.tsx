"use client";
import logo from "@/assets/logo/logo.png";
import CustomButton from "@/components/UI/CustomButton";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MainContainer from "../MainContainer/MainContainer";
import ActiveLink from "./ActiveLink";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chat Bot", href: "/chat-bot" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About Me", href: "/about-me" },
  { label: "Team Members", href: "/team-members" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <nav className={`w-full  py-5`}>
      <MainContainer className="p-3 bg-secondary flex justify-between items-center rounded-lg">
        <div>
          <div className="size-[80px] relative mx-auto md:mx-0">
            <Image fill src={logo} alt="logo" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <ActiveLink key={label} title={label} destination={href} />
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href={"/login"}>
            <CustomButton>Login</CustomButton>
          </Link>
        </div>

        {/* Mobile Drawer Button */}
        <Button
          className="md:hidden"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />

        {/* Drawer for Mobile Navigation */}
        <Drawer
          title="E Clinic"
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
        >
          <ul className="flex flex-col items-start gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <ActiveLink
                  title={label}
                  destination={href}
                  onClick={closeDrawer} // Close drawer when link is clicked
                />
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <CustomButton>Login</CustomButton>
          </div>
        </Drawer>
      </MainContainer>
    </nav>
  );
};

export default Navbar;
