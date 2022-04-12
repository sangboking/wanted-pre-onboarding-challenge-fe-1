import styled from 'styled-components';

export const Wrapper = styled.div`
  width:120rem;
  height:100vh;
  display: flex;
  background-color: #fff;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

export const ContentWrapper = styled.div`
  width:105rem;
  height:100vh;
  margin-left: 15rem;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

export const ConnectWrapper = styled.div`
  width:67.813rem;
  height: 100vh;
  margin:0 auto;
  &::-webkit-scrollbar{
    display: none;
  } //스크롤 기능은하지만 보이지않게
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-top: 5.313rem;
  margin-left:.875rem;
  margin-bottom: 2.688rem;
`;

export const TitleLine = styled.div`
  width: 0.5rem;
  height: 1.563rem;
  background-color: #1a225c;
  margin-right: .625rem;
`;

export const Titleh1 = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
`;

export const SnsBox = styled.div`
  width: 100%;
  height:18.063rem;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  margin-bottom: 3.438rem;
`;

export const SnsBoxNoConnect = styled.div`
  width: 100%;
  height: 8.125rem;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  margin-bottom: 3.438rem;
`;

export const SnsBoxTop = styled.div`
  width:100%;
  height:3.188rem ;
  background-color: #eef3ff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  align-items: center;
`;

export const SnsIcon = styled.div`
  margin-left:.875rem;
  margin-right:.688rem;
`;

export const SnsName = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333;
`;

export const SnsConnectBox = styled.div`
  width:100%;
  height:5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted #eaeaea;
`;

export const SnsProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SnsCircle = styled.div`
  width: 2.813rem;
  height: 2.813rem;
  background-color: orange;
  border-radius: 10rem;
  margin-left: 3.25rem;
  margin-right:1rem;
`;

export const SnsUserName = styled.h1`
  width: 5rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #191919;
`;

export const SnsPageName = styled.h1`
  width: 6rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #191919;
`;

export const ConnectTime = styled.h1`
  width: 18.375rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #191919;
`;

export const ConnectIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3.188rem;
`;

export const ConnectIconBox = styled.div`
  cursor: pointer;
`;

export const SnsDisConnectBox = styled.div`
  width:100%;
  height:5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dotted #eaeaea;
`;

export const SnsDisUserName = styled.h1`
  width: 5rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #676767;
`;

export const SnsDisPageName = styled.h1`
  width: 6rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #676767;
`;

export const SnsDisTime = styled.h1`
  width: 18.375rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #676767;
`;

export const SnsAddBox = styled.div`
  width:100%;
  height:5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Both1 = styled.h1`
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #191919;
  margin-top: 5.063rem;
  margin-bottom: 5.625rem;
`;