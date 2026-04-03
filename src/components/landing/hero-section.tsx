"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingElement } from "@/components/motion/parallax-section";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* 그라디언트 메시 배경 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/30 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />
        {/* 노이즈 텍스처 오버레이 */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* 패럴랙스 부유 요소 */}
      <FloatingElement
        className="absolute top-20 right-[10%] h-24 w-24 rounded-2xl border border-primary/20 bg-primary/5"
        speed={0.2}
      >
        <div className="h-full w-full" />
      </FloatingElement>
      <FloatingElement
        className="absolute bottom-32 left-[8%] h-16 w-16 rounded-xl border border-secondary/30 bg-secondary/10"
        speed={0.12}
      >
        <div className="h-full w-full" />
      </FloatingElement>
      <FloatingElement
        className="absolute top-1/3 left-[5%] h-8 w-8 rounded-full bg-primary/20"
        speed={0.25}
      >
        <div className="h-full w-full" />
      </FloatingElement>

      {/* 메인 콘텐츠 */}
      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* 뱃지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 gap-1.5 px-4 py-1.5 text-sm font-medium">
              <Sparkles className="size-3.5" />
              Next.js 16 + shadcn UI 스타터킷
            </Badge>
          </motion.div>

          {/* 헤드라인 */}
          <motion.h1
            className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              더 빠르게,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
              더 아름답게
            </span>
            <br />
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              웹을 만드세요
            </span>
          </motion.h1>

          {/* 서브 텍스트 */}
          <motion.p
            className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            모던 기술 스택이 모두 갖춰진 스타터킷. 설정에 시간을 낭비하지 말고
            바로 제품 개발에 집중하세요.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button asChild size="lg" className="group gap-2 shadow-lg shadow-primary/25">
              <Link href="/dashboard">
                대시보드 보기
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="backdrop-blur-sm">
              <Link href="/ui-showcase">UI 쇼케이스</Link>
            </Button>
          </motion.div>

          {/* 기술 스택 태그 */}
          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {["Next.js 16", "TypeScript", "Tailwind v4", "shadcn UI", "Framer Motion", "Lenis"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
