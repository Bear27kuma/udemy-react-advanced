# コンポーネント分割方法（Atomic Design）
## Atomic Design概要
Atomic Designとは
- Brad Frost氏が考案したデザインシステム
- 画面要素を5段階に分け、組み合わせることでUIを実現
- コンポーネント化された要素が画面を構成しているという考え
- React、Vue用というわけではない
- モダンJavaScriptと相性が良い

5段階のコンポーネント
1. ATOMS（原子）
   - 最も小さくそれ以上分解できない要素
      - ボタン
      - ツイートテキストボックス
      - アイコン など
2. MOLECULES（分子）
   - Atomの組み合わせで意味を持つデザインパーツ
      - アイコン + メニュー名
      - プロフィール画像 + テキストボックス
      - アイコンセット など
3. ORGANISMS（有機体）
   - AtomやMoleculeの組み合わせで構成される単体である程度の意味を持つ要素群
      - ツイート入力エリア
      - サイドメニュー
      - 1つのツイートエリア など
4. TEMPLATES（テンプレート）
   - ページのレイアウトのみを表現する要素（実際のデータは持たない）
      - サイドメニュー
      - ツイートエリア
      - トピックエリアなどのレイアウト情報 など
5. PAGES （ページ）
   - 最終的に表示される1画面
      - ページ遷移ごとに表示される各画面

## Atomの作成
ボタン類などの使い回しができるAtomについてはテキスト部分は毎回異なるものをレンダリングできるようにするため、`props`の`children`を用いて、タグに入力したテキストを使うのが良い

CSSのスタイルが一部のみ異なるデザインの場合は、共通のCSSスタイルを別ファイルで定義し、Atom側のファイルで読み込んで個別のスタイル部分のみ適用することができる

BaseButton.jsx
```jsx
import styled from 'styled-components';

export const BaseButton = styled.button`
  padding: 6px 24px;
  border: none;
  border-radius: 999px;
  color: #fff;
  outline: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
```

PrimaryButton.jsx
```jsx
const Button = styled(BaseButton)`
  background-color: #40514e;
`;
```
