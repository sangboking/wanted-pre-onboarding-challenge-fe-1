import React from 'react'
import * as styled from './InboxComment.style';
import InboxSidebar2 from '../../Components/InboxSideBar2/InboxSideBar2';
import FindIcon from '../../SvgIcons/FindIcon';
import InboxHead from '../InboxHead/InboxHead';
import { inboxMenuColorAtom,inboxColorAtom } from '../InboxAtoms';
import {useRecoilValue} from 'recoil';


export default function InboxComnet() {
  const inboxMenuColor = useRecoilValue(inboxMenuColorAtom);
  const inboxColor = useRecoilValue(inboxColorAtom);
  return (
    <styled.Wrapper>
      <InboxSidebar2 inboxMenuColor={inboxMenuColor} inboxColor={inboxColor}/>

      <styled.ContentWrapper>
        <styled.Content>
          <InboxHead/>

          <styled.InboxLayoutWrapper>

            <styled.InboxLayoutLeft>
              <styled.LeftHeader>
                <styled.LeftHeaderSearch placeholder='검색'></styled.LeftHeaderSearch>
                <styled.LeftHeaderIcon><FindIcon/></styled.LeftHeaderIcon>
              </styled.LeftHeader>
            </styled.InboxLayoutLeft>

            <styled.InboxLayoutCenter>
              <styled.CenterHeader>
                {
                  <styled.HeaderProfileImg/>
                }
              </styled.CenterHeader>
              <styled.CenterCircle/>
              <styled.CenterComent>연동된 모든 SNS의 댓글을 확인해보세요!</styled.CenterComent>
            </styled.InboxLayoutCenter>

            <styled.InboxLayoutRight>
              <styled.RightHeader>
                {
                  <styled.RightHeaderInfo>노트</styled.RightHeaderInfo>
                }
              </styled.RightHeader>

              <styled.RightContentWrapper>
                {
                  <>
                    <styled.RightNote placeholder='노트를 작성하세요.'></styled.RightNote>
                    <styled.RightButtonWrapper>
                      <styled.RightCancelButton>취소</styled.RightCancelButton>
                      <styled.RightLoadButton>저장</styled.RightLoadButton>
                    </styled.RightButtonWrapper>
                    
                    <styled.RightTextWrapper> 
                      <styled.RightDateTextWrapper>
                        <styled.RightDate>3월 21일</styled.RightDate>
                        <styled.RightModify>수정</styled.RightModify>
                        <styled.RightDelete>삭제</styled.RightDelete>
                      </styled.RightDateTextWrapper>
                      <styled.RightNoteData>노트에 입력된 글.</styled.RightNoteData>
                    </styled.RightTextWrapper> 
                  </>
                }
              </styled.RightContentWrapper>
            </styled.InboxLayoutRight>

          </styled.InboxLayoutWrapper>
        </styled.Content>

      </styled.ContentWrapper>
    </styled.Wrapper>
  )
}
