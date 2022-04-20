import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import * as styled from './SceduleStream.style'
import Sidebar from '../../Components/Sidebar/SideBar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postModalAtom, sceduleColorAtom, sceduleMenuColorAtom } from '../SceduleAtoms';
import moment from 'moment';
import PostModal from '../PostModal/PostModal';
import CloseIcon from '../../SvgIcons/CloseIcon';
import PostingIcon from '../../SvgIcons/PostingIcon';
import LeftBtnIcon from '../../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../../SvgIcons/RightBtnIcon';
import { useQuery } from 'react-query';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstaS from '../../SvgIcons/InstaS';
import TwitS from '../../SvgIcons/TwitS';
import { postImgPreviewAtom, postTextAtom } from '../../atom';
import { getFbPost } from '../../apis/api';

export default function SceduleStream() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const [postImgPreview, setPostImgPreview] = useRecoilState(postImgPreviewAtom);
  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);
  const [postText, setPostText] = useRecoilState(postTextAtom);
  const {brandId} = useParams();

  const postModalClick = ()=>{
     setPostModal(!postModal);
     setPostText('');
     setPostImgPreview(null);
  }

  const [getMoment,setMoment] = useState(moment());

  const today = getMoment;

  const todayTime = today.format('YYYY년 M월 D일 h:mm');
  
  const prevMonth = () => {
    setMoment(getMoment.clone().subtract(1, 'month'))
  }; 

  const nextMonth = () => {
    setMoment(getMoment.clone().add(1, 'month'))
  }; 

  const {data:fbPost, isLoading:fbPostLoading} = useQuery('fbPostData', () => getFbPost(brandId),
    {
      refetchOnWindowFocus : false,
    }
  );
  
  return (
    <styled.Wrapper  postModal={postModal}>
      <Sidebar sceduleColor={sceduleColor} sceduleMenuColor={sceduleMenuColor}/>

      <styled.ContentWrapper>
        

        <styled.Content>
          <PostModal/>

          <styled.Title>
            <Link to={{pathname:`/sceduleWeek/${brandId}`}}><styled.Button2>Week</styled.Button2></Link>
            <Link to={{pathname:`/sceduleMonth/${brandId}`}}><styled.Button2>Month</styled.Button2></Link>
            <Link to={{pathname:`/sceduleStream/${brandId}`}}><styled.Button>Stream</styled.Button></Link>

            <styled.PrevIcon  onClick={()=>{prevMonth()}} style={{marginLeft:'1.875rem'}}><LeftBtnIcon/></styled.PrevIcon>
            <styled.NowDate>{today.format('YYYY년 M월')}</styled.NowDate>
            <styled.PrevIcon onClick={()=>{ nextMonth() }}><RightBtnIcon/></styled.PrevIcon>

            <styled.RightButtonWrapper>
              <styled.CloseIconWrapper onClick={postModalClick}><CloseIcon/></styled.CloseIconWrapper>
              <styled.PostButton onClick={postModalClick} postModal={postModal}><PostingIcon width={14} height={14}/><styled.Posth1>포스팅 작성하기</styled.Posth1></styled.PostButton>
            </styled.RightButtonWrapper>
          </styled.Title>

          <styled.StreamWrapper>
            {
              fbPostLoading ? <h1>페이스북 게시글을 불러오는 중입니다..</h1> :
                fbPost?.result.map((post,i) => {
                  return (
                    <styled.StreamContentWrapper key={post}>
                      
                      <styled.StreamBox>
                        <styled.StreamBoxTitle>
                          <styled.StreamBoxTitleIcon>
                            <styled.StreamSnsIcon><FaceBookS/></styled.StreamSnsIcon>
                            <styled.StreamSnsIcon><InstaS/></styled.StreamSnsIcon>
                            <styled.StreamSnsIcon><TwitS/></styled.StreamSnsIcon>
                          </styled.StreamBoxTitleIcon>
                          <styled.StreamBoxDate>{todayTime}<styled.StreamButton>수정</styled.StreamButton></styled.StreamBoxDate>
                        </styled.StreamBoxTitle> 

                        <styled.StreamBoxFbPicture>1</styled.StreamBoxFbPicture>
                        <styled.StreamBoxFbText>{fbPostLoading ?<h1>로딩중 입니다.</h1>:fbPost?.result[post].content}</styled.StreamBoxFbText>
                      </styled.StreamBox>
                      
                      <styled.StreamNote>
                        <styled.NoteWrapper>
                          <styled.NoteTopLeft>Note</styled.NoteTopLeft>
                          <styled.NoteTopRight>History</styled.NoteTopRight>
                        </styled.NoteWrapper>
                        
                        <styled.NoteBottomWrapper placeholder='노트를 입력하고 엔터를 누르세요.'>
        
                        </styled.NoteBottomWrapper>
                      </styled.StreamNote>
                    </styled.StreamContentWrapper>
                  )
                })
            }
            
          </styled.StreamWrapper>

        </styled.Content>
      </styled.ContentWrapper>
    </styled.Wrapper>
  )
}
