import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width:30rem;
  margin:0 auto;
  margin-top:10rem;
  margin-bottom:10rem;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.625rem;
`;

const Intro = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-bottom:2.5rem;
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.438rem;
`;

const InputBox = styled.input`
  border-radius: 15px;
  background-color: #f7f7f7;
  border:1px solid #f7f7f7;
  width:28.6rem;
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

const Button = styled.button`
  border-radius: 15px;
  width:30rem;
  padding:1rem;
  font-size:0.875rem;
  color: rgba(250, 250, 250, 0.9);
  background-color:#112553;
  border:1px solid #112553;
  font-weight: 500;
  margin-top:.5rem;
  cursor: pointer;
`;

export default function ChangePw() {
  return (
    <Wrapper>
      <Title>비밀번호 변경하기</Title>
      
      <Intro>새 비밀번호를 입력해주세요.</Intro>
      
      <Name>새 비밀번호</Name>
      
      <InputBox placeholder='*8~2자의 대/소문자,숫자,특수문자 중 3가지 이상 입력해 주세요.'></InputBox>
      
      <Name>새 비밀번호 확인</Name>
      
      <InputBox placeholder='비밀번호를 재입력하세요.'></InputBox>
      
      <Button>비밀번호 변경하기</Button>
    </Wrapper>
  )
}
