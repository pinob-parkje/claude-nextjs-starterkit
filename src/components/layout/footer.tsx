import Link from "next/link";
import { Zap } from "lucide-react";

const FOOTER_LINKS = {
  제품: [
    { label: "기능", href: "/#features" },
    { label: "대시보드", href: "/dashboard" },
    { label: "UI 쇼케이스", href: "/ui-showcase" },
  ],
  리소스: [
    { label: "문서", href: "#" },
    { label: "GitHub", href: "#", external: true },
    { label: "변경 로그", href: "#" },
  ],
  법적고지: [
    { label: "개인정보처리방침", href: "#" },
    { label: "이용약관", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* 브랜드 */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-4" />
              </div>
              <span>StarterKit</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Next.js 16 기반의 모던 웹 스타터킷. 빠르게 시작하세요.
            </p>
          </div>

          {/* 링크 그룹 */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-3 text-sm font-semibold">{group}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} StarterKit. MIT 라이선스로 배포됩니다.
        </div>
      </div>
    </footer>
  );
}
