import type { Metadata } from "next";
import { ArrowDown, ArrowUp, DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OverviewChart } from "@/components/charts/overview-chart";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "대시보드 개요" };

const STATS = [
  {
    title: "총 매출",
    value: "₩10,523,000",
    change: "+20.1%",
    trend: "up" as const,
    description: "지난 달 대비",
    icon: DollarSign,
  },
  {
    title: "신규 사용자",
    value: "+2,350",
    change: "+180",
    trend: "up" as const,
    description: "이번 달",
    icon: Users,
  },
  {
    title: "활성 주문",
    value: "1,247",
    change: "-8.2%",
    trend: "down" as const,
    description: "지난 주 대비",
    icon: ShoppingCart,
  },
  {
    title: "전환율",
    value: "3.24%",
    change: "+0.4%",
    trend: "up" as const,
    description: "지난 달 대비",
    icon: TrendingUp,
  },
];

const RECENT_ACTIVITY = [
  { user: "김민준", action: "새 계정 생성", time: "방금 전", status: "success" },
  { user: "이서연", action: "결제 완료", time: "3분 전", status: "success" },
  { user: "박지호", action: "비밀번호 변경", time: "12분 전", status: "info" },
  { user: "최수아", action: "구독 취소", time: "1시간 전", status: "warning" },
  { user: "정현우", action: "파일 업로드", time: "2시간 전", status: "success" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <DashboardHeader title="대시보드" description="주요 지표 및 최근 활동" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* KPI 카드 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className="rounded-md bg-muted p-1.5">
                    <Icon className="size-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    {stat.trend === "up" ? (
                      <ArrowUp className="size-3 text-green-500" />
                    ) : (
                      <ArrowDown className="size-3 text-red-500" />
                    )}
                    <span className={cn(stat.trend === "up" ? "text-green-600" : "text-red-600")}>
                      {stat.change}
                    </span>
                    <span>{stat.description}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 차트 + 최근 활동 */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* 차트 */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>매출 & 사용자 추이</CardTitle>
              <CardDescription>최근 12개월 데이터</CardDescription>
            </CardHeader>
            <CardContent>
              <OverviewChart />
            </CardContent>
          </Card>

          {/* 최근 활동 */}
          <Card>
            <CardHeader>
              <CardTitle>최근 활동</CardTitle>
              <CardDescription>실시간 사용자 활동</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {RECENT_ACTIVITY.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                      {item.user[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-tight">{item.user}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.action}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                      <Badge
                        variant={item.status === "warning" ? "destructive" : item.status === "info" ? "secondary" : "default"}
                        className="h-4 px-1.5 text-[10px]"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
