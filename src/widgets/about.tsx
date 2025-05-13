"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      className="relative md:h-full"
    >
      <Link
        href="/about"
        className="h-[250px] bg-amber-50 md:h-auto w-full md:w-[25%] rounded-[20px] relative overflow-hidden cursor-pointer"
      >
        {/* Background placeholder */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 bg-amber-50 z-[1] rounded-[20px]"
        />

        {/* Image layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          className="relative w-full md:w-[17vw] md:h-full h-[250px] z-[2] rounded-[20px]"
        >
          <Image
            src="/image/bw.me.jpg"
            alt="me"
            fill
            className="object-cover rounded-[20px]"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </motion.div>

        {/* Text layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-0 left-0 font-['ClashDisplay-Bold'] shadow text-[28px] md:text-[46px] text-[#ECE7E1] font-bold p-4 md:p-[20px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] z-[3]"
        >
          about.
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default AboutSection;
