import type { Metadata } from "next";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OverviewChart } from "@/components/charts/overview-chart";
import { MonthlyBarChart } from "@/components/charts/bar-chart";

export const metadata: Metadata = { title: "차트" };

export default function ChartsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <DashboardHeader title="차트" description="다양한 차트 시각화 패턴 예시" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>매출 & 사용자 추이</CardTitle>
              <CardDescription>최근 12개월 Area Chart 예시</CardDescription>
            </CardHeader>
            <CardContent>
              <OverviewChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>월별 매출</CardTitle>
              <CardDescription>최근 12개월 Bar Chart 예시</CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyBarChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
