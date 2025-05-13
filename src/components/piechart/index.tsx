"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
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

    const colorSet = am5.ColorSet.new(root, {
      colors: [
        am5.color(0x020202),
        am5.color(0xc26434),
        am5.color(0x020202),
        am5.color(0xc26434),
      ],
      reuse: false,
    });

    series.slices.template.adapters.add("fill", (_fill, target) => {
      return colorSet.getIndex(series.slices.indexOf(target));
    });

    series.slices.template.setAll({
      cornerRadius: 10,
      stroke: am5.color(0x020202),
      strokeWidth: 1,
      strokeOpacity: 1,
    });

    series.labels.template.setAll({
      text: "{category}",
      textType: "circular",
      fill: am5.color(0x020202),
    });

    series.states.create("hidden", { endAngle: -90 });
    series.data.setAll(data);
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [id, title, data]);

  return (
    <motion.div
      className="p-4 bg-[#F9773B] box-border md:w-[500px] rounded-[20px]"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut",delay:0.5 }}
    >
      <motion.div
        className="text-center mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <span className="text-[#020202] font-['ClashDisplay-Bold'] text-[24px]">
          {title}
        </span>
      </motion.div>

      <motion.div
        id={id}
        className="w-full h-[300px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      />
    </motion.div>
  );
}
