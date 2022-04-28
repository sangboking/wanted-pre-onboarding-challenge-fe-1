import styled from 'styled-components';

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
  margin-top:10rem;
`;

export const LinkrLogo = styled.div`
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 4.448rem;
`;

export const Intro = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #676767;
  margin-bottom:2.285rem;
`;

export const InputLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputLabel = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #191919;
  margin-left:.875rem;
  margin-bottom: .313rem;
`;

export const WarningLabel = styled.h1`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: #e23838;
  margin-right: .875rem;
`;

export const InputBox = styled.input`
  width:93%;
  border-radius: 15px;
  padding:1rem;
  background-color: #fff;
  border:1px solid #fff;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-bottom:1.219rem;
  &:focus{
    outline: none;
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom:1.875rem;
  margin-right: .8rem;
`;

export const CheckLog = styled.h3`
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-right:.5rem;
`;

export const CheckBox = styled.input`
  background-color: #fff;
  border-radius: 15px;
  &:focus{
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width:100%;
  height:3.125rem;
  border-radius: 15px;
  border:1px solid ${props => props.formState ? props.theme.navyColor : '#b8b8b8'};
  background-color: ${props => props.formState ? props.theme.navyColor :'#b8b8b8'};
  padding:1rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(250, 250, 250, 0.9);
  cursor: pointer;
`;

export const Line = styled.div`
  margin-top:2.078rem;
  margin-bottom:1.65rem;
  height: 0.031rem;
  background-color: #eaeaea;
`;

export const FindWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Find = styled.li`
  margin:0 auto;
  font-size: 0.75rem;
  font-weight: 300;
  color:#191919;
  border-right:2px solid #eaeaea;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  padding-left: 2rem;
  border-right:1px solid #eaeaea;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const Find2 = styled.li`
  margin:0 auto;
  font-size: 0.75rem;
  font-weight: 300;
  color:#191919;
  padding-left: 2rem;
  cursor: pointer;
  padding-right: 2rem;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const FormStyle = styled.form`

`;