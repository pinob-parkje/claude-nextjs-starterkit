# Claude Code → Slack 모바일 알림 설정 가이드

Claude Code가 **권한을 요청할 때**와 **작업이 완료되었을 때** 모바일 Slack 앱으로 알림을 받습니다.

---

## 사전 조건

### jq 설치 (JSON 파싱용)

```bash
brew install jq
```

---

## Slack Incoming Webhook URL 발급

1. [https://api.slack.com/apps](https://api.slack.com/apps) 접속
2. **Create New App** → **From scratch** 선택
3. 앱 이름 입력 (예: `Claude Code`) → 워크스페이스 선택 → **Create App**
4. 좌측 메뉴 **Incoming Webhooks** 클릭
5. **Activate Incoming Webhooks** 토글 → **On**
6. 하단 **Add New Webhook to Workspace** 클릭
7. 알림을 받을 채널 선택 → **허용**
8. 생성된 Webhook URL 복사 (`https://hooks.slack.com/services/...`)

---

## Webhook URL 등록

`.claude/.env` 파일을 열고 URL을 붙여넣으세요:

```bash
# .claude/.env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T.../B.../...
```

---

## 동작 방식

| 상황 | 훅 파일 | Slack 메시지 |
|------|---------|-------------|
| 권한/확인 요청 | `.claude/hooks/notification-hook.sh` | 🔔 권한 요청 + 상세 내용 |
| 작업 완료 | `.claude/hooks/stop-hook.sh` | ✅ 작업 완료 |

> **참고:** 작업 완료 알림은 Claude Code가 응답을 마칠 때마다 발생합니다 (짧은 답변 포함).

---

## 테스트

Webhook URL 등록 후 아래 명령으로 수동 테스트할 수 있습니다:

```bash
# 권한 요청 알림 테스트
echo '{"hook_event_name":"Notification","message":"테스트: 권한 요청이 필요합니다"}' \
  | bash .claude/hooks/notification-hook.sh

# 작업 완료 알림 테스트
echo '{"hook_event_name":"Stop","stop_hook_active":false}' \
  | bash .claude/hooks/stop-hook.sh
```

Slack 채널에 메시지가 도착하면 설정 완료입니다.

---

## 훅 등록 확인

Claude Code에서 `/hooks`를 실행하면 등록된 훅 목록을 확인할 수 있습니다.

---

## 파일 구조

```
.claude/
├── hooks/
│   ├── notification-hook.sh   # 권한 요청 알림 스크립트
│   └── stop-hook.sh           # 작업 완료 알림 스크립트
├── .env                        # Webhook URL (gitignore됨)
└── settings.local.json         # 훅 설정 (gitignore됨)
```

> `.claude/` 디렉터리는 `.gitignore`에 포함되어 있어 Webhook URL이 저장소에 노출되지 않습니다.
