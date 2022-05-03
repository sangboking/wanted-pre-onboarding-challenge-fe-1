import React from 'react';
import * as styled from './PostLimitModal.style';

export default function PostLimitModal() {
  return (
    <styled.Wrapper>
      <styled.Intro>첨부파일 개수 제한</styled.Intro>

      <styled.ContentWrapper>
        <styled.SnsName>페이스북 - </styled.SnsName>
        <styled.LimitText>최대 10개</styled.LimitText>
      </styled.ContentWrapper>

      <styled.ContentWrapper>
        <styled.SnsName>인스타그램 - </styled.SnsName>
        <styled.LimitText>최대 10개</styled.LimitText>
      </styled.ContentWrapper>

      <styled.ContentWrapper>
        <styled.SnsName>트위터 - </styled.SnsName>
        <styled.LimitText>최대 4개</styled.LimitText>
      </styled.ContentWrapper>
    </styled.Wrapper>
  )
}
