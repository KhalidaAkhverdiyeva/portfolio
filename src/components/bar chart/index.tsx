"use client";

import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const BarThree = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    const chart = am4core.create("chartdiv3d", am4charts.XYChart3D);
    chart.logo.disabled = true;
    chart.responsive.enabled = true;
    chart.data = [
      { year: "React.js", income: 80 },
      { year: "Vue.js", income: 20 },
      { year: "Redux/Zustand", income: 50 },
      { year: "Next.js", income: 70 },
    ];

    const barColor = am4core.color("#D1FD0A");
    chart.colors.list = [barColor];
    chart.background.fill = am4core.color("#242424");
    chart.background.fillOpacity = 1;

    // Always render vertical bars
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.stroke = am4core.color("#444");
    categoryAxis.renderer.labels.template.fill = am4core.color("#ccc");
    categoryAxis.renderer.labels.template.fontSize = 12;
    categoryAxis.renderer.minGridDistance = 20;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.baseGrid.disabled = true;

    const series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "income";
    series.dataFields.categoryX = "year";
    series.name = "Income";
    series.columns.template.tooltipText = "{valueY}%";
    series.columns.template.column3D.fill = barColor;
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="w-full md:w-[50%] bg-[#242424] p-4 rounded-[20px]">
      <div className="text-[#ECE7E1] text-center font-['ClashDisplay-Bold'] text-[24px] mb-4">
        Frameworks & Libraries
      </div>
      <div id="chartdiv3d" className="w-full h-[400px]" />
    </div>
  );
};

export default BarThree;
