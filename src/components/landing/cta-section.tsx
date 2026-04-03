import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/motion/fade-in";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 sm:p-16">
          {/* 배경 장식 */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/30 blur-[80px]" />
          </div>

          <FadeInStagger className="flex flex-col items-center text-center" stagger={0.15}>
            <FadeInItem>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                지금 시작하세요
              </p>
            </FadeInItem>

            <FadeInItem>
              <h2 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
                아이디어를{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  현실로
                </span>{" "}
                만들 준비가 되셨나요?
              </h2>
            </FadeInItem>

            <FadeInItem>
              <p className="mb-8 max-w-xl text-lg text-muted-foreground">
                복잡한 초기 설정은 이미 끝났습니다. 지금 바로 로그인하고
                당신의 프로젝트를 시작하세요.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="group gap-2 shadow-lg shadow-primary/25">
                  <Link href="/sign-up">
                    무료로 시작하기
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 backdrop-blur-sm">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
