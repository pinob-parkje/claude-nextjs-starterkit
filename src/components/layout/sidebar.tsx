"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import {
  BarChart3,
  ChevronLeft,
  LayoutDashboard,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import { useLocalStorage, useMediaQuery, useOnClickOutside, useToggle } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import type { NavGroup } from "@/types";

const NAV_GROUPS: NavGroup[] = [
  {
    title: "메인",
    items: [
      { label: "개요", href: "/dashboard", icon: LayoutDashboard },
      { label: "사용자", href: "/dashboard/users", icon: Users },
    ],
  },
  {
    title: "애널리틱스",
    items: [
      { label: "차트", href: "/dashboard/charts", icon: BarChart3 },
    ],
  },
  {
    title: "시스템",
    items: [
      { label: "설정", href: "/dashboard/settings", icon: Settings },
    ],
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const sidebarRef = useRef<HTMLElement>(null);

  // collapse 상태를 로컬 스토리지에 저장 → 새로고침 후도 유지
  const [isCollapsed, setIsCollapsed] = useLocalStorage("sidebar-collapsed", false);
  const [mobileOpen, toggleMobileOpen] = useToggle(false);

  // 모바일에서 사이드바 외부 클릭 시 자동 닫기
  useOnClickOutside(sidebarRef as React.RefObject<HTMLElement>, () => {
    if (isMobile && mobileOpen) toggleMobileOpen();
  });

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* 모바일 오버레이 */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileOpen}
        />
      )}

      <aside
        ref={sidebarRef}
        className={cn(
          "flex h-full flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
          // 모바일: 고정 레이어
          isMobile && "fixed left-0 top-0 z-50",
          isMobile && !mobileOpen && "-translate-x-full",
          className
        )}
      >
        {/* 로고 영역 */}
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-3">
          {!isCollapsed && (
            <Link href="/" className="flex items-center gap-2 font-bold text-sidebar-foreground">
              <div className="flex size-7 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <Zap className="size-4" />
              </div>
              <span className="text-sm">StarterKit</span>
            </Link>
          )}
          {isCollapsed && (
            <Link href="/" className="mx-auto">
              <div className="flex size-7 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <Zap className="size-4" />
              </div>
            </Link>
          )}
          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="size-7 shrink-0 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label={isCollapsed ? "사이드바 펼치기" : "사이드바 접기"}
            >
              <ChevronLeft
                className={cn("size-4 transition-transform duration-300", isCollapsed && "rotate-180")}
              />
            </Button>
          )}
        </div>

        {/* 네비게이션 */}
        <nav className="flex-1 overflow-y-auto p-2">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="mb-4">
              {!isCollapsed && group.title && (
                <p className="mb-1 px-2 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50">
                  {group.title}
                </p>
              )}
              {group.items.map((item) => {
                const Icon = item.icon!;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={isMobile ? toggleMobileOpen : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                      "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      active
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/70",
                      isCollapsed && "justify-center px-2"
                    )}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon className="size-4 shrink-0" />
                    {!isCollapsed && <span>{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* 하단 영역 */}
        <div className={cn("border-t border-sidebar-border p-2", isCollapsed && "flex justify-center")}>
          <ThemeToggle className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" />
        </div>
      </aside>
    </>
  );
}
