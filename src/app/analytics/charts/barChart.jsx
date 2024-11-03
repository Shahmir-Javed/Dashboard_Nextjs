'use client'; 
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2010 Population", "2000 Population"],
  ["Bahawalpur, BWP", 8175000, 8008000],
  ["Hyderabad, HYD", 3792000, 3694000],
  ["Lahora, LHR", 2695000, 2896000],
  ["Karachi, KHI", 2099000, 1953000],
  ["Multan, MNL", 1526000, 1517000],
];

export const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

export default function App() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
      legendToggle
    />
  );
}
