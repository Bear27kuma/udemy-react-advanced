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
