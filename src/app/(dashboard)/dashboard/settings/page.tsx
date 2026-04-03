import type { Metadata } from "next";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SettingsForm } from "@/components/forms/settings-form";

export const metadata: Metadata = { title: "설정" };

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <DashboardHeader title="설정" description="계정 및 앱 설정을 관리합니다" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>계정 설정</CardTitle>
              <CardDescription>
                react-hook-form + zod 기반 폼 유효성 검사 패턴 예시
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SettingsForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
