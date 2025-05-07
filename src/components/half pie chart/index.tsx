// app/components/HalfPieChart.tsx
"use client";

import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function HalfPieChart() {
  useEffect(() => {
    const chartId = "chartdiv-halfpie";

    // Dispose existing root if it exists
    const existingRoot = am5.registry.rootElements.find(
      (r) => r.dom.id === chartId
    );
    if (existingRoot) {
      existingRoot.dispose();
    }

    // Create root element
    const root = am5.Root.new(chartId);
    root._logo?.dispose();

    root.setThemes([am5themes_Animated.new(root)]);

    // Set chart background to transparent
    root.dom.style.backgroundColor = "transparent";

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 180,
        endAngle: 360,
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    // Slice style
    series.slices.template.setAll({
      cornerRadius: 5,
      strokeWidth: 2,
    });

    // Hide ticks
    series.ticks.template.setAll({
      forceHidden: true,
    });

    // Label styling for white text
    series.labels.template.setAll({
      fill: am5.color(0xffffff),
      fontSize: 14,
    });

    series.data.setAll([
      { value: 7, category: "One" },
      { value: 7, category: "Two" },
    ]);

    return () => root.dispose();
  }, []);

  return <div id="chartdiv-halfpie" className="w-full h-[400px] bg-black" />;
}
