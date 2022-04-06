import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  margin:0 auto;
  background-color: #f5f6f8;
  overflow-y: hidden;
`;

const LayOut = styled.div`
  width:30rem;
  margin:0 auto;
  margin-top: 15rem;
`;

const Title = styled.h1`
 font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  margin-bottom:0.625rem;
`;

const Intro = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #676767;
  margin-bottom: 2.5rem;
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
  background-color: #fff;
  border:1px solid #fff;
  width:28.625rem;
  height: 3.125rem;
  padding-left: 1.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #666;
  margin-bottom:1.938rem;
  &:focus{
    outline: none;
  }
`;

const Button = styled.button`
  border-radius: 15px;
  width:30.5rem;
  height:3.125rem;
  font-size:0.875rem;
  color: rgba(250, 250, 250, 0.9);
  background-color:#112553;
  border:1px solid #112553;
  font-weight: 500;
  margin-top:.5rem;
  cursor: pointer;
`;


export default function FindId() {

  return (
    <Wrapper>
      <LayOut>
        <Title>아이디 찾기</Title>
        
        <Intro>아이디는 가입시 입력하신 정보를 통해 찾을 수 있습니다.</Intro>
        
        <Name>아이디(이메일)</Name>
        
        <InputBox placeholder='아이디(이메일)을 입력해 주세요.'></InputBox>
        
        <Link to='/confirmId'>
          <Button>아이디 찾기</Button>
        </Link>
      </LayOut>
    </Wrapper>
  )
}



