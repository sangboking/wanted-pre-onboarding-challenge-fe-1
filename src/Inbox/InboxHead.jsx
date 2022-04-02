import React from 'react'
import styled from 'styled-components'
import FaceBookS from '../SvgIcons/FaceBookS';
import TwitS from '../SvgIcons/TwitS';

const InboxHeaderWrapper = styled.header`
  width:100%;
  margin-top:5.625rem;
  display:flex;
  align-items: center;
`;

const InboxHeadButton = styled.button`
  width:6rem;
  height: 2.188rem;
  border-radius: 10px;
  border:1px solid #eef3ff;
  background-color: #eef3ff;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
`;

const InboxHeadIcon = styled.div`
  margin-left:2.375rem ;
`;

export default function InboxHead() {
  return (
    <InboxHeaderWrapper>
      <InboxHeadButton>모든 채널</InboxHeadButton>

      <InboxHeadIcon><FaceBookS width={30} height={30}/></InboxHeadIcon>
      <InboxHeadIcon><TwitS width={30} height={30}/></InboxHeadIcon>
      <InboxHeadIcon><TwitS width={30} height={30}/></InboxHeadIcon>
    </InboxHeaderWrapper>
  )
}
