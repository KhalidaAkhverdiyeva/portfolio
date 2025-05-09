"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  IconButton,
} from "@mui/material";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/work" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "CV", path: "/cvfinder" },
    { name: "SKILLS", path: "/skills" },
  ];

  const isHome = pathname === "/";

  return (
    <>
      <div
        className={`font-['ClashDisplay-Bold'] m-[10px] flex items-center p-[15px] justify-between rounded-[20px] text-[22px] ${
          isHome
            ? "bg-[#ece7e1] text-[#020202] md:m-[20px]"
            : "bg-[#020202] text-[#ece7e1] md:w-[1200px] md:mx-auto"
        }`}
      >
        <Link href="/" className="text-[20px] md:text-[24px]">
          /khalida.
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-[20px]">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`cursor-pointer hover:line-through ${
                  pathname === item.path ? "line-through" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger for mobile */}
        <IconButton
          className="text-[26px] md:hidden"
          onClick={() => setOpen(true)}
          style={{ color: isHome ? "#020202" : "#ece7e1" }}
        >
          <GiHamburgerMenu />
        </IconButton>
      </div>

      {/* Sidebar Drawer for mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-screen  text-[20px] p-4 bg-[#020202] h-full text-[#ece7e1]">
          <List>
            <div className="flex justify-end border-b-solid border-b-[1px] border-[#444652] mb-[20px]">
              <div className="flex gap-[5px]">
                <button>Let&apos;s Talk</button>
                <button onClick={() => setOpen(false)}>
                  <IoCloseOutline />
                </button>
              </div>
            </div>

            {navItems.map((item, index) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  selected={pathname === item.path}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "transparent",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:hover": {
                      backgroundColor: "#1a1a1a",
                    },
                  }}
                >
                  <span className="font-['ClashDisplay-Bold'] text-[30px] flex items-end gap-[10px]">
                    <span
                      className={pathname === item.path ? "line-through" : ""}
                    >
                      {item.name}
                    </span>
                    <span className="font-['ClashDisplay-Light'] text-[12px] pb-[5px] text-[#4a4949]">
                      ({`0${index + 1}`})
                    </span>
                  </span>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
