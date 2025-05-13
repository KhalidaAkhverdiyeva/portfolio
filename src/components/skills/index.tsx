"use client";

import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

// Type definition for a skill
type Skill = {
  title: string;
  items: string[];
  level: number;
};

// Sample skills data
const skillsData: Skill[] = [
  {
    title: "Code Quality",
    items: ["Chrome DevTools", "ESLint", "Prettier"],
    level: 70,
  },
  {
    title: "Build Tools",
    items: ["Webpack", "Vite", "npm / yarn"],
    level: 85,
  },
  {
    title: "Version Control",
    items: ["Git & GitHub", "Branching", "Pull Requests", "Merge Conflicts"],
    level: 80,
  },
];

// Props for the SkillCircle component
type SkillCircleProps = Skill;

const SkillCircle: React.FC<SkillCircleProps> = ({ title, items, level }) => {
  return (
    <div className="flex flex-col items-center text-center w-1/2 md:w-1/3 px-4 mb-8">
      <div className="md:w-32 md:h-32 mb-4">
        <CircularProgressbarWithChildren
          value={level}
          styles={buildStyles({
            pathColor: "#97B9FF",
            trailColor: "#2e2e2e",
          })}
        >
          <div className="text-[#ECE7E1] font-bold text-lg font-['ClashDisplay-SemiBold']">
            {level}%
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <h3 className="text-[12px] font-['ClashDisplay-SemiBold'] md:text-lg font-semibold text-[#ECE7E1] mb-2 md:font-['ClashDisplay-Bold']">
        {title}
      </h3>
      <ul
        style={{ listStyleType: "square" }}
        className="text-[12px] md:text-sm font-['Satoshi-Regular'] text-gray-300 list-disc list-inside text-left"
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const FrontendSkills: React.FC = () => {
  return (
    <motion.section
      className="border-solid border-[2px] border-[#2E2E2E] text-[#ECE7E1] p-4 md:p-8 rounded-xl w-full"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="flex flex-wrap justify-start mt-[15px] md:mt-0">
        {skillsData.map((skill, index) => (
          <SkillCircle key={index} {...skill} />
        ))}
      </div>
    </motion.section>
  );
};

export default FrontendSkills;
