# 月間活動予定と制作物の更新

制作物、プログラム、デザイン、設定の変更は作業ブランチで変更し、PRでレビューを受けます。本番反映は責任者の公開承認後に行います。開発の流れは [AI_WORKFLOW.md](AI_WORKFLOW.md) を参照してください。

## 月間活動予定

1. 日時・場所が読める月間予定画像を作成し、責任者が公開する内容を確認します。
2. 画像を `YYYY-MM.png`、`YYYY-MM.jpg`、`YYYY-MM.jpeg`、`YYYY-MM.webp` のいずれかに改名します。年月は4桁と2桁で、拡張子は実際の形式と同じ小文字にします。2026年11月の例は `2026-11.webp` です。
3. `git switch main` と `git pull --ff-only origin main` でローカルの `main` を最新にして、`public/schedules/` に画像を置きます。1か月につき1枚とし、過去分は保管します。同月を差し替える場合は、既存のファイル名と拡張子で上書きします。ビルドが年月と寸法を読み取ります。
4. `git add -- public/schedules/<画像ファイル名>` で対象画像をステージします。`git diff --cached --name-only` で活動予定画像だけであることを確認し、コミットして `git push origin main` を実行します。**責任者が公開内容を確認した画像だけの更新**に限り、`main` への直接 push を認めます。GitHubのルールで拒否された場合は、作業ブランチからPRを作成します。
5. Cloudflareのビルドが成功したら、[本番の活動ページ](https://okadai-aistudio.com/activities/#schedule) で対象年月を選び、画像と拡大表示を確認します。ビルドに失敗した場合は、ログに表示されたファイル名と理由を確認してから修正します。

今月分は日本時間の月替わりで切り替わり、未登録の場合は「準備中」と表示されます。登録した過去月や翌月も年月選択から確認できます。開催場所・日時の変更や中止は [公式X](https://x.com/okadaiaistudio) で案内します。

画像は `npm run build` で事前確認できます。GitHub Actions と Cloudflare のビルドでも同じ検証を実行します。

## 制作物

1. 制作者の公開同意を得て、氏名・画像・公開リンクの掲載範囲と画像の利用権を確認します。
2. [src/data/projects.ts](../src/data/projects.ts) の `projects` に作品を追加します。`name`（作品名）、`description`（説明）、`category`（種別）、`creator`（公開用の制作者表記）、`url`（作品の公開URL）を設定します。個人制作・共同制作は `creator` で区別できます。
3. 画像を掲載する場合は `public/projects/` に置き、`image` に `src`（`/projects/...`）、`alt`、`width`、`height` を設定します。画像を省略すると作品名のカードが表示されます。公開リポジトリへのリンクを掲載する場合は `githubUrl` を指定します。

## PR前の確認

`npm ci`、`npm run typecheck`、`npm run build` を実行します。[READMEの静的出力確認手順](../README.md#検証と静的出力) に従い、PCとスマートフォンで更新したページを確認します。活動予定は年月選択・画像と拡大・公式Xへのリンクを、制作物は画像・制作者表記・リンクを確認します。月間予定の切り替えを試す際は、ブラウザのテスト用時計を日本時間の月末・月初に合わせて確認できます。
