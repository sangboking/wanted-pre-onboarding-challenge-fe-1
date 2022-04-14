import React from 'react'
import * as styled from './FindPw.style'

export default function FindPw() {
  return (
    <styled.Wrapper>
     <styled.LayOut>
      <styled.Title>비밀번호 찾기</styled.Title>

      <styled.Intro>가입하신 이메일 주소로 비밀번호 재설정 링크가 전송됩니다.</styled.Intro>

      <styled.Name>아이디(이메일)</styled.Name>

      <styled.InputBox placeholder='아이디(이메일)을 입력해주세요.' type='text'></styled.InputBox>

      <styled.Button>비밀번호 찾기</styled.Button>
     </styled.LayOut>
    </styled.Wrapper>
  )
}
