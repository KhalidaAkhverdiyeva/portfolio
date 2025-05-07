import RadarChart from "@/components/radar";
import Navbar from "@/components/navbar";
import React from "react";
import PieChart from "@/components/piechart";
import BarChart from "@/components/bar chart";
import HalfPieChart from "@/components/half pie chart";

export default async function Skills() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data1 = [
    { category: "React.js", value: 301 },
    { category: "Next.js", value: 501 },
    { category: "Redux / Zustand", value: 201 },
    { category: "Somthing", value: 165 },
  ];
  const chartData = [
    { category: "Apples", value: 40 },
    { category: "Bananas", value: 55 },
    { category: "Oranges", value: 30 },
    { category: "Pears", value: 70 },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-[1100px] mx-auto flex flex-col gap-[20px] my-[50px]">
        <div className="flex gap-[20px]">
          <BarChart id="barchart" data={chartData} />
          <RadarChart />
        </div>
        <PieChart id="chartdiv1" title="First" data={data1} />
        <HalfPieChart />{" "}
      </div>
    </div>
  );
}
