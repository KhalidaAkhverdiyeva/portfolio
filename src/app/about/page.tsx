import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/image/flow.jpeg"
          alt="Background"
          fill
          quality={100}
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/100 -z-10" />

      {/* Content */}
      <Navbar />

      {/* Main Content Section */}
      <div className=" mx-auto  mt-20">
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
      </div>
    </div>
  );
}
