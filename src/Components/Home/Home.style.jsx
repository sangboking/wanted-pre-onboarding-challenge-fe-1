import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  margin:0 auto;
  background-color: #f5f6f8;
  position:relative;
`;

export const Header = styled.header`
  width:75rem;
  height:3.485rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 auto;
  padding-top: 4.5rem;
  padding-bottom: 1.453rem;
  border-bottom:1px solid #eaeaea;
  @media screen and (max-width:1440px) {
   padding-top: 7rem;
  }
`;

export const LogoWrapper = styled.div`
  margin-left:.875rem;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const NamedIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align:right;
  justify-content: center;
  margin-right:.5rem;
  margin-top:.6rem;
`;

export const Name = styled.span`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #191919;
  margin-bottom:0.25rem;
`;

export const Circle = styled.div`
  width:3.75rem;
  height: 3.75rem;
  background-color: #fff;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #676767;
`;

export const BrandWrapper = styled.div`
  width:75rem;
  margin:0 auto;
  margin-top:2.6rem;
`;

export const Brand = styled.span`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.625rem;
  margin-left:.875rem;
`;

export const Intro = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(102, 102, 102, 0.9);
  display:block;
  margin-bottom:2.6rem;
  margin-left:.875rem;
`;

export const BrandBoxWrapper = styled.div`
  width:75rem;
  display:flex;
  margin:0 auto;
`;

export const BrandBox = styled.div`
  width:23.75rem;
  height: 14.063rem;
  border-radius: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.875rem;
  cursor:pointer;
`;

export const ConnectInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: .625rem;
`;

export const NameTimeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  width: 75rem;
  height: 1px;
  background-color: #eaeaea;
  margin: 0 auto;
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
`;

//모달창 styled-components

export const BrandModal = styled.div`
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:64.5rem;
  height:38rem;
  border-radius: 20px;
  background-color: #fff;
  padding:4rem 0 0 4rem;
  box-shadow : rgba(0,0,0,0.5) 0 0 0 100vw;
  z-index : 100;
`;

export const ModalTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.625rem;
`;

export const ModalIntro = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(103, 103, 103, 0.9);
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content:space-between ;
  margin-top:2.5rem;
  position:relative ;
`;

export const LeftContent = styled.div`
  width:50%;
  height:13.625rem;
`;

export const LeftTitleWrapper = styled.div`
  display:flex ;
  align-items:center ;
  margin-bottom:.7rem;
  margin-left: .625rem;
`;

export const LeftTitle = styled.h3`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #191919;
  margin-right:.625rem ;
`;

export const LeftSpan = styled.span`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.22px;
  text-align: left;
  color: #676767;
`;

export const LeftInput = styled.input`
  width:25rem;
  height:3.125rem;
  border-radius: 15px;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  margin-bottom:1.25rem;
  padding-left: 1rem;
  ::placeholder,
  ::-webkit-input-placeholder{
    font-size: 0.875rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #676767;
  }
  &:focus{
    outline: none;
  }
`;

export const BrandTime = styled.select`
  width:26.4rem;
  height:3.125rem;
  border-radius: 15px;
  border: solid 0.3px #999;
  background-color: #fff;
  padding-left:1rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #676767;
  background:url(/assets/arrow_down.png) no-repeat right 50%;
  background-size:30px;
  appearance: none; //select box 화살표 제거 
  -moz-appearance: none; 
  -webkit-appearance: none; 
  cursor: pointer;
  &:focus{
    outline: none;
  }
`;


export const VerticalLine = styled.div`
  width:.3px;
  background-color:#999 ;
  margin-right:1rem;
`;

export const RightContent = styled.div`
  width:50%;
  height:14.5rem;
  color:white;
  margin-left: 3rem;
`;

export const RightTitleWrapper = styled.div`
  display:flex ;
  align-items:center ;
  margin-bottom:.8rem;
  margin-left: .625rem;
`;

export const RightTitle = styled.h3`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #191919;
  margin-right:.625rem;
`;

export const RightSpan = styled.span`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: -0.22px;
  text-align: left;
  color: #676767;
`;

export const RightButton = styled.button`
  width:26.2rem;
  height:3.125rem;
  border-radius: 15px;
  border: solid 0.3px #999;
  margin-bottom:1.25rem;
  display:flex ;
  align-items:center ;
  padding-left:1rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #676767;
  cursor:pointer ;
  position: relative;
  background-color: #fff;
`;

export const RightArrow = styled.div`
  position: absolute;
  right:1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSpan = styled.span`
  margin-left:1.25rem;
`;

export const ModalButtonWrapper = styled.div`
  position:absolute;
  bottom:8rem;;
  left:18.5rem;
`;

export const CancelButton = styled.button`
  width: 15rem;
  height: 3.125rem;
  border: solid 0.3px #999;
  border-radius:15px ;
  background-color: #fff;
  margin-right:2rem;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: rgba(25, 25, 25, 0.9);
  cursor:pointer ;
`;

export const CreateButton = styled.button`
  width: 15rem;
  height: 3.125rem;
  border-radius: 15px;
  border:1px solid #112553;
  background-color: #112553;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  cursor:pointer ;
`;