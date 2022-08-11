import React, { useState } from 'react'
import * as styled from './SceduleMonth.style'
import Sidebar from '../../../Components/Sidebar/SideBar';
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import { postModalAtom, sceduleColorAtom, sceduleMenuColorAtom } from '../../../atom';
import {Link, useParams} from 'react-router-dom';
import MonthCalendar from '../MonthCalendar/MonthCalendar';
import moment from 'moment';
import LeftBtnIcon from '../../../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../../../SvgIcons/RightBtnIcon';
import PostModal from '../../../Components/PostModal/PostModal';
import CloseIcon from '../../../SvgIcons/CloseIcon';
import PostingIcon from '../../../SvgIcons/PostingIcon';
import { postImgAtom, postImgPreviewAtom, postTextAtom } from '../../../atom';

export default function SceduleMonth() {
  const [getMoment, setMoment] = useState(moment());
  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const setPostText = useSetRecoilState(postTextAtom);
  const setPostImgPreview= useSetRecoilState(postImgPreviewAtom);
  const setPostImg = useSetRecoilState(postImgAtom);
  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);
  const {brandId} = useParams();

  const postModalClick = ()=>{
    setPostModal(!postModal);
    setPostText('');
    setPostImgPreview(null);
    setPostImg(null);
  };

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1?53:today.clone().endOf('month').week();

  const prevMonth = () => {
    setMoment(getMoment.clone().subtract(1, 'month'))
  }; //이전달 onClick 함수

  const nextMonth = () => {
    setMoment(getMoment.clone().add(1, 'month'))
  }; //다음달 onClick 함수


  return (
    <styled.Wrapper  postModal={postModal}>
      <Sidebar sceduleColor={sceduleColor} sceduleMenuColor={sceduleMenuColor}/>

      <styled.ContentWrapper>
        <PostModal/>

        <styled.Content>
          <styled.Title>
            <Link to={{pathname:`/sceduleWeek/${brandId}`}} style={{ textDecoration: 'none' }}><styled.Button2>Week</styled.Button2></Link>
            <Link to={{pathname:`/sceduleMonth/${brandId}`}} style={{ textDecoration: 'none' }}><styled.Button>Month</styled.Button></Link>
            <Link to={{pathname:`/sceduleStream/${brandId}`}}><styled.Button2>Stream</styled.Button2></Link>

            <styled.PrevIcon  onClick={()=>{prevMonth()}} style={{marginLeft:'1.875rem'}}><LeftBtnIcon/></styled.PrevIcon>
            <styled.NowDate>{today.format('YYYY년 M월')}</styled.NowDate>
            <styled.PrevIcon onClick={()=>{ nextMonth() }}><RightBtnIcon/></styled.PrevIcon>
            
            <styled.RightButtonWrapper>
             { postModal && <styled.CloseIconWrapper onClick={postModalClick}><CloseIcon/></styled.CloseIconWrapper>}
              <styled.PostButton onClick={postModalClick} postModal={postModal}><PostingIcon width={14} height={14}/><styled.Posth1>포스팅 작성하기</styled.Posth1></styled.PostButton>
            </styled.RightButtonWrapper>
          </styled.Title>

          <MonthCalendar lastWeek={lastWeek} firstWeek={firstWeek} today={today}/>

        </styled.Content>
      </styled.ContentWrapper>

    </styled.Wrapper>
  )
}