import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import { FloatingTag } from "@/components/floating tags";

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const tags = [
    {
      label: "BMU",
      info: "Follow me",
      position: {
        bottom: 10,
        left: 643,
        rotate: 15,
        mobileBottom: 156,
        mobileLeft: 163,
      },
    },
    {
      label: "Career Switch",
      info: "Who am I",
      position: {
        bottom: 27,
        left: 460,
        rotate: -15,
        mobileBottom: 242,
        mobileLeft: 152,
      },
    },
    {
      label: "Code Academy",
      info: "Design thinker",
      position: {
        bottom: 47,
        left: 636,
        rotate: 25,
        mobileBottom: 69,
        mobileLeft: 212,
      },
    },
    {
      label: "Azerbaijan",
      info: "Creative",
      position: {
        bottom: 26,
        left: 831,
        rotate: -24,
        mobileBottom: 108,
        mobileLeft: 12,
      },
    },
    {
      label: "Khalida Akhverdiyeva",
      info: "That's me!",
      position: {
        bottom: 12,
        left: 959,
        rotate: -5,
        mobileBottom: 20,
        mobileLeft: 14,
      },
    },
    {
      label: "Daily Routine",
      info: "Just a fun tag",
      position: {
        bottom: 85,
        left: 761,
        rotate: -2,
        mobileBottom: 189,
        mobileLeft: 236,
      },
    },
    {
      label: "Hobbies",
      info: "This year!",
      position: {
        bottom: 75,
        left: 962,
        rotate: 22,
        mobileBottom: 119,
        mobileLeft: 276,
      },
    },
    {
      label: "Challenges",
      info: "This year!",
      position: {
        bottom: 38,
        left: 310,
        rotate: 28,
        mobileBottom: 207,
        mobileLeft: 15,
      },
    },
    {
      label: "Goals",
      info: "This year!",
      position: {
        bottom: 9,
        left: 257,
        rotate: -8,
        mobileBottom: 76,
        mobileLeft: 118,
      },
    },
  ];

  return (
    <div className="relative w-scren  md:h-screen  overflow-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center p-[15px] md:w-[1200px] md:mx-auto gap-4 md:gap-8">
        {/* Image Section */}
        <div className="w-full md:w-2/5">
          <div className="relative aspect-square md:h-[350px] rounded-full overflow-hidden">
            <Image
              src="/image/seviyye2.jpg"
              alt="Khalida"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Section with Frosted Glass Effect */}
        <div className="w-full md:w-4/5">
          <div className=" p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ECE7E1] mb-6 font-['ClashDisplay-Bold']">
              Who am I ?
            </h1>
            <p className="text-lg text-[#ECE7E1] leading-relaxed mb-4">
              I&aposm a Frontend Developer based in Azerbaijan, passionate about
              creating beautiful and functional web experiences. With a keen eye
              for design and strong technical skills, I bridge the gap between
              aesthetics and functionality.
            </p>
            <p className="text-lg text-[#ECE7E1] leading-relaxed">
              My journey in web development has led me to work with modern
              technologies like React, Next.js, and TypeScript, always striving
              to create responsive and user-friendly interfaces that leave a
              lasting impression.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        {tags.map((tag) => (
          <FloatingTag
            key={tag.label}
            label={tag.label}
            info={tag.info}
            position={tag.position}
          />
        ))}
      </div>
    </div>
  );
}
