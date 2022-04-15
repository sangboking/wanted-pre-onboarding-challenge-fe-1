import React from 'react'
import { useQuery } from 'react-query';
import * as styled from './FbPostModal.style'
import { useRecoilState } from 'recoil';
import {postModalAtom} from '../SceduleAtoms';
import FaceBookS from '../../SvgIcons/FaceBookS';
import CautionIcon from '../../SvgIcons/CautionIcon';
import LocationIcon from '../../SvgIcons/LocationIcon';
import SmileIcon from '../../SvgIcons/SmileIcon';
import FaceBookLogo from '../../SvgIcons/FaceBookLogo';
import InstarSoff from '../../SvgIcons/InstarSoff';
import TwitSoff from '../../SvgIcons/TwitSoff';

export default function PostModal() {

  const [postModal,setPostModal] = useRecoilState(postModalAtom);

  const postModalClick = ()=>{
    return setPostModal(!postModal)
  }

  const { data, isLoading} = useQuery();
  return (
    <>
      {
         postModal === true 
         ?
         <styled.ModalBack>
           <styled.PostBox>
             <styled.LeftPostBox>
               <styled.PostBoxHead>
                 <styled.FaceBookLogo><FaceBookLogo width={100} height={30}/></styled.FaceBookLogo>
     
                 <styled.SnsIconWrapper>
                   <styled.SnsIcon><FaceBookS/></styled.SnsIcon>
                   <styled.SnsIcon><InstarSoff/></styled.SnsIcon>
                   <TwitSoff/>
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
 
             <styled.VerticalLine/>
             
 
             <styled.RightPostBox>
               
               <styled.PostBoxHead>
                 <styled.SnsIconWrapper>
                   <styled.SnsBigIcon src='/assets/Facebook_big.png'/>
                   <styled.SnsBigIcon src='/assets/Instargram_big.png'/>
                   <styled.SnsBigIcon src='/assets/Twiter_big.png'/>
                 </styled.SnsIconWrapper>
 
                 <styled.TstorageWrapper>
                   {/* 오른쪽 상단 ... 복제,삭제 버튼 들어갈곳 */}
                 </styled.TstorageWrapper>
               </styled.PostBoxHead>
 
               <styled.ImgTitle>포스팅 내용</styled.ImgTitle>
 
               <styled.TextAreaWrapper>
                 <styled.TextArea placeholder='포스팅 내용을 입력하세요.' maxLength='5000'/>
 
                 <styled.TextIconWrapper>
                   <styled.LocationIconWrapper><LocationIcon width={17} height={17}/></styled.LocationIconWrapper>
                   <styled.SmileIconWrapper><SmileIcon width={17} height={17}/></styled.SmileIconWrapper>
                 </styled.TextIconWrapper>
               </styled.TextAreaWrapper>
 
               <styled.ImgTitle>파일첨부</styled.ImgTitle>
               <styled.FileWrapper>
                <styled.FileTitle>이미지 또는 동영상을 여기에 끌어다 놓으세요</styled.FileTitle>
                <styled.FileButton>직접 업로드</styled.FileButton>
               </styled.FileWrapper>
               <styled.Line/>
 
               <styled.UploadTitle>업로드 날짜를 선택하세요.</styled.UploadTitle>
 
               <styled.RadioButtonWrapper>
                 <styled.RadioButton type='radio' name='1' defaultChecked/>
                 <styled.RadioButtonIntro>즉시</styled.RadioButtonIntro>
                 <styled.RadioButton type='radio' name='1'/>
                 <styled.RadioButtonIntro>예약</styled.RadioButtonIntro>
               </styled.RadioButtonWrapper>
 
 
               <styled.ButtonWrapper>
                 <styled.CancelButton  onClick={postModalClick}>취소</styled.CancelButton>
                 <styled.PostButton2>저장</styled.PostButton2>
               </styled.ButtonWrapper>
 
             </styled.RightPostBox>
           </styled.PostBox>
       </styled.ModalBack>
        :null
       }
    </>
  )
}

