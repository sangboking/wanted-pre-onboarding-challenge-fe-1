import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Components/SideBar';
import ConnectIcon from '../SvgIcons/ConnectIcon';
import FaceBookS from '../SvgIcons/FaceBookS';
import TwitS from '../SvgIcons/TwitS';
import Reconnect from '../SvgIcons/Reconnect';
import Disconnect from '../SvgIcons/DisconnectIcon';
import DotIcon from '../SvgIcons/DotIcon';
import Ex from '../Components/Ex';


const Wrapper = styled.div`
  width:120rem;
  height:100vh;
  display: flex;
  background-color: #fff;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const ContentWrapper = styled.div`
  width:105rem;
  height:100vh;
  margin-left: 15rem;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const ConnectWrapper = styled.div`
  width:67.813rem;
  height: 100vh;
  margin:0 auto;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 5.313rem;
  margin-left:.875rem;
  margin-bottom: 2.688rem;
`;

const TitleLine = styled.div`
  width: 0.5rem;
  height: 1.563rem;
  background-color: #1a225c;
  margin-right: .625rem;
`;

const Titleh1 = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
`;

const SnsBox = styled.div`
  width: 100%;
  height:18.063rem;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  margin-bottom: 3.438rem;
`;

const SnsBoxNoConnect = styled.div`
  width: 100%;
  height: 8.125rem;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  margin-bottom: 3.438rem;
`;

const SnsBoxTop = styled.div`
  width:100%;
  height:3.188rem ;
  background-color: #eef3ff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  align-items: center;
`;

const SnsIcon = styled.div`
  margin-left:.875rem;
  margin-right:.688rem;
`;

const SnsName = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
`;

const SnsConnectBox = styled.div`
  width:100%;
  height:5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted #eaeaea;
`;

const SnsProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SnsCircle = styled.div`
  width: 2.813rem;
  height: 2.813rem;
  background-color: orange;
  border-radius: 10rem;
  margin-left: 3.25rem;
  margin-right:1rem;
`;

const SnsUserName = styled.h1`
  width: 5rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #191919;
`;

const SnsPageName = styled.h1`
  width: 6rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #191919;
`;

const ConnectTime = styled.h1`
  width: 18.375rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #191919;
`;

const ConnectIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3.188rem;
`;

const ConnectIconBox = styled.div`
  cursor: pointer;
`;

const SnsDisConnectBox = styled.div`
  width:100%;
  height:5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted #eaeaea;
`;

const SnsDisUserName = styled.h1`
  width: 5rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #676767;
`;

const SnsDisPageName = styled.h1`
  width: 6rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #676767;
`;

const SnsDisTime = styled.h1`
  width: 18.375rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #676767;
`;

const SnsAddBox = styled.div`
  width:100%;
  height:5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Both1 = styled.h1`
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #191919;
  margin-top: 5.063rem;
  margin-bottom: 5.625rem;
`;

export default function Connect() {
  const MenuColor = '#3C4165';
  const NameColor = '#333';
  return (
    <Wrapper>
      <Sidebar MenuColor={MenuColor} NameColor={NameColor}/>

      <ContentWrapper>
        <ConnectWrapper>
          
          <TitleWrapper>
            <TitleLine/>
            <Titleh1>채널 연동하기</Titleh1>
          </TitleWrapper>

          {/* Facebook 박스 영역 시작 */}
          <SnsBox>
            <SnsBoxTop>
              <SnsIcon><FaceBookS/></SnsIcon>
              <SnsName>페이스북 (페이지 / 그룹)</SnsName>
            </SnsBoxTop>

            {
              <SnsConnectBox>
                <SnsProfileWrapper>
                  <SnsCircle></SnsCircle>
                  <SnsUserName>Linkr Kim</SnsUserName>
                </SnsProfileWrapper>
                <SnsPageName>페이스북 페이지</SnsPageName>
                <ConnectTime>2022년 3월 23일 15시 35분에 연결 되었습니다.</ConnectTime>
                <ConnectIconWrapper>
                  <ConnectIconBox style={{marginRight:'.875rem'}}><ConnectIcon/></ConnectIconBox>
                  <ConnectIconBox style={{marginRight:'.875rem'}}><Reconnect/></ConnectIconBox>
                  <ConnectIconBox><Reconnect/></ConnectIconBox>
                </ConnectIconWrapper>
              </SnsConnectBox>
            } {/*sns 연결시 보일 박스 */}

            {
              <SnsDisConnectBox>
                <SnsProfileWrapper>
                  <SnsCircle style={{backgroundColor:'gray'}}></SnsCircle>
                  <SnsDisUserName>Linkr</SnsDisUserName>
                </SnsProfileWrapper>
                <SnsDisPageName>페이스북 그룹</SnsDisPageName>
                <SnsDisTime>인증이 만료되었습니다.</SnsDisTime>
                <ConnectIconWrapper>
                  <ConnectIconBox style={{marginRight:'.875rem'}}><Disconnect/></ConnectIconBox>
                  <ConnectIconBox style={{marginRight:'.875rem'}}><Reconnect/></ConnectIconBox>
                  <ConnectIconBox><Reconnect/></ConnectIconBox>
                </ConnectIconWrapper>
              </SnsDisConnectBox> 
            } {/*sns 연결해제시 보일 박스 */}    

            {
              <SnsAddBox>
                <ConnectIconBox><DotIcon/></ConnectIconBox>
              </SnsAddBox>
            } {/*sns 추가 연결시 보일 박스 */}

          </SnsBox>
          {/* Facebook 박스 영역 끝 */}


          {/* Instargram 박스 영역 시작 */}
          <SnsBoxNoConnect>
            <SnsBoxTop>
              <SnsIcon><FaceBookS/></SnsIcon>
              <SnsName>인스타그램 (비즈니스계정 / 프로필)</SnsName>
            </SnsBoxTop>

            <SnsAddBox>
              <ConnectIconBox><DotIcon/></ConnectIconBox>
            </SnsAddBox>
          </SnsBoxNoConnect> 
          {/*Instargram 박스 영역 끝 */}

          
          {/* Twitter 박스 영역 시작 */}
          <SnsBoxNoConnect>
            <SnsBoxTop>
              <SnsIcon><TwitS/></SnsIcon>
              <SnsName>인스타그램 (비즈니스계정 / 프로필)</SnsName>
            </SnsBoxTop>

            <SnsAddBox>
              <ConnectIconBox><DotIcon/></ConnectIconBox>
            </SnsAddBox>
          </SnsBoxNoConnect> 
          {/* Twitter 박스 영역 끝 */}

          
          <Ex/>
          

          <Both1>이후 더 많은 SNS 채널이 연동 될 예정입니다.</Both1>

        </ConnectWrapper>
      </ContentWrapper>
    </Wrapper>

  )
}
