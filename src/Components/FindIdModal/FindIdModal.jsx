import React from 'react';
import * as styled from './FindIdModal.style';
import { Link } from 'react-router-dom';

export default function FindIdModal() {
  return (
    <styled.ModalWrapper>
      <styled.ModalIntro>이메일을 확인해주세요!</styled.ModalIntro>

      <styled.Line />

      <Link to='/login' style={{margin:'0 auto'}}>
        <styled.LoginButton>로그인하기</styled.LoginButton>
      </Link>
    </styled.ModalWrapper>
  )
}
