import Link from "next/link";
import { Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* 배경 그라디언트 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-secondary/20 blur-[80px]" />
      </div>

      {/* 상단 헤더 */}
      <header className="flex h-14 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Zap className="size-4" />
          </div>
          <span className="text-sm">StarterKit</span>
        </Link>
        <ThemeToggle />
      </header>

      {/* 중앙 콘텐츠 */}
      <main className="flex flex-1 items-center justify-center p-4">
        {children}
      </main>

      {/* 하단 */}
      <footer className="py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} StarterKit.{" "}
        <Link href="/" className="hover:underline">홈으로 돌아가기</Link>
      </footer>
    </div>
  );
}
