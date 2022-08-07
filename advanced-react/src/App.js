import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br/>
        <Link to="page1">Page1</Link>
        <br/>
        <Link to="page2">Page2</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

