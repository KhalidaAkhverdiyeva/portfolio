"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WorkSection = () => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }} // Starts off to the right
      animate={{ x: 0, opacity: 1 }} // Slides to original position
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
      className="bg-[#ece7e1] h-full min-h-[250px] flex flex-col justify-between  items-start text-[#020202] font-['ClashDisplay-Bold'] font-[700] text-[28px] md:text-[46px] rounded-[20px]  px-[20px] pt-[10px] md:pt-[20px] pb-[10px] md:pb-[20px] cursor-pointer overflow-hidden"
    >
      <Link
        href="/work"
        className="flex flex-col justify-between items-start md:items-start min-h-[250px] md:h-full"
      >
        <div className="relative md:w-[600px] md:h-[200px]">
          <video
            className=" bw-hover filter absolute top-[18px] left-[32px]  w-[137px] h-[90px] md:top-[36px] md:left-[63px] md:w-[275px] md:h-[180px] md:rounded-[5px] object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
            src="https://res.cloudinary.com/dxtasssta/video/upload/v1745482296/impact-demo_lpcinx.mp4"
          />

          <Image
            src="/image/macbook.png"
            alt="iMac Frame"
            width={400}
            height={100}
            sizes="(max-width: 768px) 200px, 400px"
            className="w-[200px] md:w-[400px] h-auto z-30"
          />
          <Image
            src="/image/bw-portrait.png"
            alt=""
            width={60}
            height={200}
            className="absolute left-[150px] md:left-[310px] w-[50px] h-[100px] md:w-[60px] md:h-[120px] bottom-[-10px] md:bottom-[-70px] z-[50]"
          />
        </div>

        <span className="mt-auto pt-[10px] self-start font-['ClashDisplay-Bold']">
          work.
        </span>
      </Link>
    </motion.div>
  );
};

export default WorkSection;
