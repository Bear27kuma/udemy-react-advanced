import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PrimaryButton } from './components/atoms/buttons/PrimaryButton';
import { SecondaryButton } from './components/atoms/buttons/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { DefaultLayout } from './components/templates/DefaultLayout';
import './App.css';
import './styles.css';

const user = {
  name: 'Yuta',
  image: 'https://source.unsplash.com/NE0XGVKTmcA',
  email: '1234@example.com',
  phone: '080-1111-2222',
  company: {
    name: 'あいうえお株式会社'
  },
  website: 'https://google.com'
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br/>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

