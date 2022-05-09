import React from 'react';
import * as styled from './JoinDuplicateModal.style';
import {Link} from 'react-router-dom';

export default function JoinDuplicateModal() {
  return (
    <styled.JoinCompleteBack>
      <styled.JoinCompletBox>
        <styled.JoinBox>이미 가입된 계정입니다.</styled.JoinBox>
        <Link to='/login'>
          <styled.JoinButton2>로그인하기</styled.JoinButton2>
        </Link>
      </styled.JoinCompletBox> 
    </styled.JoinCompleteBack>
)
}
