import MyForm from "@/components/contact form";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default async function Contact() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Image
        src="/image/mount2.jpg"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />

        {/* Section takes the rest of the space below navbar */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-8">
          <section className="max-w-[1100px] w-full">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8 md:p-12 text-white">
              <h1 className="font-['ClashDisplay-Bold'] text-[34px] font-bold mb-4 md:mb-12 text-[#ECE7E1]">
                Contact Me
              </h1>

              <div className="flex flex-col gap-[30px] md:gap-0 md:flex-row w-full max-w-5xl justify-center overflow-hidden">
                {/* Left: Contact Form */}
                <div className="flex-1 md:pr-[40px]">
                  <h2 className="font-['ClashDisplay-Medium'] text-[18px] md:text-[28px] mb-6">
                    Send a Message
                  </h2>
                  <MyForm />
                </div>

                {/* Divider */}
                <div className="w-[1px] bg-[#ECE7E1] hidden md:block" />

                {/* Right: Contact Info */}
                <div className="flex-1 font-['ClashDisplay-Medium'] text-[24px] md:text-[30px] md:pl-[40px] flex flex-col items-start gap-6">
                  <h2 className="font-['ClashDisplay-Medium'] text-[28px] md:mb-[24px]">
                    Socials
                  </h2>
                  <div className="flex items-center gap-4">
                    <a
                      href="mailto:your@email.com"
                      className="hover:underline flex gap-[5px] items-center"
                    >
                      <FiArrowUpRight />
                      gmail
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex gap-[5px] items-center"
                    >
                      <FiArrowUpRight />
                      linkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex gap-[5px] items-center"
                    >
                      <FiArrowUpRight />
                      github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
