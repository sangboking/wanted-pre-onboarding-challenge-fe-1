import React from 'react'
import * as styled from './ChangePw.style';

export default function ChangePw() {
  return (
    <styled.Wrapper>
      <styled.Title>비밀번호 변경하기</styled.Title>
      
      <styled.Intro>새 비밀번호를 입력해주세요.</styled.Intro>
      
      <styled.Name>새 비밀번호</styled.Name>
      
      <styled.InputBox placeholder='*8~2자의 대/소문자,숫자,특수문자 중 3가지 이상 입력해 주세요.'></styled.InputBox>
      
      <styled.Name>새 비밀번호 확인</styled.Name>
      
      <styled.InputBox placeholder='비밀번호를 재입력하세요.'></styled.InputBox>
      
      <styled.Button>비밀번호 변경하기</styled.Button>
    </styled.Wrapper>
  )
}
