import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './router';

const App = () => {
  return (
   <>
    <GlobalStyle />
    <Router />
   </>
  );
};

const GlobalStyle = createGlobalStyle`
  *{
     ${reset};
   }
`;

export default App;


