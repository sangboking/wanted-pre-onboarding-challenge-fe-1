import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 45.5rem;
  height: 21.75rem;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #707070;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ModalIntro = styled.h1`
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: -0.36px;
  text-align: center;
  color: #191919;
  margin-top: 7.688rem;
`;

export const Line = styled.div`
  width: 2.188rem;
  height: 1px;
  background-color: #eaeaea;
  margin:0 auto;
  margin-top: 1.594rem;
`;

export const LoginButton = styled.button`
  width: 20.875rem;
  height: 2.5rem;
  border-radius: 15px;
  background-color: ${props => props.theme.navyColor};
  border:1px solid ${props => props.theme.navyColor};
  margin:0 auto;
  margin-top: 1.656rem;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  cursor:pointer;
`;