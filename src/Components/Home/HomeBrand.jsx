import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DotIcon from '../../SvgIcons/DotIcon';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstarSoff from '../../SvgIcons/InstarSoff';
import TwitSoff from '../../SvgIcons/TwitSoff';
import * as styled from './HomeBrand.style';

export default function HomeBrand({...props}) {

  const [brandModal, setBrandModal] = useState(false);

  const fetchBrandInfo = async () => {
    const response = await fetch('/api/brands');
    return response.json();
  }
 
  const {data:brandInfo,isLoading} = useQuery('brandInfo',fetchBrandInfo);

  console.log(brandInfo.result.length);

  function PlusBrandBox(){
    return (
      <styled.BrandBox>
        <styled.PlusIcon onClick={props.brandOnclick}><DotIcon width={25} height={25}/></styled.PlusIcon>
      </styled.BrandBox>
    )
  }

  function CompleteBrandBox(){
    return (
      <styled.ConnectBox>
        <styled.ConnectHeader>
          <styled.ConnectCircle>{brandInfo.result[0].brandName.slice(0,1)}</styled.ConnectCircle>
          <styled.ConnectInfoWrapper>
            
            <styled.NameTimeWrapper>
              <styled.ConnectName>{brandInfo.result[0].brandName}</styled.ConnectName>
              <styled.ConnectTime>서울</styled.ConnectTime>
            </styled.NameTimeWrapper>
            <styled.ConnectSnsWrapper>
              <styled.SnsIcon><FaceBookS width={16} height={16}/></styled.SnsIcon>
              <styled.SnsIcon><InstarSoff width={16} height={16}/></styled.SnsIcon>
              <styled.SnsIcon><TwitSoff width={16} height={16}/></styled.SnsIcon>
            </styled.ConnectSnsWrapper>

          </styled.ConnectInfoWrapper>
        </styled.ConnectHeader>
      </styled.ConnectBox>
    )
  }

  function BrandBoxComponent(){
    if (brandInfo.result.length === 0){
     return <PlusBrandBox/>
    }
    return null;
  }

  function BrandBoxComponentOne(){
    if (brandInfo.result.length === 1){
      return (
        <styled.ConnectBox>
          <styled.ConnectHeader>
            <styled.ConnectCircle>{brandInfo.result[0].brandName.slice(0,1)}</styled.ConnectCircle>
            <styled.ConnectInfoWrapper>
              
              <styled.NameTimeWrapper>
                <styled.ConnectName>{brandInfo.result[0].brandName}</styled.ConnectName>
                <styled.ConnectTime>서울</styled.ConnectTime>
              </styled.NameTimeWrapper>
              <styled.ConnectSnsWrapper>
                <styled.SnsIcon><FaceBookS width={16} height={16}/></styled.SnsIcon>
                <styled.SnsIcon><InstarSoff width={16} height={16}/></styled.SnsIcon>
                <styled.SnsIcon><TwitSoff width={16} height={16}/></styled.SnsIcon>
              </styled.ConnectSnsWrapper>

            </styled.ConnectInfoWrapper>
          </styled.ConnectHeader>
        </styled.ConnectBox>
      )
    }
    return null;
  }

  function BrandBoxComponentTwo(){
    if (brandInfo.result.length === 2){
     return (
      <>
        <styled.ConnectBox>
          <styled.ConnectHeader>
            <styled.ConnectCircle>{brandInfo.result[0].brandName.slice(0,1)}</styled.ConnectCircle>
            <styled.ConnectInfoWrapper>
              
              <styled.NameTimeWrapper>
                <styled.ConnectName>{brandInfo.result[0].brandName}</styled.ConnectName>
                <styled.ConnectTime>서울</styled.ConnectTime>
              </styled.NameTimeWrapper>
              <styled.ConnectSnsWrapper>
                <styled.SnsIcon><FaceBookS width={16} height={16}/></styled.SnsIcon>
                <styled.SnsIcon><InstarSoff width={16} height={16}/></styled.SnsIcon>
                <styled.SnsIcon><TwitSoff width={16} height={16}/></styled.SnsIcon>
              </styled.ConnectSnsWrapper>

            </styled.ConnectInfoWrapper>
          </styled.ConnectHeader>
        </styled.ConnectBox>

        <styled.ConnectBox>
          <styled.ConnectHeader>
            <styled.ConnectCircle>{brandInfo.result[1].brandName.slice(0,1)}</styled.ConnectCircle>
            <styled.ConnectInfoWrapper>
              
              <styled.NameTimeWrapper>
                <styled.ConnectName>{brandInfo.result[1].brandName}</styled.ConnectName>
                <styled.ConnectTime>서울</styled.ConnectTime>
              </styled.NameTimeWrapper>
              <styled.ConnectSnsWrapper>
                <styled.SnsIcon><FaceBookS width={16} height={16}/></styled.SnsIcon>
                <styled.SnsIcon><InstarSoff width={16} height={16}/></styled.SnsIcon>
                <styled.SnsIcon><TwitSoff width={16} height={16}/></styled.SnsIcon>
              </styled.ConnectSnsWrapper>

            </styled.ConnectInfoWrapper>
          </styled.ConnectHeader>
        </styled.ConnectBox>

        <styled.BrandBox>
          <styled.PlusIcon onClick={props.brandOnclick}><DotIcon width={25} height={25}/></styled.PlusIcon>
        </styled.BrandBox>
      </>
     )
  }
  return null;
}

  

  return (
   <>
    {
      isLoading ? <h1>브랜드 박스 정보를 가져오는 중입니다.</h1>
      :
      <>
        <BrandBoxComponent></BrandBoxComponent>
        <BrandBoxComponentOne></BrandBoxComponentOne>
        <BrandBoxComponentTwo></BrandBoxComponentTwo>
      </>
    }
   </>
  )
}
