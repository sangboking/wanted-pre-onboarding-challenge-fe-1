import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './router';

function App() {
  return (
   <>
    <GlobalStyle />
    <Router />
   </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
     ${reset};
   }
`;
