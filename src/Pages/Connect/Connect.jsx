import React from 'react';
import * as styled from './Connect.style';
import Sidebar from '../../Components/Sidebar/SideBar';
import ConnectIcon from '../../SvgIcons/ConnectIcon';
import FaceBookS from '../../SvgIcons/FaceBookS';
import TwitS from '../../SvgIcons/TwitS';
import Reconnect from '../../SvgIcons/Reconnect';
import Disconnect from '../../SvgIcons/DisconnectIcon';
import DotIcon from '../../SvgIcons/DotIcon';

export default function Connect() {
  const MenuColor = '#3C4165';
  const NameColor = '#333';

  return (
    <styled.Wrapper>
      <Sidebar MenuColor={MenuColor} NameColor={NameColor}/>

      <styled.ContentWrapper>
        <styled.ConnectWrapper>
          
          <styled.TitleWrapper>
            <styled.TitleLine/>
            <styled.Titleh1>채널 연동하기</styled.Titleh1>
          </styled.TitleWrapper>

          {/* Facebook 박스 영역 시작 */}
          <styled.SnsBox>
            <styled.SnsBoxTop>
              <styled.SnsIcon><FaceBookS/></styled.SnsIcon>
              <styled.SnsName>페이스북 (페이지 / 그룹)</styled.SnsName>
            </styled.SnsBoxTop>

            {
              <styled.SnsConnectBox>
                <styled.SnsProfileWrapper>
                  <styled.SnsCircle></styled.SnsCircle>
                  <styled.SnsUserName>Linkr Kim</styled.SnsUserName>
                </styled.SnsProfileWrapper>
                <styled.SnsPageName>페이스북 페이지</styled.SnsPageName>
                <styled.ConnectTime>2022년 3월 23일 15시 35분에 연결 되었습니다.</styled.ConnectTime>
                <styled.ConnectIconWrapper>
                  <styled.ConnectIconBox style={{marginRight:'.875rem'}}><ConnectIcon/></styled.ConnectIconBox>
                  <styled.ConnectIconBox style={{marginRight:'.875rem'}}><Reconnect/></styled.ConnectIconBox>
                  <styled.ConnectIconBox><Reconnect/></styled.ConnectIconBox>
                </styled.ConnectIconWrapper>
              </styled.SnsConnectBox>
            } {/*sns 연결시 보일 박스 */}

            {
              <styled.SnsDisConnectBox>
                <styled.SnsProfileWrapper>
                  <styled.SnsCircle style={{backgroundColor:'gray'}}></styled.SnsCircle>
                  <styled.SnsDisUserName>Linkr</styled.SnsDisUserName>
                </styled.SnsProfileWrapper>
                <styled.SnsDisPageName>페이스북 그룹</styled.SnsDisPageName>
                <styled.SnsDisTime>인증이 만료되었습니다.</styled.SnsDisTime>
                <styled.ConnectIconWrapper>
                  <styled.ConnectIconBox style={{marginRight:'.875rem'}}><Disconnect/></styled.ConnectIconBox>
                  <styled.ConnectIconBox style={{marginRight:'.875rem'}}><Reconnect/></styled.ConnectIconBox>
                  <styled.ConnectIconBox><Reconnect/></styled.ConnectIconBox>
                </styled.ConnectIconWrapper>
              </styled.SnsDisConnectBox> 
            } {/*sns 연결해제시 보일 박스 */}    

            {
              <styled.SnsAddBox>
                <styled.ConnectIconBox><DotIcon/></styled.ConnectIconBox>
              </styled.SnsAddBox>
            } {/*sns 추가 연결시 보일 박스 */}

          </styled.SnsBox>
          {/* Facebook 박스 영역 끝 */}


          {/* Instagram 박스 영역 시작 */}
          <styled.SnsBoxNoConnect>
            <styled.SnsBoxTop>
              <styled.SnsIcon><FaceBookS/></styled.SnsIcon>
              <styled.SnsName>인스타그램 (비즈니스계정 / 프로필)</styled.SnsName>
            </styled.SnsBoxTop>

            <styled.SnsAddBox>
              <styled.ConnectIconBox><DotIcon/></styled.ConnectIconBox>
            </styled.SnsAddBox>
          </styled.SnsBoxNoConnect> 
          {/*Instagram 박스 영역 끝 */}

          
          {/* Twitter 박스 영역 시작 */}
          <styled.SnsBoxNoConnect>
            <styled.SnsBoxTop>
              <styled.SnsIcon><TwitS/></styled.SnsIcon>
              <styled.SnsName>인스타그램 (비즈니스계정 / 프로필)</styled.SnsName>
            </styled.SnsBoxTop>

            <styled.SnsAddBox>
              <styled.ConnectIconBox><DotIcon/></styled.ConnectIconBox>
            </styled.SnsAddBox>
          </styled.SnsBoxNoConnect> 
          {/* Twitter 박스 영역 끝 */}

          <styled.Both1>이후 더 많은 SNS 채널이 연동 될 예정입니다.</styled.Both1>

        </styled.ConnectWrapper>
      </styled.ContentWrapper>
    </styled.Wrapper>

  )
}
