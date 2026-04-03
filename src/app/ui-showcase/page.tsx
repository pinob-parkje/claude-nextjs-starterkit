"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import { Check, Copy } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";

function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}

function CodeCopyButton({ code }: { code: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await copy(code);
    setCopied(true);
    toast.success("복사되었습니다!");
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button variant="ghost" size="icon" className="size-7 shrink-0" onClick={handleCopy}>
      {copied ? <Check className="size-3.5 text-green-500" /> : <Copy className="size-3.5" />}
    </Button>
  );
}

export default function UIShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              ← 홈
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <h1 className="text-sm font-semibold">UI 컴포넌트 쇼케이스</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-12">

        {/* 버튼 */}
        <section>
          <SectionHeader title="Button" description="다양한 variant와 size를 지원하는 버튼 컴포넌트" />
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {(["default", "secondary", "outline", "ghost", "destructive", "link"] as const).map((v) => (
                <Button key={v} variant={v} className="capitalize">{v}</Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {(["xs", "sm", "default", "lg"] as const).map((s) => (
                <Button key={s} size={s}>size={s}</Button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button disabled>비활성화</Button>
              <Button className="gap-2">
                <Check className="size-4" /> 아이콘 포함
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* 뱃지 */}
        <section>
          <SectionHeader title="Badge" description="상태나 레이블을 표시하는 뱃지" />
          <div className="flex flex-wrap gap-2">
            {(["default", "secondary", "outline", "destructive"] as const).map((v) => (
              <Badge key={v} variant={v} className="capitalize">{v}</Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* 카드 */}
        <section>
          <SectionHeader title="Card" description="콘텐츠를 담는 카드 컴포넌트" />
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>기본 카드</CardTitle>
                <CardDescription>CardHeader, CardContent, CardFooter로 구성</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">카드 본문 내용이 들어갑니다.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">액션</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <Badge className="w-fit mb-1">강조</Badge>
                <CardTitle>강조 카드</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">주요 정보를 강조할 때 사용합니다.</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-3 text-3xl font-bold text-primary">99%</div>
              <p className="text-sm font-medium">가동률</p>
              <p className="text-xs text-muted-foreground">최근 30일</p>
            </Card>
          </div>
        </section>

        <Separator />

        {/* 폼 요소 */}
        <section>
          <SectionHeader title="Form Elements" description="입력, 체크박스, 스위치 등 폼 요소" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label>텍스트 입력</Label>
                <Input placeholder="입력해주세요..." />
              </div>
              <div className="space-y-1.5">
                <Label>텍스트 영역</Label>
                <Textarea placeholder="내용을 입력해주세요..." rows={3} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="check1" />
                <Label htmlFor="check1">체크박스 예시</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="switch1" />
                <Label htmlFor="switch1">스위치 예시</Label>
              </div>
              <div className="flex gap-2">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-secondary text-secondary-foreground">B</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* 알림 */}
        <section>
          <SectionHeader title="Alert" description="정보, 경고, 오류 등 알림 메시지" />
          <div className="space-y-3">
            <Alert>
              <AlertTitle>안내</AlertTitle>
              <AlertDescription>일반적인 안내 메시지입니다.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>오류</AlertTitle>
              <AlertDescription>오류가 발생했습니다. 다시 시도해주세요.</AlertDescription>
            </Alert>
          </div>
        </section>

        <Separator />

        {/* 탭 */}
        <section>
          <SectionHeader title="Tabs" description="탭으로 콘텐츠를 구분하는 컴포넌트" />
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">개요</TabsTrigger>
              <TabsTrigger value="tab2">분석</TabsTrigger>
              <TabsTrigger value="tab3">설정</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">개요 탭의 콘텐츠입니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">분석 탭의 콘텐츠입니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">설정 탭의 콘텐츠입니다.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* 스켈레톤 */}
        <section>
          <SectionHeader title="Skeleton" description="로딩 상태를 표현하는 스켈레톤" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-32 w-full" />
            </div>
            <Card>
              <CardHeader>
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-2/3" />
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Toast */}
        <section>
          <SectionHeader title="Toast (Sonner)" description="useCopyToClipboard 포함한 알림 시스템" />
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => toast("기본 토스트입니다.")}>
              기본
            </Button>
            <Button variant="outline" onClick={() => toast.success("성공했습니다!", { description: "작업이 완료되었습니다." })}>
              성공
            </Button>
            <Button variant="outline" onClick={() => toast.error("오류가 발생했습니다.", { description: "다시 시도해주세요." })}>
              오류
            </Button>
            <Button variant="outline" onClick={() => toast.warning("경고: 저장되지 않은 변경 사항이 있습니다.")}>
              경고
            </Button>
            <Button variant="outline" onClick={() => toast.loading("처리 중...")}>
              로딩
            </Button>
          </div>
        </section>

        <Separator />

        {/* 색상 팔레트 */}
        <section>
          <SectionHeader title="색상 팔레트" description="OKLch 기반 CSS 변수 색상 시스템" />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { name: "primary", cls: "bg-primary text-primary-foreground" },
              { name: "secondary", cls: "bg-secondary text-secondary-foreground" },
              { name: "accent", cls: "bg-accent text-accent-foreground" },
              { name: "muted", cls: "bg-muted text-muted-foreground" },
              { name: "card", cls: "bg-card text-card-foreground border" },
              { name: "destructive", cls: "bg-destructive text-white" },
              { name: "sidebar", cls: "bg-sidebar text-sidebar-foreground border" },
              { name: "border", cls: "bg-border" },
            ].map((color) => (
              <div key={color.name} className="flex flex-col overflow-hidden rounded-xl border border-border/50">
                <div className={`h-16 ${color.cls}`} />
                <div className="px-3 py-2">
                  <p className="text-xs font-medium">{color.name}</p>
                  <div className="flex items-center justify-between">
                    <code className="text-[10px] text-muted-foreground">{`--${color.name}`}</code>
                    <CodeCopyButton code={`var(--${color.name})`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 타이포그래피 */}
        <section>
          <SectionHeader title="타이포그래피" description="Noto Sans + Geist 폰트 시스템" />
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">H1 — 디스플레이 제목</h1>
            <h2 className="text-4xl font-bold">H2 — 페이지 제목</h2>
            <h3 className="text-3xl font-semibold">H3 — 섹션 제목</h3>
            <h4 className="text-2xl font-semibold">H4 — 카드 제목</h4>
            <p className="text-lg leading-relaxed">본문 Large — 주요 콘텐츠 텍스트입니다. 가독성을 위해 line-height를 넉넉하게 설정합니다.</p>
            <p className="text-base leading-relaxed">본문 Base — 기본 본문 텍스트입니다. 일반적인 내용 설명에 사용됩니다.</p>
            <p className="text-sm text-muted-foreground">Small / Muted — 보조 설명이나 캡션 텍스트에 사용합니다.</p>
            <code className="rounded bg-muted px-2 py-1 font-mono text-sm">코드 — Geist Mono 폰트</code>
          </div>
        </section>

      </main>
    </div>
  );
}
