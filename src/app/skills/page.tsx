import RadarChart from "@/components/radar";
import Navbar from "@/components/navbar";
import React from "react";
import PieChart from "@/components/piechart";
import BarThree from "@/components/bar chart";
import FrontendSkills from "@/components/skills";

export default async function Skills() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data1 = [
    { category: "HTML", value: 501 },
    { category: "CSS/SCSS", value: 501 },
    { category: "Javascript", value: 501 },
    { category: "Tailwind", value: 501 },
  ];

  return (
    <div>
      <Navbar />
      <div className="md:w-[1100px] mx-auto flex flex-col gap-[10px] md:gap-[20px] my-[20px] md:my-[50px] px-[10px]">
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] ">
          <PieChart id="chartdiv1" title="Core Fundamental" data={data1} />
          <FrontendSkills />
        </div>
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px]">
          <BarThree />
          <RadarChart />
        </div>
      </div>
    </div>
  );
}
