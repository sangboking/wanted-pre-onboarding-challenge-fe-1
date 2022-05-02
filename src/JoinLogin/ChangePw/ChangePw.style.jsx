import styled from 'styled-components';

export const FormStyle = styled.form``;

export const Wrapper = styled.div`
  width:30rem;
  margin:0 auto;
  margin-top:15rem;
  margin-bottom:10rem;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.625rem;
  margin-left: .625rem;
`;

export const Intro = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-bottom:2.5rem;
  margin-left: .625rem;
`;

export const ConfirmWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.438rem;
  margin-left: .625rem;
`;

export const AlertSpan = styled.span`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  text-align: right;
  color: #e23838;
  margin-right:.438rem;
`;

export const InputBox = styled.input`
  border-radius: 15px;
  background-color: #f7f7f7;
  border:1px solid #f7f7f7;
  width:28.6rem;
  height: 3.125rem;
  padding-left: 1.375rem;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  text-align: left;
  color: #676767;
  margin-bottom:1.938rem;
  &:focus{
    outline: none;
  }
`;

export const Button = styled.button`
  border-radius: 15px;
  width:30rem;
  padding:1rem;
  font-size:0.875rem;
  color: rgba(250, 250, 250, 0.9);
  background-color:${props => props.formState ? props.theme.navyColor :'#b8b8b8'};
  border:1px solid ${props => props.formState ? props.theme.navyColor :'#b8b8b8'};
  font-weight: 500;
  margin-top:.5rem;
  cursor: pointer;
`;