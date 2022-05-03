import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loadingAtom, postImgAtom, postImgPreviewAtom, postTextAtom } from '../../../atom';
import DotdotdotIcon from '../../../SvgIcons/DotdotdotIcon';
import FaceBookS from '../../../SvgIcons/FaceBookS';
import InstaS from '../../../SvgIcons/InstaS';
import LocationIcon from '../../../SvgIcons/LocationIcon';
import SmileIcon from '../../../SvgIcons/SmileIcon';
import TwitS from '../../../SvgIcons/TwitS';
import ImgIcon from '../../../SvgIcons/ImgIcon';
import ImgXIcon from '../../../SvgIcons/ImgXIcon';
import ImageUploadIcon from '../../../SvgIcons/ImageUploadIcon';
import * as styled from './PostModalRight.style';
import { changeBytes, fbPostOnclick, instaPostOnclick, twitPostOnclick } from '../../../actions/action';
import CautionIcon from '../../../SvgIcons/CautionIcon';
import PostLimitModal from '../../PostLimitModal/PostLimitModal';

export default function PostModalRight({...props}) {
  const [fbPostState, setFbPostState] = useState(true);
  const [instaPostState, setInstaPostState] = useState(true);
  const [twitPostState, setTwitPostState] = useState(true);
  const [cautionModal, setCautionModal] = useState(false);
  const [fileCautionModal, setFileCautionModal] = useState(false);
  const [postText, setPostText] = useRecoilState(postTextAtom);
  const [imgFile, setImgFile] = useRecoilState(postImgAtom);
  const [postImgPreview, setPostImgPreview] = useRecoilState(postImgPreviewAtom);
  const setLoading = useSetRecoilState(loadingAtom);
  const {brandId} = useParams();
  
  const getPostText = (e) => {
    setPostText(e.target.value);
  };

  const deleteImg = (e) => {
    const filterImg = imgFile.filter((item,index)=> index !==e);
    const filterPreviewImg = postImgPreview.filter((item,index)=> index !==e);
    setImgFile(filterImg);
    setPostImgPreview(filterPreviewImg);
  };

  const uploadFile = (e) => {
    const imgArr = Array.from(e.target.files);
    setImgFile(imgArr);
    console.log(imgArr);
    setPostImgPreview([]);
    for(let i=0; i<e.target.value.length; i++){
      if(e.target.files[i]){
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
  };
 
  const fbPost = async () => {
    setLoading(true);
    var imgInfo ;
    if(imgFile ?? false){
      const fd = new FormData()
      imgFile.map((img,index) => {
        fd.append('source',img)
      })
      await axios({
        method:'post',
        url:`/api/brands/${brandId}/image`,
        data:fd,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        console.log(response);
        imgInfo = response.data.result
      })
    }
    const postData = {
      content : postText,
      facebookPost : fbPostState,
      instagramPost : false,
      twitterPost : twitPostState,
      postDate : new Date(),
      postNow : true,
      image : imgInfo
    }
    await axios.post(`/api/brands/${brandId}/posts`, JSON.stringify(postData),{headers:{"Content-Type":`application/json`}})
    .then((response) => {
      console.log(response);
      setLoading(false);
      toast.success("페이스북에 글을 게시하였습니다!",{
        position: toast.POSITION.TOP_CENTER,
        autoClose:1000,
        closeOnClick:true,
        progress:undefined
      })
    })
    .catch(() => {
      alert('게시에 오류가 발생하였습니다.');
      setLoading(false);
    })
  };
 
  return (
    <styled.RightPostBox>
               
      <styled.PostBoxHead>
        <styled.UserProfileWrapper>
         
          { 
            props.data.result.faceBookConnectedId  &&
            <styled.UserFbImage onClick={()=> fbPostOnclick(setFbPostState,fbPostState)} fbPostState={fbPostState}>
              <styled.UserProfileSns>
                <FaceBookS width={16} height={16}/>
              </styled.UserProfileSns>
            </styled.UserFbImage>
          }
          
          {
            props.data.result.instagramConnectedId &&
            <styled.UserInstaImage onClick={() => instaPostOnclick(setInstaPostState,instaPostState)} instaPostState={instaPostState}>
              <styled.UserProfileSns><InstaS width={16} height={16}/></styled.UserProfileSns>
            </styled.UserInstaImage>
          }
         
          {
            props.data.result.twitterConnectedId &&
            <styled.UserTwitImage  onClick={() => twitPostOnclick(setTwitPostState,twitPostState)} twitPostState={twitPostState}>
              <styled.UserProfileSns><TwitS width={16} height={16}/></styled.UserProfileSns>
            </styled.UserTwitImage>
          }
        </styled.UserProfileWrapper>
        <styled.TstorageWrapper>
        <styled.DotIconWrapper><DotdotdotIcon/></styled.DotIconWrapper>
        </styled.TstorageWrapper>
      </styled.PostBoxHead>

      <styled.ImgTitleWrapper>
       <styled.ImgTitle>포스팅 내용</styled.ImgTitle>
       <styled.LimitWrapper>
         <styled.PostTextLimit>
           {
            twitPostState ? `${postText.length}/280` : `${postText.length}/5000`
           }
          </styled.PostTextLimit>
          <styled.CautionIconWrapper
            onMouseEnter={() => setCautionModal(true)}
            onMouseLeave={() => setCautionModal(false)}
          >
            <CautionIcon width={12} height={12}/>
          </styled.CautionIconWrapper>
       </styled.LimitWrapper>

       {/* {cautionModal && <PostLimitModal />} */} 
      </styled.ImgTitleWrapper>

      <styled.TextAreaWrapper>
        <styled.TextArea placeholder='포스팅 내용을 입력하세요.' maxLength='5000' value={postText} onChange={getPostText}/>

        <styled.TextIconWrapper>
          <styled.LocationIconWrapper><LocationIcon width={17} height={17}/></styled.LocationIconWrapper>
          <styled.SmileIconWrapper><SmileIcon width={17} height={17}/></styled.SmileIconWrapper>
        </styled.TextIconWrapper>
      </styled.TextAreaWrapper>


      <styled.ImgTitleWrapper>
       <styled.ImgTitle>파일첨부</styled.ImgTitle>
       <styled.LimitWrapper>
         <styled.PostTextLimit>
           {
             twitPostState ? `${imgFile?.length || 0}/4` : `${imgFile?.length}/10`
           }
         </styled.PostTextLimit>
         <styled.CautionIconWrapper
          onMouseEnter={() => setFileCautionModal(true)}
          onMouseLeave={() => setFileCautionModal(false)} 
         >
           <CautionIcon width={12} height={12}/>
         </styled.CautionIconWrapper>
       </styled.LimitWrapper>

       {fileCautionModal && <PostLimitModal />}
      </styled.ImgTitleWrapper>

        <styled.FileWrapper>
          <styled.FileLayOut>
            {
              imgFile && 
              <styled.ImgUl>
                {
                  imgFile.map((a,i) => 
                    <styled.ImgLi key={i}>
                      <>
                        <styled.ImgIconWrapper>
                          <ImgIcon width={15} height={15}/>
                        </styled.ImgIconWrapper>
                        <styled.ImgName>{a.name}</styled.ImgName>
                        <styled.ImgVolume>{changeBytes(a.size)}</styled.ImgVolume>
                      </>
                      <styled.XIconWrapper onClick={() => deleteImg(i)}><ImgXIcon width={8} height={8}/></styled.XIconWrapper>
                    </styled.ImgLi>
                  )
                }
              </styled.ImgUl>
            }
          <styled.FileUpload id='file' type='file' multiple onChange={uploadFile}></styled.FileUpload>
          </styled.FileLayOut>
          <styled.ImageIconWrapper htmlFor='file'><ImageUploadIcon width={13} height={13}/></styled.ImageIconWrapper>
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

      <ToastContainer position='top-center'/>

    </styled.RightPostBox>
  )
}
