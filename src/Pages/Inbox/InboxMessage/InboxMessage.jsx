import React from 'react'
import { useRecoilValue} from 'recoil';
import * as styled from './InboxMessage.style';
import FindIcon from '../../../SvgIcons/FindIcon';
import { inboxMenuColorAtom,inboxColorAtom} from '../../../atom';
import InboxHead from '../InboxHead/InboxHead';
import Sidebar from '../../../Components/Sidebar/SideBar';


export default function Inbox() {
  const inboxColor = useRecoilValue(inboxColorAtom);
  const inboxMenuColor = useRecoilValue(inboxMenuColorAtom);


  return (
    <styled.Wrapper>
      <Sidebar inboxColor={inboxColor} inboxMenuColor={inboxMenuColor}/>

      <styled.ContentWrapper>
        <styled.Content>
          <InboxHead/>

          <styled.InboxLayoutWrapper>
            <styled.InboxLayoutLeft>
              <styled.LeftHeader>
                <styled.LeftHeaderSearch placeholder='검색'></styled.LeftHeaderSearch>
                <styled.LeftHeaderIcon><FindIcon/></styled.LeftHeaderIcon>
              </styled.LeftHeader>

              {
                <>
                  <styled.LeftMessageContent>
                    <styled.LeftMessageProfile/>
                    <styled.LeftNameMsgWrapper>
                      <styled.LeftMsgName>Editor_kim</styled.LeftMsgName>
                      <styled.LeftMsgContent>메세지 임시 데이터</styled.LeftMsgContent>
                    </styled.LeftNameMsgWrapper>
                    <styled.LeftMsgDate>3월 21일</styled.LeftMsgDate>
                  </styled.LeftMessageContent>
                </>
              }
              
            </styled.InboxLayoutLeft>
              
            <styled.InboxLayoutCenter>
              <styled.CenterHeader>
                {
                  <>
                    <styled.HeaderProfileImg></styled.HeaderProfileImg>
                    <styled.HeaderProfileName>Kim Linkr</styled.HeaderProfileName>
                  </>
                }
              </styled.CenterHeader>
              <styled.CenterCircle/>
              <styled.CenterComent>연동된 모든 SNS의 메세지를 확인해보세요!</styled.CenterComent>
            </styled.InboxLayoutCenter>

            <styled.InboxLayoutRight>
              <styled.RightHeader>
                {
                  <styled.RightHeaderInfo>프로필 정보</styled.RightHeaderInfo>
                }
              </styled.RightHeader>
              {
                <>
                  <styled.RightInfoTopWrapper>
                    <styled.RightInfoProfile/>
                    <styled.RightInfoName>Kim Linkr</styled.RightInfoName>
                    <styled.RightFix>수정</styled.RightFix>
                  </styled.RightInfoTopWrapper>
                  
                  <styled.RightInfoWrapper>
                    <styled.RightInfoTitle>• 휴대폰 번호</styled.RightInfoTitle>
                    <styled.RightInfoData></styled.RightInfoData>
                  </styled.RightInfoWrapper>

                  <styled.RightInfoWrapper>
                    <styled.RightInfoTitle>• 이메일 주소</styled.RightInfoTitle>
                    <styled.RightInfoData></styled.RightInfoData>
                  </styled.RightInfoWrapper>

                  <styled.RightInfoWrapper>
                    <styled.RightInfoTitle>• 생년월일</styled.RightInfoTitle>
                    <styled.RightInfoData></styled.RightInfoData>
                  </styled.RightInfoWrapper>

                  <styled.RightInfoWrapper>
                    <styled.RightInfoTitle>• 주소</styled.RightInfoTitle>
                    <styled.RightInfoData></styled.RightInfoData>
                  </styled.RightInfoWrapper>

                  <styled.RightLine/>

                  <styled.RightNoteWrapper>
                    <styled.RightNote>노트</styled.RightNote>
                    <styled.RightNoteArea></styled.RightNoteArea>
                    <styled.RightButtonWrapper>
                      <styled.RightCancelButton>취소</styled.RightCancelButton>
                      <styled.RightLoadButton>저장</styled.RightLoadButton>
                    </styled.RightButtonWrapper>
                  </styled.RightNoteWrapper>
                </>
              }
            </styled.InboxLayoutRight>
          </styled.InboxLayoutWrapper>
        </styled.Content>

      </styled.ContentWrapper>

    </styled.Wrapper>
  )
}
