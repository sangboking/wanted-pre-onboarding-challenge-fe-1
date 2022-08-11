import React from 'react'
import styled from 'styled-components'
import CautionIcon from '../SvgIcons/CautionIcon';
import MuiSwitch from './SceduleMui/MuiSwitch';
import FaceBookS from '../SvgIcons/FaceBookS';
import TwitS from '../SvgIcons/TwitS';
import { useRecoilState } from 'recoil';
import {postModalAtom} from './SceduleAtoms';
import LocationIcon from '../SvgIcons/LocationIcon';
import SmileIcon from '../SvgIcons/SmileIcon';


const ModalBack2 = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  left:0;top:0;
  background:rgba(0,0,0,0.6);
  display:block;
  z-index: 10;
`;

const PostBox = styled.div`
  position:absolute;
  top:0;left:0;
  right:0;bottom:0;
  margin:auto;
  width:56.125rem;
  height:54rem;
  background-color: #fff;
  border-radius: 60px;
  display: flex;
  padding-left:1.625rem;
  padding-right:1.625rem;
  /* box-shadow : rgba(0,0,0,0.5) 0 0 0 100vw; */
  z-index : 15;
  overflow: auto;

  @media screen and (max-width:1440px) {
   height:58rem;
  }
`;

const LeftPostBox = styled.div`
  width:27.5rem;
  height: 85%;
  /* padding:1rem ; */
  margin-top:3rem;
  margin-right:1.625rem;
`;

const PostBoxHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FaceBookImg = styled.img`
  width:100px;
  height:20px;
`;

const SnsIconWrapper = styled.div`
  display: flex;
  align-items:center ;
  justify-content:center ;
`;

const SnsIcon = styled.div`
  margin-right:1.25rem;
`;

const SnsBigIcon = styled.img`
  width:30px;
  height:30px;
  margin-right:2rem;
`;

const PostContent = styled.div`
  width:25.5rem;
  height:70%;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  margin-top:1.6rem;
  padding:1rem;
`;

const CautionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top:1.4rem;
`;

const CautionIntro = styled.h1`
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-left:.3rem;
`;

const UserWrapper = styled.div`
  display:flex ;
  margin-bottom:1.5rem ;
`;

const Circle = styled.div`
  width:3.125rem;
  height:3.125rem;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  border: solid 0.5px #fff;;
  margin-right: .5rem;
`;

const UserName = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #333;
  margin-top:.2rem;
`;

const PostTitle = styled.h1`
  font-size: 0.875rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #191919;
  margin-bottom:1.5rem;
  margin-left:.8rem;
`;

const ContentBox = styled.div`
  width:100%;
  height:65%;
  background-color: #f2f2f2;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #666;
`;

const VerticalLine = styled.div`
  width:.3px;
  height:90%;
  background-color:#eaeaea;
  margin-top:3rem;
  margin-right:1.625rem;
`;

const RightPostBox = styled.div`
  width:25.075rem;
  height:85%;
  margin-top:2.875rem;
`;

const TstorageWrapper = styled.div`
  display:flex;
  align-items: center;
  
`;

const TstorageIntro = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333;
`;

const TextAreaWrapper = styled.div`
  width:23.875rem;
  border-radius: 5px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  height:25%;
  padding:0.813rem 0.75rem 0 0.75rem;
  margin-top:.75rem;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width:22.875rem;
  height:65%;
  border: solid 1px #eaeaea;
  outline-color: #eaeaea; //text-area 포커스시 색깔
  background-color: #fff;
  resize: none;
  padding:.5rem .5rem 0 .5rem;
  &::placeholder{
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #191919;
  }
`;

const TextIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:1.125rem;
`;

const LocationIconWrapper = styled.div`
  display: flex;;
  margin-left: .4rem;
`;

const SmileIconWrapper = styled.div`
  margin-right:.4rem;
`;

const ImgTitle = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #191919;
  margin-top:1.5rem;
  margin-bottom:.875rem;
  margin-left:.3rem;
`;

const FileWrapper = styled.div`
  width:25.375rem;
  height:10rem;
  border-radius:5px ;
  border: solid 0.3px #eaeaea;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileTitle = styled.h1`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-align: center;
  color: #191919;
  margin-top:3.653rem;
  margin-bottom:0.75rem;
`;

const FileButton = styled.button`
  width: 6.375rem;
  height: 1.875rem;
  border-radius: 15px;
  background-color: #007aff;
  border:1px solid #007aff;
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

const Line = styled.div`
  width:25.375rem;
  height:.3px;
  background-color:#eaeaea;
  margin-top:2.5rem;
`;

const UploadTitle = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #191919;
  margin-top:2.5rem;
  margin-left:.3rem;
`;

const RadioButtonWrapper = styled.div`
  margin-top:1.25rem;
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`

`;

const RadioButtonIntro = styled.label`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-right: .875rem;
`;

const ButtonWrapper = styled.div`
  width:100%;
  display: flex;
  margin-top:2rem;
  justify-content: center;
`;

const CancelButton = styled.button`
  width: 12.375rem;
  height: 2.5rem;
  border-radius: 15px;
  border: solid 0.3px #999;
  background-color:#fff;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
  margin-right:1.5rem;
  cursor: pointer;
  &:hover{
    background-color: #112553;
    border:1px solid #112553;
    color:#fff;
    transition:.2s;
  }
  `;

const PostButton2 = styled.button`
  width: 12.375rem;
  height: 2.5rem;
  border-radius: 15px;
  background-color: #112553;
  border:1px solid #112553;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  cursor: pointer;
`;

export default function PostModal() {

  const [postModal,setPostModal] = useRecoilState(postModalAtom);

  const postModalClick = ()=>{
    return setPostModal(!postModal)
  }
  return (
    <>
      {
         postModal === false 
         ?null
         :<ModalBack2>
           {
             postModal===true
             ?
             <PostBox>
               <LeftPostBox>
                 <PostBoxHead>
                   <FaceBookImg src='/assets/FaceBooklogo.png'/>
       
                   <SnsIconWrapper>
                     <SnsIcon><FaceBookS/></SnsIcon>
                     <SnsIcon><TwitS/></SnsIcon>
                     <TwitS/>
                   </SnsIconWrapper>
                 </PostBoxHead>
       
                 <PostContent>
                   <UserWrapper>
                     <Circle>R</Circle>
                     <UserName>Linkr Kim</UserName>
                   </UserWrapper>
   
                   <PostTitle>포스팅 내용을 입력하세요.</PostTitle>
   
                   <ContentBox>미리보기 화면은 실제 포스팅과 다를 수 있음을 알려드립니다.</ContentBox>
                 </PostContent>
       
                 <CautionWrapper>
                   <CautionIcon/>
                   <CautionIntro>채널별 유의사항 확인하기.</CautionIntro>
                 </CautionWrapper>
               </LeftPostBox>
   
               <VerticalLine/>
               
   
               <RightPostBox>
                 
                 <PostBoxHead>
                   <SnsIconWrapper>
                     <SnsBigIcon src='/assets/Facebook_big.png'/>
                     <SnsBigIcon src='/assets/Instargram_big.png'/>
                     <SnsBigIcon src='/assets/Twiter_big.png'/>
                   </SnsIconWrapper>
   
                   <TstorageWrapper>
                     <TstorageIntro>임시저장</TstorageIntro>
                     <MuiSwitch/>
                   </TstorageWrapper>
                 </PostBoxHead>
   
                 <ImgTitle>포스팅 내용</ImgTitle>
   
                 <TextAreaWrapper>
                   <TextArea placeholder='포스팅 내용을 입력하세요.' maxLength='5000'/>
   
                   <TextIconWrapper>
                     <LocationIconWrapper><LocationIcon width={17} height={17}/></LocationIconWrapper>
                     <SmileIconWrapper><SmileIcon width={17} height={17}/></SmileIconWrapper>
                   </TextIconWrapper>
                 </TextAreaWrapper>
   
                 <ImgTitle>파일첨부</ImgTitle>
                 <FileWrapper>
                  <FileTitle>이미지 또는 동영상을 여기에 끌어다 놓으세요</FileTitle>
                  <FileButton>직접 업로드</FileButton>
                 </FileWrapper>
                 <Line/>
   
                 <UploadTitle>업로드 날짜를 선택하세요.</UploadTitle>
   
                 <RadioButtonWrapper>
                   <RadioButton type='radio' name='1' defaultChecked/>
                   <RadioButtonIntro>즉시</RadioButtonIntro>
                   <RadioButton type='radio' name='1'/>
                   <RadioButtonIntro>예약</RadioButtonIntro>
                 </RadioButtonWrapper>
   
   
                 <ButtonWrapper>
                   <CancelButton  onClick={postModalClick}>취소</CancelButton>
                   <PostButton2>저장</PostButton2>
                 </ButtonWrapper>
   
               </RightPostBox>
             </PostBox>
             :null
           }
         </ModalBack2>
       }
    </>
  )
}

