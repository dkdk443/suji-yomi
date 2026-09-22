# スジヨミ

**財務諸表だけを見て、企業名を当てる。1日1問の学習クイズアプリ。**

貸借対照表・損益計算書・非財務データを段階的にヒント開示しながら、数字の形から「その企業らしさ」を読み解くクイズ。正解の丸暗記ではなく、「なぜその数字になるのか」という理由（業態・ビジネスモデル）まで解説する点を重視。

実在企業12社（任天堂・ニトリ・JR東海・フェラーリ・エルメス など）の公開データをもとにしたオリジナル問題を収録。

**Demo: https://suji-yomi.vercel.app/**

<!-- ここにスクリーンショットを貼る -->
<p align="center">
  <img src="./docs/screenshot-home.png" width="260" alt="ホーム画面" />
  <img src="./docs/screenshot-quiz.png" width="260" alt="出題画面" />
  <img src="./docs/screenshot-result.png" width="260" alt="結果画面" />
</p>

## 概要

「決算書を読めるようになりたいが、勉強のとっかかりがない」という課題に対し、クイズ形式で毎日少しずつ財務諸表の"読み筋"に触れる設計。

- 貸借対照表（BS）の形だけで4択の企業当て
- ヒントを開くほど損益計算書・KPI・非財務データが段階開示される代わりに獲得ポイントが減る
- 正解後は「なぜその会社と言い切れるか」を3つの着眼点で解説
- 分からない指標はその場で用語シートを参照可能

## 主な機能

### 出題・ヒント
- **3段階ヒント** — ① BSのみ → ② 損益計算書を追加 → ③ 客単価・従業員数などの非財務データを追加。開くほどポイント減
- **3難易度** — 初級（別業界から4択）／中級（近い規模・分野が混在）／上級（同一業界の競合4社）。指標をどこまで細かく読むかが変わる
- **業界別モード** — ゲーム・エンタメ／小売・製造小売／インフラ・装置産業／世界のラグジュアリーの4カテゴリに絞って出題

### 学習・解説
- **理由付き解説** — 正解発表後、BSの形から読み取れる根拠を3点で言語化（例:「有形固定資産が総資産の4%しかない＝自社工場を持たないファブレス型」）
- **用語シート** — BS/PLの各項目をタップすると定義・比喩・「多いと／少ないと」の読み方をボトムシートで確認可能

### 継続の仕掛け
- **レベル／称号（ランク）システム** — 累計ポイントでレベルが上がり、見習いアナリスト→ジュニアアナリスト→…→財務の目利き、と称号が変化
- **連続プレイ日数（ストリーク）** — `localStorage` に永続化
- **セッション途中離脱でも実績確定** — 最後まで解かなくても正解分はその場でプロフィールに反映

## 遊び方

1. ホーム画面で難易度・出題範囲（全問 or 業界別）を選択
2. 貸借対照表の内訳グラフだけを見て4社の中から推理
3. 迷ったらヒント開示（ポイント減）
4. 回答すると正誤とともに理由を3点で解説
5. 全問終了でレベルアップ演出・正答率のまとめを表示

## 技術スタック

| 分類 | 技術 |
| --- | --- |
| フレームワーク | [SvelteKit](https://svelte.dev/docs/kit) + [Svelte 5](https://svelte.dev/docs/svelte) (Runes) |
| 言語 | TypeScript |
| ビルド | Vite |
| テスト | Vitest (`vitest-browser-svelte`) / Playwright（E2E） |
| Lint / Format | ESLint (typescript-eslint, eslint-plugin-svelte) / Prettier |

## 設計のポイント

- **Svelte 5 の Class + Runes によるストア設計** — `QuizStore` / `ProfileStore` をクラスで実装し `setContext`/`getContext` で注入。グローバルストアではなくページ単位でインスタンス生成し、テスト容易性と責務分離を両立
- **Repository パターンでデータ取得を抽象化** — `QuizRepository` インターフェースの背後に `StaticQuizRepository`（バンドル済み静的データを返すのみ）を配置。将来の日付シード日替わり出題・API化でも呼び出し側（ストア）は無変更で済む構成
- **レスポンシブなシェル分離** — スマホ幅は `PhoneShell`（1画面完結の縦画面）、デスクトップ幅は `AppShell`（サイドバー＋タブ）を出し分け。ロジック層（`QuizStore`）は共通のまま見た目のみ切り替え
- **ポイント→レベル→称号の関数的な算出** — `rankForLevel()` / `levelTarget()` を純粋関数として分離し、UIから独立してテスト・調整可能に

## ディレクトリ構成

```
src/
├─ routes/                    # SvelteKit のルーティング（実質1画面のSPA構成）
└─ lib/
   ├─ components/
   │  ├─ home/                # ホーム（日替わり問題・レベル・難易度選択・業界一覧）
   │  ├─ quiz/                 # 出題画面（BS/PLチャート・選択肢・ヒント）
   │  ├─ answer/                # 正誤演出・解説
   │  ├─ result/                # 結果まとめ・レベルアップ／ランクアップ演出
   │  ├─ terms/                 # 財務用語シート
   │  ├─ shell/                 # PhoneShell / AppShell などレイアウト
   │  └─ ui/                    # Card, Chip, ProgressBar などの共通部品
   ├─ data/                     # 問題データ・業界/レベル/称号マスタ・Repository
   ├─ stores/                   # QuizStore / ProfileStore（Svelte 5 Runes）
   ├─ styles/                   # デザイントークン・グローバルCSS
   └─ types.ts                  # ドメイン型定義
```

## セットアップ

```bash
npm install
npm run dev          # http://localhost:5173
```

### その他のコマンド

```bash
npm run build         # 本番ビルド
npm run preview       # ビルド済み成果物をプレビュー
npm run check          # svelte-check による型チェック
npm run lint            # Prettier + ESLint によるチェック
npm run format           # Prettier で自動整形
npm run test:unit         # Vitest（コンポーネント/ロジック）
npm run test:e2e           # Playwright（E2E）
```

## 今後の展望

- 「結果をシェア」ボタンのSNS共有連携
- 日付シードによる本当の日替わり出題（現状 `StaticQuizRepository` は固定12問を返すのみ）
- 出題データの拡充（現状12社・4業界）
- ユーザーアカウント／ログインは体験をシンプルに保つため意図的にスコープ外

---

個人開発のポートフォリオ用プロジェクト
