import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { users } from './fakeUser.js';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App users={users} />
  </StrictMode>
);
