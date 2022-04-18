import React, { useState } from 'react'
import {Link} from 'react-router-dom'
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
import { getBrand, getFbPost } from '../../apis/api';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstaS from '../../SvgIcons/InstaS';
import TwitS from '../../SvgIcons/TwitS';
import { postTextAtom } from '../../atom';

export default function SceduleStream() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);
  const [postText, setPostText] = useRecoilState(postTextAtom);

  const postModalClick = ()=>{
     setPostModal(!postModal);
     setPostText('');
  }

  const [getMoment,setMoment] = useState(moment());

  const today = getMoment;

  const todayTime = today.format('YYYY년 M월 D일 h:mm');
  
  const prevMonth = () => {
    setMoment(getMoment.clone().subtract(1, 'month'))
  }; //이전달 onClick 함수

  const nextMonth = () => {
    setMoment(getMoment.clone().add(1, 'month'))
  }; //다음달 onClick 함수

  const {data:brandInfo, isLoading:brandLoading} = useQuery('brandData', getBrand,{refetchInterval:100000});

  const {data:fbPost, isLoading:fbPostLoading} = useQuery(['fbPostData',brandInfo?.result[2].id],
    () => getFbPost(brandInfo?.result[2].id),
    {
      enabled:!!brandInfo?.result[2].id
    });
  
  const loading = brandLoading || fbPostLoading;

  return (
    <styled.Wrapper  postModal={postModal}>
      <Sidebar sceduleColor={sceduleColor} sceduleMenuColor={sceduleMenuColor}/>

      <styled.ContentWrapper>
        

        <styled.Content>
          <PostModal/>

          <styled.Title>
            <Link to='/sceduleWeek'><styled.Button2>Week</styled.Button2></Link>
            <Link to='/sceduleMonth'><styled.Button2>Month</styled.Button2></Link>
            <Link to='/sceduleStream'><styled.Button>Stream</styled.Button></Link>

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
              loading ? <h1>페이스북 게시글을 불러오는 중입니다..</h1> :
                fbPost?.result.map((a,i) => {
                  return (
                    <styled.StreamContentWrapper key={i}>
                      
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
                        <styled.StreamBoxFbText>{loading ?<h1>로딩중 입니다.</h1>:fbPost?.result[i].content}</styled.StreamBoxFbText>
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
