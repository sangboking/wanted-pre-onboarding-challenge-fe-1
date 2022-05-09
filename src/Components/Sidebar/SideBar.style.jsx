import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width:15rem;
  height:100vh;
  position:fixed ;
  background-color: ${props => props.postModal ? 'rgba(0,0,0,.6)': '#f5f6f8'};
`;

export const SideBar = styled.div`
  width:15rem;
  height:100vh;
  background-color:${props => props.theme.navyColor};
  border-top-right-radius: 50px 50px;
  border-right: 2px solid #ece7ef;;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  position:relative;
  margin-right:5rem;
`;

export const LogoWrapper = styled.div`
  width:100%;
  height:7.313rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BrandNameWrapper = styled.div`
  width:100%;
  height:4.313rem;
  background-color:${props => props.theme.hoverNavyColor};
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const UserWrapper = styled.div`
  width: 11.25rem;
  height: 3.125rem;
  border-radius: 25px;
  background-color: ${props => props.theme.hoverNavyColor};
  display: flex;
  align-items: center;
  margin-left: 1.875rem;
`;

export const Circle = styled.div`
  width:3.125rem;
  height:3.125rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  margin-right:.875rem;
  margin-left: 1.875rem;
  border: solid 0.5px #fff;;
`;

export const UserName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
`;

export const MenuWrapper = styled.div`
  margin-top:2rem;
`;

export const WeekMenu = styled.div`
  width: 13.25rem;
  height: 3.063rem;
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  cursor:pointer;
  background-color: ${props=>props.sceduleColor};
  &:hover{
    transition:.5s;
    background-color: ${props => props.theme.hoverNavyColor};
  }
`;

export const InsightMenu = styled.div`
  width: 13.25rem;
  height: 3.063rem;
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-top:.938rem;
  cursor:pointer;
  background-color: ${props=>props.insightColor};
  &:hover{
    transition:.5s;
    background-color: ${props => props.theme.hoverNavyColor};
  }
`;

export const InboxMenu = styled.div`
  position: relative;
  width: 13.25rem;
  height: 3.063rem;
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-top:.938rem;
  cursor:pointer;
  background-color: ${props=>props.inboxColor};
  &:hover{
    transition:.5s;
    background-color: ${props => props.theme.hoverNavyColor};

  }
`;

export const IconWrapper = styled.div`
  margin-left:3rem;
  display:flex ;
  align-items:center ;
`;

export const SceduleMenuName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #fbfbfb;
  text-decoration: none;
  margin-left:1.2rem;
  padding-top:.1rem;
  :hover{
    transition: .3s;
  }
`;

export const InsightMenuName = styled.h1`
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

export const InboxMenuName = styled.h1`
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

export const SettingMenuName = styled.h1`
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

export const ConnectMenuName = styled.h1`
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

export const SettingWrapper = styled.div`
 width:100%;
 position:absolute;
 bottom:2.5rem;
`;

export const SettingMenu = styled.div`
  width: 10.438rem;
  height: 3.063rem;
  background-color: ${props=>props.InfoMenuColor};
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-bottom:0.938rem;
  cursor:pointer;
  &:hover{
    transition:.5s;
    background-color: ${props => props.theme.hoverNavyColor};
  }
`;

export const ConnectMenu = styled.div`
  width: 10.438rem;
  height: 3.063rem;
  background-color: ${props=>props.MenuColor};
  border-top-right-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  display: flex;
  align-items: center;
  margin-bottom:2.516rem;
  cursor:pointer;
  &:hover{
    transition:.5s;
    background-color: ${props => props.theme.hoverNavyColor};
  }
`;