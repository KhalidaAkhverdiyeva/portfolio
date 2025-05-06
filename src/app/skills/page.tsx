import RadarChart from "@/components/radar";
import Navbar from "@/components/navbar";
import React from "react";
import PieChart from "@/components/piechart";
import CircularProgress from "@/components/cubic bar chart";

export default async function Skills() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data1 = [
    { category: "React.js", value: 301 },
    { category: "Next.js", value: 501 },
    { category: "Redux / Zustand", value: 201 },
    { category: "", value: 165 },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex gap-[50px]">
        <RadarChart />
        <PieChart id="chartdiv1" title="First" data={data1} />
      </div>
      <CircularProgress
        percentage={75}
        size={150}
        strokeWidth={12}
        color="blue"
      />
    </div>
  );
}
