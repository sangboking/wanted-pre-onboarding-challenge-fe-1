import React from 'react';
import Router from './router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  *{
    /* font-family:'SCoreDream'; */
    font-family:'Pretendard';
    font-size:16px;
    ${reset};
    /* font-family: 'KoPubDotumMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/KoPubDotumMedium.woff') format('woff'); */
  }
  p,a,h1,h2,h3,h4,h5,h6{
    transform: skew(-0.001deg);
  }

  @media screen and (max-width:1440px){
    *{
      font-size:12px;
    }

  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  );
};

export default App;