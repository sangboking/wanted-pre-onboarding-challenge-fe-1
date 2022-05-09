import React from 'react';
import * as styled from './MyInfo.style';
import Sidebar from '../../Components/Sidebar/SideBar';

export default function MyInfo() {
  const InfoMenuColor = '#3C4165';
  const InfoNameColor = '#333';

  return (
    <styled.Wrapper>
      <Sidebar InfoMenuColor={InfoMenuColor} InfoNameColor={InfoNameColor}/>

      <styled.ContentWrapper>
        <styled.InfoWrapper>
          
          <styled.TitleWrapper>
            <styled.TitleLine/>
            <styled.Titleh1>내 정보 조회/수정</styled.Titleh1>
          </styled.TitleWrapper>

          <styled.InfoBox>

          </styled.InfoBox>

        </styled.InfoWrapper>

      </styled.ContentWrapper>


    </styled.Wrapper>
  )
}
