import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width:120rem;
  height:100vh;
  display: flex;
  background-color: #f5f6f8;
`;

export const ContentWrapper = styled.div`
  width:105rem;
  height:100vh;
  display: flex;
  justify-content:center;
  position: relative;
  margin-left:15rem;
`;

export const Content = styled.div`
  width:68rem;
  height: 100vh;
  position:relative ;
`;

export const Title = styled.div`
  margin-top:5rem;
  display: flex;
  align-items: center;
  position: relative;
`;

export const PrevIcon = styled.div`
  width: 1.563rem;
  height: 1.563rem;
  background-color: #eaeaea;
  display:flex ;
  align-items:center ;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
`;

export const NowDate = styled.h1`
  width:9rem;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #333;
  margin-left:.75rem;
  margin-right:.75rem;
`;

export const Button = styled.button`
  width:6rem;
  height: 2.18rem;
  border-radius: 10px;
  background-color:${props => props.theme.navyColor};
  border:1px solid ${props => props.theme.navyColor};
  font-size: 0.938rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  margin-left:.875rem;
  cursor: pointer;
`;

export const Button2 = styled.button`
  width:6rem;
  height: 2.18rem;
  border-radius: 10px;
  background-color: #fff;
  border: solid 1px #eaeaea;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
  margin-left:1.875rem;
  cursor: pointer;
`;

export const RightButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const PostButton = styled.button`
  width:9.313rem;
  height: 2.18rem;
  margin-right: .875rem;
  border-radius: 10px;
  border: solid 1px #eaeaea; 
  background-color:#fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Posth1 = styled.h1`
  margin-left: .677rem;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
`;

export const CloseIconWrapper = styled.div`
  position:absolute;
  z-index:30;
  top:-2.7rem;
  right:3rem;
  cursor: pointer;
  @media screen and (max-width:1440px){
    position:absolute;
    top:-3rem;
    left:5.3rem;
  }
`;