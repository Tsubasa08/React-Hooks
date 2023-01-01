import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { CustomHook } from './CustomHook';
import { LifeCycle } from './LifeCycle';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/life-cycle" element={<LifeCycle />} />
        <Route path="/custom-hook" element={<CustomHook />} />
      </Routes>
      <Link to="/life-cycle">LifeCycle</Link>
      <Link to="/custom-hook">CustomHook</Link>
    </BrowserRouter>
  </StrictMode>
);
