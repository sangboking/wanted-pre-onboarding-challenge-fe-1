import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar/SideBar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postModalAtom, sceduleColorAtom, sceduleMenuColorAtom } from './SceduleAtoms';
import moment from 'moment';
import LeftBtnIcon from '../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../SvgIcons/RightBtnIcon';
import PostModal from './PostModal';
import CloseIcon from '../SvgIcons/CloseIcon';
import PostingIcon from '../SvgIcons/PostingIcon';
import FaceBookS from '../SvgIcons/FaceBookS';
import TwitS from '../SvgIcons/TwitS';



const Wrapper = styled.div`
  max-width:120rem;
  height:100vh;
  background-color: #f5f6f8;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const ContentWrapper = styled.div`
  width:105rem;
  height:100vh;
  margin-left:15rem;
  display:flex;
  justify-content:center;
  position:relative;
  overflow-x: hidden;
  @media screen and (max-width:1440px) {
    width:105rem;
    height:100vh;
    margin-left:15rem;
  }
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const Content = styled.div`
  width:68rem;
  height: 100vh;
  /* @media screen and (max-width:1450px) {
    width:66rem;
    height:100vh;
  } */
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
  margin-left:.875rem;
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
  margin-right:1rem;
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

const StreamWrapper = styled.div`
  width:100%;
  margin-top:2rem;
`;

const StreamContentWrapper = styled.div`
  display:flex;
  margin-bottom:4rem;
  width:100%;
  
`;

const StreamBox = styled.div`
  width:43rem;
  height:43.375rem;
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-right:.688rem;
`;

const StreamBoxTitle = styled.div`
  width:100%;
  height:3.125rem;
  background-color: #eef3ff;
  display:flex ;
  justify-content:space-between ;
  border-bottom:solid 1px #e4e4e4;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const StreamBoxTitleIcon = styled.div`
  display:flex ;
  align-items: center;
  margin-left: 1.438rem;
`;

const StreamSnsIcon = styled.div`
  margin-right: .75rem;
`;


const StreamBoxDate = styled.h1`
  display:flex ;
  align-items:center ;
  justify-content:center ;
  margin-right:1.625rem;
`;

const StreamButton = styled.button`
  width:2.875rem;
  height:1.5rem ;
  border-radius: 4px;
  border:1px solid #f4f4f4;
  background-color: #f4f4f4;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333;
  margin-left:1rem;
  cursor: pointer;
`;

const StreamNote = styled.div`
  width:24.5rem;
  height:43.55rem;
  border-radius: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display:flex ;
  flex-direction:column ;
  justify-content:space-between ;
`;

const NoteWrapper = styled.div`
  display: flex;
`;

const NoteTopLeft = styled.div`
  width:50%;
  height: 3.25rem;
  background-color: #eef3ff;
  border-top-left-radius: 10px;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
`;

const NoteTopRight = styled.div`
  width:50%;
  height: 3.25rem;
  background-color: #eef3ff;
  border-top-right-radius: 10px;
  border-bottom: 1px solid #e4e4e4;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
`;

const NoteBottomWrapper = styled.div`
  resize: none;
  height:5.844rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding:.813rem;
  border: .1px solid #e4e4e4;
  outline-color: #e4e4e4;
  /* &::placeholder{
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #191919;
  } */
`;

const NoteBottomText = styled.textarea`

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


export default function SceduleStream() {

  const [postModal,setPostModal] = useRecoilState(postModalAtom);

  const sceduleColor = useRecoilValue(sceduleColorAtom);
  const sceduleMenuColor = useRecoilValue(sceduleMenuColorAtom);

  // const timeOption = ["00","01","02","03","04","05","06","07","08","09","10",
  //               "11","12","13","14","15","16","17","18","19","20",
  //               "21","22","23","24"] //포스트 모달창 시간 배열

  const postModalClick = ()=>{
    return setPostModal(!postModal)
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



  return (
    <Wrapper  postModal={postModal}>
      <Sidebar sceduleColor={sceduleColor} sceduleMenuColor={sceduleMenuColor}/>

      <ContentWrapper>
        

        <Content>
          <PostModal/>

          <Title>
            <Link to='/scedule/week'><Button2>Week</Button2></Link>
            <Link to='/scedule/month'><Button2>Month</Button2></Link>
            <Link to='/scedule/stream'><Button>Stream</Button></Link>

            <PrevIcon  onClick={()=>{prevMonth()}} style={{marginLeft:'1.875rem'}}><LeftBtnIcon/></PrevIcon>
            <NowDate>{today.format('YYYY년 M월')}</NowDate>
            <PrevIcon onClick={()=>{ nextMonth() }}><RightBtnIcon/></PrevIcon>

            <RightButtonWrapper>
              <CloseIconWrapper onClick={postModalClick}><CloseIcon/></CloseIconWrapper>
              <PostButton onClick={postModalClick} postModal={postModal}><PostingIcon width={14} height={14}/><Posth1>포스팅 작성하기</Posth1></PostButton>
            </RightButtonWrapper>
          </Title>

          <StreamWrapper>
            <StreamContentWrapper>
              <StreamBox>
                <StreamBoxTitle>
                  <StreamBoxTitleIcon>
                    <StreamSnsIcon><FaceBookS/></StreamSnsIcon>
                    <StreamSnsIcon><TwitS/></StreamSnsIcon>
                    <StreamSnsIcon><TwitS/></StreamSnsIcon>
                  </StreamBoxTitleIcon>
                  <StreamBoxDate>{todayTime}<StreamButton>수정</StreamButton></StreamBoxDate>
                </StreamBoxTitle>   
              </StreamBox>
              
              <StreamNote>
                <NoteWrapper>
                  <NoteTopLeft>Note</NoteTopLeft>
                  <NoteTopRight>History</NoteTopRight>
                </NoteWrapper>
                
                <NoteBottomWrapper placeholder='노트를 입력하고 엔터를 누르세요.'>

                </NoteBottomWrapper>
              </StreamNote>
            </StreamContentWrapper>

            <StreamContentWrapper>
              <StreamBox>
                <StreamBoxTitle>
                  <StreamBoxTitleIcon>
                    <StreamSnsIcon><FaceBookS/></StreamSnsIcon>
                    <StreamSnsIcon><TwitS/></StreamSnsIcon>
                    <StreamSnsIcon><TwitS/></StreamSnsIcon>
                  </StreamBoxTitleIcon>
                  <StreamBoxDate>{todayTime}<StreamButton>수정</StreamButton></StreamBoxDate>
                </StreamBoxTitle>

              
                
              </StreamBox>
              
              <StreamNote>
                <NoteWrapper>
                  <NoteTopLeft>Note</NoteTopLeft>
                  <NoteTopRight>History</NoteTopRight>
                </NoteWrapper>
                
                <NoteBottomWrapper placeholder='노트를 입력하고 엔터를 누르세요.'>

                </NoteBottomWrapper>
              </StreamNote>

            </StreamContentWrapper>
            
          </StreamWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  )
}
