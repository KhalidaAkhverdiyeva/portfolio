"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
      className="bg-[#D1FD0A] flex flex-col justify-end items-start order-1 md:order-2 h-[250px] md:h-full text-[#020202] w-full rounded-[20px] p-6 md:p-[20px] font-['ClashDisplay-Bold'] relative cursor-pointer"
    >
      <Link href="/contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="font-['Satoshi-Regular'] text-[12px] md:hidden z-10 max-w-[300px]"
        >
          Let’s build something cool together. You can reach out anytime — I
          dont bite. Whether it’s a big idea or a quick hello. I check my inbox
          more than I check the weather, so you’ll probably hear back soon.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 right-[30px] z-[0] md:block"
        >
          <Image src="/image/contact.png" alt="" width={60} height={200} />
        </motion.div>

        <div className="w-[90%] h-[1px] md:hidden bg-[#565555] mt-2 z-10" />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="text-[28px] md:text-[46px] z-10"
        >
          contact.
        </motion.h2>
      </Link>
    </motion.div>
  );
};

export default ContactSection;
