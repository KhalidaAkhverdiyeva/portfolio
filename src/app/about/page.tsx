import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import { FloatingTag } from "@/components/floating tags";

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const tags = [
    {
      label: "FOLLOW",
      info: "Follow me",
      position: { top: 480, left: 300, rotate: -12 },
    },
    {
      label: "ME",
      info: "Who am I",
      position: { top: 510, left: 360, rotate: 8 },
    },
    {
      label: "UI/UX",
      info: "Design thinker",
      position: { top: 490, left: 420, rotate: -5 },
    },
    {
      label: "DESIGNER",
      info: "Creative",
      position: { top: 520, left: 470, rotate: 10 },
    },
    {
      label: "MARIYA PETROVA",
      info: "That's me!",
      position: { top: 470, left: 540, rotate: -6 },
    },
    {
      label: ":P",
      info: "Just a fun tag",
      position: { top: 500, left: 610, rotate: 4 },
    },
    {
      label: "2024",
      info: "This year!",
      position: { top: 530, left: 670, rotate: -8 },
    },
  ];

  return (
      <div className="relative w-full h-screen  overflow-hidden">
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
            <div className=" p-8 rounded-2xl border border-white/20">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['ClashDisplay-Bold']">
                About Me
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                I'm a Frontend Developer based in Azerbaijan, passionate about
                creating beautiful and functional web experiences. With a keen
                eye for design and strong technical skills, I bridge the gap
                between aesthetics and functionality.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                My journey in web development has led me to work with modern
                technologies like React, Next.js, and TypeScript, always
                striving to create responsive and user-friendly interfaces that
                leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
        {tags.map((tag, i) => (
          <FloatingTag
            key={tag.label}
            label={tag.label}
            info={tag.info}
            position={tag.position}
          />
        ))}
      </div>
  );
}
