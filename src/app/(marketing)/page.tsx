import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { StatsSection } from "@/components/landing/stats-section";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata: Metadata = {
  title: "Modern Starter Kit — 빠르게 시작하는 Next.js 스타터킷",
  description: "Next.js 16 + TypeScript + Tailwind v4 + shadcn UI로 구성된 모던 웹 스타터킷",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CtaSection />
    </>
  );
}
