"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const signUpSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  email: z.string().email("올바른 이메일을 입력해주세요."),
  password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
  agreeTerms: z.literal(true, { error: "약관에 동의해야 합니다." }),
});

type SignUpValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "", agreeTerms: false },
  });

  async function onSubmit(values: SignUpValues) {
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("회원가입 완료!", { description: "이메일 인증 후 로그인해주세요." });
  }

  const { isSubmitting, errors } = form.formState;

  return (
    <Card className="w-full max-w-sm shadow-xl shadow-black/5">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">회원가입</CardTitle>
        <CardDescription>무료로 시작하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">이름</Label>
            <Input id="name" {...form.register("name")} placeholder="홍길동" disabled={isSubmitting} />
            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" {...form.register("email")} placeholder="hong@example.com" disabled={isSubmitting} />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" {...form.register("password")} placeholder="8자 이상" disabled={isSubmitting} />
            {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="agreeTerms"
              onCheckedChange={(v) => form.setValue("agreeTerms", v as true)}
              disabled={isSubmitting}
              className="mt-0.5"
            />
            <label htmlFor="agreeTerms" className="text-sm text-muted-foreground leading-snug cursor-pointer">
              <Link href="#" className="font-medium text-foreground hover:underline">이용약관</Link>과{" "}
              <Link href="#" className="font-medium text-foreground hover:underline">개인정보처리방침</Link>에 동의합니다.
            </label>
          </div>
          {errors.agreeTerms && <p className="text-xs text-destructive">{errors.agreeTerms.message}</p>}

          <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="size-4 animate-spin" />}
            {isSubmitting ? "가입 중..." : "회원가입"}
          </Button>
        </form>

        <Separator className="my-4" />

        <p className="text-center text-sm text-muted-foreground">
          이미 계정이 있으신가요?{" "}
          <Link href="/sign-in" className="font-medium text-primary hover:underline">
            로그인
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
