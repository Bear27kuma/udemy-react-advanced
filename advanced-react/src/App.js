import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PrimaryButton } from './components/atoms/buttons/PrimaryButton';
import { SecondaryButton } from './components/atoms/buttons/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { Router } from './components/router/Router';
import './App.css';
import './styles.css';

export default function App() {
  return <Router />;
}

