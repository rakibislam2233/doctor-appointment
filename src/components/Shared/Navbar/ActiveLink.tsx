"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IActiveLink {
  title: string;
  destination: string;
}

const ActiveLink = ({ title, destination }: IActiveLink) => {
  const path = usePathname();
  const active = path === destination;
  return (
    <Link href={destination} className="group">
      <li className="font-semibold text-[#606060] border-b-2 duration-300  border-transparent group-hover:border-[#77C4FE] group-hover:text-gray-950  text-[15px] group-hover:-translate-y-[2px]">
        {title}
      </li>
    </Link>
  );
};
export default ActiveLink;
