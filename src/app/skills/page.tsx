import RadarChart from "@/components/radar";
import Navbar from "@/components/navbar";
import React from "react";
import PieChart from "@/components/piechart";
import BarThree from "@/components/bar chart";
import FrontendSkills from "@/components/half pie chart";

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
      <div className="w-[1100px] mx-auto flex flex-col gap-[20px] my-[50px]">
        <div className="flex gap-[20px] ">
          <PieChart id="chartdiv1" title="First" data={data1} />

          <FrontendSkills />
        </div>
        <div className="flex gap-[20px]">
          <BarThree />
          <RadarChart />
        </div>
      </div>
    </div>
  );
}
