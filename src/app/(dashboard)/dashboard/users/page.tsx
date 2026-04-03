import type { Metadata } from "next";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { UsersTable } from "./users-table";

export const metadata: Metadata = { title: "사용자 관리" };

export default function UsersPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <DashboardHeader title="사용자 관리" description="등록된 사용자 목록 및 권한 관리" />
      <div className="flex-1 overflow-y-auto p-6">
        <UsersTable />
      </div>
    </div>
  );
}
