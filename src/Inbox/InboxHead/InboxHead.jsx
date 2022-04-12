import React from 'react'
import * as styled from './InboxHead.style'
import FaceBookS from '../../SvgIcons/FaceBookS';
import TwitS from '../../SvgIcons/TwitS';

export default function InboxHead() {
  return (
    <styled.InboxHeaderWrapper>
      <styled.InboxHeadButton>모든 채널</styled.InboxHeadButton>

      <styled.InboxHeadIcon><FaceBookS width={30} height={30}/></styled.InboxHeadIcon>
      <styled.InboxHeadIcon><TwitS width={30} height={30}/></styled.InboxHeadIcon>
      <styled.InboxHeadIcon><TwitS width={30} height={30}/></styled.InboxHeadIcon>
    </styled.InboxHeaderWrapper>
  )
}
