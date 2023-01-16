import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Conx} from './Conx';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Conx>
    <StrictMode>
      <App />
    </StrictMode>
  </Conx>
);
