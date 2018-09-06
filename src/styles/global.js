import { injectGlobal } from 'styled-components';

injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

  &:focus {
    outline: dotted 1px;
  }
}

html {
  font-family: Roboto;
  font-size: 20px;
}

html, body, #root {
  height: 100%;
}

#root{
  display: flex;
  flex-wrap: wrap;
}

#main {
  display: flex;
  flex-direction: row;
  flex: 1;
}

body {
  background: #F5F5F5;
  font-family: sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

.sr {
  display: none;
}
`;
