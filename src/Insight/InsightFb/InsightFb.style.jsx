import styled from 'styled-components';

export const Wrapper = styled.div`
  width:120rem;
  height:100vh;
  display: flex;
  background-color: #f5f6f8;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

export const ContentWrapper = styled.div`
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

export const InsightContentWrapper = styled.div`
  width:67.813rem;
  margin: 0 auto;
`;

export const InsightHeader = styled.div`
  width:100%;
  margin-top: 5.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const HeaderIcon = styled.div`
  cursor: pointer;
  margin-left:1.25rem;
`;

export const HeaderDateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: .875rem;
`;

export const HeaderPrevIcon = styled.div`
  margin-right: .75rem;
  margin-left:.651rem;
  display: flex;
  align-items: center;
`;

export const HeaderNextIcon = styled.div`
  margin-left:.75rem;
  display: flex;
  align-items: center;
`;

export const HeaderButton = styled.button`
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

export const ContentOneWrapper = styled.div`
  width: 100%;
  height:18.875rem;
  display: flex;
  margin-top:2.5rem;
`;

export const OneLeftBox = styled.div`
  width: 24.625rem;
  height: 100%;
  background-color:#eef3ff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-right: 1.063rem;
`;

export const BoxTop = styled.div`
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

export const LeftBoxTopContent = styled.div`
  width:100%;
  height:7.969rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

export const LeftBoxBotContent = styled.div`
  width:100%;
  height: 8.344rem;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.h1`
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

export const TextImport = styled.h1`
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

export const CautionIconWrapper = styled.div`
  margin-left: .25rem;
  display: flex;
  align-items: center;
`;

export const OneRightBox = styled.div`
  width: 42.125rem;
  height: 100%;
  background-color:#fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
`;

export const RightBoxContent = styled.div`
  width: 100%;
  height: 16.375rem;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const OneRightTitle = styled.div`
  display: flex;
  margin-left: 14.625rem;
  background-color: #fff;
`;

export const OneRightTitleh1 = styled.h1`
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

export const OneRightHalfCircle = styled.div`
  width: 36.5rem;
  height: 2.188rem;
  border-radius: 17.5px;
  border: solid 1px #eaeaea;
  margin: 0 auto;
  margin-bottom:.75rem;
  display: flex;
`;

export const CircleLeft = styled.div`
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

export const CircleCenter = styled.div`
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

export const CircleRight = styled.div`
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

export const ContentTwoWrapper = styled.div`
  width:100%;
  height: 14.375rem;
  margin-top: 3.125rem;
  background-color : #fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
`;

export const TwoContent = styled.div`
  width:100%;
  height: 11.875rem;
  display: flex;
  
`;

export const TwoInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left:1.375rem;
`;

export const TwoInfoImg = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 10px;
  border:1px solid #eaeaea;
  margin-right: 1.375rem;
`;

export const TwoInfoData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TwoInfoTitle = styled.h1`
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  color: #191919;
  margin-bottom: .4rem;
`;

export const TwoInfoDate = styled.h1`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: #676767;
  margin-bottom: .7rem;
`;

export const TwoInfoLine = styled.div`
  width:12rem;
  height: 0.063rem;
  background-color: #eaeaea;
  margin-bottom: .7rem;
`;

export const TwoFbDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .4rem;
`;

export const TwoFbLike = styled.h1`
  width: 5rem;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #666;
`;

export const TwoFbLine = styled.div`
  width:.1px;
  height:6.25rem;
  background-color: #eaeaea;
  margin-left:1.375rem;
`;

export const Line = styled.div`
  width: 66.063rem;
  height: 0.063rem;
  background-color: #eaeaea;
  margin:0 auto;
  margin-top: 3.438rem;
  margin-bottom: 3.375rem;
`;

export const ContentThreeWapper = styled.div`
  width:100%;
  height:18.875rem;
  display: flex;
`;

export const ThreeLeftBox = styled.div`
  width:24.625rem;
  height: 100%;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-right: 1.063rem;
`;

export const ThreeLeftTop = styled.div`
  width:100%;
  height:7.969rem;
  border-bottom: 0.063rem solid #eaeaea;
`;

export const ThreeLeftBot = styled.div`
  width:100%;
  height:8.344rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ThreeRightBox = styled.div`
  width: 20.563rem;
  height: 100%;
  border-radius: 15px;
  border: solid 1px #eaeaea;
`;

export const ThreeRightBoxTop = styled.div`
  width:100%;
  height:5.219rem;
  border-bottom: 0.063rem solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ThreeRightBoxBot = styled.div`
  width:100%;
  height: 11.094rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ThreeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThreeText = styled.h1`
  font-size: 1.063rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #1a225c;
`;

export const ThreeText2 = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #eb2626;
`;

export const ThreeLine = styled.div`
  width: 0.15rem;
  height: 0.75rem;
  background-color: #676767;
  margin-left: .3rem;
  margin-right:.3rem;
`;

export const ContentFourWrapper = styled.div`
  width:100%;
  height: 19.25rem;
  background-color:#fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-top: 3.125rem;
`;

export const ContentFiveWrapper = styled.div`
  width:100%;
  height: 19.25rem;
  background-color:#fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  margin-top: 3.125rem;
`;

export const ContentSixWrapper = styled.div`
  width:100%;
  height:21.875rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3.125rem;
`;

export const SixBox = styled.div`
  width: 21.875rem;
  height: 21.875rem;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  background-color:#fff;
`;

export const SixBoxTop = styled.div`
  width:100%;
  height:12.178rem;
  border-bottom: 0.063rem solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SixBoxBot = styled.div`
  width:100%;
  height:7.134rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SixFollowBox = styled.div`
  width: 8.125rem;
  height: 8.125rem;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SixText = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333;
`;

export const SixText2 = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #007aff;
`;

export const SixTextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SixBotText = styled.h1`
  font-size: 0.875rem;
  font-weight: noraml;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  display: flex;
`;

export const SixBotText2 = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  display: flex;
`;

export const InsightBotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9.158rem;
`;
