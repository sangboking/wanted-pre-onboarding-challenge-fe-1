import React from 'react'
import styled from 'styled-components'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import {Link} from 'react-router-dom';

const Back = styled.div`
  width:100%;
  min-height: 100vh;
  background-color:#707070 ;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterBox = styled.div`
  width:45.5rem;
  height: 28.375rem;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #707070;
  background-color: #fff;
  margin:0 auto;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
  margin:0 auto;
  margin-top:5.6rem;
`;

const IdWrapper = styled.div`
  text-align: center;
  margin-top:.3rem;
  margin-bottom: 2.25rem;
`;

const Intro = styled.span`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color:#5075f1;
  margin-top:.4rem;
  text-align: center;
`;

const Text = styled.span`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
`;

const AlertBox = styled.div`
  width:23rem;
  height:5.25rem;
  border-radius: 15px;
  background-color: #f7f7f7;
  margin:0 auto;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  display:flex;
  align-items: center;
  justify-content: center;
  padding:0 2rem 0 3rem;
  position:relative;
`;

const Icon = styled(ReportGmailerrorredIcon)`
  font-size: small;
  position:absolute;
  left:1.6rem;
  top:1.4rem;
`;

const ButtonWrapper = styled.div`
  width:28rem;
  display: flex;
  margin:0 auto;
  margin-top:2.25rem;
`;

const GoButton = styled.button`
  width: 12.7rem;
  height: 3.125rem;
  border-radius: 15px;
  background-color: #112553;
  border:1px solid#112553;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  margin-right: 2.5rem;
`;

const GoButton2 = styled.button`
  width: 12.7rem;
  height: 3.125rem;
  border-radius: 15px;
  background-color: #112553;
  border:1px solid#112553;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
`;



export default function ConfirmId() {
  return (
    <Back>
      <CenterBox>
        
        <Title>김링커 님의 아이디는</Title>
        
        <IdWrapper>
          <Intro>Link**@social.com</Intro>
          <Text>입니다.</Text>
        </IdWrapper>
        
        <AlertBox><Icon fontSize='small'/>정보 보호를 위해 아이디의 일부만 보여집니다. 가려지지 않은 전체 아이디는 추가 인증을 통해 확인할 수 있습니다.</AlertBox>
        
        <ButtonWrapper>
          <Link to="/"><GoButton>홈으로 바로가기</GoButton></Link>
          <Link to="/login"><GoButton2>로그인하기</GoButton2></Link>
        </ButtonWrapper>
        
      </CenterBox>
    </Back>
  )
}
