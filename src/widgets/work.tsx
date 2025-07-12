"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WorkSection = () => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
      className="bg-[#ece7e1] h-full min-h-[250px] flex flex-col justify-between items-start text-[#020202] font-['ClashDisplay-Bold'] font-[700] text-[28px] md:text-[46px] rounded-[20px] px-[20px] pt-[10px] md:pt-[20px] pb-[10px] md:pb-[20px] cursor-pointer overflow-hidden"
    >
      <Link
        href="/work"
        className="flex flex-col justify-between items-start md:items-start min-h-[250px] md:h-full"
      >
        <div className="relative md:w-[600px] md:h-[200px]">
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
            className=" absolute top-[42px] left-[129px] w-[172px] h-[115px] md:top-[36px] md:left-[63px] md:w-[275px] md:h-[180px] md:rounded-[5px] object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
            src="https://www.dropbox.com/scl/fi/kswdx26hxe9uke77gad4g/2025-04-22-17-02-27.mp4?rlkey=m7lo03itd9agk5zuz9e51an4u&st=12b3qm61&raw=1"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
            className="z-30 w-[250px] md:w-[400px] h-auto"
          >
            <Image
              src="/image/macbook.png"
              alt="iMac Frame"
              width={400}
              height={100}
              sizes="(max-width: 768px) 200px, 400px"
              className="w-[250px] md:w-[400px] h-auto absolute top-[20px] left-[90px] md:static"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="absolute  w-[45px] h-[90px] md:w-[60px] md:h-[120px] left-[275px] md:left-[310px] top-[94px] md:top-[140px] z-[50]"
          >
            <Image
              src="/image/iphone-demo-portrait.png"
              alt=""
              width={60}
              height={200}
              className="w-full h-full"
            />
          </motion.div>
        </div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
          className="mt-auto pt-[10px] self-start font-['ClashDisplay-Bold']"
        >
          work.
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default WorkSection;
