import styled from 'styled-components';

export const ModalBack = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  left:0;top:0;
  background:rgba(0,0,0,0.6);
  display:block;
  z-index: 10;
`;

export const PostBox = styled.div`
  position:absolute;
  top:0;left:0;
  right:0;bottom:0;
  margin:auto;
  width:56.125rem;
  height:54rem;
  background-color: #fff;
  border-radius: 60px;
  display: flex;
  padding-left:1.625rem;
  padding-right:1.625rem;
  /* box-shadow : rgba(0,0,0,0.5) 0 0 0 100vw; */
  z-index : 15;
  overflow: auto;

  @media screen and (max-width:1440px) {
   height:58rem;
  }
`;

export const VerticalLine = styled.div`
  width:.3px;
  height:90%;
  background-color:#eaeaea;
  margin-top:3rem;
  margin-right:1.625rem;
`;

