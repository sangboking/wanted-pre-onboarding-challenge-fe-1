import React from 'react'
import * as styled from './SideBar.style';
import SceduleIcon from '../../SvgIcons/SceduleIcon';
import InsightIcon from '../../SvgIcons/InsightIcon';
import InboxIcon from '../../SvgIcons/InboxIcon';
import SettingIcon from '../../SvgIcons/SettingIcon';
import Interlock from '../../SvgIcons/Interlock'
import LinkrLogoSvg from '../../SvgIcons/LinkrLogoSvg';
import { Link, useParams } from 'react-router-dom';
import { getDetailBrand } from '../../apis/api';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { postModalAtom } from '../../Scedule/SceduleAtoms';

export default function Sidebar({...props}) {
  const postModal = useRecoilValue(postModalAtom);
  const {brandId} = useParams();

  const {data,isLoading} = useQuery('detailBrandInfo', () => getDetailBrand(brandId),
  {
    refetchOnWindowFocus : false,
  });
  
  
  return (
      <styled.SideBarWrapper postModal={postModal}>
        <styled.SideBar>
          <styled.LogoWrapper>
            <Link to='/'><LinkrLogoSvg/></Link>
          </styled.LogoWrapper>

          <styled.UserWrapper>
            <styled.Circle>R</styled.Circle>
            {isLoading ? null : <styled.UserName>{data.result.brandName}</styled.UserName>}
          </styled.UserWrapper>

          <styled.MenuWrapper>
            <Link to={{pathname:`/sceduleWeek/${brandId}`}} style={{ textDecoration: 'none' }}>
              <styled.WeekMenu sceduleColor={props.sceduleColor}>
                <styled.IconWrapper><SceduleIcon width={20} height={20}/></styled.IconWrapper>
                <styled.SceduleMenuName sceduleMenuColor={props.sceduleMenuColor}>스케줄</styled.SceduleMenuName>
              </styled.WeekMenu>
            </Link>

            <Link to={{pathname:`/insightFb/${brandId}`}} style={{ textDecoration: 'none' }}>
              <styled.InsightMenu insightColor={props.insightColor}>
                <styled.IconWrapper><InsightIcon width={20} height={20}/></styled.IconWrapper>
                <styled.InsightMenuName insightMenuColor={props.insightMenuColor}>인사이트</styled.InsightMenuName>
              </styled.InsightMenu>
            </Link>

            <Link to='/inboxMessage' style={{ textDecoration: 'none' }}>
              <styled.InboxMenu inboxColor={props.inboxColor}>
                <styled.IconWrapper><InboxIcon width={20} height={20}/></styled.IconWrapper>
                <styled.InboxMenuName inboxMenuColor={props.inboxMenuColor}>인박스</styled.InboxMenuName>              
              </styled.InboxMenu>
            </Link>

            <styled.SettingWrapper>
              <Link to='/info' style={{ textDecoration: 'none' }}>
                <styled.SettingMenu InfoMenuColor={props.InfoMenuColor}>
                  <styled.IconWrapper><SettingIcon width={20} height={20}/></styled.IconWrapper>
                  <styled.DefaultMenuName InfoNameColor={props.InfoNameColor}>설정</styled.DefaultMenuName>
                </styled.SettingMenu>
              </Link>
              
              <Link to='/connect' style={{ textDecoration: 'none' }}>
                <styled.SettingMenu2 MenuColor={props.MenuColor}>
                  <styled.IconWrapper><Interlock width={20} height={20}/></styled.IconWrapper>
                  <styled.DefaultMenuName2 NameColor={props.NameColor}>연동</styled.DefaultMenuName2>
                </styled.SettingMenu2>
              </Link>

              <styled.UserWrapper2>
                <styled.Circle style={{marginLeft:'0'}}>R</styled.Circle>
                <styled.UserName style={{fontSize:'.938rem'}}>KANG DA</styled.UserName>
              </styled.UserWrapper2>
            </styled.SettingWrapper>

            
          </styled.MenuWrapper>
        </styled.SideBar>
      </styled.SideBarWrapper>
  )
}

