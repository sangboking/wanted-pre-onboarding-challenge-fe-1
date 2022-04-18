import React from 'react'
import * as styled from './InboxSideBar.style'
import SceduleIcon from '../../SvgIcons/SceduleIcon';
import InsightIcon from '../../SvgIcons/InsightIcon';
import InboxIcon from '../../SvgIcons/InboxIcon';
import SettingIcon from '../../SvgIcons/SettingIcon';
import Interlock from '../../SvgIcons/Interlock'
import LinkrLogoSvg from '../../SvgIcons/LinkrLogoSvg';
import { Link } from 'react-router-dom';

export default function Sidebar({...props}) {
  
  
  return (
      <styled.SideBarWrapper>
        <styled.SideBar>
          <styled.LogoWrapper>
            <Link to='/'><LinkrLogoSvg/></Link>
          </styled.LogoWrapper>

          <styled.UserWrapper>
            <styled.Circle>R</styled.Circle>
            <styled.UserName>Round design</styled.UserName>
          </styled.UserWrapper>

          <styled.MenuWrapper>
            <Link to='/sceduleWeek' style={{ textDecoration: 'none' }}>
              <styled.WeekMenu sceduleColor={props.sceduleColor}>
                <styled.IconWrapper><SceduleIcon width={20} height={20}/></styled.IconWrapper>
                <styled.SceduleMenuName sceduleMenuColor={props.sceduleMenuColor}>스케줄</styled.SceduleMenuName>
              </styled.WeekMenu>
            </Link>

            <Link to='/insightFb' style={{ textDecoration: 'none' }}>
              <styled.InsightMenu insightColor={props.insightColor}>
                <styled.IconWrapper><InsightIcon width={20} height={20}/></styled.IconWrapper>
                <styled.InsightMenuName insightMenuColor={props.insightMenuColor}>인사이트</styled.InsightMenuName>
              </styled.InsightMenu>
            </Link>

            <Link to='/inboxMssage' style={{ textDecoration: 'none' }}>
              <styled.InboxMenu inboxColor={props.inboxColor}>
                <styled.IconWrapper><InboxIcon width={20} height={20}/></styled.IconWrapper>
                <styled.InboxMenuName inboxMenuColor={props.inboxMenuColor}>인박스</styled.InboxMenuName>              
              </styled.InboxMenu>
              
              <styled.DropwDownWrapper>
                <styled.DropLine/>
                <Link to='/inboxMessage' style={{ textDecoration: 'none' }}><styled.DropDownMessage>메세지 관리</styled.DropDownMessage></Link>
              </styled.DropwDownWrapper>
              
              <styled.DropwDownWrapper style={{marginLeft:'5.25rem'}}>
                <Link to='/inboxComment' style={{ textDecoration: 'none' }}><styled.DropDownComent>댓글 관리</styled.DropDownComent></Link>
              </styled.DropwDownWrapper> 
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
                <styled.Circle>R</styled.Circle>
                <styled.UserName style={{fontSize:'.938rem'}}>KANG DA</styled.UserName>
              </styled.UserWrapper2>
            </styled.SettingWrapper>

            
          </styled.MenuWrapper>
        </styled.SideBar>
      </styled.SideBarWrapper>
  )
}


