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
  justify-content: space-between;
`;

export const HeaderProfileImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  border: solid 2px #333;
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
  width:100%;
  height:3.75rem;
  border-bottom:1px solid #eaeaea;
  display: flex;
  align-items: center;
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

export const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightNote = styled.textarea`
  resize: none;
  width: 24.687rem;
  height: 5.813rem;
  margin:0 auto;
  margin-top:1.063rem;
  border: .1px solid #eaeaea;
  outline-color: #eaeaea;
  padding:.688rem;
  border-radius: 15px;
  &::placeholder{
    font-size: 0.813rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #191919;
  }
  @media screen and (max-width:1440px) {
    width:22rem;
  }
`;

export const RightButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top:.563rem;
  margin-right: 1.1rem;
  margin-bottom: 1.5rem;
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
  cursor: pointer;
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
  cursor: pointer;
`;

export const RightTextWrapper = styled.div`
  width: 25.375rem;
  margin:0 auto;
  position: relative;
  @media screen and (max-width:1440px) {
    width:22rem;
  }
`;

export const RightDateTextWrapper = styled.div`
  display: flex;
`;

export const RightDate = styled.h1`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #999;
`;

export const RightModify = styled.h1`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #999;
  position: absolute;
  right:2rem;
  cursor: pointer;
`;

export const RightDelete = styled.h1`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #999;
  position: absolute;
  right:0;
  cursor: pointer;
`;

export const RightNoteData = styled.h1`
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  margin-top:1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eaeaea;
`;