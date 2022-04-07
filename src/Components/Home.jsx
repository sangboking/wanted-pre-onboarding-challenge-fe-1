import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FaceBookS from '../SvgIcons/FaceBookS';
import InstarS from '../SvgIcons/InstarS';
import TwitS from '../SvgIcons/TwitS';
import RightArrowIcon from '../SvgIcons/RightArrowIcon';
import DotIcon from '../SvgIcons/DotIcon';
import LinkrLogoNavy from '../SvgIcons/LinkrLogoNavy';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../atom';
import FbLogin from './FbLogin';

const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  margin:0 auto;
  background-color: #f5f6f8;
  position:relative;
`;

const Header = styled.header`
  width:75rem;
  height:3.485rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 auto;
  padding-top: 4.5rem;
  padding-bottom: 1.453rem;
  border-bottom:1px solid #eaeaea;
  @media screen and (max-width:1440px) {
   padding-top: 7rem;
  }
`;

const LogoWrapper = styled.div`
  margin-left:.875rem;
`;

const HeaderRight = styled.div`
  display: flex;
`;

const NamedIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align:right;
  justify-content: center;
  margin-right:.5rem;
  margin-top:1rem;
`;

const Name = styled.span`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #191919;
  margin-bottom:0.25rem;
`;

const Circle = styled.div`
  width:3.75rem;
  height: 3.75rem;
  background-color: #fff;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #676767;
`;

const BrandWrapper = styled.div`
  width:75rem;
  margin:0 auto;
  margin-top:2.6rem;
`;

const Brand = styled.span`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.625rem;
  margin-left:.875rem;
`;

const Intro = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(102, 102, 102, 0.9);
  display:block;
  margin-bottom:2.6rem;
  margin-left:.875rem;
`;

const BrandBoxWrapper = styled.div`
  width:75rem;
  display:flex;
`;

const BrandBox = styled.div`
  width:23.75rem;
  height: 14.063rem;
  border-radius: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.875rem;
`;

const Line = styled.div`
  width: 75rem;
  height: 1px;
  background-color: #eaeaea;
  margin: 0 auto;
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
`;

const PlusIcon = styled.div`
  cursor: pointer;
`;

//모달창 styled-components

const BrandModal = styled.div`
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:64.5rem;
  height:38rem;
  border-radius: 20px;
  background-color: #fff;
  padding:4rem 0 0 4rem;
  box-shadow : rgba(0,0,0,0.5) 0 0 0 100vw;
  z-index : 100;
`;

const ModalTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.625rem;
`;

const ModalIntro = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(103, 103, 103, 0.9);
`;

const ModalContentWrapper = styled.div`
  display: flex;
  justify-content:space-between ;
  margin-top:2.5rem;
  position:relative ;
`;

const LeftContent = styled.div`
  width:50%;
  height:13.625rem;
`;

const LeftTitleWrapper = styled.div`
  display:flex ;
  align-items:center ;
  margin-bottom:.7rem;
`;

const LeftTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-right:.625rem ;
`;

const LeftSpan = styled.span`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.22px;
  text-align: left;
  color: #676767;
`;

const LeftInput = styled.input`
  width:25rem;
  height:3.125rem;
  border-radius: 15px;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  margin-bottom:1.25rem;
  padding-left: 1rem;
  ::placeholder,
  ::-webkit-input-placeholder{
    font-size: 0.875rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #676767;
  }
  &:focus{
    outline: none;
  }
`;

const BrandTime = styled.select`
  width:26.4rem;
  height:3.125rem;
  border-radius: 15px;
  border: solid 0.3px #999;
  background-color: #fff;
  padding-left:1rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #676767;
  background:url(/assets/arrow_down.png) no-repeat right 50%;
  background-size:30px;
  appearance: none; //select box 화살표 제거 
  -moz-appearance: none; 
  -webkit-appearance: none; 
  cursor: pointer;
`;


const VerticalLine = styled.div`
  width:.3px;
  background-color:#999 ;
  margin-right:1rem;
`;

const RightContent = styled.div`
  width:50%;
  height:14.5rem;
  color:white;
  margin-left: 3rem;
`;

const RightTitleWrapper = styled.div`
  display:flex ;
  align-items:center ;
  margin-bottom:.8rem;
`;

const RightTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-right:.625rem;
`;

const RightSpan = styled.span`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.22px;
  text-align: left;
  color: #676767;
`;

const RightButton = styled.button`
  width:26.2rem;
  height:3.125rem;
  border-radius: 15px;
  border: solid 0.3px #999;
  margin-bottom:1.25rem;
  display:flex ;
  align-items:center ;
  padding-left:1rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #676767;
  cursor:pointer ;
  position: relative;
  background-color: #fff;
`;

const RightArrow = styled.div`
  position: absolute;
  right:1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonSpan = styled.span`
  margin-left:1.25rem;
`;

const ModalButtonWrapper = styled.div`
  position:absolute;
  bottom:8rem;;
  left:18.5rem;
`;

const CancelButton = styled.button`
  width: 15rem;
  height: 3.125rem;
  border: solid 0.3px #999;
  border-radius:15px ;
  background-color: #fff;
  margin-right:2rem;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: rgba(25, 25, 25, 0.9);
  cursor:pointer ;
`;

const CreateButton = styled.button`
  width: 15rem;
  height: 3.125rem;
  border-radius: 15px;
  border:1px solid #112553;
  background-color: #112553;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  cursor:pointer ;
`;

const Home = () => {
  const appId = process.env.REACT_APP_FB_APP_ID;
  const fbSrc = process.env.REACT_APP_FB_SRC;
  const userInfo = useRecoilValue(userInfoAtom);
  const [brandModal,setBrandModal] = useState(false);
  const [accessToken,setAccessToken] = useState();
  const [pageAccessToken,setPageAccessToken] = useState();
  const [userId,setUserId] = useState();
  const [pageId,setPageId] = useState();
  

  
  
  const brandOnclick = () => {
    setBrandModal(!brandModal);
  }

  useEffect(() => {
    setFBAsyncInit();
    loadFbSdk();
  }, []);

  const setFBAsyncInit = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        version: 'v13.0',
        appId:appId,
        xfbml: true,
        
      });
      window.FB.AppEvents.logPageView();
    };
  }

  const loadFbSdk = () => {
    ((d, s, id) => { 
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = fbSrc;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  const FbLogin = () => {
    window.FB.login((response)=>{
      if(response.status === 'connected'){
        console.log(response)
        setAccessToken(response.authResponse.accessToken);
        setUserId(response.authResponse.userID)
      }
      else if(response.status === 'not_authorized'){
        console.log('사용자가 페이스북에 로그인했지만 웹에서는 로그인하지 않았습니다.')
      }else{
        console.log('사용자가 페이스북에 로그인하지 않았으므로 웹페에지에 로그인 했는지 알수 없습니다. 혹은 로그아웃 되었습니다.')
      }
    })
  }

  

    return (
      <Wrapper>
        <Header>
          <LogoWrapper><LinkrLogoNavy width={100} height={100}/></LogoWrapper>
          <HeaderRight>
            <NamedIdWrapper>
              <Name>{userInfo.userName}</Name>
              <Name>{userInfo.userEmail}</Name>
            </NamedIdWrapper>
            <Circle>{userInfo.userName}</Circle>
          </HeaderRight>
        </Header>

        <BrandWrapper>
          <Brand>Select brand</Brand>
          <Intro>어서오세요! 브랜드를 생성해볼까요?</Intro>
          <BrandBoxWrapper>
            <BrandBox></BrandBox>
          </BrandBoxWrapper>
        </BrandWrapper>

        <Line/>

        <BrandWrapper>
          <BrandBoxWrapper>
            <BrandBox>
              <PlusIcon onClick={brandOnclick}><DotIcon width={25} height={25}/></PlusIcon>
            </BrandBox>

            <BrandBox>
              <PlusIcon onClick={brandOnclick}><DotIcon width={25} height={25}/></PlusIcon>
            </BrandBox>

             <BrandBox style={{marginRight:'0'}}>
              <PlusIcon onClick={brandOnclick}><DotIcon width={25} height={25}/></PlusIcon>
            </BrandBox>
          </BrandBoxWrapper>
        </BrandWrapper>

        {
          brandModal ?
          <BrandModal>
          <ModalTitle>Create brand</ModalTitle>
          <ModalIntro>어서오세요! 브랜드를 생성해볼까요?</ModalIntro>
          <ModalContentWrapper>
            <LeftContent>
              <LeftTitleWrapper>
                <LeftTitle>브랜드 기본정보</LeftTitle>
                <LeftSpan>*필수항목</LeftSpan>
              </LeftTitleWrapper>
              <LeftInput placeholder='브랜드 이름을 입력하세요.'></LeftInput>
              <BrandTime>
                <option>브랜드 타임존</option>
              </BrandTime>
            </LeftContent>

            <VerticalLine/>
            
            <RightContent>
              <RightTitleWrapper>
                <RightTitle>SNS 계정 연동</RightTitle>
                <RightSpan>*선택항목 | 브랜드 생성 후 마이페이지에서 연동이 가능합니다.</RightSpan>
              </RightTitleWrapper>
              <RightButton onClick={FbLogin}><FaceBookS/><ButtonSpan>페이스북 페이지 연동</ButtonSpan><RightArrow><RightArrowIcon width={12} height={12}/></RightArrow></RightButton>
              <RightButton><InstarS/><ButtonSpan>인스타그램 비지니스 계정 연동</ButtonSpan><RightArrow><RightArrowIcon width={12} height={12}/></RightArrow></RightButton>
              <RightButton><TwitS/><ButtonSpan>트위터 프로필 연동</ButtonSpan><RightArrow><RightArrowIcon width={12} height={12}/></RightArrow></RightButton>
            </RightContent>
          </ModalContentWrapper>

          <ModalButtonWrapper>
            <CancelButton onClick={brandOnclick}>취소</CancelButton>
            <CreateButton>생성하기</CreateButton>
          </ModalButtonWrapper>
        </BrandModal>
        : null
        }

        


      </Wrapper>
    );
};

export default Home;

