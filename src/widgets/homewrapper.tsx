"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import WelcomeSection from "@/widgets/welcome";
import AboutSection from "@/widgets/about";
import CvSection from "@/widgets/cv";
import ContactSection from "@/widgets/contact";
import WorkSection from "@/widgets/work";
import SkillsSection from "@/widgets/skills";

type SectionId = "welcome" | "about" | "cv" | "contact" | "work" | "skills";

export default function HomeWrapper() {
  const [hovered, setHovered] = useState<SectionId | null>(null);

  const handleEnter = (id: SectionId) => setHovered(id);
  const handleLeave = () => setHovered(null);

  const isBlurred = (id: SectionId) => hovered !== null && hovered !== id;

  const blurClass = (id: SectionId) =>
    `${
      isBlurred(id) ? "blur-[1px] opacity-70" : "blur-0 opacity-100"
    } transition-all duration-300  `;

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1 gap-[10px] md:gap-[20px] overflow-hidden mx-[10px] md:mx-[20px] mb-[10px] md:mb-[20px]">
        <div className="md:w-[70%] flex flex-col gap-[10px] md:gap-[20px]">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] flex-[2]">
            <div
              onMouseEnter={() => handleEnter("welcome")}
              onMouseLeave={handleLeave}
              className={`w-full ${blurClass("welcome")}`}
            >
              <WelcomeSection />
            </div>
            <div
              onMouseEnter={() => handleEnter("about")}
              onMouseLeave={handleLeave}
              className={` ${blurClass("about")}`}
            >
              <AboutSection />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] flex-[1]">
            <div
              onMouseEnter={() => handleEnter("cv")}
              onMouseLeave={handleLeave}
              className={`w-full ${blurClass("cv")}`}
            >
              <CvSection />
            </div>
            <div
              onMouseEnter={() => handleEnter("contact")}
              onMouseLeave={handleLeave}
              className={`w-full ${blurClass("contact")}`}
            >
              <ContactSection />
            </div>
          </div>
        </div>

        <div className="md:w-[30%] min-h-[250px] flex flex-col gap-[10px] md:gap-[20px]">
          <div
            onMouseEnter={() => handleEnter("work")}
            onMouseLeave={handleLeave}
            className={`h-full ${blurClass("work")}`}
          >
            <WorkSection />
          </div>
          <div
            onMouseEnter={() => handleEnter("skills")}
            onMouseLeave={handleLeave}
            className={blurClass("skills")}
          >
            <SkillsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
