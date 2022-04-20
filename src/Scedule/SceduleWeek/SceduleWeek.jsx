import React, { useState } from 'react'
import * as styled from './SceduleWeek.style'
import Sidebar from '../../Components/Sidebar/SideBar';
import {Link, useParams} from 'react-router-dom';
import {useRecoilState, useRecoilValue} from 'recoil';
import {postModalAtom, sceduleMenuColorAtom} from '../SceduleAtoms';
import { sceduleColorAtom } from '../SceduleAtoms';
import WeekCalendar from '../WeekCalendar/WeekCalendar';
import moment from 'moment';
import PostingIcon from '../../SvgIcons/PostingIcon';
import LeftBtnIcon from '../../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../../SvgIcons/RightBtnIcon';
import CloseIcon from '../../SvgIcons/CloseIcon';
import PostModal from '../PostModal/PostModal';
import { postImgPreviewAtom, postTextAtom } from '../../atom';

export default function SceduleWeek() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const [postText, setPostText] = useRecoilState(postTextAtom);
  const [postImgPreview, setPostImgPreview] = useRecoilState(postImgPreviewAtom);
  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);
  
  const {brandId} = useParams();

  // const timeOption = ["00","01","02","03","04","05","06","07","08","09","10",
  //               "11","12","13","14","15","16","17","18","19","20",
  //               "21","22","23","24"] //포스트 모달창 시간 배열
 
  const postModalClick = ()=>{
    setPostModal(!postModal);
    setPostText('');
    setPostImgPreview(null);
  }

  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  const startDate = today.clone().startOf('week'); //주 시작 날짜 (일요일기준)
  const endDate = today.clone().endOf('week'); //주 끝 날짜 (일요일기준)

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
            <Link to={{pathname:`/sceduleWeek/${brandId}`}} style={{ textDecoration: 'none' }}><styled.Button>Week</styled.Button></Link>
            <Link to={{pathname:`/sceduleMonth/${brandId}`}} style={{ textDecoration: 'none' }}><styled.Button2>Month</styled.Button2></Link>
            <Link to={{pathname:`/sceduleStream/${brandId}`}} style={{ textDecoration: 'none' }}><styled.Button2>Stream</styled.Button2></Link>

            <styled.PrevIcon  onClick={()=>{prevWeek()}} style={{marginLeft:'1.875rem'}}><LeftBtnIcon/></styled.PrevIcon>
            <styled.NowDate>{startDate.format('M월D일')+endDate.format(' ~ M월D일')}</styled.NowDate>
            <styled.PrevIcon onClick={()=>{nextWeek()}}><RightBtnIcon/></styled.PrevIcon>

            <styled.RightButtonWrapper>
              <styled.CloseIconWrapper onClick={postModalClick}><CloseIcon/></styled.CloseIconWrapper>
              <styled.PostButton onClick={postModalClick} postModal={postModal}><PostingIcon width={14} height={14}/><styled.Posth1>포스팅 작성하기</styled.Posth1></styled.PostButton>
            </styled.RightButtonWrapper>
          </styled.Title>

          <WeekCalendar endDate={endDate} startDate={startDate}/>

          

        </styled.Content>
      </styled.ContentWrapper>

     
    </styled.Wrapper>
  )
}
