// components/RadarChart.tsx
"use client"; // if you're using app directory in Next.js 13+

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect } from "react";

const RadarChart = () => {
  useEffect(() => {
    // Create root
    const root = am5.Root.new("chartdivRadar");
    root._logo?.dispose();

    root.setThemes([am5themes_Animated.new(root)]);
    const customColors = am5.ColorSet.new(root, {
      colors: [
        am5.color("#97B9FF"), // red-orange
        am5.color("#97B9FF"), // sky blue
        am5.color("#97B9FF"), // lime green
        am5.color("#97B9FF"), // pink
      ],
      reuse: false,
    });

    const chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        innerRadius: am5.percent(20),
        startAngle: -90,
        endAngle: 180,
      })
    );

    const data = [
      {
        category: "Nodemailer",
        value: 80,
        full: 100,
        columnSettings: { fill: customColors.getIndex(0) },
      },
      {
        category: "MangoDB",
        value: 85,
        full: 100,
        columnSettings: { fill: customColors.getIndex(1) },
      },
      {
        category: "Express.js",
        value: 92,
        full: 100,
        columnSettings: { fill: customColors.getIndex(2) },
      },
      {
        category: " Node.js",
        value: 98,
        full: 100,
        columnSettings: { fill: customColors.getIndex(3) },
      },
    ];

    const cursor = chart.set(
      "cursor",
      am5radar.RadarCursor.new(root, {
        behavior: "zoomX",
      })
    );
    cursor.lineY.set("visible", false);

    const xRenderer = am5radar.AxisRendererCircular.new(root, {});
    xRenderer.labels.template.setAll({ radius: 10, fill: am5.color(0x020202) });
    xRenderer.grid.template.setAll({ forceHidden: true });

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: xRenderer,
        min: 0,
        max: 100,
        strictMinMax: true,
        numberFormat: "#'%'",
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yRenderer = am5radar.AxisRendererRadial.new(root, {
      minGridDistance: 20,
    });

    yRenderer.labels.template.setAll({
      centerX: am5.p100,
      fontWeight: "500",
      fontSize: 18,
      templateField: "columnSettings",
    });

    yRenderer.grid.template.setAll({ forceHidden: true });

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: yRenderer,
      })
    );

    yAxis.data.setAll(data);

    const series1 = chart.series.push(
      am5radar.RadarColumnSeries.new(root, {
        xAxis,
        yAxis,
        clustered: false,
        valueXField: "full",
        categoryYField: "category",
        fill: root.interfaceColors.get("alternativeBackground"),
      })
    );

    series1.columns.template.setAll({
      width: am5.p100,
      fillOpacity: 0.08,
      strokeOpacity: 0,
      cornerRadius: 20,
    });
    series1.data.setAll(data);

    const series2 = chart.series.push(
      am5radar.RadarColumnSeries.new(root, {
        xAxis,
        yAxis,
        clustered: false,
        valueXField: "value",
        categoryYField: "category",
      })
    );

    series2.columns.template.setAll({
      width: am5.p100,
      strokeOpacity: 0,
      tooltipText: "{category}: {valueX}%",
      cornerRadius: 20,
      templateField: "columnSettings",
    });
    series2.data.setAll(data);

    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose(); // Clean up chart when component unmounts
    };
  }, []);

  return (
    <div className="p-4 bg-[#020202] border-solid border-[1px] border-[#ECE7E1] box-border md:w-[50%] rounded-[20px]">
      <div className="text-center mb-2">
        <span className="text-[#ECE7E1] font-['ClashDisplay-Bold'] text-[24px]">
          Backend
        </span>
      </div>

      <div id="chartdivRadar" className="w-[100%] h-[300px]" />

      {/* Custom Legend */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center text-[#ECE7E1] text-[14px]">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: "#97B9FF" }}
          ></span>
          Nodemailer
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: "#97B9FF" }}
          ></span>
          MangoDB
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: "#97B9FF" }}
          ></span>
          Express.js
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: "#97B9FF" }}
          ></span>
          Node.js
        </div>
      </div>
    </div>
  );
};

export default RadarChart;
