import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lazy Dog Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Lazy Dog Regular'), url('./lazy_dog.woff') format('woff');
  }

  :root {
    --pj-black: #000;

    --pj-opacity-0: 0.2;

    --pj-spacing-0: 4px;
    --pj-spacing-1: 8px;
    --pj-spacing-2: 12px;
    --pj-spacing-3: 16px;
    --pj-spacing-4: 20px;
    --pj-spacing-5: 24px;
    --pj-spacing-6: 40px;
    --pj-spacing-7: 64px;
    --pj-spacing-8: 80px;

    --pj-border-0: 2px;
    --pj-border-1: 3px;

    --pj-size-4: 32px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  h1, h2, h3 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
  }

  #root {
    height: 100%;
    font-size: 1.25rem;
    font-family: 'Lazy Dog Regular';
    font-weight: normal;
    letter-spacing: 1px;
    background: var(--pj-black);
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
