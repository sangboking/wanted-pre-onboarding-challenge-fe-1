import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import DotIcon from '../../SvgIcons/DotIcon';
import FaceBookS from '../../SvgIcons/FaceBookS';
import FaceBookSoff from '../../SvgIcons/FaceBookSoff';
import InstaS from '../../SvgIcons/InstaS';
import InstaSoff from '../../SvgIcons/InstaSoff';
import TwitS from '../../SvgIcons/TwitS';
import TwitSoff from '../../SvgIcons/TwitSoff';
import * as styled from './HomeBrand.style';

export default function HomeBrand({...props}) {
  const navigate = useNavigate();

  const navigateScedule = () => {
    navigate('/sceduleWeek')
  }

  const fetchBrandInfo = async () => {
    const response = await fetch('/api/brands');
    return response.json();
  }
 
  const {data:brandInfo,isLoading} = useQuery('brandInfo',fetchBrandInfo);

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
      isLoading ? <h1>브랜드 정보를 가져오는 중입니다.</h1>
      :
      <>
        {
          brandInfo.result.length === 0 && <PlusBrand/>
        }
        {
          brandInfo.result.map((a,i) => {
            return(
                <styled.ConnectBox key={i} onClick={navigateScedule}>
                  <styled.ConnectHeader>
                    <styled.ConnectCircle>{brandInfo.result[i].brandName.slice(0,1)}</styled.ConnectCircle>
                    <styled.ConnectInfoWrapper>
                      
                      <styled.NameTimeWrapper>
                        <styled.ConnectName>{brandInfo.result[i].brandName}</styled.ConnectName>
                        <styled.ConnectTime>서울</styled.ConnectTime>
                      </styled.NameTimeWrapper>
                      <styled.ConnectSnsWrapper>
                        {brandInfo?.result[i].faceBookConnectedId ? <styled.SnsIcon><FaceBookS width={16} height={16}/></styled.SnsIcon> : <styled.SnsIcon><FaceBookSoff width={16} height={16}/></styled.SnsIcon>}
                        {brandInfo?.result[i].instagramConnectedId ?<styled.SnsIcon><InstaS width={16} height={16}/></styled.SnsIcon> :<styled.SnsIcon><InstaSoff width={16} height={16}/></styled.SnsIcon>}
                        {brandInfo?.result[i].twitterConnectedId ? <styled.SnsIcon><TwitS width={16} height={16}/></styled.SnsIcon>:<styled.SnsIcon><TwitSoff width={16} height={16}/></styled.SnsIcon>}
                      </styled.ConnectSnsWrapper>

                    </styled.ConnectInfoWrapper>
                  </styled.ConnectHeader>
                </styled.ConnectBox>
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




