import React from 'react'
import styled from 'styled-components';
import InboxSidebar2 from '../Components/InboxSideBar2';
import FindIcon from '../SvgIcons/FindIcon';
import InboxHead from './InboxHead';
import { inboxMenuColorAtom,inboxColorAtom } from './InboxAtoms';
import {useRecoilValue} from 'recoil';

const Wrapper = styled.div`
  max-width:120rem;
  height:100vh;
  display: flex;
  background-color: #f5f6f8;
`;

const ContentWrapper = styled.div`
  width:105rem;
  height:100vh;
  display: flex;
  justify-content:center;
  margin-left:15rem;
`;

const Content = styled.div`
  width:89.875rem;
  height:100vh;
  @media screen and (max-width:1440px){
    width:85rem;
  }
`;

const InboxLayoutWrapper = styled.div`
  display: flex;
  margin-top:.875rem;
`;

const InboxLayoutLeft = styled.div`
  width:21.313rem;
  height:48rem;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border:  solid 1px #eaeaea;
  @media screen and (max-width:1440px){
    height:48rem;
  }
`;

const LeftHeader = styled.div`
  width:100%;
  height:3.75rem;
  border-bottom:1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftHeaderSearch = styled.input`
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

const LeftHeaderIcon = styled.div`
  margin-right: 1.375rem;
  cursor: pointer;
`;

const InboxLayoutCenter = styled.div`
  width:39.375rem;
  height:48rem;
  border-top:1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  @media screen and (max-width:1440px){
    height:48rem;
  }
`;

const CenterHeader = styled.div`
  width:100%;
  height:3.75rem;
  border-bottom:1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderProfileImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  border: solid 2px #333;
  margin-left:1.375rem;
`;

const CenterCircle = styled.div`
  width: 7.688rem;
  height: 7.688rem;
  margin: 0 auto;
  margin-top: 11.5rem;
  border-radius: 10rem;
  border: solid 2px #333;
  background-color: #fff;
`;

const CenterComent = styled.h1`
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

const InboxLayoutRight = styled.div`
  width:28.438rem;
  height:48rem;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border:1px solid #eaeaea;
  @media screen and (max-width:1440px){
    height:48rem;
  }
`;

const RightHeader = styled.div`
  width:100%;
  height:3.75rem;
  border-bottom:1px solid #eaeaea;
  display: flex;
  align-items: center;
`;

const RightHeaderInfo = styled.h1`
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

const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightNote = styled.textarea`
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

const RightButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top:.563rem;
  margin-right: 1.1rem;
  margin-bottom: 1.5rem;
`;

const RightCancelButton = styled.button`
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

const RightLoadButton = styled.button`
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

const RightTextWrapper = styled.div`
  width: 25.375rem;
  margin:0 auto;
  position: relative;
  @media screen and (max-width:1440px) {
    width:22rem;
  }
`;

const RightDateTextWrapper = styled.div`
  display: flex;
`;

const RightDate = styled.h1`
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #999;
`;

const RightModify = styled.h1`
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

const RightDelete = styled.h1`
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

const RightNoteData = styled.h1`
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

export default function InboxComnet() {
  const inboxMenuColor = useRecoilValue(inboxMenuColorAtom);
  const inboxColor = useRecoilValue(inboxColorAtom);
  return (
    <Wrapper>
      <InboxSidebar2 inboxMenuColor={inboxMenuColor} inboxColor={inboxColor}/>

      <ContentWrapper>
        <Content>
          <InboxHead/>

          <InboxLayoutWrapper>

            <InboxLayoutLeft>
              <LeftHeader>
                <LeftHeaderSearch placeholder='검색'></LeftHeaderSearch>
                <LeftHeaderIcon><FindIcon/></LeftHeaderIcon>
              </LeftHeader>
            </InboxLayoutLeft>

            <InboxLayoutCenter>
              <CenterHeader>
                {
                  <HeaderProfileImg/>
                }
              </CenterHeader>
              <CenterCircle/>
              <CenterComent>연동된 모든 SNS의 댓글을 확인해보세요!</CenterComent>
            </InboxLayoutCenter>

            <InboxLayoutRight>
              <RightHeader>
                {
                  <RightHeaderInfo>노트</RightHeaderInfo>
                }
              </RightHeader>

              <RightContentWrapper>
                {
                  <>
                    <RightNote placeholder='노트를 작성하세요.'></RightNote>
                    <RightButtonWrapper>
                      <RightCancelButton>취소</RightCancelButton>
                      <RightLoadButton>저장</RightLoadButton>
                    </RightButtonWrapper>
                    
                    <RightTextWrapper> 
                      <RightDateTextWrapper>
                        <RightDate>3월 21일</RightDate>
                        <RightModify>수정</RightModify>
                        <RightDelete>삭제</RightDelete>
                      </RightDateTextWrapper>
                      <RightNoteData>노트에 입력된 글.</RightNoteData>
                    </RightTextWrapper> 
                  </>
                }
              </RightContentWrapper>
            </InboxLayoutRight>

          </InboxLayoutWrapper>
        </Content>

      </ContentWrapper>
    </Wrapper>
  )
}
