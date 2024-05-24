"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 3700,
  },
  {
    name: "Feb",
    total: 1500,
  },
  {
    name: "Mar",
    total: 4000,
  },
  {
    name: "Apr",
    total: 4400,
  },
  {
    name: "May",
    total: 2000,
  },
  {
    name: "Jun",
    total: 6000,
  },
  {
    name: "Jul",
    total: 1200,
  },
  {
    name: "Aug",
    total: 4000,
  },
  {
    name: "Sep",
    total: 4800,
  },
  {
    name: "Oct",
    total: 6000,
  },
  {
    name: "Nov",
    total: 1000,
  },
  {
    name: "Dec",
    total: 6000,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
