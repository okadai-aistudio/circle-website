# Codex依頼テンプレート — circle-website

本プロジェクトの [AGENTS.md](../AGENTS.md) と [AI_WORKFLOW.md](AI_WORKFLOW.md) が実行ルールの正本。共通テンプレートの [Codex依頼例](https://github.com/kanata-projects/development-workflow/blob/main/templates/CODEX_PROMPT.md) から必要な部分だけ使う。

## 実装を委任する場合
```markdown
対象：okadai-aistudio/circle-website
関連Issue：<既存Issue／なし>
ゴール・完了条件：<具体的な完成状態>
対象と許可された作業：<機能、ファイル、テスト、環境>
対象外・別承認：公開、本番配備、権限、課金、データの破壊的操作
確認先：AGENTS.md、docs/AI_WORKFLOW.md、関連Issue、対象コード

最新の判断と実コードだけ確認し、承認済み範囲を依存順に一括実装・修正・検証してください。
コード変更は原則ブランチ＋PRでレビュー可能な状態にし、CIは実在するものだけ確認してください。
必要なテストが実行できなければNOT RUNと理由を記録してください。
本人の別承認なしに公開や高影響操作を行わないでください。
報告：変更内容、SHA、PR、PASS/FAIL/NOT RUN、残る判断。
```

## 調査だけを委任する場合
```markdown
対象：okadai-aistudio/circle-website
問い・終了条件：<調査する内容>
参照：<関係するIssue、コード、一次情報>
制約：実装、コミット、外部サービスの設定やDB/本番変更はしない。

必要範囲だけ調べて、根拠、結論、未確認、改善案をまとめてください。
```
