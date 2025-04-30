"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "work", path: "/work" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
  ];

  const isHome = pathname === "/";

  return (
    <div
      className={`font-['ClashDisplay-Bold'] m-[10px] flex items-center justify-between rounded-[20px] text-[22px] ${
        isHome
          ? "bg-[#ece7e1] text-[#020202] md:m-[20px] p-[15px] "
          : "bg-[#020202] text-[#ece7e1] md:w-[1200px] py-[15px]  md:mx-auto"
      }`}
    >
      <Link href="/" className="text-[20px] md:text-[24px]">
        /khalida.
      </Link>
      <ul className="hidden md:flex gap-[20px]">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer hover:line-through ${
              pathname === item.path ? "line-through" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <GiHamburgerMenu
        className={`text-[26px] md:hidden cursor-pointer ${
          isHome ? "text-[#020202]" : "text-[#ece7e1]"
        }`}
      />
    </div>
  );
};

export default Navbar;
