import React, { useEffect, useState } from 'react';
import * as styled from './Home.style';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstarS from '../../SvgIcons/InstarS';
import TwitS from '../../SvgIcons/TwitS';
import FaceBookSoff from '../../SvgIcons/FaceBookSoff';
import InstarSoff from '../../SvgIcons/InstarSoff';
import TwitSoff from '../../SvgIcons/TwitSoff';
import RightArrowIcon from '../../SvgIcons/RightArrowIcon';
import DotIcon from '../../SvgIcons/DotIcon';
import LinkrLogoNavy from '../../SvgIcons/LinkrLogoNavy';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atom';
import axios from 'axios';
import { useQuery } from 'react-query';

const Home = () => {
  const appId = process.env.REACT_APP_FB_APP_ID;
  const fbSrc = process.env.REACT_APP_FB_SRC;
  const userInfo = useRecoilValue(userInfoAtom);
  const [brandModal, setBrandModal] = useState(false);
  const [fbConnectModal, setFbConnectModal] = useState(false);
  const [brandName, setBrandName] = useState('');
  const [brandTime, setBrandTime] = useState('');
  const [accessToken,setAccessToken] = useState();
  const [pageAccessToken, setPageAccessToken] = useState();
  const [pageName, setPageName] = useState();
  const [userId, setUserId] = useState();
  const [pageId, setPageId] = useState();
  const [brandConnect, setBrandConnect] = useState(true);
  const [addBrand, setAddBrand] = useState(false);
  const [brandId, setBrandId] = useState();
  
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
  }
  
  useEffect(() => {
    if(accessToken){
      axios.get(`https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`)
      .then((response) => {
        console.log(response);
        setPageId(response.data.data[0].id);
        setPageAccessToken(response.data.data[0].access_token);
        setPageName(response.data.data[0].name);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },[userId])

  const getBrandTime = (e) => {
    setBrandTime(e.target.value)
  }

  const brandCreateOnclick = async () => {
    const data = {
      brandName : brandName,
      brandTime : `Aisa/${brandTime}`,
    }
    console.log(JSON.stringify(data));
    await axios.post('api/brands',JSON.stringify(data),{headers:{"Content-Type":`application/json`}})
    .then((response) => {
      if(response.data.success === true){
        setBrandModal(!brandModal);
        setBrandConnect(!brandConnect);
        setAddBrand(!addBrand);
        setFbConnectModal(!fbConnectModal);
        setBrandId(response.data.result.id);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

    return (
      <styled.Wrapper>
        <styled.Header>
          <styled.LogoWrapper><LinkrLogoNavy width={100} height={100}/></styled.LogoWrapper>
          <styled.HeaderRight>
            <styled.NamedIdWrapper>
              <styled.Name>{userInfo.userName}</styled.Name>
              <styled.Name>{userInfo.userEmail}</styled.Name>
            </styled.NamedIdWrapper>
            <styled.Circle>{userInfo.userName}</styled.Circle>
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
                <option selected value=''>브랜드 타임존</option>
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

              <styled.RightButton><InstarS/><styled.ButtonSpan>인스타그램 비지니스 계정 연동</styled.ButtonSpan><styled.RightArrow><RightArrowIcon width={12} height={12}/></styled.RightArrow></styled.RightButton>
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


// {
//   brandConnect ?
//   <styled.BrandBox>
//     <styled.PlusIcon onClick={brandOnclick}><DotIcon width={25} height={25}/></styled.PlusIcon>
//   </styled.BrandBox>
//   :
//   <styled.ConnectBox>
//     <styled.ConnectHeader>
//       <styled.ConnectCircle>{brandName.slice(0,1)}</styled.ConnectCircle>
//       <styled.ConnectInfoWrapper>
        
//         <styled.NameTimeWrapper>
//           <styled.ConnectName>{brandName}</styled.ConnectName>
//           <styled.ConnectTime>{brandTime}</styled.ConnectTime>
//         </styled.NameTimeWrapper>
//         <styled.ConnectSnsWrapper>
//           <styled.SnsIcon><FaceBookS width={16} height={16}/></styled.SnsIcon>
//           <styled.SnsIcon><InstarSoff width={16} height={16}/></styled.SnsIcon>
//           <styled.SnsIcon><TwitSoff width={16} height={16}/></styled.SnsIcon>
//         </styled.ConnectSnsWrapper>

//       </styled.ConnectInfoWrapper>
//     </styled.ConnectHeader>
//   </styled.ConnectBox>
// }

// {
//   addBrand 
//   ?
//   <styled.BrandBox>
//     <styled.PlusIcon onClick={brandOnclick}><DotIcon width={25} height={25}/></styled.PlusIcon>
//   </styled.BrandBox>
//   :
//   null
// }

// {
//   addBrand
//   ?
//   <styled.ConnectBox>
//     <styled.ConnectHeader>
//       <styled.ConnectCircle>{brandName.slice(0,1)}</styled.ConnectCircle>
//       <styled.ConnectInfoWrapper>
        
//         <styled.NameTimeWrapper>
//           <styled.ConnectName>{brandName}</styled.ConnectName>
//           <styled.ConnectTime>{brandTime}</styled.ConnectTime>
//         </styled.NameTimeWrapper>
//         <styled.ConnectSnsWrapper>
//           <styled.SnsIcon><FaceBookS width={16} height={16}/></styled.SnsIcon>
//           <styled.SnsIcon><InstarSoff width={16} height={16}/></styled.SnsIcon>
//           <styled.SnsIcon><TwitSoff width={16} height={16}/></styled.SnsIcon>
//         </styled.ConnectSnsWrapper>

//       </styled.ConnectInfoWrapper>
//     </styled.ConnectHeader>
//   </styled.ConnectBox>
//   :
//   null
// }