"use client";

import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
    level: 90,
  },
  {
    title: "Build Tools",
    items: ["Webpack", "Vite", "npm / yarn", "ESLint / Prettier"],
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
    <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4 mb-8">
      <div className="w-32 h-32 mb-4">
        <CircularProgressbarWithChildren
          value={level}
          styles={buildStyles({
            pathColor: "#ECE7E1",
            trailColor: "#2e2e2e",
          })}
        >
          <div className="text-[#ECE7E1] font-bold text-lg font-['ClashDisplay-SemiBold']">
            {level}%
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <h3 className="text-lg font-semibold text-[#ECE7E1] mb-2 font-['ClashDisplay-Bold']">
        {title}
      </h3>
      <ul className="text-sm font-['Satoshi-Regular'] text-gray-300 list-disc list-inside text-left">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const FrontendSkills: React.FC = () => {
  return (
    <section className="border border-[#ECE7E1] text-[#ECE7E1] p-8 rounded-xl w-full">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {skillsData.map((skill, index) => (
          <SkillCircle key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default FrontendSkills;
