'use client';
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Huawei", 18.94, "#b87333"], // RGB value
  ["Iphone", 28.49, "silver"], // English color name
  ["Samsung", 27.3, "gold"],
  ["Oppo", 25.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function  App() {
  return (
    <Chart chartType="ColumnChart" width="100%" height="100%" data={data} />
  );
}
