import React, { useState } from 'react'
import * as styled from './SceduleWeek.style'
import Sidebar from '../../../Components/Sidebar/SideBar';
import {Link, useParams} from 'react-router-dom';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {postModalAtom, sceduleMenuColorAtom, sceduleColorAtom} from '../../../atom';
import WeekCalendar from '../WeekCalendar/WeekCalendar';
import moment from 'moment';
import PostingIcon from '../../../SvgIcons/PostingIcon';
import LeftBtnIcon from '../../../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../../../SvgIcons/RightBtnIcon';
import CloseIcon from '../../../SvgIcons/CloseIcon';
import PostModal from '../../../Components/PostModal/PostModal';
import { postImgAtom, postImgPreviewAtom, postTextAtom } from '../../../atom';

export default function SceduleWeek() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const setPostText = useSetRecoilState(postTextAtom);
  const setPostImgPreview = useSetRecoilState(postImgPreviewAtom);
  const setPostImg = useSetRecoilState(postImgAtom);
  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);
  
  const {brandId} = useParams();

  const postModalClick = ()=>{
    setPostModal(!postModal);
    setPostText('');
    setPostImgPreview(null);
    setPostImg(null);
  }

  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const startDate = today.clone().startOf('week'); 
  const endDate = today.clone().endOf('week'); 

  const prevWeek = () => {
    setMoment(getMoment.clone().subtract(1, 'week'))
  }; //이전주 onClick 함수

  const nextWeek = () => {
    setMoment(getMoment.clone().add(1, 'week'))
  }; //이전주 onClick 함수

  
  return (
    <styled.Wrapper postModal={postModal}>

      <Sidebar postModal={postModal} sceduleColor={sceduleColor} sceduleMenuColor={sceduleMenuColor}/>

      <styled.ContentWrapper>
        <PostModal/>

        <styled.Content>
          <styled.Title>
            <Link to={{pathname:`/sceduleWeek/${brandId}`}} style={{ textDecoration:'none' }}><styled.Button>Week</styled.Button></Link>
            <Link to={{pathname:`/sceduleMonth/${brandId}`}} style={{ textDecoration:'none' }}><styled.Button2>Month</styled.Button2></Link>
            <Link to={{pathname:`/sceduleStream/${brandId}`}} style={{ textDecoration:'none' }}><styled.Button2>Stream</styled.Button2></Link>

            <styled.PrevIcon  onClick={()=>{prevWeek()}} style={{marginLeft:'1.875rem'}}><LeftBtnIcon /></styled.PrevIcon>
            <styled.NowDate>{startDate.format('M월D일')+endDate.format(' ~ M월D일')}</styled.NowDate>
            <styled.PrevIcon onClick={()=>{nextWeek()}}><RightBtnIcon/></styled.PrevIcon>

            <styled.RightButtonWrapper>
              { postModal && <styled.CloseIconWrapper onClick={postModalClick}><CloseIcon/></styled.CloseIconWrapper>}
              <styled.PostButton onClick={postModalClick} postModal={postModal}><PostingIcon width={14} height={14}/><styled.Posth1>포스팅 작성하기</styled.Posth1></styled.PostButton>
            </styled.RightButtonWrapper>
          </styled.Title>

          <WeekCalendar endDate={endDate} startDate={startDate}/>

          

        </styled.Content>
      </styled.ContentWrapper>

     
    </styled.Wrapper>
  )
}
