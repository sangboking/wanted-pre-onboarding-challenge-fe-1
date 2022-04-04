import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../Components/SideBar';
import PostingIcon from '../SvgIcons/PostingIcon';
import {Link} from 'react-router-dom';
import {useRecoilState, useRecoilValue} from 'recoil';
import {postModalAtom, sceduleMenuColorAtom} from './SceduleAtoms';
import { sceduleColorAtom } from './SceduleAtoms';
import WeekCalendar from './WeekCalendar';
import moment from 'moment';
import LeftBtnIcon from '../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../SvgIcons/RightBtnIcon';
import CloseIcon from '../SvgIcons/CloseIcon';
import PostModal from './PostModal';



const Wrapper = styled.div`
  max-width:120rem;
  height:100vh;
  display: flex;
  background-color: #f5f6f8;
`;

const ContentWrapper = styled.div`
  width:105rem;
  height:100vh;
  display: flex;
  justify-content:center;
  position: relative;
  margin-left:15rem;
`;

const Content = styled.div`
  width:68rem;
  height: 100vh;
  position:relative ;
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
  height: 2.18rem;
  border-radius: 10px;
  background-color:#262b53;
  border:1px solid #262b53;
  font-size: 0.938rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  margin-left:.875rem;
  cursor: pointer;
`;

const Button2 = styled.button`
  width:6rem;
  height: 2.18rem;
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
  margin-left:1.875rem;
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
  z-index:30;
  top:-2.7rem;
  right:3rem;
  cursor: pointer;
  @media screen and (max-width:1440px){
    position:absolute;
    top:-3rem;
    left:5.3rem;
  }
`;

export default function SceduleWeek() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom);

  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);

  // const timeOption = ["00","01","02","03","04","05","06","07","08","09","10",
  //               "11","12","13","14","15","16","17","18","19","20",
  //               "21","22","23","24"] //포스트 모달창 시간 배열
  
  const postModalClick = ()=>{
    return setPostModal(!postModal)
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
    <Wrapper postModal={postModal}>

      <Sidebar postModal={postModal} sceduleColor={sceduleColor} sceduleMenuColor={sceduleMenuColor}/>

      <ContentWrapper>
        <PostModal/>

        <Content>
          <Title>
            <Link to='/scedule/week' style={{ textDecoration: 'none' }}><Button>Week</Button></Link>
            <Link to='/scedule/month'style={{ textDecoration: 'none' }}><Button2>Month</Button2></Link>
            <Link to='/scedule/stream'style={{ textDecoration: 'none' }}><Button2>Stream</Button2></Link>

            <PrevIcon  onClick={()=>{prevWeek()}} style={{marginLeft:'1.875rem'}}><LeftBtnIcon/></PrevIcon>
            <NowDate>{startDate.format('M월D일')+endDate.format(' ~ M월D일')}</NowDate>
            <PrevIcon onClick={()=>{nextWeek()}}><RightBtnIcon/></PrevIcon>

            <RightButtonWrapper>
              <CloseIconWrapper onClick={postModalClick}><CloseIcon/></CloseIconWrapper>
              <PostButton onClick={postModalClick} postModal={postModal}><PostingIcon width={14} height={14}/><Posth1>포스팅 작성하기</Posth1></PostButton>
            </RightButtonWrapper>
          </Title>

          <WeekCalendar endDate={endDate} startDate={startDate}/>

          

        </Content>
      </ContentWrapper>

     
    </Wrapper>
  )
}
