'use client'
import logo from '@/assets/logo/logo.png'
import CustomButton from "@/components/UI/CustomButton"
import MainContainer from "../MainContainer/MainContainer"
import ActiveLink from "./ActiveLink"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Chat Bot",
        href: "/chat-bot",
    },
    {
        label: "Pricing",
        href: "/pricing",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "About Me",
        href: "/about-me",
    },
    {
        label: "Team Members",
        href: "/team-members"
    },
    {
        label: "FAQ",
        href: "/faq",
    },
    {
        label: "Contact",
        href: "/contact",
    }
]

const Navbar = () => {
    const path = usePathname()
  return (
   <nav className={`w-full ${path==='/' && "bg-[#F1F9FF]"} py-5`}>
      <MainContainer className="p-3 bg-[#D5EDFF] flex justify-between items-center rounded-lg">
       <div>
       <div className="size-[80px] relative mx-auto md:mx-0">
              <Image fill src={logo} alt="logo" />
            </div>
       </div>
       <ul className="flex justify-center items-center gap-10">
         {navLinks.map(({label,href}) => (
            <ActiveLink key={label} title={label} destination={href}/>
         ))}
       </ul>
       <div>
        <CustomButton>
           Login
        </CustomButton>
       </div>
     </MainContainer>
   </nav>
  )
}

export default Navbar