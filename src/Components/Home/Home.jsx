import React, { useEffect, useState } from 'react';
import * as styled from './Home.style';
import HomeBrand from './HomeBrand';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstaS from '../../SvgIcons/InstaS';
import TwitS from '../../SvgIcons/TwitS';
import RightArrowIcon from '../../SvgIcons/RightArrowIcon';
import LinkrLogoNavy from '../../SvgIcons/LinkrLogoNavy';
import axios from 'axios';
import { useQuery } from 'react-query';


const Home = () => {
  const appId = process.env.REACT_APP_FB_APP_ID;
  const fbSrc = process.env.REACT_APP_FB_SRC;
  
  const [brandModal, setBrandModal] = useState(false);
  const [fbConnectModal, setFbConnectModal] = useState(false);
  const [brandName, setBrandName] = useState('');
  const [brandTime, setBrandTime] = useState('');
  const [accessToken,setAccessToken] = useState();
  const [userId, setUserId] = useState();
  const [brandConnect, setBrandConnect] = useState(true);
  
  const brandOnclick = () => {
    setBrandModal(!brandModal);
  }

  const getBrandTime = (e) => {
    setBrandTime(e.target.value)
  }

  useEffect(() => {
    setFBAsyncInit();
    loadFbSdk();
  }, []); //facebook sdk 연결

  const setFBAsyncInit = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        version: 'v13.0',
        appId:appId,
        xfbml: true,
        cookie: true,
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
        setUserId(response.authResponse.userID);
        setFbConnectModal(true);
      }
      else if(response.status === 'not_authorized'){
        console.log('사용자가 페이스북에 로그인했지만 웹에서는 로그인하지 않았습니다.')
      }else{
        console.log('사용자가 페이스북에 로그인하지 않았으므로 웹페에지에 로그인 했는지 알수 없습니다. 혹은 로그아웃 되었습니다.')
        setFbConnectModal(false);
      }
    },{scope:'user_likes, pages_show_list, pages_manage_posts,pages_messaging'})
  } //facebook login 함수 => accesstoken, userid 얻을수 있다

  const accountInfo = async () => {
    const response = await fetch('api/accounts')
    return response.json();
  }

  const { data:accoutInfo, isLoading:accountLoading } = useQuery('accountInfo',accountInfo);

  const fetchGetPageInfo = async () => {
    const response = await fetch(`https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`)
    return response.json();
  };

  const {data:fbPageInfo} = useQuery('fbPageInfo',fetchGetPageInfo); //pageId,PageAccessToken,pageName 정보
  
  const brandCreateOnclick = async () => {
    const brandData = {
      brandName :brandName,
      timeZone :`Asia/${brandTime}`
    }
    try{
      const response = await axios.post('api/brands',JSON.stringify(brandData),{headers:{"Content-Type":`application/json`}})
      console.log(response.data.result.id);
      const facebookData = {
        pageId : fbPageInfo.data[0].id ,
        pageName : fbPageInfo.data[0].name,
        pageAccessToken : fbPageInfo.data[0].access_token
      }
      const brandId = response.data.result.id
      const response2 = await axios.post(`api/brands/${brandId}/FACEBOOK`,JSON.stringify(facebookData),{headers:{"Content-Type":`application/json`}})
      console.log(response2);
      setBrandModal(!brandModal);
      setBrandConnect(!brandConnect);
      setFbConnectModal(!fbConnectModal);
    }catch(error){
      console.log(error);
    }
  }
  
    return (
      <styled.Wrapper>
        <styled.Header>
          <styled.LogoWrapper><LinkrLogoNavy width={100} height={100}/></styled.LogoWrapper>
          <styled.HeaderRight>
            <styled.NamedIdWrapper>
              {accountLoading ? <></> : <styled.Name>{accoutInfo.result.userName}</styled.Name>}
              {accountLoading ? <></> : <styled.Name>{accoutInfo.result.userEmail}</styled.Name>}
            </styled.NamedIdWrapper>
            {accountLoading ? <></> : <styled.Circle>{accoutInfo.result.userName.slice(0,1)}</styled.Circle>}
          </styled.HeaderRight>
        </styled.Header>

        <styled.BrandWrapper>
          <styled.Brand>Select brand</styled.Brand>
          <styled.Intro>어서오세요! 브랜드를 생성해볼까요?</styled.Intro>
          <styled.BrandBoxWrapper>
            <styled.BrandBox></styled.BrandBox>
          </styled.BrandBoxWrapper>
        </styled.BrandWrapper>

        <styled.Line/>

        <styled.BrandBoxWrapper>
          <HomeBrand brandModal={brandModal} brandOnclick={brandOnclick} ></HomeBrand>
        </styled.BrandBoxWrapper>
    
        {
          brandModal ?
          <styled.BrandModal>
          <styled.ModalTitle>Create brand</styled.ModalTitle>
          <styled.ModalIntro>어서오세요! 브랜드를 생성해볼까요?</styled.ModalIntro>
          <styled.ModalContentWrapper>
            <styled.LeftContent>
              <styled.LeftTitleWrapper>
                <styled.LeftTitle>브랜드 기본정보</styled.LeftTitle>
                <styled.LeftSpan>*필수항목</styled.LeftSpan>
              </styled.LeftTitleWrapper>
              <styled.LeftInput placeholder='브랜드 이름을 입력하세요.' value={brandName} onChange={(e) => setBrandName(e.target.value)}></styled.LeftInput>
              <styled.BrandTime onChange={getBrandTime} value={brandTime}>
                <option defaultValue=''>브랜드 타임존</option>
                <option value='Seoul'>(GMT+:09:00) Seoul</option>
              </styled.BrandTime>
            </styled.LeftContent>

            <styled.VerticalLine/>
            
            <styled.RightContent>
              <styled.RightTitleWrapper>
                <styled.RightTitle>SNS 계정 연동</styled.RightTitle>
                <styled.RightSpan>*선택항목 | 브랜드 생성 후 마이페이지에서 연동이 가능합니다.</styled.RightSpan>
              </styled.RightTitleWrapper>
              <styled.RightButton onClick={FbLogin}>
                <FaceBookS/>
                <styled.ButtonSpan>
                  {
                    fbConnectModal 
                    ?'페이스북 연동완료'
                    :'페이스북 페이지 연동'
                  }
                </styled.ButtonSpan>
                <styled.RightArrow>
                  <RightArrowIcon width={12} height={12}/>
                </styled.RightArrow>
              </styled.RightButton>

              <styled.RightButton><InstaS/><styled.ButtonSpan>인스타그램 비지니스 계정 연동</styled.ButtonSpan><styled.RightArrow><RightArrowIcon width={12} height={12}/></styled.RightArrow></styled.RightButton>
              <styled.RightButton><TwitS/><styled.ButtonSpan>트위터 프로필 연동</styled.ButtonSpan><styled.RightArrow><RightArrowIcon width={12} height={12}/></styled.RightArrow></styled.RightButton>
            </styled.RightContent>
          </styled.ModalContentWrapper>

          <styled.ModalButtonWrapper>
            <styled.CancelButton onClick={brandOnclick}>취소</styled.CancelButton>
            <styled.CreateButton onClick={brandCreateOnclick}>생성하기</styled.CreateButton>
          </styled.ModalButtonWrapper>
        </styled.BrandModal>
        : null
        }
      </styled.Wrapper>
    );
};

export default Home;





  