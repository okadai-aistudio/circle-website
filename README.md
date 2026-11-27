# 岡大AIStudio 公式Webサイト

岡山大学の学生有志による非公認AI開発サークル「岡大AIStudio」の公式Webサイト。

**公式URL： https://okadai-aistudio.com/**

## サイトの目的
サークルの概要・活動内容・成果物・参加方法・問い合わせ先を、5ページで分かりやすく案内する。必要最低限から公開し、活動・成果に応じて随時更新する。

**公開済みの現状と今後の引き継ぎ： [docs/SITE_STATUS.md](docs/SITE_STATUS.md)**（2026-11-22更新）

月間活動予定や制作物の追加・更新手順は [掲載内容の更新](docs/CONTENT_UPDATES.md) を参照してください。

## 公開先
- 本番URL： https://okadai-aistudio.com/
- 配信：Cloudflare Workers + Static Assets（Worker名 `okadai-aistudio-website`）
- 本番反映：GitHub `main` へのマージ後、Cloudflare Workers Buildsで自動ビルド・デプロイ
- 旧URL（無効化設定済み）： `okadai-aistudio-website.okadai-aistudio-website.workers.dev`（CloudflareのProduction/Preview Worker URLをOFF、`cloudflare.config.ts` でも `workersDev: false`）
- 独自ドメイン取得・設定の記録： [Issue #4](https://github.com/okadai-aistudio/circle-website/issues/4)

## 開発環境
- Node.js 24 / Next.js 16 / React 19 / TypeScript
- スタイル: CSS（追加のCSSフレームワークなし）
- データベース・認証なし

```bash
npm ci
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## 検証と静的出力

```bash
npm run typecheck
npm run build
```

`next.config.ts` の `output: "export"` により、ビルドで `out/index.html`、`out/404.html`、`out/_next/static/` などが生成されます。ビルド済みの表示を確認するには、Python 3 が利用できる環境で `python -m http.server 8080 --bind 127.0.0.1 --directory out` を実行し、`http://127.0.0.1:8080` を開きます。[Next.js の静的エクスポート](https://nextjs.org/docs/app/guides/static-exports)

GitHub Actions の `CI` は PR と `main` への push で、`npm ci`、型チェック、ビルド、静的出力の存在確認を実行します。

## Cloudflare Workers + Static Assets

`cloudflare.config.ts` で Worker 名 `okadai-aistudio-website`、`workersDev: false`、`404.html` の配信を指定します。Cloudflare CLI には生成済みの `out/` を渡します。配信対象は静的ファイルのみです。[静的ディレクトリの公開](https://developers.cloudflare.com/cf/projects/#deploy-a-static-assets-directory)・[404 ページの配信](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/)

Node.js 24.22.0 以上の 24 系で、ビルド後に次のコマンドを実行すると、認証やアップロードなしで公開設定を検証できます。

```bash
npx --yes cf@1.0.0-rc.2 deploy ./out --dry-run
```

責任者の承認後、Workers Builds の **Settings → Build** で `okadai-aistudio/circle-website` を連携する場合の設定です。Worker 名は設定ファイルと一致させます。`main` への反映が本番公開につながるため、連携と本番トリガーの有効化は公開承認と併せて確認します。[Workers Builds の設定](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)・[ビルドイメージ](https://developers.cloudflare.com/workers/ci-cd/builds/build-image/)

| 項目 | 設定 |
| --- | --- |
| 本番ブランチ | `main` |
| ルートディレクトリ | リポジトリのルート（既定） |
| ビルド変数 | `NODE_VERSION=24.22.0`、`SKIP_DEPENDENCY_INSTALL=1` |
| ビルドコマンド | `npm ci && npm run build` |
| デプロイコマンド | `npx --yes cf@1.0.0-rc.2 deploy ./out` |
| Preview builds | 初回は無効 |

Workers Free では静的アセットへのリクエストは無料です。Workers Builds の Free 枠は月 3,000 分、同時 1 ビルドです。公開設定時に最新の上限を確認します。[Workers の料金](https://developers.cloudflare.com/workers/platform/pricing/)・[Workers Builds の上限](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/)

本番更新後は正式URL `https://okadai-aistudio.com/` で HTTPS、主要ページ、404、主要リンクを確認し、必要に応じて対象Issueへ記録します。公開済みの版に問題があれば Deployments から直前の正常な版へ戻します。初回で正常な旧版がない場合は公開を停止し、修正版を再検証します。[ロールバック手順](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/)

## 公開・運用方針
- **一般公開済み**。サイトはトップ、紹介、活動、制作物、参加案内の5ページ。発起人がPC・スマートフォンで表示確認済み（本人報告）。
- 公式SNSは [X](https://x.com/okadaiaistudio) と [Instagram](https://www.instagram.com/okadai_ai_studio/) です。活動場所や日時の変更・中止は公式Xで案内します。活動開催中は施設の利用条件・定員に従って事前連絡なしで参加でき、学生からの質問・相談にはSNSのDMを利用できます。
- Gmail `okadai.ai.dev@gmail.com` は大学関係者・企業・外部団体などとの対外連絡先。サイトには文字で表示し、メールボタンは設置しない。
- 高画質ヒーロー画像：`public/mascot-hero.webp`（1200×1200px）。ヘッダーアイコンは従来の `public/mascot.webp` を使用。
- 基本SEO設定（タイトル・説明・robots・サイトマップ・canonical）あり。Google Search Consoleと検索インデックス登録状況は**未確認**。導入を急がず、まずSNSプロフィールへの公式URL掲載を優先する方針。
- 詳細なマージ履歴、CI・確認状況、未完了事項は [公開状況・引き継ぎ](docs/SITE_STATUS.md) を参照。

## 開発手順
- [AGENTS.md](AGENTS.md)
- [docs/AI_WORKFLOW.md](docs/AI_WORKFLOW.md)
- [Issue #1 — MVP公開](https://github.com/okadai-aistudio/circle-website/issues/1)
- [Issue #4 — 独自ドメイン取得・設定](https://github.com/okadai-aistudio/circle-website/issues/4)
- [docs/SITE_STATUS.md — 2026-11-22現在の公開状況・運用方針](docs/SITE_STATUS.md)

## 出典
サークル情報の正本: [GitHub組織プロフィール](https://github.com/okadai-aistudio/.github/blob/main/profile/README.md)

※岡山大学の公認団体ではありません。
