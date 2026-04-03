"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "1월", revenue: 4200 },
  { month: "2월", revenue: 3800 },
  { month: "3월", revenue: 5600 },
  { month: "4월", revenue: 4900 },
  { month: "5월", revenue: 6800 },
  { month: "6월", revenue: 7200 },
  { month: "7월", revenue: 6500 },
  { month: "8월", revenue: 8100 },
  { month: "9월", revenue: 7600 },
  { month: "10월", revenue: 9200 },
  { month: "11월", revenue: 8700 },
  { month: "12월", revenue: 10500 },
];

const chartConfig: ChartConfig = {
  revenue: {
    label: "매출",
    color: "var(--color-primary)",
  },
};

export function MonthlyBarChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[280px] w-full">
      <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="revenue" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
