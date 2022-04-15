import React from 'react'
import * as styled from './ConfirmId.style'
import {Link} from 'react-router-dom';

export default function ConfirmId() {
  return (
    <styled.Back>
      <styled.CenterBox>
        
        <styled.Title>~ 님의 아이디는</styled.Title>
        
        <styled.IdWrapper>
          <styled.Intro>Link**@social.com</styled.Intro>
          <styled.Text>입니다.</styled.Text>
        </styled.IdWrapper>
        
        <styled.AlertBox>정보 보호를 위해 아이디의 일부만 보여집니다. 가려지지 않은 전체 아이디는 추가 인증을 통해 확인할 수 있습니다.</styled.AlertBox>
        
        <styled.ButtonWrapper>
          <Link to="/"><styled.GoButton>홈으로 바로가기</styled.GoButton></Link>
          <Link to="/login"><styled.GoButton2>로그인하기</styled.GoButton2></Link>
        </styled.ButtonWrapper>
        
      </styled.CenterBox>
    </styled.Back>
  )
}
