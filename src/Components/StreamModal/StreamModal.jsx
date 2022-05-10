import React from 'react';
import * as styled from './StreamModal.style';
import PostingIcon from  '../../SvgIcons/PostingIcon';
import DuplicateIcon from '../../SvgIcons/DuplicateIcon';
import TrashCanIcon from '../../SvgIcons/TrashCanIcon'

export default function StreamModal() {
  return (
    <styled.ModalWrapper>
      <styled.ModalContent>
        <styled.ModalIconWrapper>
          <PostingIcon width={11} height={11}/>
          <styled.ModalText>수정</styled.ModalText>
        </styled.ModalIconWrapper>
      </styled.ModalContent>

      <styled.ModalContent>
        <styled.ModalIconWrapper>
          <DuplicateIcon width={11} height={11}/>
          <styled.ModalText>복제</styled.ModalText>
        </styled.ModalIconWrapper>
      </styled.ModalContent>

      <styled.ModalContent>
        <styled.ModalIconWrapper>
          <TrashCanIcon width={11} height={11}/>
          <styled.ModalText>삭제</styled.ModalText>
        </styled.ModalIconWrapper>
      </styled.ModalContent>
    </styled.ModalWrapper>
  )
}
