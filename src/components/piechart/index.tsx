/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

type PieChartProps = {
  id: string;
  title: string;
  data: { category: string; value: number }[];
};

export default function PieChart({ id, title, data }: PieChartProps) {
  useEffect(() => {
    const root = am5.Root.new(id);
    root._logo?.dispose();

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
        innerRadius: am5.percent(60),
        layout: root.verticalLayout,
      })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
        alignLabels: false,
      })
    );

    series.slices.template.setAll({ cornerRadius: 8 });

    series.children.push(
      am5.Label.new(root, {
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        text: `${title}: {valueSum}`,
        populateText: true,
        fontSize: "1.5em",
      })
    );

    series.labels.template.setAll({ textType: "circular" });
    series.states.create("hidden", { endAngle: -90 });
    series.data.setAll(data);
    series.appear(1000, 100);
    series.labels.template.setAll({
      textType: "circular",
      fill: am5.color(0xffffff),
    });

    series.children.push(
      am5.Label.new(root, {
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        text: `${title}: {valueSum}`,
        populateText: true,
        fontSize: "1.5em",
        fill: am5.color(0xffffff),
      })
    );

    series.slices.template.adapters.add("fill", (fill, target) => {
      const index = (target.dataItem as any)?.index || 0;
      const colors = [0xff6384, 0x36a2eb, 0xffce56, 0x4bc0c0, 0xf77825];
      return am5.color(colors[index % colors.length]);
    });

    return () => {
      root.dispose();
    };
  }, [id, title, data]);

  return <div id={id} className="w-full h-[300px]" />;
}
