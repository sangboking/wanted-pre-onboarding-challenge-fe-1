import styled from 'styled-components';
import LinkrLogoNavy from '../SvgIcons/LinkrLogoNavy';

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 9.081rem;
  height: 3.485rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0 auto;
  margin-bottom:1rem;
`;

const Title = styled.h1`
  width:100%;
  margin:0 auto;
  margin-bottom:1.1rem;
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
`;

const Intro = styled.h1`
  width:100%;
  margin:0 auto;
  margin-bottom:2.188rem;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
`;

const Button = styled.button`
  width: 18.75rem;
  height: 3.125rem;
  border-radius: 15px;
  border:1px solid #112553;
  background-color: #112553;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  cursor: pointer;
  margin:0 auto;
`;

export default function JoinOut() {
  return (
    <Wrapper>
      <LayOut>
        <LogoWrapper>
          <LinkrLogoNavy/>
        </LogoWrapper>

        <Title>회원탈퇴</Title>

        <Intro>링커 회원탈퇴가 완료되었습니다.<br/>그동안 링커를 이용해주셔서 감사합니다.</Intro>

        <Button>확인</Button>
      </LayOut>
    </Wrapper>
  )
}
