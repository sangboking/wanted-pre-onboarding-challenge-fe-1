import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../Components/SideBar';
import { useRecoilState, useRecoilValue} from 'recoil';
import { postModalAtom, sceduleColorAtom, sceduleMenuColorAtom } from './SceduleAtoms';
import {Link} from 'react-router-dom';
import MonthCalendar from './MonthCalendar';
import moment from 'moment';
import LeftBtnIcon from '../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../SvgIcons/RightBtnIcon';
import PostModal from './PostModal';
import CloseIcon from '../SvgIcons/CloseIcon';
import PostingIcon from '../SvgIcons/PostingIcon';


const Wrapper = styled.div`
  max-width:120rem;
  height:100vh;
  display: flex;
  background-color: #f5f6f8;
`;

const ContentWrapper = styled.div`
  width:105rem;
  background-color: #f5f6f8;;
  height:100vh;
  display: flex;
  justify-content:center;
  position: relative;
  margin-left:15rem;
  @media screen and (max-width:1440px) {
    width:105rem;
    height:100vh;
  }
`;

const Content = styled.div`
  width:68rem;
  height: 100vh;
`;

const Title = styled.div`
  margin-top:5rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const PrevIcon = styled.div`
  width: 1.563rem;
  height: 1.563rem;
  background-color: #eaeaea;
  display:flex ;
  align-items:center ;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
`;

const NowDate = styled.h1`
  width:9rem;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #333;
  margin-left:.75rem;
  margin-right:.75rem;
`;

const Button = styled.button`
  width:6rem;
  height: 2.18rem;;
  border-radius: 10px;
  background-color:#262b53;
  border:1px solid #262b53;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  margin-left:1.875rem;
  margin-right:1rem;
  cursor: pointer;
`;

const Button2 = styled.button`
  width:6rem;
  height: 2.18rem;;
  border-radius: 10px;
  background-color: #fff;
  border: solid 1px #eaeaea;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
  margin-left:.875rem;
  cursor: pointer;
`;

const RightButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

const PostButton = styled.button`
  width:9.313rem;
  height: 2.18rem;
  margin-right: .875rem;
  border-radius: 10px;
  border: solid 1px #eaeaea; 
  background-color:#fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Posth1 = styled.h1`
  margin-left: .677rem;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
`;

const CloseIconWrapper = styled.div`
  position:absolute;
  top:-2.7rem;
  right:3rem;
  z-index:30;
  cursor: pointer;
  @media screen and (max-width:1440px){
    top:-2.5rem;
    left:5.3rem;
  }
`;



export default function SceduleMonth() {

  const [postModal,setPostModal] = useRecoilState(postModalAtom);

  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);

  const postModalClick = ()=>{
    return setPostModal(!postModal)
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
    <Wrapper  postModal={postModal}>
      <Sidebar sceduleColor={sceduleColor} sceduleMenuColor={sceduleMenuColor}/>

      <ContentWrapper>
        <PostModal/>

        <Content>
          <Title>
            <Link to='/scedule/week' style={{ textDecoration: 'none' }}><Button2>Week</Button2></Link>
            <Link to='/scedule/month' style={{ textDecoration: 'none' }}><Button>Month</Button></Link>
            <Link to='/scedule/stream'><Button2>Stream</Button2></Link>

            <PrevIcon  onClick={()=>{prevMonth()}} style={{marginLeft:'1.875rem'}}><LeftBtnIcon/></PrevIcon>
            <NowDate>{today.format('YYYY년 M월')}</NowDate>
            <PrevIcon onClick={()=>{ nextMonth() }}><RightBtnIcon/></PrevIcon>
            
            <RightButtonWrapper>
              <CloseIconWrapper onClick={postModalClick}><CloseIcon/></CloseIconWrapper>
              <PostButton onClick={postModalClick} postModal={postModal}><PostingIcon width={14} height={14}/><Posth1>포스팅 작성하기</Posth1></PostButton>
            </RightButtonWrapper>
          </Title>

          <MonthCalendar lastWeek={lastWeek} firstWeek={firstWeek} today={today}/>

        </Content>
      </ContentWrapper>

    </Wrapper>
  )
}
