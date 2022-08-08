import React from 'react';
import { PrimaryButton } from './components/atoms/buttons/PrimaryButton';
import './App.css';
import { SecondaryButton } from './components/atoms/buttons/SecondaryButton';

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}

