"use client";

import { useId } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "1월", revenue: 4200, users: 240 },
  { month: "2월", revenue: 3800, users: 220 },
  { month: "3월", revenue: 5600, users: 310 },
  { month: "4월", revenue: 4900, users: 280 },
  { month: "5월", revenue: 6800, users: 390 },
  { month: "6월", revenue: 7200, users: 430 },
  { month: "7월", revenue: 6500, users: 370 },
  { month: "8월", revenue: 8100, users: 460 },
  { month: "9월", revenue: 7600, users: 440 },
  { month: "10월", revenue: 9200, users: 520 },
  { month: "11월", revenue: 8700, users: 490 },
  { month: "12월", revenue: 10500, users: 580 },
];

const chartConfig: ChartConfig = {
  revenue: {
    label: "매출",
    color: "var(--color-primary)",
  },
  users: {
    label: "사용자",
    color: "var(--color-chart-2)",
  },
};

export function OverviewChart() {
  const chartId = useId();

  return (
    <ChartContainer config={chartConfig} className="h-[280px] w-full">
      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id={`fillRevenue-${chartId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id={`fillUsers-${chartId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-chart-2)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="var(--color-chart-2)" stopOpacity={0} />
          </linearGradient>
        </defs>
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
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="var(--color-primary)"
          strokeWidth={2}
          fill={`url(#fillRevenue-${chartId})`}
        />
        <Area
          type="monotone"
          dataKey="users"
          stroke="var(--color-chart-2)"
          strokeWidth={2}
          fill={`url(#fillUsers-${chartId})`}
        />
      </AreaChart>
    </ChartContainer>
  );
}
