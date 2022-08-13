import { atom } from 'recoil';

export const userState = atom({
  // stateを参照する一意のkey
  key: "userState",
  // 初期値
  default: { isAdmin: false }
});
