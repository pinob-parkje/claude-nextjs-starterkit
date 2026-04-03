"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { DataTable } from "@/components/data-table/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "editor";
  status: "active" | "inactive" | "pending";
  joinDate: string;
};

const STATUS_MAP = {
  active: { label: "활성", variant: "default" as const },
  inactive: { label: "비활성", variant: "secondary" as const },
  pending: { label: "대기", variant: "outline" as const },
};

const ROLE_MAP = {
  admin: "관리자",
  editor: "편집자",
  user: "사용자",
};

const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label="전체 선택"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
        aria-label="행 선택"
      />
    ),
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button variant="ghost" size="sm" className="-ml-2 gap-1" onClick={() => column.toggleSorting()}>
        이름
        <ArrowUpDown className="size-3.5" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="size-7">
          <AvatarFallback className="text-xs bg-primary/10 text-primary">
            {row.original.name[0]}
          </AvatarFallback>
        </Avatar>
        <span className="font-medium">{row.original.name}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "이메일",
    cell: ({ row }) => <span className="text-muted-foreground">{row.original.email}</span>,
  },
  {
    accessorKey: "role",
    header: "역할",
    cell: ({ row }) => (
      <Badge variant="outline" className="font-normal">
        {ROLE_MAP[row.original.role]}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button variant="ghost" size="sm" className="-ml-2 gap-1" onClick={() => column.toggleSorting()}>
        상태
        <ArrowUpDown className="size-3.5" />
      </Button>
    ),
    cell: ({ row }) => {
      const s = STATUS_MAP[row.original.status];
      return <Badge variant={s.variant}>{s.label}</Badge>;
    },
  },
  {
    accessorKey: "joinDate",
    header: "가입일",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.original.joinDate}</span>
    ),
  },
  {
    id: "actions",
    enableGlobalFilter: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-7">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>작업</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.id)}>
            ID 복사
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>프로필 보기</DropdownMenuItem>
          <DropdownMenuItem>권한 변경</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            계정 비활성화
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

const USERS: User[] = [
  { id: "1", name: "김민준", email: "minjun@example.com", role: "admin", status: "active", joinDate: "2024-01-15" },
  { id: "2", name: "이서연", email: "seoyeon@example.com", role: "user", status: "active", joinDate: "2024-02-20" },
  { id: "3", name: "박지호", email: "jiho@example.com", role: "editor", status: "active", joinDate: "2024-03-05" },
  { id: "4", name: "최수아", email: "sua@example.com", role: "user", status: "inactive", joinDate: "2024-03-18" },
  { id: "5", name: "정현우", email: "hyeonwoo@example.com", role: "user", status: "pending", joinDate: "2024-04-02" },
  { id: "6", name: "한예진", email: "yejin@example.com", role: "editor", status: "active", joinDate: "2024-04-15" },
  { id: "7", name: "오도현", email: "dohyeon@example.com", role: "user", status: "active", joinDate: "2024-05-01" },
  { id: "8", name: "신아린", email: "arin@example.com", role: "user", status: "inactive", joinDate: "2024-05-20" },
  { id: "9", name: "배준혁", email: "junhyeok@example.com", role: "admin", status: "active", joinDate: "2024-06-10" },
  { id: "10", name: "윤채원", email: "chaewon@example.com", role: "user", status: "pending", joinDate: "2024-06-25" },
];

export function UsersTable() {
  return (
    <DataTable
      columns={columns}
      data={USERS}
      searchPlaceholder="이름, 이메일 검색..."
    />
  );
}
