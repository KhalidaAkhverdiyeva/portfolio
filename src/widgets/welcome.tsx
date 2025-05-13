"use client";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="font-['ClashDisplay-Bold'] min-h-[250px] md:h-full md:w-full relative text-[#020202] bg-[#ece7e1] flex items-end p-[20px]  rounded-[20px] leading-tight cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        className="text-[26px] md:text-[40px]"
      >
        Hey, I&apos;m Khalida <br />
        Frontend Developer <br />
        <div className="flex">
          <span className="mr-[6px]">and </span>
          <div className="overflow-hidden h-[32px] md:h-[45px] relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
              className="flip-wrap block animate-[mobileflip_15s_infinite] md:animate-[flip_16s_infinite]"
            >
              {[
                "a tea lover.",
                "a movie buff.",
                "a hiker.",
                "a terrible singer.",
                "The Strokes fan.",
                "a tea lover.",
              ].map((line, index) => (
                <span
                  key={index}
                  className="block h-[32px] md:h-[45px] leading-[32px] md:leading-[48px]"
                >
                  {line}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeSection;
