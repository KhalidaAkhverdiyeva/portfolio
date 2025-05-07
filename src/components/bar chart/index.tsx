"use client";

import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

type BarChartProps = {
  id: string;
  data: { category: string; value: number }[];
};

export default function BarChart({ id, data }: BarChartProps) {
  useEffect(() => {
    const root = am5.Root.new(id);
    root._logo?.dispose();

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout,
      })
    );

    // X Axis
    const xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      fill: am5.color(0xffffff), // white labels
      fontSize: 14,
    });
    xRenderer.grid.template.setAll({
      forceHidden: true,
    });
    const tooltip = am5.Tooltip.new(root, {
      labelText: "{category}",
    });
    tooltip.label.setAll({
      fill: am5.color(0xffffff),
    });
    tooltip.get("background")?.setAll({
      fill: am5.color(0x333333),
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "category",
        renderer: xRenderer,
        tooltip,
      })
    );
    xAxis.data.setAll(data);

    // Y Axis
    const yRenderer = am5xy.AxisRendererY.new(root, {});

    yRenderer.labels.template.setAll({
      forceHidden: true,
    });
    yRenderer.grid.template.setAll({
      forceHidden: true,
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
      })
    );

    // Bar Series
    const seriesTooltip = am5.Tooltip.new(root, {
      labelText: "{categoryX}: {valueY}",
      getFillFromSprite: false,
      getStrokeFromSprite: false,
    });

    seriesTooltip.label.setAll({
      fill: am5.color(0xffffff),
    });

    seriesTooltip.get("background")?.setAll({
      fill: am5.color(0x333333),
    });

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis,
        yAxis,
        valueYField: "value",
        categoryXField: "category",
        tooltip: seriesTooltip,
      })
    );

    series.columns.template.setAll({
      width: am5.percent(80),
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      fill: am5.color(0x3b82f6), // bar color
      stroke: am5.color(0x3b82f6),
    });

    series.data.setAll(data);

    chart.appear(1000, 100);
    series.appear(1000);

    return () => {
      root.dispose();
    };
  }, [id, data]);

  return (
    <div className="p-4 border border-white box-border w-[80%]  rounded-[20px]">
      <div className="text-center mb-2">
        <span className="text-white">Design and Styling</span>
      </div>
      <div id={id} className="w-full h-[300px] p-2 " />
    </div>
  );
}
