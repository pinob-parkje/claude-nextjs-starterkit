import { z } from "zod";

export const settingsSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 최소 2자 이상이어야 합니다.")
    .max(50, "이름은 50자를 초과할 수 없습니다."),
  email: z
    .string()
    .email("올바른 이메일 형식을 입력해주세요."),
  bio: z
    .string()
    .max(200, "자기소개는 200자를 초과할 수 없습니다.")
    .optional(),
  notifications: z.object({
    email: z.boolean(),
    marketing: z.boolean(),
  }),
  theme: z.enum(["light", "dark", "system"]),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;
