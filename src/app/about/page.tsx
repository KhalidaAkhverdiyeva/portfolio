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

  const handleCVDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    // Set the path to your CV file in the public folder
    link.href = "/files/CV.pdf"; // Make sure to put your CV file in the public/files folder
    // Set the download attribute to force download
    link.download = "Khalida_Akhverdiyeva_CV.pdf";
    // Append to body
    document.body.appendChild(link);
    // Trigger click
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  const tags = [
    {
      label: "BEU",
      info: "Beu was where I earned my degree and honed the skills that kickstarted my career. It's where my professional journey truly began!",
      position: {
        bottom: 4,
        left: 355,
        rotate: 15,
        mobileBottom: 134,
        mobileLeft: -81,
      },
    },
    {
      label: "Career Switch",
      info: "Making the leap from chemistry to coding was a bold move, but it felt like the perfect blend of curiosity and logic. Now, I apply the same analytical thinking to solve problems, but with a few less test tubes!",
      position: {
        bottom: 27,
        left: 217,
        rotate: -15,
        mobileBottom: 65,
        mobileLeft: -78,
      },
    },
    {
      label: "Code Academy",
      info: 'Where I First Typed "Hello, World!',
      position: {
        bottom: 48,
        left: 290,
        rotate: 25,
        mobileBottom: 55,
        mobileLeft: -306,
      },
    },
    {
      label: "Azerbaijan",
      info: 'I come with a "made in Azerbaijan" tag. ',
      position: {
        bottom: 13,
        left: 44,
        rotate: -24,
        mobileBottom: 6,
        mobileLeft: -40,
      },
    },
    {
      label: "Khalida Akhverdiyeva",
      info: "Yep, that's me! Every project reflects my commitment to excellence and a touch of my personality.",
      position: {
        bottom: 7,
        left: 396,
        rotate: -5,
        mobileBottom: 170,
        mobileLeft: -390,
      },
    },
    {
      label: "Daily Routine",
      info: "I kickstart my day with a good breakfast and a workout to get the energy flowing. Then, it's time for some LeetCode challenges and coding with music in the background. I wrap up my day with a relaxing walk outside to clear my head and recharge.",
      position: {
        bottom: 3,
        left: 265,
        rotate: -2,
        mobileBottom: 130,
        mobileLeft: -179,
      },
    },
    {
      label: "Hobbies",
      info: "Outside of coding, I'm all about books, movies, and good conversations. I love a good walk with friends—sometimes, the best ideas come when you're on the move!",
      position: {
        bottom: 38,
        left: 385,
        rotate: 22,
        mobileBottom: 10,
        mobileLeft: -141,
      },
    },
    {
      label: "Challenges",
      info: "Some nights, I'm on the edge of throwing my laptop out the window—just me, a bug in the code, and too much tea. But somehow, I always make it through, and the satisfaction of solving a problem is worth the drama!",
      position: {
        bottom: 14,
        left: 148,
        rotate: 28,
        mobileBottom: 9,
        mobileLeft: 28,
      },
    },
    {
      label: "Goals",
      info: "My goal is to live life on my terms—freelancing while sipping coffee by the beach and exploring the world. I dream of creating from anywhere, whether it's under the sun or on a plane, bringing my passion for coding and adventure together.",
      position: {
        bottom: 5,
        left: 111,
        rotate: -8,
        mobileBottom: 2,
        mobileLeft: 1,
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
      <div className="flex flex-col md:flex-row items-start p-[15px] md:w-[1200px] md:mx-auto gap-4 md:gap-8">
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

        {/* Text Section  */}
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
              className="font-['Satoshi-Regular'] text-center text-[16px] text-[#ECE7E1] leading-relaxed mb-8"
            >
              What started as curiosity
              turned into passion. Now, here she is—writing the About section of
              her frontend development portfolio. She knows there&apos;s still a
              long road ahead, but that&apos;s the exciting part.
            </motion.p>

            {/* CV Download Button */}
            <motion.div variants={textVariants} className="flex justify-center">
              <motion.button
                onClick={handleCVDownload}
                className="bg-[#020202] hover:bg-[#2a2a2a] border text-[#ECE7E1] px-8 py-3 rounded-[10px] font-['ClashDisplay-Medium'] text-[16px] transition-all z-30 duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </motion.div>
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
