"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
      className={`font-['ClashDisplay-Bold']  m-[20px] flex justify-between p-[15px] rounded-[20px] text-[22px] ${
        isHome
          ? "bg-[#ece7e1] text-[#020202]"
          : "bg-[#020202] text-[#ece7e1] w-[1200px] mx-auto"
      }`}
    >
      <Link href="/" className="text-[24px]">
        /khalida.
      </Link>
      <ul className="flex gap-[20px]">
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
    </div>
  );
};

export default Navbar;
