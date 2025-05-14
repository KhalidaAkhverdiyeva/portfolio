"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const CvSection = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      className="border-solid border-[1px] h-[250px] border-[#ece7e1] md:border-none md:bg-[#ece7e1] text-[#ece7e1] md:text-[#020202] flex items-end order-2 md:order-1 md:h-full text-[28px] md:text-[46px] w-full md:w-full rounded-[20px] p-6 md:p-[20px] font-['ClashDisplay-Bold'] cursor-pointer"
    >
      <Link
        href="/cvfinder"
        className="flex items-end h-auto text-[28px] md:text-[46px] w-full cursor-pointer"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          4fun.
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
          className="rounded-[20px] md:hidden"
        >
          <Image src="/image/chat.png" alt="me" width={200} height={200} />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
          className="font-['Satoshi-Regular'] text-[#ece7e1] md:text-[#020202] text-[12px] md:hidden"
        >
          A CV? Yes. In a drawer? Also yes.
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default CvSection;
