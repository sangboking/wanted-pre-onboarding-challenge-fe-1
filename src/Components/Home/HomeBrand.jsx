import React from 'react';
import { useQuery } from 'react-query';
import DotIcon from '../../SvgIcons/DotIcon';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstarSoff from '../../SvgIcons/InstarSoff';
import TwitSoff from '../../SvgIcons/TwitSoff';
import * as styled from './HomeBrand.style';

export default function HomeBrand({...props}) {

  const fetchBrandInfo = async () => {
    const response = await fetch('/api/brands');
    return response.json();
  }
 
  const {data:brandInfo,isLoading} = useQuery('brandInfo',fetchBrandInfo);

  console.log(brandInfo);

  function PlusBrand(){
    return (
      <styled.BrandBox>
        <styled.PlusIcon onClick={props.brandOnclick}><DotIcon width={25} height={25}/></styled.PlusIcon>
      </styled.BrandBox> 
    )
  }

  
  return (
   <>
    {
      isLoading ? <h1>브랜드 박스 정보를 가져오는 중입니다.</h1>
      :
      <>
        {
          brandInfo.result.length === 0 && <PlusBrand/>
        }
        {
          brandInfo.result.map((a,i) => {
            return(
              <>
                <styled.ConnectBox key={i}>
                  <styled.ConnectHeader>
                    <styled.ConnectCircle>{brandInfo?.result[i].brandName}</styled.ConnectCircle>
                    <styled.ConnectInfoWrapper>
                      
                      <styled.NameTimeWrapper>
                        <styled.ConnectName>{brandInfo?.result[i].brandName}</styled.ConnectName>
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
            </>
            )
          })
        }
        {
          brandInfo.result.length === 1 && <PlusBrand/>
        }
        {
          brandInfo.result.length === 2 && <PlusBrand/>
        }        
      </>
    }
      
        
         
          
   </>
)}

// {/* <styled.BrandBox>
//   <styled.PlusIcon onClick={brandOnclick}><DotIcon width={25} height={25}/></styled.PlusIcon>
// </styled.BrandBox>  */}


