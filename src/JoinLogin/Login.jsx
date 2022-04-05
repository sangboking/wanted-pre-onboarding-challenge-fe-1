import React from 'react';
import styled from 'styled-components';
import { Checkbox} from '@mui/material';
import {Link} from 'react-router-dom';
import LinkrLogoNavy from '../SvgIcons/LinkrLogoNavy';
import { useForm } from 'react-hook-form';

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  margin:0 auto;
  background-color: #f5f6f8;
  overflow-y: hidden;
`;

const LayOut = styled.div`
  width:30rem;
  margin:0 auto;
  margin-top:10rem;
`;

const LinkrLogo = styled.div`
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 2.922rem;
`;

const NavyLine = styled.div`
  width:6rem;
  height:4px;
  background-color: #1a225c;
  margin:0 auto;
  margin-bottom: 2.75rem;
`;

const Intro = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #676767;
  margin-bottom:2.5rem;
`;

const InputBox = styled.input`
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
  margin-bottom:1.25rem;
  &:focus{
    outline: none;
  }
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom:1.8rem;
`;

const CheckLog = styled.h3`
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

const Button = styled.button`
  width:100%;
  height:3.125rem;
  border-radius: 15px;
  border:1px solid #112553;
  background-color: #112553;
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

const Line = styled.div`
  margin-top:2.078rem;
  margin-bottom:1.65rem;
  height: 0.031rem;
  background-color: #eaeaea;
`;

const FindWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Find = styled.li`
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

const Find2 = styled.li`
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

const FormStyle = styled.form`

`;



const Login = () => {
  const {register, handleSubmit,} = useForm();
  const onValid = (data) => {
    console.log(data);
  }  
  
    return (
        <Wrapper>
          
          <LayOut>
            <LinkrLogo><LinkrLogoNavy/></LinkrLogo>

            <NavyLine/>
            
            <Intro>반갑습니다! 계정에 로그인 해볼까요?</Intro>
            
            <FormStyle onSubmit={handleSubmit(onValid)}>
              <InputBox placeholder='아이디(email)' {...register("useremail")}></InputBox>
              
              <InputBox placeholder='비밀번호' type='password' {...register("password")}></InputBox>
              
              <CheckWrapper>
                <Checkbox type="checkbox"></Checkbox>
                <CheckLog>로그인 상태 유지</CheckLog>
              </CheckWrapper>
              
              <Button>로그인하기</Button>
            </FormStyle>
            
            <Line></Line>
            
            <FindWrapper>
              <Link to="/findPw" style={{ textDecoration: 'none' }}>
                <Find>비밀번호 찾기</Find>
              </Link>
              <Link to="/findId" style={{ textDecoration: 'none' }}>
                <Find>아이디 찾기</Find>
              </Link>
              <Link to="/join" style={{ textDecoration: 'none' }}>
                <Find2>회원가입</Find2>
              </Link>
            </FindWrapper>
          </LayOut>

        </Wrapper>
    );
};

export default Login;


