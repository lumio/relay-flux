import { injectGlobal } from 'styled-components';

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font: 1.4rem/1.1 sans-serif;
  }
`;