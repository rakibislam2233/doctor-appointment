'use client'
import CustomButton from "@/components/UI/CustomButton"
import MainContainer from "../MainContainer/MainContainer"
import ActiveLink from "./ActiveLink"
import { usePathname } from "next/navigation"

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
          <div className="size-16 rounded-full bg-[#77C4FE]">

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