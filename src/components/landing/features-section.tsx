import {
  BarChart3,
  Database,
  Layers,
  Palette,
  Shield,
  Zap,
} from "lucide-react";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description: "최신 React Server Components, Turbopack 기본 빌드, 스트리밍 지원으로 최고의 성능을 제공합니다.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Palette,
    title: "shadcn UI + Tailwind v4",
    description: "OKLch 색상 시스템과 CSS 변수 기반 다크모드. 아름다운 컴포넌트가 이미 준비되어 있습니다.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Layers,
    title: "레이아웃 시스템",
    description: "마케팅, 대시보드, 인증 레이아웃이 Route Groups로 완전히 분리되어 있습니다.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Database,
    title: "데이터 테이블",
    description: "@tanstack/react-table 기반의 정렬, 필터, 페이지네이션이 갖춰진 완전한 DataTable.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Shield,
    title: "폼 유효성 검사",
    description: "react-hook-form + zod 조합으로 타입 안전한 폼 관리. 인증 페이지 템플릿도 포함됩니다.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: BarChart3,
    title: "차트 & 애널리틱스",
    description: "recharts 기반 shadcn/chart 컴포넌트로 아름다운 데이터 시각화를 구현하세요.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* 섹션 헤더 */}
        <FadeIn className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            기능
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            필요한 모든 것이
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              이미 준비되어 있습니다
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            설정 없이 바로 개발을 시작할 수 있도록 검증된 라이브러리와 패턴을 통합했습니다.
          </p>
        </FadeIn>

        {/* 피처 카드 그리드 */}
        <FadeInStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {FEATURES.map((feature) => (
            <FadeInItem key={feature.title}>
              <FeatureCard {...feature} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  bg,
}: (typeof FEATURES)[number]) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/50 p-6",
        "bg-card/50 backdrop-blur-sm",
        "transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg hover:shadow-black/5",
        "dark:hover:shadow-black/20"
      )}
    >
      {/* 호버 시 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className={cn("absolute inset-0 rounded-2xl", bg, "opacity-20")} />
      </div>

      <div className={cn("mb-4 inline-flex rounded-xl p-2.5", bg)}>
        <Icon className={cn("size-5", color)} />
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
