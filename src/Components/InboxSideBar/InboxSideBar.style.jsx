import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width:15rem;
  height:100vh;
  position:fixed ;
`;

export const SideBar = styled.div`
  width:15rem;
  height:100vh;
  background-color: #262b53;
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

export const UserWrapper = styled.div`
  width:100%;
  height:4.313rem;
  background-color:#3C4165;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const UserWrapper2 = styled.div`
  width: 11.25rem;
  height: 3.125rem;
  border-radius: 25px;
  background-color: #3C4165;
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
  margin-top:1.375rem;
`;

export const WeekMenu = styled.div`
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

export const InsightMenu = styled.div`
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

export const InboxMenu = styled.div`
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

export const DropwDownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top:1.438rem ;
`;

export const DropLine = styled.div`
  width: 4.062rem;
  height:1px;
  background-color:#eaeaea ;
  margin-right: 1.188rem;
`;

export const DropDownMessage = styled.h1`
  cursor: pointer;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fbfbfb;
`;

export const DropDownComent = styled.h1`
  cursor: pointer;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fbfbfb;
`;

export const IconWrapper = styled.div`
  margin-left:2.2rem;
  margin-top: .3rem;
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
  margin-left:1.375rem;
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

export const DefaultMenuName = styled.h1`
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

export const DefaultMenuName2 = styled.h1`
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

export const SettingWrapper = styled.div`
 width:100%;
 position:absolute;
 bottom:1.9rem;
`;

export const SettingMenu = styled.div`
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

export const SettingMenu2 = styled.div`
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