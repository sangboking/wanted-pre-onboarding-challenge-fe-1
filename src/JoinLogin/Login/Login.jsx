import React, { useState } from 'react';
import * as styled from './Login.style';
import {Link,useNavigate} from 'react-router-dom';
import LinkrLogoNavy from '../../SvgIcons/LinkrLogoNavy';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
  
  const {register, handleSubmit, getValues, formState} = useForm({
    mode: "onChange",
  });
  
  const onValid = (data) => {
   
  } 
  
  const loginOnclick = async () => {
    const data = {
      email : getValues('email'),
      password : getValues('password')
    }
    console.log(JSON.stringify(data));
    await axios.post(`/api/auth`,JSON.stringify(data),{headers:{"Content-Type":`application/json`}})
    .then((response) => {
      if(response.data.success === true){
        navigate('/');
      }
    })
    .catch((error) => {
      setLoginModal(!loginModal);
    })
  };

    return (
        <styled.Wrapper>
          
          <styled.LayOut>
            <styled.LinkrLogo><LinkrLogoNavy/></styled.LinkrLogo>
            
            <styled.Intro>반갑습니다! 계정에 로그인 해볼까요?</styled.Intro>
            
            <styled.FormStyle onSubmit={handleSubmit(onValid)}>
              <styled.InputLabelWrapper>
                <styled.InputLabel>아이디(E-mail)</styled.InputLabel>
                {loginModal && <styled.WarningLabel>아이디가 또는 비밀번호가 일치하지 않습니다.</styled.WarningLabel>}
              </styled.InputLabelWrapper>
              <styled.InputBox autoComplete='off' {...register("email",{required:true})}></styled.InputBox>
              
              <styled.InputLabelWrapper>
                <styled.InputLabel>비밀번호</styled.InputLabel>
              </styled.InputLabelWrapper>
              <styled.InputBox type='password' {...register("password",{required:true})}></styled.InputBox>
              
              <styled.CheckWrapper>
                <styled.CheckBox type='checkbox' />
                <styled.CheckLog>로그인 상태 유지</styled.CheckLog>
              </styled.CheckWrapper>
              
              <styled.LoginButton formState={formState.isValid} disabled={!formState.isValid} onClick={loginOnclick}>로그인하기</styled.LoginButton>
            </styled.FormStyle>
            
            <styled.Line></styled.Line>
            
            <styled.FindWrapper>
              <Link to="/findPw" style={{ textDecoration: 'none' }}>
                <styled.Find>비밀번호 찾기</styled.Find>
              </Link>
              <Link to="/findId" style={{ textDecoration: 'none' }}>
                <styled.Find>아이디 찾기</styled.Find>
              </Link>
              <Link to="/join" style={{ textDecoration: 'none' }}>
                <styled.Find2>회원가입</styled.Find2>
              </Link>
            </styled.FindWrapper>
          </styled.LayOut>

        </styled.Wrapper>
    );
};

export default Login;


