"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
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
    { name: "work", path: "/work" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
    { name: "cv", path: "/cvfinder" },
    { name: "skills", path: "/skills" },
  ];

  const isHome = pathname === "/";
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <motion.div
        initial={{ y: -200, opacity: 0 }} // Starts off to the right
        animate={{ y: 0, opacity: 1 }} // Slides to original position
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
        className={`font-['ClashDisplay-Bold'] m-[10px] flex justify-between items-center p-[15px]  rounded-[20px] text-[22px] ${
          isHome
            ? "bg-[#ece7e1] text-[#020202] md:m-[20px]"
            : "bg-[#020202] text-[#ece7e1] md:w-[1200px] md:mx-auto"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }} // Starts off to the right
          animate={{  opacity: 1 }} // Slides to original position
          transition={{ duration: 1.2, ease: "easeOut", delay: 2 }}
        >
          <Link href="/" className="text-[20px] md:text-[24px]">
            /khalida.
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <motion.ul
          className="hidden md:flex gap-[20px]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {navItems.map((item) => (
            <motion.li key={item.name} variants={itemVariants}>
              <Link
                href={item.path}
                className={`cursor-pointer hover:line-through ${
                  pathname === item.path ? "line-through" : ""
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Hamburger for mobile */}
        <motion.div className="md:hidden">
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: {
                xs: "inline-flex",
                md: "none",
              },
              color: isHome ? "#020202" : "#ece7e1",
              fontSize: "26px",
            }}
          >
            <GiHamburgerMenu />
          </IconButton>
        </motion.div>
      </motion.div>

      {/* Drawer remains unchanged (optional: animate its contents similarly) */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-screen flex flex-col justify-between text-[20px] p-4 bg-[#020202] h-full text-[#ece7e1]">
          <List>
            <div className="flex justify-end border-b-solid border-b-[1px] border-[#444652] pb-5 mb-[20px]">
              <div>
                <button
                  onClick={() => setOpen(false)}
                  className="border-solid border-[1px] border-[#444652] rounded-full px-4 py-[6px] text-[16px] cursor-pointer"
                >
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
                    "&.Mui-selected": { backgroundColor: "transparent" },
                    "&.Mui-selected:hover": { backgroundColor: "transparent" },
                    "&:hover": { backgroundColor: "#1a1a1a" },
                  }}
                >
                  <span className="font-['ClashDisplay-Bold'] text-[30px] flex items-end gap-[10px] cursor-pointer">
                    <span
                      className={`uppercase ${
                        pathname === item.path ? "line-through" : ""
                      }`}
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

          <div className="flex mb-[50px] gap-[10px] px-4 font-['ClashDisplay-Light']">
            <Link
              href="https://github.com/KhalidaAkhverdiyeva"
              className="flex items-center"
            >
              <GoArrowUpRight />
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/khalida-akhverdiyeva/"
              className="flex items-center"
            >
              <GoArrowUpRight />
              LinkedIn
            </Link>
            <Link
              href="mailto:xalide.haqverdiyeva@gmail.com"
              className="flex items-center"
            >
              <GoArrowUpRight />
              Email
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
