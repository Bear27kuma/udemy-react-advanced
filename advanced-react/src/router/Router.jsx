import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Page1 } from '../components/Page1';
import { Page1DetailA } from '../components/Page1DetailA';
import { Page1DetailB } from '../components/Page1DetailB';
import { Page2 } from '../components/Page2';
import { UrlParameter } from '../components/UrlParameter';
import { Page404 } from '../components/Page404';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1">
        <Route index element={<Page1 />} />
        <Route path="detailA" element={<Page1DetailA />} />
        <Route path="detailB" element={<Page1DetailB />} />
      </Route>
      <Route path="/page2">
        <Route index element={<Page2 />} />
        <Route path=":id" element={<UrlParameter />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
