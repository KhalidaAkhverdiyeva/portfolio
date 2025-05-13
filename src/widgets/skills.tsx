"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }} // Starts off to the right
      animate={{ y: 0, opacity: 1 }} // Slides to original position
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
      className="   bg-[#ece7e1] text-[#020202] font-['ClashDisplay-Bold'] font-[700] text-[28px] md:text-[46px] flex-[1] rounded-[20px] flex items-end px-[20px] py-[10px] cursor-pointer "
    >
      <Link href="/skills">skills & tools.</Link>
    </motion.div>
  );
};

export default SkillsSection;
