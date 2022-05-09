import React, { useState } from 'react';
import FaceBookSoff from '../../../SvgIcons/FaceBookSoff';
import InstaS from '../../../SvgIcons/InstaS';
import TwitSoff from '../../../SvgIcons/TwitSoff';
import CautionIcon from '../../../SvgIcons/CautionIcon';
import * as styled from './InstaPreview.style';
import InstaLogo from '../../../SvgIcons/InstaLogo';
import HeartIcon from '../../../SvgIcons/HeartIcon';
import MessageIcon from '../../../SvgIcons/MessageIcon';
import ExportIcon from '../../../SvgIcons/ExportIcon';
import BookMarkIcon from '../../../SvgIcons/BookMarkIcon';
import { useRecoilValue } from 'recoil';
import { postTextAtom } from '../../../atom';
import CautionModal from '../../CautionModal/CautionModal';

export default function InstaPostModal(props) {
  const postText = useRecoilValue(postTextAtom);
  const [cautionModal, setCautionModal] = useState(false);

  return (
    <styled.LeftPostBox>
      <styled.PostBoxHead>
        <styled.InstaLogo><InstaLogo width={80} height={30}/></styled.InstaLogo>

        <styled.SnsIconWrapper>
          <styled.SnsIcon onClick={()=>{props.setTabState(1)}}><FaceBookSoff/></styled.SnsIcon>
          <styled.SnsIcon onClick={()=>{props.setTabState(2)}}><InstaS/></styled.SnsIcon>
          <styled.SnsIcon onClick={()=>{props.setTabState(3)}}><TwitSoff/></styled.SnsIcon>
        </styled.SnsIconWrapper>
      </styled.PostBoxHead>

      <styled.PostContent>
        <styled.UserWrapper>
          <styled.Circle>R</styled.Circle>
          <styled.UserName>Linkr Kim</styled.UserName>
        </styled.UserWrapper>

        { postText ? null : <styled.ContentBox>미리보기 화면은 실제 포스팅과 다를 수 있음을 알려드립니다.</styled.ContentBox>}

        <styled.IconWrapper>
          <styled.LeftIconWrapper>
            <styled.InstaIcon><HeartIcon/></styled.InstaIcon>
            <styled.InstaIcon><MessageIcon/></styled.InstaIcon>
            <styled.InstaIcon><ExportIcon/></styled.InstaIcon>
          </styled.LeftIconWrapper>

          <styled.InstaIcon style={{position:'absolute',right:'-19rem'}}><BookMarkIcon/></styled.InstaIcon>
        </styled.IconWrapper>

        { 
          postText ?
          <styled.PostTitle>{postText}</styled.PostTitle> :
          <styled.PostTitle>포스팅 내용을 입력하세요.</styled.PostTitle>
        }
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
