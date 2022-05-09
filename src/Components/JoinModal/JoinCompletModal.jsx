import React from 'react';
import * as styled from './JoinCompleteModal.style';
import {Link} from 'react-router-dom';

export default function JoinCompletModal() {
  return (
    <styled.JoinCompleteBack>
      <styled.JoinCompletBox>
        <styled.JoinBox>회원가입이 완료되었습니다!</styled.JoinBox>
        <Link to='/login'>
          <styled.JoinButton2>로그인하기</styled.JoinButton2>
        </Link>
      </styled.JoinCompletBox> 
    </styled.JoinCompleteBack>
  )
}
