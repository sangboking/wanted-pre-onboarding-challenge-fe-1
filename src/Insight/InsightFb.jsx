import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../Components/SideBar';
import CautionIcon from '../SvgIcons/CautionIcon';
import DotIcon from '../SvgIcons/DotIcon';
import FaceBookS from '../SvgIcons/FaceBookS';
import InstarSoff from '../SvgIcons/InstarSoff';
import LeftBtnIcon from '../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../SvgIcons/RightBtnIcon';
import SceduleIcon from '../SvgIcons/SceduleIcon';
import TwitSoff from '../SvgIcons/TwitSoff';

const Wrapper = styled.div`
  width:120rem;
  height:100vh;
  display: flex;
  background-color: #f5f6f8;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const ContentWrapper = styled.div`
  width:105rem;
  height:100vh;
  margin:0 auto;
  margin-left: 15rem;
  overflow-y: auto;
  @media screen and (max-width:1440px) {
    overflow-y:scroll;
  }
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const InsightContentWrapper = styled.div`
  width:67.813rem;
  margin: 0 auto;
`;

const InsightHeader = styled.div`
  width:100%;
  margin-top: 5.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const HeaderIcon = styled.div`
  cursor: pointer;
  margin-left:1.25rem;
`;

const HeaderDateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: .875rem;
`;

const HeaderPrevIcon = styled.div`
  margin-right: .75rem;
  margin-left:.651rem;
  display: flex;
  align-items: center;
`;

const HeaderNextIcon = styled.div`
  margin-left:.75rem;
  display: flex;
  align-items: center;
`;

const HeaderButton = styled.button`
  width:6.5rem;
  height: 2.188rem;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  margin-left: 1.125rem;
  background-color: #fff;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
`;

const ContentOneWrapper = styled.div`
  width: 100%;
  height:18.875rem;
  display: flex;
  margin-top:2.5rem;
`;

const OneLeftBox = styled.div`
  width: 24.625rem;
  height: 100%;
  background-color:#eef3ff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-right: 1.063rem;
`;

const BoxTop = styled.div`
  width:100%;
  height:2.5rem;
  background-color:#eef3ff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftBoxTopContent = styled.div`
  width:100%;
  height:7.969rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const LeftBoxBotContent = styled.div`
  width:100%;
  height: 8.344rem;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextImport = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #1a225c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CautionIconWrapper = styled.div`
  margin-left: .25rem;
  display: flex;
  align-items: center;
`;

const OneRightBox = styled.div`
  width: 42.125rem;
  height: 100%;
  background-color:#fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
`;

const RightBoxContent = styled.div`
  width: 100%;
  height: 16.375rem;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const OneRightTitle = styled.div`
  display: flex;
  margin-left: 14.625rem;
  background-color: #fff;
`;

const OneRightTitleh1 = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
  margin-top:1.5rem;
  margin-bottom:.5rem;
`;

const OneRightHalfCircle = styled.div`
  width: 36.5rem;
  height: 2.188rem;
  border-radius: 17.5px;
  border: solid 1px #eaeaea;
  margin: 0 auto;
  margin-bottom:.75rem;
  display: flex;
`;

const CircleLeft = styled.div`
  width:4.875rem;
  height: 100%;
  border-top-left-radius: 17.5px;
  border-bottom-left-radius: 17.5px;
  background-color: #b4b4b4;
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleCenter = styled.div`
  width:15.813rem;
  height: 100%;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #1a225c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eaeaea;
`;

const CircleRight = styled.div`
  width:15.813rem;
  height: 100%;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #1a225c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentTwoWrapper = styled.div`
  width:100%;
  height: 14.375rem;
  margin-top: 3.125rem;
  background-color : #fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
`;

const TwoContent = styled.div`
  width:100%;
  height: 11.875rem;
  display: flex;
  
`;

const TwoInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left:1.375rem;
`;

const TwoInfoImg = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 10px;
  border:1px solid #eaeaea;
  margin-right: 1.375rem;
`;

const TwoInfoData = styled.div`
  display: flex;
  flex-direction: column;
`;

const TwoInfoTitle = styled.h1`
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  color: #191919;
  margin-bottom: .4rem;
`;

const TwoInfoDate = styled.h1`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: #676767;
  margin-bottom: .7rem;
`;

const TwoInfoLine = styled.div`
  width:12rem;
  height: 0.063rem;
  background-color: #eaeaea;
  margin-bottom: .7rem;
`;

const TwoFbDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .4rem;
`;

const TwoFbLike = styled.h1`
  width: 5rem;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #666;
`;

const TwoFbLine = styled.div`
  width:.1px;
  height:6.25rem;
  background-color: #eaeaea;
  margin-left:1.375rem;
`;

const Line = styled.div`
  width: 66.063rem;
  height: 0.063rem;
  background-color: #eaeaea;
  margin:0 auto;
  margin-top: 3.438rem;
  margin-bottom: 3.375rem;
`;

const ContentThreeWapper = styled.div`
  width:100%;
  height:18.875rem;
  display: flex;
`;

const ThreeLeftBox = styled.div`
  width:24.625rem;
  height: 100%;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-right: 1.063rem;
`;

const ThreeLeftTop = styled.div`
  width:100%;
  height:7.969rem;
  border-bottom: 0.063rem solid #eaeaea;
`;

const ThreeLeftBot = styled.div`
  width:100%;
  height:8.344rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ThreeRightBox = styled.div`
  width: 20.563rem;
  height: 100%;
  border-radius: 15px;
  border: solid 1px #eaeaea;
`;

const ThreeRightBoxTop = styled.div`
  width:100%;
  height:5.219rem;
  border-bottom: 0.063rem solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ThreeRightBoxBot = styled.div`
  width:100%;
  height: 11.094rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ThreeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThreeText = styled.h1`
  font-size: 1.063rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #1a225c;
`;

const ThreeText2 = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #eb2626;
`;

const ThreeLine = styled.div`
  width: 0.15rem;
  height: 0.75rem;
  background-color: #676767;
  margin-left: .3rem;
  margin-right:.3rem;
`;

const ContentFourWrapper = styled.div`
  width:100%;
  height: 19.25rem;
  background-color:#fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-top: 3.125rem;
`;

const ContentFiveWrapper = styled.div`
  width:100%;
  height: 19.25rem;
  background-color:#fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-top: 3.125rem;
`;

const ContentSixWrapper = styled.div`
  width:100%;
  height:21.875rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.125rem;
`;

const SixBox = styled.div`
  width: 21.875rem;
  height: 21.875rem;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  background-color:#fff;
`;

const SixBoxTop = styled.div`
  width:100%;
  height:12.178rem;
  border-bottom: 0.063rem solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SixBoxBot = styled.div`
  width:100%;
  height:7.134rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SixFollowBox = styled.div`
  width: 8.125rem;
  height: 8.125rem;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SixText = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333;
`;

const SixText2 = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #007aff;
`;

const SixTextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SixBotText = styled.h1`
  font-size: 0.875rem;
  font-weight: noraml;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  display: flex;
`;

const SixBotText2 = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  display: flex;
`;

const InsightBotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9.158rem;
`;

export default function InsightFb() {
  const insightColor = '#3C4165';
  const insightMenuColor = '#fbfbfb';
  

  return (
    <Wrapper>
      <Sidebar insightColor={insightColor} insightMenuColor={insightMenuColor}/>

      <ContentWrapper>
        <InsightContentWrapper>
          <InsightHeader>
            <IconWrapper>
              <Link to='/insight/fb'><HeaderIcon style={{marginLeft:'.938rem'}}><FaceBookS/></HeaderIcon></Link>
              <Link to='/insight/instar'><HeaderIcon><InstarSoff/></HeaderIcon></Link>
              <Link to='/insight/twit'><HeaderIcon><TwitSoff/></HeaderIcon></Link>
            </IconWrapper>

            <HeaderDateWrapper>
              <SceduleIcon width={18} height={18}/>
              <HeaderPrevIcon><LeftBtnIcon/></HeaderPrevIcon>
              <HeaderNextIcon><RightBtnIcon/></HeaderNextIcon>
              <HeaderButton>내보내기</HeaderButton>
            </HeaderDateWrapper>
          </InsightHeader>

          <ContentOneWrapper>
            <OneLeftBox>
              <BoxTop>CIS (컨텐츠 참여 점수)<CautionIconWrapper><CautionIcon width={15} height={15}/></CautionIconWrapper></BoxTop>
              <LeftBoxTopContent></LeftBoxTopContent>
              <LeftBoxBotContent>
                <Text>축하해요!</Text>
                <Text style={{display:'flex',justifyContent:'center',marginBottom:'0.625rem'}}>지난주 대비 <TextImport>CIS +8%</TextImport>상승!</Text>
                <Text style={{display:'flex',justifyContent:'center'}}><TextImport>사진 타입</TextImport>이 반응이 좋았으며,</Text>
                <Text>타입에 따른 성과는 다음과 같아요.</Text>
              </LeftBoxBotContent>
            </OneLeftBox>
            
            <OneRightBox>
              <BoxTop>포스트 타입별 평균 참여수<CautionIconWrapper><CautionIcon width={15} height={15}/></CautionIconWrapper></BoxTop>
              <RightBoxContent>
                <OneRightTitle>
                  <OneRightTitleh1 style={{marginRight:'13.875rem'}}>사진</OneRightTitleh1>
                  <OneRightTitleh1>비디오</OneRightTitleh1>
                </OneRightTitle>

                <OneRightHalfCircle>
                  <CircleLeft>도달</CircleLeft>
                  <CircleCenter>1567회</CircleCenter>
                  <CircleRight>300회</CircleRight>
                </OneRightHalfCircle>
                <OneRightHalfCircle>
                  <CircleLeft>클릭</CircleLeft>
                  <CircleCenter>1567회</CircleCenter>
                  <CircleRight>300회</CircleRight>
                </OneRightHalfCircle>
                <OneRightHalfCircle>
                  <CircleLeft>리액션</CircleLeft>
                  <CircleCenter>1567회</CircleCenter>
                  <CircleRight>300회</CircleRight>
                </OneRightHalfCircle>
                <OneRightHalfCircle>
                  <CircleLeft>참여율</CircleLeft>
                  <CircleCenter>1567회</CircleCenter>
                  <CircleRight>300회</CircleRight>
                </OneRightHalfCircle>
              </RightBoxContent>
            </OneRightBox>
          </ContentOneWrapper>

          <ContentTwoWrapper>
            <BoxTop>CIS (컨텐츠 참여 점수) TOP 3</BoxTop>

            <TwoContent>
              <TwoInfoWrapper>
                <TwoInfoImg></TwoInfoImg>
                <TwoInfoData>
                  <TwoInfoTitle>안녕하세요 오늘은 작년 이맘때...</TwoInfoTitle>
                  <TwoInfoDate>2022년 3월 22일 화요일 10:00</TwoInfoDate>
                  <TwoInfoLine/>
                  <TwoFbDataWrapper>
                    <TwoFbLike>좋아요 72개</TwoFbLike>
                    <TwoFbLike>공감 72개</TwoFbLike>
                  </TwoFbDataWrapper>
                  <TwoFbDataWrapper>
                    <TwoFbLike>댓글 19개</TwoFbLike>
                    <TwoFbLike>공유 19회</TwoFbLike>
                  </TwoFbDataWrapper>
                </TwoInfoData>
                <TwoFbLine/>
              </TwoInfoWrapper>

              <TwoInfoWrapper>
                <TwoInfoImg></TwoInfoImg>
                <TwoInfoData>
                  <TwoInfoTitle>안녕하세요 오늘은 작년 이맘때...</TwoInfoTitle>
                  <TwoInfoDate>2022년 3월 22일 화요일 10:00</TwoInfoDate>
                  <TwoInfoLine/>
                  <TwoFbDataWrapper>
                    <TwoFbLike>좋아요 72개</TwoFbLike>
                    <TwoFbLike>공감 72개</TwoFbLike>
                  </TwoFbDataWrapper>
                  <TwoFbDataWrapper>
                    <TwoFbLike>댓글 19개</TwoFbLike>
                    <TwoFbLike>공유 19회</TwoFbLike>
                  </TwoFbDataWrapper>
                </TwoInfoData>
                <TwoFbLine/>
              </TwoInfoWrapper>

              <TwoInfoWrapper>
                <TwoInfoImg></TwoInfoImg>
                <TwoInfoData>
                  <TwoInfoTitle>안녕하세요 오늘은 작년 이맘때...</TwoInfoTitle>
                  <TwoInfoDate>2022년 3월 22일 화요일 10:00</TwoInfoDate>
                  <TwoInfoLine/>
                  <TwoFbDataWrapper>
                    <TwoFbLike>좋아요 72개</TwoFbLike>
                    <TwoFbLike>공감 72개</TwoFbLike>
                  </TwoFbDataWrapper>
                  <TwoFbDataWrapper>
                    <TwoFbLike>댓글 19개</TwoFbLike>
                    <TwoFbLike>공유 19회</TwoFbLike>
                  </TwoFbDataWrapper>
                </TwoInfoData>
              </TwoInfoWrapper>
            </TwoContent>
          </ContentTwoWrapper>

          <Line/>

          <ContentThreeWapper>
            <ThreeLeftBox>
              <BoxTop>PIS (포스트 참여 점수)<CautionIconWrapper><CautionIcon  width={15} height={15}/></CautionIconWrapper></BoxTop>
              <ThreeLeftTop>
                
              </ThreeLeftTop>
              <ThreeLeftBot>
                <Text>축하해요!</Text>
                  <Text style={{display:'flex',justifyContent:'center',marginBottom:'0.625rem'}}>지난주 대비 <TextImport>PIS +8%</TextImport>상승!</Text>
                  <Text style={{display:'flex',justifyContent:'center'}}>총 방문자 중<TextImport style={{marginLeft:'.3rem'}}>순 방문자 비율이 높고</TextImport></Text>
                  <Text style={{display:'flex',justifyContent:'center'}}>기기별 접속자 수는<TextImport style={{marginLeft:'.3rem'}}>데스크탑</TextImport>이 더 높아요.</Text>
              </ThreeLeftBot>
            </ThreeLeftBox>
            <ThreeRightBox style={{marginRight:'1rem'}}>
              <BoxTop>총 방문자 수</BoxTop>
              <ThreeRightBoxTop>
                <ThreeText style={{marginBottom:'.3rem'}}>92명</ThreeText>
                <ThreeTextWrapper><ThreeText2>+148</ThreeText2><ThreeLine/><ThreeText2>+8%</ThreeText2></ThreeTextWrapper>
              </ThreeRightBoxTop>
              <ThreeRightBoxBot></ThreeRightBoxBot>
            </ThreeRightBox>
            <ThreeRightBox>
              <BoxTop>기기별 분포</BoxTop>
              <ThreeRightBoxTop>
              <ThreeText style={{marginBottom:'.3rem'}}>192명</ThreeText>
                <ThreeTextWrapper><ThreeText2>+148</ThreeText2><ThreeLine/><ThreeText2>+8%</ThreeText2></ThreeTextWrapper>
              </ThreeRightBoxTop>
              <ThreeRightBoxBot></ThreeRightBoxBot>
            </ThreeRightBox>
          </ContentThreeWapper>

          <ContentFourWrapper>
            <BoxTop>요일별 방문자 수</BoxTop>
          </ContentFourWrapper>

          <ContentFiveWrapper>
            <BoxTop>시간별 방문자 수</BoxTop>
          </ContentFiveWrapper>

          <Line style={{marginTop:'3.125rem',marginBottom:'3.063rem'}}/>

          <ContentSixWrapper>
            <SixBox>
              <BoxTop>팔로워 증감</BoxTop>
              <SixBoxTop>
                <SixFollowBox style={{marginRight:'1rem'}}>
                  <SixText>팔로우</SixText>
                  <ThreeText style={{marginTop:'.3rem',marginBottom:'.3rem'}}>192명</ThreeText>
                  <ThreeTextWrapper><ThreeText2>+148</ThreeText2><ThreeLine/><ThreeText2>+8%</ThreeText2></ThreeTextWrapper>
                </SixFollowBox>
                <SixFollowBox>
                <SixText>언팔로우</SixText>
                  <ThreeText style={{marginTop:'.3rem',marginBottom:'.3rem'}}>45명</ThreeText>
                  <ThreeTextWrapper><SixText2>-148</SixText2><ThreeLine/><SixText2>-8%</SixText2></ThreeTextWrapper>
                </SixFollowBox>
              </SixBoxTop>
              <SixBoxBot>
                <SixTextWrapper><SixBotText>지난 주보다 <SixBotText2 style={{marginLeft:'.3rem'}}>팔로워가 증가</SixBotText2>하고</SixBotText></SixTextWrapper>
                <SixTextWrapper><SixBotText2>언팔로워가 감소</SixBotText2><SixBotText>했어요!</SixBotText></SixTextWrapper>
              </SixBoxBot>
            </SixBox>

            <SixBox>
              <BoxTop>성별 분포</BoxTop>
              <SixBoxTop></SixBoxTop>
              <SixBoxBot>
                <SixTextWrapper><SixBotText>남성과 여성의 페이지<SixBotText2 style={{marginLeft:'.3rem'}}>이용률 격차</SixBotText2>가</SixBotText></SixTextWrapper>
                <SixTextWrapper><SixBotText>점차적으로<SixBotText2 style={{marginLeft:'.3rem'}}>감소</SixBotText2>하는 경향을 보이고 있어요!</SixBotText></SixTextWrapper>
              </SixBoxBot>
            </SixBox>

            <SixBox>
              <BoxTop>연령 분포</BoxTop>
              <SixBoxTop></SixBoxTop>
              <SixBoxBot>
                <SixBotText>팔로워 이용률은</SixBotText>
                <SixBotText2>20대&gt;30대&gt;10대&gt;40대&gt;50대</SixBotText2>
                <SixBotText>순으로 나타났어요!</SixBotText>
              </SixBoxBot>
            </SixBox>
          </ContentSixWrapper>

          <InsightBotWrapper>
            <IconWrapper><DotIcon width={20} height={20}/></IconWrapper>
            <SixBotText style={{marginTop:'.654rem'}}>더많은 인사이트가 궁금하신가요?</SixBotText>
            <SixBotText>더보기 옵션을 선택해 다양한 인사이트를 경험해 보세요</SixBotText>
          </InsightBotWrapper>

        </InsightContentWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}



