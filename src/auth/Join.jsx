import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickSingUp = () => {
    const emailCheck =  /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    
    if(!emailCheck.test(email) === true){
     return alert('이메일 형식에는 @이나 . 이 필수 입니다!')
    };

    if(password.length < 8){
      return alert('비밀번호는 8자 이상 입력해야 합니다!')
    }

    axios.post(`http://localhost:8080/users/create`,{
      email : email,
      password : password
    })
    .then(() => {
      navigate('/login')
    })
  };

  return (
    <JoinWrapper>
      <Title>원티드 프리온보딩 회원가입</Title>

        <InputBox>
          <InputLabel>이메일</InputLabel>
          <EmailPwInput value={email} onChange={onChangeEmail}/>
        </InputBox>

        <InputBox>
          <InputLabel>비밀번호</InputLabel>
          <EmailPwInput value={password} onChange={onChangePassword} type='password'/>
        </InputBox>

        <JoinButton onClick={onClickSingUp}>회원가입</JoinButton>
  
    </JoinWrapper>
  )
};

const JoinWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.2rem;
`;

const InputBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const InputLabel = styled.label`
  font-size: .8rem;
  margin-right: 1rem;
`;

const EmailPwInput = styled.input`
  width: 10rem;
  height: 2rem;
  border-radius: 15px;
  border:1px solid  #eaeaea;
`;

const JoinButton = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: navy;
  color:#fff;
  border-radius: 15px;
  border:1px solid  #eaeaea;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
