"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CvSection = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }} // Starts off to the right
      animate={{ y: 0, opacity: 1 }} // Slides to original position
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      className=" border-solid border-[1px] border-[#ece7e1] md:border-none md:bg-[#ece7e1] text-[#ece7e1] md:text-[#020202]  flex items-end order-2 md:order-1 h-full  text-[28px] md:text-[46px] w-full md:w-full rounded-[20px] p-6 md:p-[20px] font-['ClashDisplay-Bold'] cursor-pointer"
    >
      <Link
        href="/cvfinder"
        className="flex items-end h-auto  text-[28px] md:text-[46px] w-full  cursor-pointer"
      >
        cv.
        <Image
          src="/image/chat.png"
          alt="me"
          width={200}
          height={200}
          className=" rounded-[20px] md:hidden"
        />
        <span className=" font-['Satoshi-Regular'] text-[#ece7e1] md:text-[#020202] text-[12px] md:hidden">
          A CV? Yes. In a drawer? Also yes.
        </span>
      </Link>
    </motion.div>
  );
};

export default CvSection;
