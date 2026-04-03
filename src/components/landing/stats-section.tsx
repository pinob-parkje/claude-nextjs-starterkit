"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/motion/fade-in";

const STATS = [
  { value: 30, suffix: "+", label: "shadcn UI 컴포넌트" },
  { value: 8, suffix: "개", label: "페이지 템플릿" },
  { value: 10, suffix: "+", label: "검증된 라이브러리" },
  { value: 100, suffix: "%", label: "TypeScript" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const displayValue = useTransform(springValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-muted/30 py-20">
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]" />
        <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/20 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            숫자로 보는 스타터킷
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm">
                <div className="mb-1 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
