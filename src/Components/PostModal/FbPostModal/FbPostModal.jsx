import React from 'react';
import FaceBookLogo from '../../../SvgIcons/FaceBookLogo';
import FaceBookS from '../../../SvgIcons/FaceBookS';
import InstaSoff from '../../../SvgIcons/InstaSoff';
import TwitSoff from '../../../SvgIcons/TwitSoff';
import LikeIcon from '../../../SvgIcons/LikeIcon';
import CommentIcon from '../../../SvgIcons/CommentIcon';
import ShareIcon from '../../../SvgIcons/ShareIcon';
import CautionIcon from '../../../SvgIcons/CautionIcon';
import * as styled from './FbPostModal.style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postImgPreviewAtom, postTextAtom } from '../../../atom';


export default function FbPostModal({...props}) { 
  const postText = useRecoilValue(postTextAtom);
  const [postImgPreview, setPostImgPreview] = useRecoilState(postImgPreviewAtom);
  
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

        {
          postText ? <styled.PostTitle>{postText}</styled.PostTitle> : <styled.PostTitle>포스팅 내용을 입력하세요.</styled.PostTitle>
        }

        {
          postText || postImgPreview ? 
          null : 
          <styled.ContentBox>미리보기 화면은 실제 포스팅과 다를수 있음을 알려드립니다.</styled.ContentBox>
        }

        {
          postImgPreview ?
          <styled.PreviewImgWrapper>
            {
              postImgPreview.map((img,i) => {
                return(
                  <styled.PreviewImg img={img} key={i}></styled.PreviewImg>
                )
              })
            }
          </styled.PreviewImgWrapper> 
          : null
        }
         <styled.Line/>

         <styled.ContentBottomWrapper>
           <styled.ContentIconWrapper>
             <LikeIcon/>
             <styled.ContentIconName>좋아요</styled.ContentIconName>

             <CommentIcon/>
             <styled.ContentIconName>댓글달기</styled.ContentIconName>
             
             <ShareIcon/>
             <styled.ContentIconName style={{marginRight:'0'}}>공유하기</styled.ContentIconName>
           </styled.ContentIconWrapper>
         </styled.ContentBottomWrapper>
      </styled.PostContent>

      <styled.CautionWrapper>
        <CautionIcon/>
        <styled.CautionIntro>채널별 유의사항 확인하기.</styled.CautionIntro>
      </styled.CautionWrapper>
    </styled.LeftPostBox>
  )
}
