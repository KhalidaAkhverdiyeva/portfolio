// components/RadarChart.tsx
"use client";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useEffect } from "react";
import { motion } from "framer-motion"; // <- import motion

const RadarChart = () => {
  useEffect(() => {
    const root = am5.Root.new("chartdivRadar");
    root._logo?.dispose();

    root.setThemes([am5themes_Animated.new(root)]);
    const customColors = am5.ColorSet.new(root, {
      colors: [
        am5.color("#020202"),
        am5.color("#020202"),
        am5.color("#020202"),
        am5.color("#020202"),
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

    const xRenderer = am5radar.AxisRendererCircular.new(root, {});
    xRenderer.labels.template.setAll({ radius: 10, fill: am5.color(0xffea81) });
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
      root.dispose();
    };
  }, []);

  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      className="p-4 bg-[#FFEA81] border-solid border-[2px] border-[#2E2E2E] box-border md:w-[50%] rounded-[20px]"
    >
      <div className="text-center mb-2">
        <span className="text-[#020202] font-['ClashDisplay-Bold'] text-[24px]">
          Backend
        </span>
      </div>

      <div id="chartdivRadar" className="w-[100%] h-[300px]" />

      <div className="mt-4 flex flex-wrap gap-4 justify-center text-[#020202] text-[14px] font-['Satoshi-Regular']">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: "#020202" }}
          ></span>
          Nodemailer
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: "#020202" }}
          ></span>
          MangoDB
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: "#020202" }}
          ></span>
          Express.js
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: "#020202" }}
          ></span>
          Node.js
        </div>
      </div>
    </motion.div>
  );
};

export default RadarChart;
