import React from 'react'
import * as styled from './SideBar.style';
import SceduleIcon from '../../SvgIcons/SceduleIcon';
import InsightIcon from '../../SvgIcons/InsightIcon';
import InboxIcon from '../../SvgIcons/InboxIcon';
import SettingIcon from '../../SvgIcons/SettingIcon';
import Interlock from '../../SvgIcons/Interlock'
import LinkrLogoSvg from '../../SvgIcons/LinkrLogoSvg';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getDetailBrand } from '../../apis/api';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { postModalAtom } from '../../atom';

export default function Sidebar({...props}) {
  const postModal = useRecoilValue(postModalAtom);
  const {brandId} = useParams();
  const location = useLocation();

  const {data,isLoading} = useQuery('detailBrandInfo', () => getDetailBrand(brandId),
  {
    refetchOnWindowFocus : false,
  });
  
  return (
      <styled.SideBarWrapper postModal={postModal}>
        <styled.SideBar>
          <styled.LogoWrapper>
            <Link to='/'><LinkrLogoSvg width={80} height={80}/></Link>
          </styled.LogoWrapper>

          <styled.BrandNameWrapper>
            {isLoading ? null : <styled.UserName>{data?.result.brandName}</styled.UserName>}
          </styled.BrandNameWrapper>

          <styled.MenuWrapper>
            <Link to={{pathname:`/sceduleWeek/${brandId}`}} style={{ textDecoration: 'none' }}>
              <styled.WeekMenu sceduleColor={props.sceduleColor}>
                <styled.IconWrapper><SceduleIcon width={16} height={16}/></styled.IconWrapper>
                <styled.SceduleMenuName sceduleMenuColor={props.sceduleMenuColor}>스케줄</styled.SceduleMenuName>
              </styled.WeekMenu>
            </Link>

            <Link to={{pathname:`/insightFb/${brandId}`}} style={{ textDecoration: 'none' }}>
              <styled.InsightMenu insightColor={props.insightColor}>
                <styled.IconWrapper><InsightIcon width={16} height={16}/></styled.IconWrapper>
                <styled.InsightMenuName insightMenuColor={props.insightMenuColor}>인사이트</styled.InsightMenuName>
              </styled.InsightMenu>
            </Link>

            <Link to={{pathname:`/inboxmessage/${brandId}`}} style={{ textDecoration: 'none' }}>
              <styled.InboxMenu inboxColor={props.inboxColor}>
                <styled.IconWrapper><InboxIcon width={16} height={16}/></styled.IconWrapper>
                <styled.InboxMenuName inboxMenuColor={props.inboxMenuColor}>인박스</styled.InboxMenuName>              
              </styled.InboxMenu>

              {
                location.pathname === `/inboxmessage/${brandId}` || location.pathname === `/inboxcomment/${brandId}` ? 
                <>
                  <styled.DropwDownWrapper style={location.pathname === `/inboxmessage/${brandId}` ? {marginLeft:'0'} : {marginLeft:'5.25rem'}}>
                    {location.pathname === `/inboxmessage/${brandId}` && <styled.DropLine/>}
                    <Link to={{pathname:`/inboxmessage/${brandId}`}} style={{ textDecoration: 'none' }}><styled.DropDownMessage>메세지 관리</styled.DropDownMessage></Link>
                  </styled.DropwDownWrapper>
                  
                  <styled.DropwDownWrapper style={location.pathname === `/inboxcomment/${brandId}` ? {marginLeft:'0'} : {marginLeft:'5.25rem'}}>
                    {location.pathname === `/inboxcomment/${brandId}` && <styled.DropLine/>}
                    <Link to={{pathname:`/inboxcomment/${brandId}`}} style={{ textDecoration: 'none' }}><styled.DropDownComent>댓글 관리</styled.DropDownComent></Link>
                  </styled.DropwDownWrapper> 
                </>
                :null
              }
            </Link>

            <styled.SettingWrapper>
              <Link to={{pathname:`/info/${brandId}`}} style={{ textDecoration: 'none' }}>
                <styled.SettingMenu InfoMenuColor={props.InfoMenuColor}>
                  <styled.IconWrapper><SettingIcon width={16} height={16}/></styled.IconWrapper>
                  <styled.SettingMenuName InfoNameColor={props.InfoNameColor}>설정</styled.SettingMenuName>
                </styled.SettingMenu>
              </Link>
              
              <Link to={{pathname:`/connect/${brandId}`}} style={{ textDecoration: 'none' }}>
                <styled.ConnectMenu MenuColor={props.MenuColor}>
                  <styled.IconWrapper><Interlock width={16} height={16}/></styled.IconWrapper>
                  <styled.ConnectMenuName NameColor={props.NameColor}>연동</styled.ConnectMenuName>
                </styled.ConnectMenu>
              </Link>

              <styled.UserWrapper>
                <styled.Circle style={{marginLeft:'0'}}>R</styled.Circle>
                <styled.UserName style={{fontSize:'.938rem'}}>KANG DA</styled.UserName>
              </styled.UserWrapper>
            </styled.SettingWrapper>

            
          </styled.MenuWrapper>
        </styled.SideBar>
      </styled.SideBarWrapper>
  )
}

