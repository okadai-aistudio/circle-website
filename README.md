# 岡大AIStudio 公式Webサイト

岡山大学の学生有志による非公認AI開発サークル「岡大AIStudio」の公式Webサイト。

**公式URL： https://okadai-aistudio.com/**

## サイトの目的
サークルの概要・活動内容・参加方法・問い合わせ先を、最小限の1ページで案内する。

## 公開先
- 本番URL： https://okadai-aistudio.com/
- 配信：Cloudflare Workers + Static Assets（Worker名 `okadai-aistudio-website`）
- 本番反映：GitHub `main` へのマージ後、Cloudflare Workers Buildsで自動ビルド・デプロイ
- 初期URL（移行用）： https://okadai-aistudio-website.okadai-aistudio-website.workers.dev/
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

`cloudflare.config.ts` で Worker 名 `okadai-aistudio-website`、`workers.dev` の利用、`404.html` の配信を指定します。Cloudflare CLI には生成済みの `out/` を渡します。配信対象は静的ファイルのみです。[静的ディレクトリの公開](https://developers.cloudflare.com/cf/projects/#deploy-a-static-assets-directory)・[404 ページの配信](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/)

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

公開後は正式URL `https://okadai-aistudio.com/` で HTTPS、トップページ、404、主要リンクを確認し、検証結果を Issue #4 に記録します。公開済みの版に問題があれば Deployments から直前の正常な版へ戻します。初回で正常な旧版がない場合は公開を停止し、修正版を再検証します。[ロールバック手順](https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/)

## 公開前に行う確認
- GitHub組織プロフィールと掲載内容を照合する
- 公式SNSの正確なURLが確認できたら追加する（未確認のため現時点ではリンクなし）
- PC・スマホ表示、キーボード操作、メールリンク、非公認表示を確認する
- Cloudflare の実設定と公開可否を責任者が確認する

## 開発手順
- [AGENTS.md](AGENTS.md)
- [docs/AI_WORKFLOW.md](docs/AI_WORKFLOW.md)
- [Issue #1 — MVP公開](https://github.com/okadai-aistudio/circle-website/issues/1)
- [Issue #4 — 独自ドメイン取得・設定](https://github.com/okadai-aistudio/circle-website/issues/4)

## 出典
サークル情報の正本: [GitHub組織プロフィール](https://github.com/okadai-aistudio/.github/blob/main/profile/README.md)

※岡山大学の公認団体ではありません。
