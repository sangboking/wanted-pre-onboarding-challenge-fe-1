import React from 'react';
import Router from './router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { linkrTheme } from './theme';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  *{
    font-family:'SCoreDream';
    font-size:16px;
    ${reset};
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
      <ThemeProvider theme={linkrTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle/>
        <Router/>
        <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default App;