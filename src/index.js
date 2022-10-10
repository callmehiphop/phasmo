import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { colors, sizes } from './styles/vars';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Lazy Dog Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Lazy Dog Regular'), url('./lazy_dog.woff') format('woff');
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: ${colors.black};
  }

  h1, h2, h3 {
    font-weight: normal;
    margin: 0;
    line-height: 1rem;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.375em;
  }

  p {
    margin: 0;
  }

  #root {
    height: 100%;
    font-size: 1.25rem;
    font-family: 'Lazy Dog Regular';
    font-weight: normal;
    letter-spacing: 0.075rem;
    color: ${colors.darkgrey};

    @media (min-width: ${sizes.bookWidth}) and (min-height: ${sizes.bookHeight}) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
