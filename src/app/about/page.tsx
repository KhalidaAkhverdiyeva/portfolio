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
        left: 497,
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
        left: 311,
        rotate: -15,
        mobileBottom: 214,
        mobileLeft: 105,
      },
    },
    {
      label: "Code Academy",
      info: "Design thinker",
      position: {
        bottom: 47,
        left: 490,
        rotate: 25,
        mobileBottom: 63,
        mobileLeft: 156,
      },
    },
    {
      label: "Azerbaijan",
      info: "Creative",
      position: {
        bottom: 26,
        left: 685,
        rotate: -24,
        mobileBottom: 98,
        mobileLeft: 10,
      },
    },
    {
      label: "Khalida Akhverdiyeva",
      info: "That's me!",
      position: {
        bottom: 12,
        left: 813,
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
        left: 615,
        rotate: -2,
        mobileBottom: 173,
        mobileLeft: 174,
      },
    },
    {
      label: "Hobbies",
      info: "This year!",
      position: {
        bottom: 75,
        left: 816,
        rotate: 22,
        mobileBottom: 107,
        mobileLeft: 198,
      },
    },
    {
      label: "Challenges",
      info: "This year!",
      position: {
        bottom: 38,
        left: 164,
        rotate: 28,
        mobileBottom: 178,
        mobileLeft: 8,
      },
    },
    {
      label: "Goals",
      info: "This year!",
      position: {
        bottom: 9,
        left: 111,
        rotate: -8,
        mobileBottom: 67,
        mobileLeft: 83,
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
          <div className=" md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#ECE7E1] mb-6 font-['ClashDisplay-Bold']">
              Who am I ?
            </h1>
            <p className="font-['Satoshi-Regular'] text-lg text-[#ECE7E1] leading-relaxed mb-4">
              I&apos;m a Frontend Developer based in Azerbaijan, passionate
              about creating beautiful and functional web experiences. With a
              keen eye for design and strong technical skills, I bridge the gap
              between aesthetics and functionality.
            </p>
            <p className="font-['Satoshi-Regular']  text-lg text-[#ECE7E1] leading-relaxed">
              My journey in web development has led me to work with modern
              technologies like React, Next.js, and TypeScript, always striving
              to create responsive and user-friendly interfaces that leave a
              lasting impression.
            </p>
          </div>
        </div>
      </div>
      <div className="md:absolute  md:bottom-0  h-[300px] w-full flex justify-center items-end">
        <div className="relative h-[300px] w-[1200px] min-[375px]:ml-[20px] min-[425px]:ml-[50px] md:ml-0">
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
    </div>
  );
}
