"use client";

import { Search, X } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useEffect } from "react";
import type { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  searchPlaceholder?: string;
}

export function DataTableToolbar<TData>({
  table,
  globalFilter,
  setGlobalFilter,
  searchPlaceholder = "검색...",
}: DataTableToolbarProps<TData>) {
  // 검색 입력 디바운스 (300ms) — usehooks-ts 활용
  const [debouncedValue, setDebouncedValue] = useDebounceValue(globalFilter, 300);

  useEffect(() => {
    setGlobalFilter(debouncedValue);
  }, [debouncedValue, setGlobalFilter]);

  const isFiltered = table.getState().globalFilter !== "";

  return (
    <div className="flex items-center gap-2">
      <div className="relative max-w-xs flex-1">
        <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={searchPlaceholder}
          defaultValue={globalFilter}
          onChange={(e) => setDebouncedValue(e.target.value)}
          className="pl-8"
        />
      </div>
      {isFiltered && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setGlobalFilter("");
            setDebouncedValue("");
          }}
          className="gap-1.5 text-muted-foreground"
        >
          <X className="size-3.5" />
          초기화
        </Button>
      )}
    </div>
  );
}
