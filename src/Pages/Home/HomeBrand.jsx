import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import FaceBookS from '../../SvgIcons/FaceBookS';
import FaceBookSoff from '../../SvgIcons/FaceBookSoff';
import InstaS from '../../SvgIcons/InstaS';
import InstaSoff from '../../SvgIcons/InstaSoff';
import TwitS from '../../SvgIcons/TwitS';
import TwitSoff from '../../SvgIcons/TwitSoff';
import * as styled from './HomeBrand.style';
import { getBrand } from '../../apis/api';
import DotdotdotIcon from '../../SvgIcons/DotdotdotIcon';
import DotIcon from '../../SvgIcons/DotIcon';

export default function HomeBrand({...props}) {
  
  const {data:brandInfo,isLoading} = useQuery('brandInfo', getBrand, 
  {
    
  });

  function PlusBrand(){
    return (
      <styled.BrandBox style={{marginRight:'0'}}>
        <styled.PlusIcon onClick={props.brandOnclick}><DotIcon width={25} height={25}/></styled.PlusIcon>
      </styled.BrandBox> 
    )
  }

  return (
   <>
    {
      isLoading ? null
      :
      <>
        {
          brandInfo.result.length === 0 && <PlusBrand/>
        }
        {
          brandInfo.result.map((brand,i) => {
            return(
              <Link to={{
                pathname:`sceduleWeek/${brand.id}`
              }} key={brand.id} style={{textDecoration:'none'}}>
                <styled.ConnectBox>
                  <styled.ConnectHeader>
                    <styled.ConnectInfoWrapper>
          
                      <styled.NameTimeWrapper>
                        <styled.ConnectName>{brandInfo.result[i].brandName}</styled.ConnectName>
                        <styled.ConnectTime>(GMT+09:00) Seoul</styled.ConnectTime>
                      </styled.NameTimeWrapper>
                      <styled.ConnectSnsWrapper>
                        {brandInfo?.result[i].faceBookConnectedId ? <styled.SnsIcon><FaceBookS width={16} height={16}/></styled.SnsIcon> : <styled.SnsIcon><FaceBookSoff width={16} height={16}/></styled.SnsIcon>}
                        {brandInfo?.result[i].instagramConnectedId ?<styled.SnsIcon><InstaS width={16} height={16}/></styled.SnsIcon> :<styled.SnsIcon><InstaSoff width={16} height={16}/></styled.SnsIcon>}
                        {brandInfo?.result[i].twitterConnectedId ? <styled.SnsIcon><TwitS width={16} height={16}/></styled.SnsIcon>:<styled.SnsIcon><TwitSoff width={16} height={16}/></styled.SnsIcon>}
                      </styled.ConnectSnsWrapper>

                    </styled.ConnectInfoWrapper>
                  </styled.ConnectHeader>

                  <styled.ConnectBotWrapper>
                    <styled.ConnectBotUserWrapper></styled.ConnectBotUserWrapper>
                    <styled.DotIconWrapper><DotdotdotIcon width={35} height={35}/></styled.DotIconWrapper>
                  </styled.ConnectBotWrapper>
                </styled.ConnectBox>
              </Link>
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




