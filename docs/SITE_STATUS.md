# 岡大AIStudio 公式Webサイト — 公開状況・引き継ぎ

更新日：2026-11-22

## 現在地
- **公式URL**：https://okadai-aistudio.com/
- **公開状態**：一般公開済み。発起人がPC・スマートフォンで表示を確認済み（本人報告）。
- **団体**：2026年11月設立、岡山大学の学生有志による**非公認**AI開発サークル。大学公認団体・大学公式サイトと誤認させない。
- **リポジトリ**：`okadai-aistudio/circle-website`（Public）。管理用の別リポジトリ `so-o110/community` は発起人の非公開運営記録。両者の情報を無断で混在させない。
- **管理**：GitHub Organization `okadai-aistudio`。発起人の `kanata-projects` アカウントから運用。
- **内容**：トップ、紹介 `/about/`、活動 `/activities/`、制作物 `/projects/`、参加案内 `/join/` の5ページ。最初の成果物「回答します」は発起人の**個人制作**であり、サークル共同制作物ではない。
- **公式SNS**：X https://x.com/okadaiaistudio / Instagram https://www.instagram.com/okadai_ai_studio/
- **問い合わせ方針**：参加希望・学生からの質問・交流は公式X・InstagramのDMを**基本窓口**とする。大学関係者・企業・外部団体など対外的な連絡は `okadai.ai.dev@gmail.com`。メールアドレスはサイト上に文字表示し、メール送信ボタンは置かない。
- **発信方針**：公開時点では必要最低限の情報を掲載。今後、活動実績・制作物・活動予定を随時更新する。SNSでサイト公開を案内する文案は作成済みだが、**実際の投稿・SNSプロフィールへのサイトURL設定完了は未確認**。

## 技術・配信
- Next.js 16（App Router）/ React 19 / TypeScript / Node.js 24、通常のCSS。
- `next.config.ts` の静的エクスポート（`output: "export"`、`trailingSlash: true`）。データベース・認証なし。
- Cloudflare Workers + Static Assets。Worker：`okadai-aistudio-website`。Cloudflare Workers BuildsでGitHub `main` への反映から自動ビルド・配信。
- workers.dev側の公開URLは無効化設定済み（Cloudflareダッシュボードおよび `cloudflare.config.ts` の `workersDev: false`）。
- 開発の基本手順：ゴール/Issue → ブランチ → 変更 → TypeScript/静的ビルドのCI → PR確認 → 本人承認・mainへマージ → 本番表示確認 → Issue完了。**mainへのマージは本番配信につながる**。機密情報をPublicに載せない。
- GitHub Actions CIの確認項目：`npm ci`、`npm run typecheck`、`npm run build`、静的出力ファイルの存在。
- 共通開発手順：`kanata-projects/development-workflow` と `AGENTS.md`、`docs/AI_WORKFLOW.md` を参照。

## 2026-11-22までの作業履歴
| 作業 | 記録 | 状況 |
| --- | --- | --- |
| 初期MVP公開 | [Issue #1](https://github.com/okadai-aistudio/circle-website/issues/1) | 完了 |
| 独自ドメイン登録・設定 | [Issue #4](https://github.com/okadai-aistudio/circle-website/issues/4) | 完了 |
| 5ページ構成・サイトデザイン刷新 | [Issue #3](https://github.com/okadai-aistudio/circle-website/issues/3)、[PR #6](https://github.com/okadai-aistudio/circle-website/pull/6) | マージ済・完了 |
| 右側キャラクターの画質改善 | [Issue #7](https://github.com/okadai-aistudio/circle-website/issues/7)、[PR #8](https://github.com/okadai-aistudio/circle-website/pull/8) | マージ済・本人表示確認 |
| 参加・学生向けSNS DMと対外Gmailの整理 | [Issue #9](https://github.com/okadai-aistudio/circle-website/issues/9)、[PR #10](https://github.com/okadai-aistudio/circle-website/pull/10) | マージ済・本人表示確認、Issueクローズ |

- ヒーロー画像はユーザーが指定した**1200×1200px**のキャラクター画像を `public/mascot-hero.webp` として掲載。元のデザインや背景の意図を変更せず、高画質版へ差し替え。小さいヘッダーアイコン／ファビコンは既存画像を継続使用。
- PR #8のマージSHA：`fe8e0bb3d7d941987b19fb83ac3c5e9809b0b5ae`。[CI成功](https://github.com/okadai-aistudio/circle-website/actions/runs/45002189920)。
- PR #10のマージSHA：`c4de800f4b6b6fed7eb77c1af4a947b13da97bed`。[CI成功](https://github.com/okadai-aistudio/circle-website/actions/runs/45002669172)。
- ユーザーは両PRのマージと作業ブランチ削除を報告し、表示確認済み。GitHubのマージ結果とCIはAPIで確認済み。

## 検索・SEOの現在地
- `src/app/layout.tsx`：タイトル・説明文・Open Graph・`robots: {index:true,follow:true}` 等。
- `src/app/robots.ts`：クローラーのアクセスを許可し `sitemap.xml` を案内。
- `src/app/sitemap.ts`：5ページのURL一覧を生成。各ページでcanonicalを設定。
- **Google Search Consoleは必須ではない**。未設定でもGoogleに発見・登録される可能性がある。Search Consoleの設定・Googleへのインデックス登録が完了した証拠はなく、現時点では**登録状況未確認**として扱う。
- 発起人は現時点でSearch Console導入を急がず、**まずX/Instagramのプロフィールに公式URLを掲載する方針**。URL掲載の実行完了は未確認。
- サイト公開だけでGoogle検索順位・インデックス登録を保証しない。今後必要ならSearch Consoleで所有権確認・サイトマップ送信・URL検査。

## 今後
1. 公式X・InstagramのプロフィールにサイトURLを掲載（未確認）。公開を知らせる短いSNS投稿文案を作成済み。**投稿自体は未確認**。
2. 活動予定・参加方法・メンバー成果物を、実態の確定に応じて少しずつ追加する。制作者の同意・権利・個人情報に注意。
3. サークル運営・公認準備・場所の利用条件は発起人の非公開運営管理で引き続き検討する。
4. 必要になった時点でGoogle Search Consoleを導入して検索登録状況を調べる。

※公開Webサイトには未確認の活動予定・大学の公認情報・非公開運営情報を掲載しない。
