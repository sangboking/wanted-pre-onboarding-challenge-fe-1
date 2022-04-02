import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Components/SideBar';

const Wrapper = styled.div`
  width:120rem;
  height:100vh;
  display: flex;
  background-color: #fff;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const ContentWrapper = styled.div`
  width:105rem;
  height:100vh;
  margin-left: 15rem;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const InfoWrapper = styled.div`
  width:67.813rem;
  height: 100vh;
  margin:0 auto;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 5.313rem;
  margin-left:.875rem;
  margin-bottom: 2.75rem;
`;

const TitleLine = styled.div`
  width: 0.5rem;
  height: 1.563rem;
  background-color: #1a225c;
  margin-right: .625rem;
`;

const Titleh1 = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
`;

const InfoBox = styled.div`
  width:67.813rem;
  height:52.5rem;
  border-radius: 15px;
  border: solid 1px #eaeaea;
`;

export default function MyInfo() {
  const InfoMenuColor = '#3C4165';
  const InfoNameColor = '#333';

  return (
    <Wrapper>
      <Sidebar InfoMenuColor={InfoMenuColor} InfoNameColor={InfoNameColor}/>

      <ContentWrapper>
        <InfoWrapper>
          
          <TitleWrapper>
            <TitleLine/>
            <Titleh1>내 정보 조회/수정</Titleh1>
          </TitleWrapper>

          <InfoBox>

          </InfoBox>

        </InfoWrapper>

      </ContentWrapper>


    </Wrapper>
  )
}
