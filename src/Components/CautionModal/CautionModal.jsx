import React from 'react'
import * as styled from './CautionModal.style'

export default function CautionModal() {
  return (
    <styled.CautionModal>
      <styled.CautionhWrapper style={{marginTop:'1.25rem'}}>
        <styled.Cautionh1>첨부파일</styled.Cautionh1>
        <styled.Cautionh2>개수 제한</styled.Cautionh2>
      </styled.CautionhWrapper>

      <styled.CautionhWrapper>
        <styled.Cautionh1>페이스북</styled.Cautionh1>
        <styled.Cautionh2>- 최대 10개</styled.Cautionh2>
      </styled.CautionhWrapper>

      <styled.CautionhWrapper>
        <styled.Cautionh1>인스타그램</styled.Cautionh1>
        <styled.Cautionh2>- 최대 10개</styled.Cautionh2>
      </styled.CautionhWrapper>

      <styled.CautionhWrapper>
        <styled.Cautionh1>트위터</styled.Cautionh1>
        <styled.Cautionh2>- 최대 4개</styled.Cautionh2>
      </styled.CautionhWrapper>

      <styled.CautionLine />

      <styled.CautionhWrapper>
        <styled.Cautionh1>글자</styled.Cautionh1>
        <styled.Cautionh2>수 제한</styled.Cautionh2>
      </styled.CautionhWrapper>

      <styled.CautionhWrapper>
        <styled.Cautionh1>페이스북</styled.Cautionh1>
        <styled.Cautionh2>- 최대 5,000자</styled.Cautionh2>
      </styled.CautionhWrapper>

      <styled.CautionhWrapper>
        <styled.Cautionh1>인스타그램</styled.Cautionh1>
        <styled.Cautionh2>- 최대 2,200자</styled.Cautionh2>
      </styled.CautionhWrapper>

      <styled.CautionhWrapper>
        <styled.Cautionh1>트위터</styled.Cautionh1>
        <styled.Cautionh2>- 최대 280자</styled.Cautionh2>
      </styled.CautionhWrapper>

      <styled.CautionLine style={{marginBottom:'1rem'}}/>

      <styled.CautionBotWrapper>
        <styled.Cautionh1>여러 종류의 SNS를 선택한 경우</styled.Cautionh1>
        <styled.Cautionh1>컨텐츠 제한이 가장 적은 채널이 기준입니다.</styled.Cautionh1>
      </styled.CautionBotWrapper>

      
    </styled.CautionModal>
  )
}
