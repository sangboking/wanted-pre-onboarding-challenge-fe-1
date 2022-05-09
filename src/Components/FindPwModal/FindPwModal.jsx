import React from 'react';
import * as styled from './FindPwModal.style';
import { Link } from 'react-router-dom';


export default function FindPwModal() {
  return (
    <styled.ModalWrapper>
      <styled.ModalIntro>이메일로 비밀번호 변경 링크가 발송되었습니다.</styled.ModalIntro>

      <styled.ModalCaution>전송된 링크는 발송된 시점부터 10분간 유효합니다.</styled.ModalCaution>
      
      <styled.ModalLine />

      <Link to='/login' style={{margin:'0 auto'}}>
        <styled.LoginButton>로그인하기</styled.LoginButton>
      </Link>
    </styled.ModalWrapper>
  )
}
