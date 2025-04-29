import MyForm from "@/components/contact form";
import Navbar from "@/components/navbar";
import { TextField } from "@mui/material";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default async function Contact() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <Navbar />
      <section className=" px-8 py-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-12 text-[#ECE7E1]">Contact Me</h1>

        <div className="flex flex-col md:flex-row w-full max-w-5xl border rounded-lg shadow-lg overflow-hidden bg-[#0e0e0e] text-white">
          {/* Left: Contact Form */}
          <div className="flex-1 p-6 md:p-10">
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
            <MyForm/>
          </div>

          {/* Middle: Vertical Divider */}
          <div className="w-px bg-gray-600 hidden md:block" />

          {/* Right: Contact Info */}
          <div className="flex-1 p-6 md:p-10 flex flex-col justify-center items-start gap-6">
            <h2 className="text-xl font-semibold">Socials</h2>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#d4ff00]" />
              <a href="mailto:your@email.com" className="hover:underline">
                your@email.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-[#d4ff00]" />
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-[#d4ff00]" />
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/yourusername
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
