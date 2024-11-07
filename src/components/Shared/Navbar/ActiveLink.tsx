"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IActiveLink {
  title: string;
  destination: string;
  onClick?: () => void; // Optional onClick prop
}

const ActiveLink = ({ title, destination, onClick }: IActiveLink) => {
  const path = usePathname();
  const active = path === destination;

  return (
    <Link href={destination} onClick={onClick} className="group">
      <li
        className={`font-semibold text-[#606060] border-b-2 duration-300 border-transparent group-hover:border-[#77C4FE] group-hover:text-gray-950 text-[15px] group-hover:-translate-y-[2px] ${
          active && "border-[#77C4FE]"
        }`}
      >
        {title}
      </li>
    </Link>
  );
};

export default ActiveLink;
