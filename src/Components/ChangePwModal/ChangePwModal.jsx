import React from 'react';
import * as styled from './ChangePwModal.style';
import { Link } from 'react-router-dom';

export default function ChangePwModal() {
  return (
    <styled.ModalWrapper>
      <styled.ModalIntro>비밀번호 변경이 완료되었습니다.</styled.ModalIntro>

      <Link to='/login' style={{margin:'0 auto'}}>
        <styled.LoginButton>로그인하기</styled.LoginButton>
      </Link>
    </styled.ModalWrapper>
  )
}
