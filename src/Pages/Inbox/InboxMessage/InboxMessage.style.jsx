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
  margin-left:15rem;
`;

export const Content = styled.div`
  width:89.875rem;
  height:100vh;
  @media screen and (max-width:1440px){
    width:85rem;
  }
`;

export const InboxLayoutWrapper = styled.div`
  display: flex;
  margin-top:.875rem;
`;

export const InboxLayoutLeft = styled.div`
  width:21.313rem;
  height:48rem;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border:  solid 1px #eaeaea;
  @media screen and (max-width:1440px){
    height:48rem;
  }
`;

export const LeftHeader = styled.div`
  width:100%;
  height:3.75rem;
  border-bottom:1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftHeaderSearch = styled.input`
  margin-left:1.375rem;
  border:none;
  &:focus{
    outline: none;
  }
  &::placeholder{
    font-size: 0.938rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #333;
  }
`;

export const LeftHeaderIcon = styled.div`
  margin-right: 1.375rem;
  cursor: pointer;
`;

export const LeftMessageContent = styled.div`
  width:100%;
  height: 5.75rem;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  position: relative;
`;

export const LeftMessageProfile = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  margin-left:1.375rem;
  background-color: #fff;
  border-radius: 10rem;
  border:1px solid black;
`;

export const LeftNameMsgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:.7rem;
`;

export const LeftMsgName = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
`;

export const LeftMsgContent = styled.h1`
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #666;
  margin-top:.1rem;
`;

export const LeftMsgDate = styled.h1`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #666;
  position: absolute;
  right:1.37rem;
  top:1.8rem;
`;

export const InboxLayoutCenter = styled.div`
  width:39.375rem;
  height:48rem;
  border-top:1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  @media screen and (max-width:1440px){
    height:48rem;
  }
`;

export const CenterHeader = styled.div`
  width:100%;
  height:3.75rem;
  border-bottom:1px solid #eaeaea;
  display: flex;
  align-items: center;
`;

export const HeaderProfileImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  border: solid 2px #333;
  margin-left:1.375rem;
`;

export const HeaderProfileName = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  margin-left:1.375rem;
`;

export const CenterCircle = styled.div`
  width: 7.688rem;
  height: 7.688rem;
  margin: 0 auto;
  margin-top: 11.5rem;
  border-radius: 10rem;
  border: solid 2px #333;
  background-color: #fff;
`;

export const CenterComent = styled.h1`
  margin-top: 1.75rem;
  font-size: 1.063rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333;
`;

export const InboxLayoutRight = styled.div`
  width:28.438rem;
  height:48rem;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border:1px solid #eaeaea;
  @media screen and (max-width:1440px){
    height:48rem;
  }
`;

export const RightHeader = styled.div`
  height:3.75rem;
  border-bottom:1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightHeaderInfo = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  margin-left: 1.375rem;
`;

export const RightInfoTopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.063rem;
  width:100%;
  margin-left: 1.375rem;
  position: relative;
`;

export const RightInfoProfile = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  border:1px solid black;
`;

export const RightInfoName = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  margin-left:.5rem;
`;

export const RightFix = styled.h1`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #999;
  position: absolute;
  right:3rem;
`;

export const RightInfoWrapper = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:1rem;
 
`;

export const RightInfoTitle = styled.h1` 
  width:6rem;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  margin-right: 2rem;
`;

export const RightInfoData = styled.div`
  width: 17.5rem;
  height: 2.063rem;
  border-radius: 10px;
  border:1px solid #eaeaea;
  background-color: #fff;
  @media screen and (max-width:1440px){
    width:15rem;
  }
`;

export const RightLine = styled.div`
  margin:0 auto;
  margin-top: 2rem;
  width:90%;
  height:.3px;
  background-color: #eaeaea;
`;

export const RightNoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightNote = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  margin-left: 1.375rem;
  margin-top:2rem;
`;

export const RightNoteArea = styled.textarea`
  resize: none;
  width: 24.687rem;
  height: 5.813rem;
  margin:0 auto;
  margin-top:1.063rem;
  border: .1px solid #eaeaea;
  border-radius: 15px;
  outline-color: #eaeaea;
  padding:.688rem;
  &::placeholder{
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #191919;
  }
  @media screen and (max-width:1440px){
    width:22rem;
  }
`;

export const RightButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top:.563rem;
  margin-right: 1.1rem;
`;

export const RightCancelButton = styled.button`
  width: 3.438rem;
  height: 2.063rem;
  border-radius: 10px;
  border: solid 0.3px #999;
  margin-right: 1.375rem;
  background-color: #fff;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const RightLoadButton = styled.button`
  width: 3.438rem;
  height: 2.063rem;
  border-radius: 10px;
  border: solid 0.3px #1a225c;
  background-color: #1a225c;
  color: #fff;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;