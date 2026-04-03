"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { settingsSchema, type SettingsFormValues } from "@/lib/validations/settings";

export function SettingsForm() {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: "홍길동",
      email: "hong@example.com",
      bio: "",
      notifications: {
        email: true,
        marketing: false,
      },
      theme: "system",
    },
  });

  async function onSubmit(values: SettingsFormValues) {
    // 실제 API 호출을 시뮬레이션
    await new Promise((r) => setTimeout(r, 1000));
    console.log(values);
    toast.success("설정이 저장되었습니다.", {
      description: "변경 사항이 적용되었습니다.",
    });
  }

  const { isSubmitting, errors } = form.formState;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* 프로필 섹션 */}
      <section>
        <h3 className="mb-1 font-semibold">프로필</h3>
        <p className="mb-4 text-sm text-muted-foreground">공개 프로필 정보를 관리합니다.</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              {...form.register("name")}
              placeholder="홍길동"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="hong@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <Label htmlFor="bio">자기소개</Label>
          <Textarea
            id="bio"
            {...form.register("bio")}
            placeholder="간략한 자기소개를 입력해주세요. (200자 이내)"
            rows={3}
            disabled={isSubmitting}
          />
          {errors.bio && (
            <p className="text-xs text-destructive">{errors.bio.message}</p>
          )}
        </div>
      </section>

      <Separator />

      {/* 테마 설정 */}
      <section>
        <h3 className="mb-1 font-semibold">테마</h3>
        <p className="mb-4 text-sm text-muted-foreground">화면 테마를 설정합니다.</p>

        <div className="w-40">
          <Select
            value={form.watch("theme")}
            onValueChange={(v) => form.setValue("theme", v as SettingsFormValues["theme"])}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">라이트</SelectItem>
              <SelectItem value="dark">다크</SelectItem>
              <SelectItem value="system">시스템 기본값</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <Separator />

      {/* 알림 설정 */}
      <section>
        <h3 className="mb-1 font-semibold">알림</h3>
        <p className="mb-4 text-sm text-muted-foreground">알림 수신 방식을 설정합니다.</p>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <p className="text-sm font-medium">이메일 알림</p>
              <p className="text-xs text-muted-foreground">중요 업데이트를 이메일로 받습니다.</p>
            </div>
            <Switch
              checked={form.watch("notifications.email")}
              onCheckedChange={(v) => form.setValue("notifications.email", v)}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <p className="text-sm font-medium">마케팅 알림</p>
              <p className="text-xs text-muted-foreground">신규 기능 및 프로모션 정보를 받습니다.</p>
            </div>
            <Switch
              checked={form.watch("notifications.marketing")}
              onCheckedChange={(v) => form.setValue("notifications.marketing", v)}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting} className="gap-2">
          {isSubmitting && <Loader2 className="size-4 animate-spin" />}
          {isSubmitting ? "저장 중..." : "변경 사항 저장"}
        </Button>
      </div>
    </form>
  );
}
