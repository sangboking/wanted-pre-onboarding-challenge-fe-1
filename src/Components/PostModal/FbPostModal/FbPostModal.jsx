import React from 'react';

import FaceBookLogo from '../../../SvgIcons/FaceBookLogo';
import FaceBookS from '../../../SvgIcons/FaceBookS';
import InstaSoff from '../../../SvgIcons/InstaSoff';
import TwitSoff from '../../../SvgIcons/TwitSoff';
import CautionIcon from '../../../SvgIcons/CautionIcon';
import * as styled from './FbPostModal.style';


export default function FbPostModal({...props}) { 
  
  return (
    <styled.LeftPostBox>
      <styled.PostBoxHead>
        <styled.FaceBookLogo><FaceBookLogo width={80} height={30}/></styled.FaceBookLogo>

        <styled.SnsIconWrapper>
          <styled.SnsIcon onClick={()=>{props.setTabState(1)}}><FaceBookS/></styled.SnsIcon>
          <styled.SnsIcon onClick={()=>{props.setTabState(2)}}><InstaSoff/></styled.SnsIcon>
          <styled.SnsIcon onClick={()=>{props.setTabState(3)}}><TwitSoff/></styled.SnsIcon>
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
