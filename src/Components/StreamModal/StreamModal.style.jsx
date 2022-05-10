import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 5.625rem;
  height: 6.75rem;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  position: absolute;
  top:2rem;
  right: .5rem;
`;

export const ModalContent = styled.div`
  width:100%;
  height:2.25rem;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalText = styled.h3`
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #676767;
  margin-left: .5rem;
`;