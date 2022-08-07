# バージョン情報
| パッケージ | バージョン |
| ----- | ----- |
| react | 18.2.0 |
| react-router-dom | 6.3.0 |

# 再レンダリングの仕組みとレンダリングの最適化
## 再レンダリングが起きる条件
### どんな時に再レンダリングされるか？
1. stateが更新されたコンポーネントは再レンダリングされる
2. propsが更新されたコンポーネントは再レンダリングされる
3. 再レンダリングされたコンポーネント配下の子要素は再レンダリングされる

## メモ化とは
メモ化とは同じ結果を返す処理について、初回のみ処理を実行記録しておき、値が必要となった2回目以降は、前回の処理結果を計算することなく呼び出し値を得られるようにすること

都度計算しなくて良くなることからパフォーマンス向上が期待できる

## レンダリング最適化
親コンポーネントに変更があっても、propsに変更がない限り子コンポーネントを再レンダリングさせないようにするには、**memo**を使用する

`memo()`でコンポーネントを囲うことによって、propsの変更時のみ再レンダリングされるようになる（メモ化することができる）

propsに渡す関数をアロー関数で記述すると、毎回関数を作成するためにpropsは全て別の関数だと判断（更新があったと判断）してしまうため、`useCallback()`を使用してメモ化したコールバック関数を返し、どの値が更新された時のみ関数を再生成するかを指定することができる（第2引数に指定）

第2引数の配列のことを**依存配列**という

依存配列(=`[deps]` コールバック関数が依存している要素が格納された配列)の要素のいずれかが変化した場合のみ、メモ化した値を再計算する

`useMemo()`は関数の結果をメモ化することができ、何度やっても同じ結果になる関数を再レンダリングさせずに取得することができる


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

# React Router
従来のウェブサイドであれば、それぞれのURLに対応した静的なHTMLファイルをサーバー側に持っていたので、URLにマッチするものを返していた

SPA(Single Page Application)の場合は画面の要素を書き換えるため、再度URLにアクセスすると初期ページに戻ってしまう

→ そのため、ルーティングの設定を行って適切なページへとアクセスさせるようにする

## 基本的なページ遷移
React Routerの`BrowserRouter`を使用すると、`BrowserRouter`コンポーネントで囲った配下のルーティングを有効にする

`Link`はaタグのようなもので、ページ遷移の処理を簡単に行うことができる
```jsx
<Link to="/">Home</Link>
```
ルーティングへの出しわけは`Routes`コンポーネントで行い、ルートにマッチしたものの判定には`Route`コンポーネントを使用する

（React Router5では`Routes`ではなく、`Switch`を使用していた）

React Router5での記法
```jsx
<Switch>
  <Route path="page1">
    <Page1 />
  </Route>
</Switch>
```
React Router6での記法
```jsx
<Routes>
  <Route path="/page1" element={<Page1 />} />
</Routes>
```

## ネストされたページ遷移
さらに階層が深いページへのルーティングについては、React Router6から記述方法が異なり、`<Route>`コンポーネントを入れ子にして記述することで実現することができる
```jsx
<Route path="/page1">
  <Route index={true} element={<Page1 />} />
  <Route path="detailA" element={<Page1DetailA />} />
  <Route path="detailB" element={<Page1DetailB />} />
</Route>
```

## ルート定義の分割
別途`router`ディレクトリを作成し、そちらにルーティングの記述をしたファイルを格納していく

ルートの記述は切り出して別ファイルとして持っておく方が管理がしやすくなる

router/Router.jsx
```jsx
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1">
        <Route index element={<Page1 />} />
        <Route path="detailA" element={<Page1DetailA />} />
        <Route path="detailB" element={<Page1DetailB />} />
      </Route>
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
};
```

## URLパラメータを扱う
ユーザーIDなどのURLパラメータに一意の値が入ってきた場合のルーティングは、`path`にセミコロン（:）で設定を記述する
```jsx
<Route path="/page2">
  <Route index element={<Page2 />} />
  <Route path=":id" element={<UrlParameter />} />
</Route>
```

react-router-domの`useParams`というHooksを使って、パラメータを扱うことができる
```jsx
const { id } = useParams();
```

## クエリパラメータを扱う
JavaScriptの標準の機能だけでもクエリパラメータを扱うことができるが、react-router-domの中に`useLocation`というHooksがあるので、こちらを使用してクエリパラメータを扱う

さらにJavaScriptの`URLSearchParams`も使用する
```jsx
const { search } = useLocation();
const query = new URLSearchParams(search);
return (
  <div>
    <h1>UrlParameterページです</h1>
    <p>パラメータは {id} です</p>
    <p>クエリパラメータは {query.get('name')} です</p>
  </div>
);
```

## stateを渡すページ遷移
`Link`コンポーネントの`to`属性で渡す際に以下のようにstateを渡すことができる
```jsx
<Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
```
一覧ページから詳細ページへ情報を渡すことで、詳細ページからの無駄なAPIアクセスを取り除くことができる

## Linkを使わないページ遷移
`useNavigate`を使って`Link`ではなく、JavaScriptでページ遷移を行うことができる（v5では`useHistory`）
```jsx
const navigate = useNavigate();
const onClickDetailA = () => navigate('/page1/detailA');

<button onClick={onClickDetailA}>DetailA</button>
```
ブラウザを戻る際は`navigate(-1)`を使用する

## 404ページを用意する
存在しないURLへのアクセスは404ページへアクセスさせる
方法としてはどのルーティングにも一致しなかった場合に404ページを表示させるようにする
```jsx
<Route path="*" element={<Page404 />} />
```
