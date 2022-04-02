import React from 'react'
import styled from 'styled-components'
import SceduleIcon from '../SvgIcons/SceduleIcon';
import InsightIcon from '../SvgIcons/InsightIcon';
import InboxIcon from '../SvgIcons/InboxIcon';
import SettingIcon from '../SvgIcons/SettingIcon';
import Interlock from '../SvgIcons/Interlock'
import LinkrLogoSvg from '../SvgIcons/LinkrLogoSvg';
import { Link } from 'react-router-dom';

const SideBarWrapper = styled.div`
  width:15rem;
  height:100vh;
  position:fixed ;
`;

const SideBar = styled.div`
  width:15rem;
  height:100vh;
  background-color: #262b53;
  border-top-right-radius: 50px 50px;
  border-right: 2px solid #ece7ef;;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  position:relative;
  margin-right:5rem;
`;

const LogoWrapper = styled.div`
  width:100%;
  height:7.313rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const UserWrapper = styled.div`
  width:100%;
  height:4.313rem;
  background-color:#3C4165;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const UserWrapper2 = styled.div`
  width: 11.25rem;
  height: 3.125rem;
  border-radius: 25px;
  background-color: #3C4165;
  display: flex;
  align-items: center;
  margin-left: 1.875rem;
`;

const Circle = styled.div`
  width:3.125rem;
  height:3.125rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  margin-right:.875rem;
  border: solid 0.5px #fff;;
`;

const UserName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
`;

const MenuWrapper = styled.div`
  margin-top:1.375rem;
`;

const WeekMenu = styled.div`
  width: 12.125rem;
  height: 3.063rem;
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-top:.625rem;
  cursor:pointer;
  background-color: ${props=>props.sceduleColor};
  &:hover{
    transition:.5s;
    background-color: #3C4165;
  }
`;

const InsightMenu = styled.div`
  width: 12.125rem;
  height: 3.063rem;
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-top:.625rem;
  cursor:pointer;
  background-color: ${props=>props.insightColor};
  &:hover{
    transition:.5s;
    background-color: #3C4165;
  }
`;

const InboxMenu = styled.div`
  position: relative;
  width: 12.125rem;
  height: 3.063rem;
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-top:.625rem;
  cursor:pointer;
  background-color: ${props=>props.inboxColor};
  &:hover{
    transition:.5s;
    background-color: #3C4165;

  }
`;

const DropwDownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top:1.438rem ;
`;

const DropLine = styled.div`
  width: 4.062rem;
  height:1px;
  background-color:#eaeaea ;
  margin-right: 1.188rem;
`;

const DropDownMessage = styled.h1`
  cursor: pointer;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fbfbfb;
`;

const DropDownComent = styled.h1`
  cursor: pointer;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fbfbfb;
`;

const IconWrapper = styled.div`
  margin-left:2.2rem;
  display:flex ;
  align-items:center ;
`;

const SceduleMenuName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #fbfbfb;
  text-decoration: none;
  margin-left:1.375rem;
  padding-top:.1rem;
  :hover{
    transition: .3s;
  }
`;

const InsightMenuName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #fbfbfb;
  margin-left:1.375rem;
  padding-top:.1rem;
  :hover{
    transition: .3s;
  }
`;

const InboxMenuName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #fbfbfb;
  margin-left:1.375rem;
  padding-top:.1rem;
`;

const DefaultMenuName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #fbfbfb;
  margin-left:.8rem;
  :hover{
    transition: .3s;
  }
`;

const DefaultMenuName2 = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #fbfbfb;
  margin-left:.8rem;
  :hover{
    color:#333;
    transition: .3s;
  }
`;

const SettingWrapper = styled.div`
 width:100%;
 position:absolute;
 bottom:1.9rem;
`;

const SettingMenu = styled.div`
  width: 9.003rem;
  height: 3.063rem;
  background-color: ${props=>props.InfoMenuColor};
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-bottom:0.2rem;
  cursor:pointer;
  &:hover{
    transition:.5s;
    background-color: #3C4165;
  }
`;

const SettingMenu2 = styled.div`
  width: 9.003rem;
  height: 3.063rem;
  background-color: ${props=>props.MenuColor};
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-bottom:1.5rem;
  cursor:pointer;
  &:hover{
    transition:.5s;
    background-color: #3C4165;
  }
`;

export default function Sidebar({...props}) {
  
  
  return (
      <SideBarWrapper>
        <SideBar>
          <LogoWrapper>
            <Link to='/'><LinkrLogoSvg/></Link>
          </LogoWrapper>

          <UserWrapper>
            <Circle>R</Circle>
            <UserName>Round design</UserName>
          </UserWrapper>

          <MenuWrapper>
            <Link to='/scedule/week' style={{ textDecoration: 'none' }}>
              <WeekMenu sceduleColor={props.sceduleColor}>
                <IconWrapper><SceduleIcon width={20} height={20}/></IconWrapper>
                <SceduleMenuName sceduleMenuColor={props.sceduleMenuColor}>스케줄</SceduleMenuName>
              </WeekMenu>
            </Link>

            <Link to='/insight/fb' style={{ textDecoration: 'none' }}>
              <InsightMenu insightColor={props.insightColor}>
                <IconWrapper><InsightIcon width={20} height={20}/></IconWrapper>
                <InsightMenuName insightMenuColor={props.insightMenuColor}>인사이트</InsightMenuName>
              </InsightMenu>
            </Link>

            <Link to='/inbox/message' style={{ textDecoration: 'none' }}>
              <InboxMenu inboxColor={props.inboxColor}>
                <IconWrapper><InboxIcon width={20} height={20}/></IconWrapper>
                <InboxMenuName inboxMenuColor={props.inboxMenuColor}>인박스</InboxMenuName>              
              </InboxMenu>
              
              <DropwDownWrapper>
                <DropLine/>
                <Link to='/inbox/message' style={{ textDecoration: 'none' }}><DropDownMessage>메세지 관리</DropDownMessage></Link>
              </DropwDownWrapper>
              
              <DropwDownWrapper style={{marginLeft:'5.25rem'}}>
                <Link to='/inbox/comment' style={{ textDecoration: 'none' }}><DropDownComent>댓글 관리</DropDownComent></Link>
              </DropwDownWrapper> 
            </Link>

            <SettingWrapper>
              <Link to='/info' style={{ textDecoration: 'none' }}>
                <SettingMenu InfoMenuColor={props.InfoMenuColor}>
                  <IconWrapper><SettingIcon width={20} height={20}/></IconWrapper>
                  <DefaultMenuName InfoNameColor={props.InfoNameColor}>설정</DefaultMenuName>
                </SettingMenu>
              </Link>
              
              <Link to='/connect' style={{ textDecoration: 'none' }}>
                <SettingMenu2 MenuColor={props.MenuColor}>
                  <IconWrapper><Interlock width={20} height={20}/></IconWrapper>
                  <DefaultMenuName2 NameColor={props.NameColor}>연동</DefaultMenuName2>
                </SettingMenu2>
              </Link>

              <UserWrapper2>
                <Circle>R</Circle>
                <UserName style={{fontSize:'.938rem'}}>KANG DA</UserName>
              </UserWrapper2>
            </SettingWrapper>

            
          </MenuWrapper>
        </SideBar>
      </SideBarWrapper>
  )
}


