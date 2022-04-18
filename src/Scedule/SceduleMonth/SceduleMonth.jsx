import React, { useState } from 'react'
import * as styled from './SceduleMonth.style'
import Sidebar from '../../Components/Sidebar/SideBar';
import { useRecoilState, useRecoilValue} from 'recoil';
import { postModalAtom, sceduleColorAtom, sceduleMenuColorAtom } from '../SceduleAtoms';
import {Link} from 'react-router-dom';
import MonthCalendar from '../MonthCalendar/MonthCalendar';
import moment from 'moment';
import LeftBtnIcon from '../../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../../SvgIcons/RightBtnIcon';
import PostModal from '../PostModal/PostModal';
import CloseIcon from '../../SvgIcons/CloseIcon';
import PostingIcon from '../../SvgIcons/PostingIcon';
import { postTextAtom } from '../../atom';

export default function SceduleMonth() {

  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const [postText, setPostText] = useRecoilState(postTextAtom);
  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);

  const postModalClick = ()=>{
    setPostModal(!postModal);
    setPostText('');
  }

  const [getMoment, setMoment] = useState(moment());
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
            <Link to='/sceduleWeek' style={{ textDecoration: 'none' }}><styled.Button2>Week</styled.Button2></Link>
            <Link to='/sceduleMonth' style={{ textDecoration: 'none' }}><styled.Button>Month</styled.Button></Link>
            <Link to='/sceduleStream'><styled.Button2>Stream</styled.Button2></Link>

            <styled.PrevIcon  onClick={()=>{prevMonth()}} style={{marginLeft:'1.875rem'}}><LeftBtnIcon/></styled.PrevIcon>
            <styled.NowDate>{today.format('YYYY년 M월')}</styled.NowDate>
            <styled.PrevIcon onClick={()=>{ nextMonth() }}><RightBtnIcon/></styled.PrevIcon>
            
            <styled.RightButtonWrapper>
              <styled.CloseIconWrapper onClick={postModalClick}><CloseIcon/></styled.CloseIconWrapper>
              <styled.PostButton onClick={postModalClick} postModal={postModal}><PostingIcon width={14} height={14}/><styled.Posth1>포스팅 작성하기</styled.Posth1></styled.PostButton>
            </styled.RightButtonWrapper>
          </styled.Title>

          <MonthCalendar lastWeek={lastWeek} firstWeek={firstWeek} today={today}/>

        </styled.Content>
      </styled.ContentWrapper>

    </styled.Wrapper>
  )
}
