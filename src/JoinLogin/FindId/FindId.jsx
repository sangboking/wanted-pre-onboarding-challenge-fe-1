import * as styled from './FindId.style'
import {Link} from 'react-router-dom'

export default function FindId() {

  return (
    <styled.Wrapper>
      <styled.LayOut>
        <styled.Title>아이디 찾기</styled.Title>
        
        <styled.Intro>아이디는 가입시 입력하신 정보를 통해 찾을 수 있습니다.</styled.Intro>
        
        <styled.Name>아이디(이메일)</styled.Name>
        
        <styled.InputBox placeholder='아이디(이메일)을 입력해 주세요.'></styled.InputBox>
        
        <Link to='/confirmId'>
          <styled.Button>아이디 찾기</styled.Button>
        </Link>
      </styled.LayOut>
    </styled.Wrapper>
  )
}



