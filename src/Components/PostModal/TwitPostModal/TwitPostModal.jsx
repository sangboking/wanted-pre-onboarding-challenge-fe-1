import React from 'react';
import TwitLogo from '../../../SvgIcons/TwitLogo';
import FaceBookSoff from '../../../SvgIcons/FaceBookSoff';
import CautionIcon from '../../../SvgIcons/CautionIcon';
import * as styled from './TwitPostModal.style';
import TwitS from '../../../SvgIcons/TwitS';
import InstaSoff from '../../../SvgIcons/InstaSoff';

export default function TwitPostModal({...props}) {
  return (
    <styled.LeftPostBox>
      <styled.PostBoxHead>
        <styled.TwitLogo><TwitLogo  height={65}/></styled.TwitLogo>

        <styled.SnsIconWrapper>
          <styled.SnsIcon onClick={()=>{props.setTabState(1)}}><FaceBookSoff/></styled.SnsIcon>
          <styled.SnsIcon onClick={()=>{props.setTabState(2)}}><InstaSoff/></styled.SnsIcon>
          <styled.SnsIcon onClick={()=>{props.setTabState(3)}}><TwitS/></styled.SnsIcon>
        </styled.SnsIconWrapper>
      </styled.PostBoxHead>

      <styled.PostContent>
        <styled.UserWrapper>
          <styled.Circle>R</styled.Circle>
          <styled.UserName>Linkr Kim</styled.UserName>
        </styled.UserWrapper>

        <styled.PostTitle>포스팅 내용을 입력하세요.</styled.PostTitle>

        <styled.ContentBox>미리보기 화면은 실제 포스팅과 다를 수 있음을 알려드립니다.</styled.ContentBox>
      </styled.PostContent>

      <styled.CautionWrapper>
        <CautionIcon/>
        <styled.CautionIntro>채널별 유의사항 확인하기.</styled.CautionIntro>
      </styled.CautionWrapper>
    </styled.LeftPostBox>
  )
}
