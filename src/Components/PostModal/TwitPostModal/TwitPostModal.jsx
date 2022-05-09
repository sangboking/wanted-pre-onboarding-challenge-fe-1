import React, { useState } from 'react';
import FaceBookSoff from '../../../SvgIcons/FaceBookSoff';
import CautionIcon from '../../../SvgIcons/CautionIcon';
import * as styled from './TwitPostModal.style';
import TwitS from '../../../SvgIcons/TwitS';
import InstaSoff from '../../../SvgIcons/InstaSoff';
import MessageTwitIcon from '../../../SvgIcons/MessageTwitIcon';
import FaceBookLogo from '../../../SvgIcons/FaceBookLogo';
import { useRecoilValue } from 'recoil';
import { postTextAtom } from '../../../atom';
import ReloadTwitIcon from '../../../SvgIcons/ReloadTwitIcon';
import HeartTwitIcon from '../../../SvgIcons/HeartTwitIcon';
import ShareTwitIcon from '../../../SvgIcons/ShareTwitIcon';
import CautionModal from '../../CautionModal/CautionModal';

export default function TwitPostModal({...props}) {
  const postText = useRecoilValue(postTextAtom);
  const [cautionModal, setCautionModal] = useState(false);

  return (
    <styled.LeftPostBox>
      <styled.PostBoxHead>
        <styled.TwitLogo><FaceBookLogo  width={80} height={30}/></styled.TwitLogo>

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

        {
          postText ? <styled.PostTitle>{postText}</styled.PostTitle> : 
          <styled.PostTitle>포스팅 내용을 입력하세요.</styled.PostTitle>
        }

        {
          postText ? null :
          <styled.ContentBox>미리보기 화면은 실제 포스팅과 다를 수 있음을 알려드립니다.</styled.ContentBox>
        }

        <styled.TwitIconWrapper>
          <styled.TwitIcon><MessageTwitIcon/></styled.TwitIcon>
          <styled.TwitIcon><ReloadTwitIcon/></styled.TwitIcon>
          <styled.TwitIcon><HeartTwitIcon/></styled.TwitIcon>
          <styled.TwitIcon><ShareTwitIcon/></styled.TwitIcon>
        </styled.TwitIconWrapper>
      </styled.PostContent>

      <styled.CautionWrapper>
        <CautionIcon/>
        <styled.CautionIntro
          onMouseEnter={() => {setCautionModal(true)}} 
          onMouseLeave={() => {setCautionModal(false)}}
        >채널별 유의사항 확인하기.
         {cautionModal && 
          <CautionModal />
         }
        </styled.CautionIntro>
      </styled.CautionWrapper>
    </styled.LeftPostBox>
  )
}
