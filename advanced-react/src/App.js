import React from 'react';
import { UserProvider } from './components/providers/UserProvider';
import { Router } from './components/router/Router';
import './App.css';
import './styles.css';

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

