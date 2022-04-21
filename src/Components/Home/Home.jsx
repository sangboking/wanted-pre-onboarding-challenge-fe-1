import React, { useEffect, useState } from 'react';
import * as styled from './Home.style';
import HomeBrand from './HomeBrand';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstaS from '../../SvgIcons/InstaS';
import TwitS from '../../SvgIcons/TwitS';
import RightArrowIcon from '../../SvgIcons/RightArrowIcon';
import LinkrLogoNavy from '../../SvgIcons/LinkrLogoNavy';
import { useQuery } from 'react-query';
import { addBrand, fbLogin, getAccountInfo, getPageInfo, loadFbSdk, setFBAsyncInit } from '../../apis/api';


const Home = () => {
  const [brandModal, setBrandModal] = useState(false);
  const [fbConnectComment, setFbConnectComment] = useState(false)
  const [brandName, setBrandName] = useState('');
  const [brandTime, setBrandTime] = useState('');
  const [accessToken,setAccessToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    setFBAsyncInit();
    loadFbSdk();
  }, []); //facebook sdk 연결
  
  const brandOnclick = () => {
    setBrandModal(!brandModal);
  }

  const getBrandTime = (e) => {
    setBrandTime(e.target.value)
  }

  const { data:accoutInfoData, isLoading:accountLoading } = useQuery('accountInfo',getAccountInfo,
  {
    refetchOnWindowFocus: false,
  });

  
  const { data:fbPageInfoData } = useQuery('fbPageInfo', () => getPageInfo(userId,accessToken),
  {
    refetchOnWindowFocus : false,
  }); 


    return (
      <styled.Wrapper>
        <styled.Header>
          <styled.LogoWrapper><LinkrLogoNavy width={100} height={100}/></styled.LogoWrapper>
          <styled.HeaderRight>
            <styled.NamedIdWrapper>
              {accountLoading ? null : <styled.Name>{accoutInfoData.result.userName}</styled.Name>}
              {accountLoading ? null : <styled.Name>{accoutInfoData.result.userEmail}</styled.Name>}
            </styled.NamedIdWrapper>
            {accountLoading ? null : <styled.Circle>{accoutInfoData.result.userName.slice(0,1)}</styled.Circle>}
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

        <styled.BrandBoxWrapper style={{textDecoration:'none'}}>
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
                <styled.RightSpan>*선택항목</styled.RightSpan>
              </styled.RightTitleWrapper>
              <styled.RightButton onClick={() => {fbLogin(setAccessToken,setUserId,setFbConnectComment)}}>
                <FaceBookS/>
                <styled.ButtonSpan>
                  {
                    fbConnectComment 
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
            <styled.CreateButton onClick={() => {addBrand(brandName,brandTime,fbPageInfoData,setBrandModal,setFbConnectComment)}}>생성하기</styled.CreateButton>
          </styled.ModalButtonWrapper>
        </styled.BrandModal>
        : null
        }
      </styled.Wrapper>
    );
};

export default Home;





  