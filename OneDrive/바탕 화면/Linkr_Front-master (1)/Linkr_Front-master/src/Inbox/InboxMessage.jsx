import React from 'react'
import { useRecoilValue} from 'recoil';
import styled from 'styled-components';
import FindIcon from '../SvgIcons/FindIcon';
import { inboxMenuColorAtom,inboxColorAtom} from './InboxAtoms';
import InboxHead from './InboxHead';
import InboxSideBar from '../Components/InboxSideBar';

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

const LeftMessageContent = styled.div`
  width:100%;
  height: 5.75rem;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  position: relative;
`;

const LeftMessageProfile = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  margin-left:1.375rem;
  background-color: #fff;
  border-radius: 10rem;
  border:1px solid black;
`;

const LeftNameMsgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:.7rem;
`;

const LeftMsgName = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
`;

const LeftMsgContent = styled.h1`
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

const LeftMsgDate = styled.h1`
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
`;

const HeaderProfileImg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  border: solid 2px #333;
  margin-left:1.375rem;
`;

const HeaderProfileName = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
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
  height:3.75rem;
  border-bottom:1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const RightInfoTopWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.063rem;
  width:100%;
  margin-left: 1.375rem;
  position: relative;
`;

const RightInfoProfile = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  border:1px solid black;
`;

const RightInfoName = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
  margin-left:.5rem;
`;

const RightFix = styled.h1`
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

const RightInfoWrapper = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:1rem;
 
`;

const RightInfoTitle = styled.h1` 
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

const RightInfoData = styled.div`
  width: 17.5rem;
  height: 2.063rem;
  border-radius: 10px;
  border:1px solid #eaeaea;
  background-color: #fff;
  @media screen and (max-width:1440px){
    width:15rem;
  }
`;

const RightLine = styled.div`
  margin:0 auto;
  margin-top: 2rem;
  width:90%;
  height:.3px;
  background-color: #eaeaea;
`;

const RightNoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightNote = styled.h1`
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

const RightNoteArea = styled.textarea`
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

const RightButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top:.563rem;
  margin-right: 1.1rem;
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
`;

export default function Inbox() {
  const inboxColor = useRecoilValue(inboxColorAtom);
  const inboxMenuColor = useRecoilValue(inboxMenuColorAtom);


  return (
    <Wrapper>
      <InboxSideBar inboxColor={inboxColor} inboxMenuColor={inboxMenuColor}/>

      <ContentWrapper>
        <Content>
          <InboxHead/>

          <InboxLayoutWrapper>
            <InboxLayoutLeft>
              <LeftHeader>
                <LeftHeaderSearch placeholder='검색'></LeftHeaderSearch>
                <LeftHeaderIcon><FindIcon/></LeftHeaderIcon>
              </LeftHeader>

              {
                <>
                  <LeftMessageContent>
                    <LeftMessageProfile/>
                    <LeftNameMsgWrapper>
                      <LeftMsgName>Editor_kim</LeftMsgName>
                      <LeftMsgContent>메세지 임시 데이터</LeftMsgContent>
                    </LeftNameMsgWrapper>
                    <LeftMsgDate>3월 21일</LeftMsgDate>
                  </LeftMessageContent>
                </>
              }
              
            </InboxLayoutLeft>
              
            <InboxLayoutCenter>
              <CenterHeader>
                {
                  <>
                    <HeaderProfileImg></HeaderProfileImg>
                    <HeaderProfileName>Kim Linkr</HeaderProfileName>
                  </>
                }
              </CenterHeader>
              <CenterCircle/>
              <CenterComent>연동된 모든 SNS의 메세지를 확인해보세요!</CenterComent>
            </InboxLayoutCenter>

            <InboxLayoutRight>
              <RightHeader>
                {
                  <RightHeaderInfo>프로필 정보</RightHeaderInfo>
                }
              </RightHeader>
              {
                <>
                  <RightInfoTopWrapper>
                    <RightInfoProfile/>
                    <RightInfoName>Kim Linkr</RightInfoName>
                    <RightFix>수정</RightFix>
                  </RightInfoTopWrapper>
                  
                  <RightInfoWrapper>
                    <RightInfoTitle>• 휴대폰 번호</RightInfoTitle>
                    <RightInfoData></RightInfoData>
                  </RightInfoWrapper>

                  <RightInfoWrapper>
                    <RightInfoTitle>• 이메일 주소</RightInfoTitle>
                    <RightInfoData></RightInfoData>
                  </RightInfoWrapper>

                  <RightInfoWrapper>
                    <RightInfoTitle>• 생년월일</RightInfoTitle>
                    <RightInfoData></RightInfoData>
                  </RightInfoWrapper>

                  <RightInfoWrapper>
                    <RightInfoTitle>• 주소</RightInfoTitle>
                    <RightInfoData></RightInfoData>
                  </RightInfoWrapper>

                  <RightLine/>

                  <RightNoteWrapper>
                    <RightNote>노트</RightNote>
                    <RightNoteArea></RightNoteArea>
                    <RightButtonWrapper>
                      <RightCancelButton>취소</RightCancelButton>
                      <RightLoadButton>저장</RightLoadButton>
                    </RightButtonWrapper>
                  </RightNoteWrapper>
                </>
              }
            </InboxLayoutRight>
          </InboxLayoutWrapper>
        </Content>

      </ContentWrapper>

    </Wrapper>
  )
}
