import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  external?: boolean;
  disabled?: boolean;
}

export interface NavGroup {
  title?: string;
  items: NavItem[];
}

export interface StatCard {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: LucideIcon;
}
