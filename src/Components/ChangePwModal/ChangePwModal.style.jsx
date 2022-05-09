import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 36.25rem;
  height: 11.438rem;
  border-radius: 15px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ModalIntro = styled.h1`
  font-size: 1.063rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
  margin-top: 3rem;
`;

export const LoginButton = styled.button`
  width: 8.75rem;
  height: 2.5rem;
  border-radius: 15px;
  background-color: ${props => props.theme.navyColor};
  border:1px solid ${props => props.theme.navyColor};
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-top: 1.188rem;
  color: #fff;
`;