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

    chart.data = [
      { year: "React.js", income: "80%" },
      { year: "Vue.js", income: "20%" },
      { year: "Redux/Zustand", income: "50%" },
      { year: "Next.js", income: "70%" },
    ];

    // Set all columns to same color
    const barColor = am4core.color("#ECE7E1");
    chart.colors.list = [barColor];

    chart.background.fill = am4core.color("#020202");
    chart.background.fillOpacity = 1;

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.stroke = am4core.color("#444");
    categoryAxis.renderer.labels.template.fill = am4core.color("#ccc");

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.baseGrid.disabled = true;

    const series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "income";
    series.dataFields.categoryY = "year";
    series.name = "Income";
    series.columns.template.tooltipText = "{valueX}";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;

    // Force the fill color
    series.columns.template.column3D.fill = barColor;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div className="w-full border border-white p-4 rounded-[20px]">
      <div className="text-white text-center font-['ClashDisplay-Bold'] text-[24px] mb-4">
        Frameworks & Libraries
      </div>
      <div id="chartdiv3d" className="w-full h-[400px]" />
    </div>
  );
};

export default BarThree;
