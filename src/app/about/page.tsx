"use client";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FloatingTag } from "@/components/floating tags";
import { motion } from "framer-motion";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const tags = [
    {
      label: "BEU",
      info: "Follow me",
      position: {
        bottom: 4,
        left: 355,
        rotate: 15,
        mobileBottom: 136,
        mobileLeft: 124,
      },
    },
    {
      label: "Career Switch",
      info: "Who am I",
      position: {
        bottom: 27,
        left: 217,
        rotate: -15,
        mobileBottom: 214,
        mobileLeft: 105,
      },
    },
    {
      label: "Code Academy",
      info: "Design thinker",
      position: {
        bottom: 48,
        left: 290,
        rotate: 25,
        mobileBottom: 63,
        mobileLeft: 156,
      },
    },
    {
      label: "Azerbaijan",
      info: "Creative",
      position: {
        bottom: 13,
        left: 44,
        rotate: -24,
        mobileBottom: 98,
        mobileLeft: 10,
      },
    },
    {
      label: "Khalida Akhverdiyeva",
      info: "That's me!",
      position: {
        bottom: 7,
        left: 396,
        rotate: -5,
        mobileBottom: 20,
        mobileLeft: 14,
      },
    },
    {
      label: "Daily Routine",
      info: "Just a fun tag",
      position: {
        bottom: 3,
        left: 265,
        rotate: -2,
        mobileBottom: 173,
        mobileLeft: 174,
      },
    },
    {
      label: "Hobbies",
      info: "This year!",
      position: {
        bottom: 38,
        left: 385,
        rotate: 22,
        mobileBottom: 107,
        mobileLeft: 198,
      },
    },
    {
      label: "Challenges",
      info: "This year!",
      position: {
        bottom: 14,
        left: 148,
        rotate: 28,
        mobileBottom: 178,
        mobileLeft: 8,
      },
    },
    {
      label: "Goals",
      info: "This year!",
      position: {
        bottom: 5,
        left: 111,
        rotate: -8,
        mobileBottom: 67,
        mobileLeft: 83,
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <div className="relative w-scren md:h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center p-[15px] md:w-[1200px] md:mx-auto gap-4 md:gap-8">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-2/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative aspect-square md:h-[350px] rounded-full overflow-hidden">
            <Image
              src="/image/seviyye2.jpg"
              alt="Khalida"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text Section with Frosted Glass Effect */}
        <motion.div
          className="w-full md:w-4/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:p-8">
            <motion.h1
              variants={textVariants}
              className="text-4xl text-center md:text-5xl font-bold text-[#ECE7E1] mb-6 font-['ClashDisplay-Bold']"
            >
              Oops, I Became a Developer
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="font-['Satoshi-Regular'] text-center text-[16px] text-[#ECE7E1] leading-relaxed mb-4"
            >
              There was this girl who had just finished her degree, trying to
              find her place in the world and get started with a job. She was
              young, curious, and open to new things. One day, she stumbled upon
              Harvard&apos;s CS50 course and thought, &quot;What&apos;s up with
              these nerds and their black screens full of mysterious code?&quot;
              Still, she gave it a shot—and to her surprise, it clicked. The
              logic, the problem-solving, the thrill of getting something to
              finally work—she was hooked. Every evening after work, she dove
              deeper, learning, building, and loving every challenge.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="font-['Satoshi-Regular'] text-center text-[16px] text-[#ECE7E1] leading-relaxed"
            >
              From that moment on, she found herself diving deeper into the
              world of code every evening after work. What started as curiosity
              turned into passion. Now, here she is—writing the About section of
              her frontend development portfolio. She knows there&apos;s still a
              long road ahead, but that&apos;s the exciting part.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="md:absolute md:bottom-0 h-[300px] w-full flex justify-center items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative h-[300px] w-[1200px] min-[375px]:ml-[20px] min-[425px]:ml-[50px] md:ml-0">
          {tags.map((tag, index) => (
            <motion.div
              key={tag.label}
              style={{
                position: "absolute",
                left: tag.position.left,
                bottom: tag.position.bottom,
                transform: `rotate(${tag.position.rotate}deg)`,
                transformOrigin: "center",
              }}
              initial={{
                opacity: 0,
                y: -500,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 50,
                damping: 20,
              }}
            >
              <FloatingTag
                label={tag.label}
                info={tag.info}
                position={tag.position}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
