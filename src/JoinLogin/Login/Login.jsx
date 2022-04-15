import React from 'react';
import * as styled from './Login.style';
import {Link,useNavigate} from 'react-router-dom';
import LinkrLogoNavy from '../../SvgIcons/LinkrLogoNavy';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, getValues} = useForm();
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
      console.log(error);
    })
  }

    return (
        <styled.Wrapper>
          
          <styled.LayOut>
            <styled.LinkrLogo><LinkrLogoNavy/></styled.LinkrLogo>

            <styled.NavyLine/>
            
            <styled.Intro>반갑습니다! 계정에 로그인 해볼까요?</styled.Intro>
            
            <styled.FormStyle onSubmit={handleSubmit(onValid)}>
              <styled.InputBox placeholder='아이디(email)' {...register("email",{required:true})}></styled.InputBox>
              
              <styled.InputBox placeholder='비밀번호' type='password' {...register("password",{required:true})}></styled.InputBox>
              
              <styled.CheckWrapper>
                
                <styled.CheckLog>로그인 상태 유지</styled.CheckLog>
              </styled.CheckWrapper>
              
              <styled.Button onClick={loginOnclick}>로그인하기</styled.Button>
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


