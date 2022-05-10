import styled from 'styled-components';

export const FormStyle = styled.form``;

export const Wrapper = styled.div`
  width:100%;
  height:100vh;
  margin:0 auto;
  background-color: #f5f6f8;
  overflow-y: hidden;
`;

export const LayOut = styled.div`
  width:30rem;
  margin:0 auto;
  margin-top: 15rem;
`;

export const Title = styled.h1`
 font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  color: #191919;
  margin-bottom:0.625rem;
  margin-left:.891rem;
`;

export const Intro = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #676767;
  margin-bottom:2.5rem;
  margin-left:.891rem;
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #191919;
  margin-bottom:0.438rem;
  margin-left:.891rem;
`;

export const InputBox = styled.input`
  border-radius: 15px;
  background-color: #fff;
  border:1px solid #fff;
  width:28.625rem;
  height: 3.125rem;
  padding-left: 1.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-bottom:1.938rem;
  &:focus{
    outline: none;
  }
`;

export const FindPwButton = styled.button`
  border-radius: 15px;
  width:30.5rem;
  padding:1rem;
  font-size:0.875rem;
  color: rgba(250, 250, 250, 0.9);
  background-color: ${props => props.formState ? props.theme.navyColor :'#b8b8b8'};
  border:1px solid ${props => props.formState ? props.theme.navyColor :'#b8b8b8'};
  font-weight: 500;
  margin-top:.5rem;
  cursor: pointer;
`;