import React from 'react';
import { Link } from 'react-router-dom';
import * as styled from './InsightFb.style';
import Sidebar from '../../Components/Sidebar/SideBar';
import CautionIcon from '../../SvgIcons/CautionIcon';
import DotIcon from '../../SvgIcons/DotIcon';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstarSoff from '../../SvgIcons/InstarSoff';
import LeftBtnIcon from '../../SvgIcons/LeftBtnIcon';
import RightBtnIcon from '../../SvgIcons/RightBtnIcon';
import SceduleIcon from '../../SvgIcons/SceduleIcon';
import TwitSoff from '../../SvgIcons/TwitSoff';


export default function InsightFb() {
  const insightColor = '#3C4165';
  const insightMenuColor = '#fbfbfb';
  

  return (
    <styled.Wrapper>
      <Sidebar insightColor={insightColor} insightMenuColor={insightMenuColor}/>

      <styled.ContentWrapper>
        <styled.InsightContentWrapper>
          <styled.InsightHeader>
            <styled.IconWrapper>
              <Link to='/insight/fb'><styled.HeaderIcon style={{marginLeft:'.938rem'}}><FaceBookS/></styled.HeaderIcon></Link>
              <Link to='/insight/instar'><styled.HeaderIcon><InstarSoff/></styled.HeaderIcon></Link>
              <Link to='/insight/twit'><styled.HeaderIcon><TwitSoff/></styled.HeaderIcon></Link>
            </styled.IconWrapper>

            <styled.HeaderDateWrapper>
              <SceduleIcon width={18} height={18}/>
              <styled.HeaderPrevIcon><LeftBtnIcon/></styled.HeaderPrevIcon>
              <styled.HeaderNextIcon><RightBtnIcon/></styled.HeaderNextIcon>
              <styled.HeaderButton>내보내기</styled.HeaderButton>
            </styled.HeaderDateWrapper>
          </styled.InsightHeader>

          <styled.ContentOneWrapper>
            <styled.OneLeftBox>
              <styled.BoxTop>CIS (컨텐츠 참여 점수)<styled.CautionIconWrapper><CautionIcon width={15} height={15}/></styled.CautionIconWrapper></styled.BoxTop>
              <styled.LeftBoxTopContent></styled.LeftBoxTopContent>
              <styled.LeftBoxBotContent>
                <styled.Text>축하해요!</styled.Text>
                <styled.Text style={{display:'flex',justifyContent:'center',marginBottom:'0.625rem'}}>지난주 대비 <styled.TextImport>CIS +8%</styled.TextImport>상승!</styled.Text>
                <styled.Text style={{display:'flex',justifyContent:'center'}}><styled.TextImport>사진 타입</styled.TextImport>이 반응이 좋았으며,</styled.Text>
                <styled.Text>타입에 따른 성과는 다음과 같아요.</styled.Text>
              </styled.LeftBoxBotContent>
            </styled.OneLeftBox>
            
            <styled.OneRightBox>
              <styled.BoxTop>포스트 타입별 평균 참여수<styled.CautionIconWrapper><CautionIcon width={15} height={15}/></styled.CautionIconWrapper></styled.BoxTop>
              <styled.RightBoxContent>
                <styled.OneRightTitle>
                  <styled.OneRightTitleh1 style={{marginRight:'13.875rem'}}>사진</styled.OneRightTitleh1>
                  <styled.OneRightTitleh1>비디오</styled.OneRightTitleh1>
                </styled.OneRightTitle>

                <styled.OneRightHalfCircle>
                  <styled.CircleLeft>도달</styled.CircleLeft>
                  <styled.CircleCenter>1567회</styled.CircleCenter>
                  <styled.CircleRight>300회</styled.CircleRight>
                </styled.OneRightHalfCircle>
                <styled.OneRightHalfCircle>
                  <styled.CircleLeft>클릭</styled.CircleLeft>
                  <styled.CircleCenter>1567회</styled.CircleCenter>
                  <styled.CircleRight>300회</styled.CircleRight>
                </styled.OneRightHalfCircle>
                <styled.OneRightHalfCircle>
                  <styled.CircleLeft>리액션</styled.CircleLeft>
                  <styled.CircleCenter>1567회</styled.CircleCenter>
                  <styled.CircleRight>300회</styled.CircleRight>
                </styled.OneRightHalfCircle>
                <styled.OneRightHalfCircle>
                  <styled.CircleLeft>참여율</styled.CircleLeft>
                  <styled.CircleCenter>1567회</styled.CircleCenter>
                  <styled.CircleRight>300회</styled.CircleRight>
                </styled.OneRightHalfCircle>
              </styled.RightBoxContent>
            </styled.OneRightBox>
          </styled.ContentOneWrapper>

          <styled.ContentTwoWrapper>
            <styled.BoxTop>CIS (컨텐츠 참여 점수) TOP 3</styled.BoxTop>

            <styled.TwoContent>
              <styled.TwoInfoWrapper>
                <styled.TwoInfoImg></styled.TwoInfoImg>
                <styled.TwoInfoData>
                  <styled.TwoInfoTitle>안녕하세요 오늘은 작년 이맘때...</styled.TwoInfoTitle>
                  <styled.TwoInfoDate>2022년 3월 22일 화요일 10:00</styled.TwoInfoDate>
                  <styled.TwoInfoLine/>
                  <styled.TwoFbDataWrapper>
                    <styled.TwoFbLike>좋아요 72개</styled.TwoFbLike>
                    <styled.TwoFbLike>공감 72개</styled.TwoFbLike>
                  </styled.TwoFbDataWrapper>
                  <styled.TwoFbDataWrapper>
                    <styled.TwoFbLike>댓글 19개</styled.TwoFbLike>
                    <styled.TwoFbLike>공유 19회</styled.TwoFbLike>
                  </styled.TwoFbDataWrapper>
                </styled.TwoInfoData>
                <styled.TwoFbLine/>
              </styled.TwoInfoWrapper>

              <styled.TwoInfoWrapper>
                <styled.TwoInfoImg></styled.TwoInfoImg>
                <styled.TwoInfoData>
                  <styled.TwoInfoTitle>안녕하세요 오늘은 작년 이맘때...</styled.TwoInfoTitle>
                  <styled.TwoInfoDate>2022년 3월 22일 화요일 10:00</styled.TwoInfoDate>
                  <styled.TwoInfoLine/>
                  <styled.TwoFbDataWrapper>
                    <styled.TwoFbLike>좋아요 72개</styled.TwoFbLike>
                    <styled.TwoFbLike>공감 72개</styled.TwoFbLike>
                  </styled.TwoFbDataWrapper>
                  <styled.TwoFbDataWrapper>
                    <styled.TwoFbLike>댓글 19개</styled.TwoFbLike>
                    <styled.TwoFbLike>공유 19회</styled.TwoFbLike>
                  </styled.TwoFbDataWrapper>
                </styled.TwoInfoData>
                <styled.TwoFbLine/>
              </styled.TwoInfoWrapper>

              <styled.TwoInfoWrapper>
                <styled.TwoInfoImg></styled.TwoInfoImg>
                <styled.TwoInfoData>
                  <styled.TwoInfoTitle>안녕하세요 오늘은 작년 이맘때...</styled.TwoInfoTitle>
                  <styled.TwoInfoDate>2022년 3월 22일 화요일 10:00</styled.TwoInfoDate>
                  <styled.TwoInfoLine/>
                  <styled.TwoFbDataWrapper>
                    <styled.TwoFbLike>좋아요 72개</styled.TwoFbLike>
                    <styled.TwoFbLike>공감 72개</styled.TwoFbLike>
                  </styled.TwoFbDataWrapper>
                  <styled.TwoFbDataWrapper>
                    <styled.TwoFbLike>댓글 19개</styled.TwoFbLike>
                    <styled.TwoFbLike>공유 19회</styled.TwoFbLike>
                  </styled.TwoFbDataWrapper>
                </styled.TwoInfoData>
              </styled.TwoInfoWrapper>
            </styled.TwoContent>
          </styled.ContentTwoWrapper>

          <styled.Line/>

          <styled.ContentThreeWapper>
            <styled.ThreeLeftBox>
              <styled.BoxTop>PIS (포스트 참여 점수)<styled.CautionIconWrapper><CautionIcon  width={15} height={15}/></styled.CautionIconWrapper></styled.BoxTop>
              <styled.ThreeLeftTop>
                
              </styled.ThreeLeftTop>
              <styled.ThreeLeftBot>
                <styled.Text>축하해요!</styled.Text>
                  <styled.Text style={{display:'flex',justifyContent:'center',marginBottom:'0.625rem'}}>지난주 대비 <styled.TextImport>PIS +8%</styled.TextImport>상승!</styled.Text>
                  <styled.Text style={{display:'flex',justifyContent:'center'}}>총 방문자 중<styled.TextImport style={{marginLeft:'.3rem'}}>순 방문자 비율이 높고</styled.TextImport></styled.Text>
                  <styled.Text style={{display:'flex',justifyContent:'center'}}>기기별 접속자 수는<styled.TextImport style={{marginLeft:'.3rem'}}>데스크탑</styled.TextImport>이 더 높아요.</styled.Text>
              </styled.ThreeLeftBot>
            </styled.ThreeLeftBox>
            <styled.ThreeRightBox style={{marginRight:'1rem'}}>
              <styled.BoxTop>총 방문자 수</styled.BoxTop>
              <styled.ThreeRightBoxTop>
                <styled.ThreeText style={{marginBottom:'.3rem'}}>92명</styled.ThreeText>
                <styled.ThreeTextWrapper><styled.ThreeText2>+148</styled.ThreeText2><styled.ThreeLine/><styled.ThreeText2>+8%</styled.ThreeText2></styled.ThreeTextWrapper>
              </styled.ThreeRightBoxTop>
              <styled.ThreeRightBoxBot></styled.ThreeRightBoxBot>
            </styled.ThreeRightBox>
            <styled.ThreeRightBox>
              <styled.BoxTop>기기별 분포</styled.BoxTop>
              <styled.ThreeRightBoxTop>
              <styled.ThreeText style={{marginBottom:'.3rem'}}>192명</styled.ThreeText>
                <styled.ThreeTextWrapper><styled.ThreeText2>+148</styled.ThreeText2><styled.ThreeLine/><styled.ThreeText2>+8%</styled.ThreeText2></styled.ThreeTextWrapper>
              </styled.ThreeRightBoxTop>
              <styled.ThreeRightBoxBot></styled.ThreeRightBoxBot>
            </styled.ThreeRightBox>
          </styled.ContentThreeWapper>

          <styled.ContentFourWrapper>
            <styled.BoxTop>요일별 방문자 수</styled.BoxTop>
          </styled.ContentFourWrapper>

          <styled.ContentFiveWrapper>
            <styled.BoxTop>시간별 방문자 수</styled.BoxTop>
          </styled.ContentFiveWrapper>

          <styled.Line style={{marginTop:'3.125rem',marginBottom:'3.063rem'}}/>

          <styled.ContentSixWrapper>
            <styled.SixBox>
              <styled.BoxTop>팔로워 증감</styled.BoxTop>
              <styled.SixBoxTop>
                <styled.SixFollowBox style={{marginRight:'1rem'}}>
                  <styled.SixText>팔로우</styled.SixText>
                  <styled.ThreeText style={{marginTop:'.3rem',marginBottom:'.3rem'}}>192명</styled.ThreeText>
                  <styled.ThreeTextWrapper><styled.ThreeText2>+148</styled.ThreeText2><styled.ThreeLine/><styled.ThreeText2>+8%</styled.ThreeText2></styled.ThreeTextWrapper>
                </styled.SixFollowBox>
                <styled.SixFollowBox>
                <styled.SixText>언팔로우</styled.SixText>
                  <styled.ThreeText style={{marginTop:'.3rem',marginBottom:'.3rem'}}>45명</styled.ThreeText>
                  <styled.ThreeTextWrapper><styled.SixText2>-148</styled.SixText2><styled.ThreeLine/><styled.SixText2>-8%</styled.SixText2></styled.ThreeTextWrapper>
                </styled.SixFollowBox>
              </styled.SixBoxTop>
              <styled.SixBoxBot>
                <styled.SixTextWrapper><styled.SixBotText>지난 주보다 <styled.SixBotText2 style={{marginLeft:'.3rem'}}>팔로워가 증가</styled.SixBotText2>하고</styled.SixBotText></styled.SixTextWrapper>
                <styled.SixTextWrapper><styled.SixBotText2>언팔로워가 감소</styled.SixBotText2><styled.SixBotText>했어요!</styled.SixBotText></styled.SixTextWrapper>
              </styled.SixBoxBot>
            </styled.SixBox>

            <styled.SixBox>
              <styled.BoxTop>성별 분포</styled.BoxTop>
              <styled.SixBoxTop></styled.SixBoxTop>
              <styled.SixBoxBot>
                <styled.SixTextWrapper><styled.SixBotText>남성과 여성의 페이지<styled.SixBotText2 style={{marginLeft:'.3rem'}}>이용률 격차</styled.SixBotText2>가</styled.SixBotText></styled.SixTextWrapper>
                <styled.SixTextWrapper><styled.SixBotText>점차적으로<styled.SixBotText2 style={{marginLeft:'.3rem'}}>감소</styled.SixBotText2>하는 경향을 보이고 있어요!</styled.SixBotText></styled.SixTextWrapper>
              </styled.SixBoxBot>
            </styled.SixBox>

            <styled.SixBox>
              <styled.BoxTop>연령 분포</styled.BoxTop>
              <styled.SixBoxTop></styled.SixBoxTop>
              <styled.SixBoxBot>
                <styled.SixBotText>팔로워 이용률은</styled.SixBotText>
                <styled.SixBotText2>20대&gt;30대&gt;10대&gt;40대&gt;50대</styled.SixBotText2>
                <styled.SixBotText>순으로 나타났어요!</styled.SixBotText>
              </styled.SixBoxBot>
            </styled.SixBox>
          </styled.ContentSixWrapper>

          <styled.InsightBotWrapper>
            <styled.IconWrapper><DotIcon width={20} height={20}/></styled.IconWrapper>
            <styled.SixBotText style={{marginTop:'.654rem'}}>더많은 인사이트가 궁금하신가요?</styled.SixBotText>
            <styled.SixBotText>더보기 옵션을 선택해 다양한 인사이트를 경험해 보세요</styled.SixBotText>
          </styled.InsightBotWrapper>

        </styled.InsightContentWrapper>
      </styled.ContentWrapper>
    </styled.Wrapper>
  )
}



