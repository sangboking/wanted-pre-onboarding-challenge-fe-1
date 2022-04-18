import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { getBrand } from '../../../apis/api';
import { postTextAtom } from '../../../atom';
import DotdotdotIcon from '../../../SvgIcons/DotdotdotIcon';
import FaceBookS from '../../../SvgIcons/FaceBookS';
import InstaS from '../../../SvgIcons/InstaS';
import LocationIcon from '../../../SvgIcons/LocationIcon';
import SmileIcon from '../../../SvgIcons/SmileIcon';
import TwitS from '../../../SvgIcons/TwitS';
import * as styled from './PostModalRight.style';

export default function PostModalRight({...props}) {
  
  const [postText, setPostText] = useRecoilState(postTextAtom);
 
  const onChange = (e) => {
    setPostText(e.target.value);
  };

  const {data:brandData} = useQuery('brandId',getBrand);
 
  const fbPost = async () => {
    const postData = {
      content : postText,
      facebookPost : true,
      instagramPost : false,
      twitterPost : false,
      postDate : new Date(),
      postNow : true,
    }
    await axios.post(`api/brands/${brandData.result[2].id}/posts`, JSON.stringify(postData),{headers:{"Content-Type":`application/json`}})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      alert('게시에 오류가 발생하였습니다.');
    })

  }

  return (
    <styled.RightPostBox>
               
      <styled.PostBoxHead>
        <styled.UserProfileWrapper>
          <styled.UserProfileImage>
          <styled.UserProfileSns><FaceBookS width={16} height={16}/></styled.UserProfileSns>
          </styled.UserProfileImage>

          <styled.UserProfileImage>
          <styled.UserProfileSns><InstaS width={16} height={16}/></styled.UserProfileSns>
          </styled.UserProfileImage>
          <styled.UserProfileImage>
            <styled.UserProfileSns><TwitS width={16} height={16}/></styled.UserProfileSns>
          </styled.UserProfileImage>
        </styled.UserProfileWrapper>
        <styled.TstorageWrapper>
        <styled.DotIconWrapper><DotdotdotIcon/></styled.DotIconWrapper>
        </styled.TstorageWrapper>
      </styled.PostBoxHead>

      <styled.ImgTitle>포스팅 내용</styled.ImgTitle>

      <styled.TextAreaWrapper>
        <styled.TextArea placeholder='포스팅 내용을 입력하세요.' maxLength='5000' value={postText} onChange={onChange}/>

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
        <styled.CancelButton  onClick={props.postModalClick}>취소</styled.CancelButton>
        <styled.PostButton2 onClick={fbPost}>게시</styled.PostButton2>
      </styled.ButtonWrapper>

    </styled.RightPostBox>
  )
}
