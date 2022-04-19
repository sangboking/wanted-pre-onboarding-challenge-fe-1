import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { getBrand } from '../../../apis/api';
import { postImgAtom, postImgPreviewAtom, postTextAtom } from '../../../atom';
import DotdotdotIcon from '../../../SvgIcons/DotdotdotIcon';
import FaceBookS from '../../../SvgIcons/FaceBookS';
import InstaS from '../../../SvgIcons/InstaS';
import LocationIcon from '../../../SvgIcons/LocationIcon';
import SmileIcon from '../../../SvgIcons/SmileIcon';
import TwitS from '../../../SvgIcons/TwitS';
import * as styled from './PostModalRight.style';

export default function PostModalRight({...props}) {
  
  const [postText, setPostText] = useRecoilState(postTextAtom);
  const [imgFile, setImgFile] = useRecoilState(postImgAtom);
  const [postImgPreview, setPostImgPreview] = useRecoilState(postImgPreviewAtom);
 
  const getPostText = (e) => {
    setPostText(e.target.value);
  };

  const handleImgFile = (e) => {
    setImgFile(e.target.value);
    console.log(imgFile)
    setPostImgPreview([]);
    for(let i=0; i<e.target.value.length; i++){
      if(e.target.value[i]){
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onloadend = () => {
        const preview = reader.result;
        if(preview){
          const basePreview = preview.toString();
          setPostImgPreview(imgPreview => [...imgPreview,basePreview])
          }
        }
      }
    }
  }

  const {data:brandData} = useQuery('brandId',getBrand);
 
  const brandImagePost = async (e) => {
    e.preventDefault()
    const file = imgFile;
    const fd = new FormData();
    fd.append('file',file)
    await axios.post(`api/brands/${brandData.result[2].id}/file`,fd,{headers:{"Content-Type": `multipart/form-data`}})
    .then((response) => {
      console.log(response)
    })
  }
 
  const fbPost = async () => {
    const postData = {
      content : postText,
      facebookPost : true,
      instagramPost : false,
      twitterPost : false,
      postDate : new Date(),
      postNow : true,
      image : [{imageId:0}]
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
        <styled.TextArea placeholder='포스팅 내용을 입력하세요.' maxLength='5000' value={postText} onChange={getPostText}/>

        <styled.TextIconWrapper>
          <styled.LocationIconWrapper><LocationIcon width={17} height={17}/></styled.LocationIconWrapper>
          <styled.SmileIconWrapper><SmileIcon width={17} height={17}/></styled.SmileIconWrapper>
        </styled.TextIconWrapper>
      </styled.TextAreaWrapper>


      <styled.ImgTitle>파일첨부</styled.ImgTitle>
        <styled.FileWrapper>
          <styled.FileTitle></styled.FileTitle>
          {
            postImgPreview ? null : <styled.FileLabel htmlFor='file'>직접 업로드</styled.FileLabel>
          }
          <styled.FileUpload id='file' type='file' multiple onChange={handleImgFile}></styled.FileUpload>
        </styled.FileWrapper>
        <button onClick={brandImagePost} type='submit'>이미지 전송</button>
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
