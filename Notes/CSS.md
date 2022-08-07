# CSSの当て方
## Inline Styles
Reactがデフォルトで提供しているCSSの適用方法

CSSスタイルを変数にオブジェクトとして格納し、キャメルケースでプロパティ名、文字列として値を設定する

スタイルの適用はインラインで行う

## CSS Modules
コンポーネントファイルに対応するCSS専用のモジュールファイルを用意し、コンポーネント側からインポートして使用する

## Styled JSX
コンポーネントstyleタグを記述し、`<style jsx="true">`を使ってCSSを記述する方法

ReactのフレームワークであるNext.jsではデフォルトで提供されているCSSの適用方法になっている

## styled-components
`styled.`を使ってタグごとにCSSを指定することができ、コンポーネントとしてHTMLタグを設定する方法

CSS-in-JSのライブラリの中でも根強い人気のあるもの

Sass記法も認識される

## Emotion
CSS-in-JSライブラリで、styled-componentsにインスパイアされており、特定のフレームワークにとらわれずに使用することができる

`@emotion/react`と`@emotion/styled`パッケージをインストールする必要がある

インポート時に、ファイル最上部に以下の記述が必要
```jsx
/** @jsxImportSource @emotion/react */
```
