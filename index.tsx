import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import UseState from './state/hooks';
import Counter from './state/class';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UseState />
    <Counter />
  </StrictMode>
);
