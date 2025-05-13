"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }} // Starts off to the right
      animate={{ y: 0, opacity: 1 }} // Slides to original position
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
      className="bg-[#D1FD0A] flex flex-col justify-end items-start order-1 md:order-2 h-[250px] md:h-full text-[#020202] w-full rounded-[20px] p-6 md:p-[20px] font-['ClashDisplay-Bold'] relative cursor-pointer"
    >
      <Link href="/contact">
        <span className="font-['Satoshi-Regular'] text-[12px] md:hidden z-10">
          Let’s build something cool together. You can reach out anytime — I
          dont bite. Whether it’s a big idea or a quick hello. I check my inbox
          more than I check the weather, so you’ll probably hear back soon.
        </span>
        <Image
          src="/image/contact.png"
          alt=""
          width={60}
          height={200}
          className="absolute top-0 right-[30px] z-[0] md:block"
        />
        <div className="w-[90%] h-[1px] md:hidden bg-[#565555] mt-2 z-10" />
        <h2 className="text-[28px] md:text-[46px] z-10">contact.</h2>
      </Link>
    </motion.div>
  );
};

export default ContactSection;
