"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      {/* 배경 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="text-center">
        <div className="mb-4 inline-flex rounded-2xl border border-border/50 bg-muted/50 p-4">
          <Search className="size-8 text-muted-foreground" />
        </div>
        <h1 className="mb-2 text-8xl font-bold text-muted-foreground/30">404</h1>
        <h2 className="mb-3 text-2xl font-bold">페이지를 찾을 수 없습니다</h2>
        <p className="mb-8 text-muted-foreground">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" className="gap-2" onClick={() => router.back()}>
            <ArrowLeft className="size-4" />
            뒤로 가기
          </Button>
          <Button asChild>
            <Link href="/">홈으로</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
