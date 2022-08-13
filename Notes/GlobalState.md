# グローバルなstate管理
画面のどのページ、どのコンポーネントからも参照できる値と、その値をどこからでも更新できるのがグローバルなstate

`useState`だとそのコンポーネントでしか使用することができない

Atomic Designなどで実装した場合はstateを各コンポーネントにpropsとして数珠繋ぎのように渡していく処理が必要になり、stateの管理が大変になる

## Contextでstate管理
### 基本的な使い方
グローバルなstateを扱うには`createContext`を使用する
```jsx
import { createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = 'Yuta';
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
```

contextを受け取る側は`useContext`を使って、作成したproviderからグローバルな値を受け取る
```jsx
import { UserContext } from '../../providers/UserProvider';

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;
  const context = useContext(UserContext);
};
```

## 固定ではなくグローバルに変更が行えるstateを作成する
```jsx
export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
```
上記の内容で配下のコンポーネントからstateの参照と更新ができるようになる

## 再レンダリングの最適化
Contextを使う上で再レンダリングには注意する必要がある

一つのProvider中で渡しているstateの値に変更があった場合、その値を使っているコンポーネントはすべて再レンダリングされてしまう

グローバルな値を参照しているため、再レンダリングされないと値が反映されないので正常な動作ではあるが、こちらを最適化する

コンポーネントを`memo`化することで子コンポーネントでも変更がないものは再レンダリングしないようになる
