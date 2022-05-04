import styled from 'styled-components';
import InstaS from '../../SvgIcons/InstaS';

export const WeekCalendarWrapper = styled.div`
  margin-top: 2.188rem;
  width:67.9rem;
  height: 46rem;
  border-radius: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display: flex;
  @media screen and (max-width:1440px) {
   height:50rem;
  }
`;

export const CalendarContent = styled.div`
  width: 9.688rem;
  height: 100%;
  border-right:1px solid #eaeaea;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.44rem;
    height:3rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: rgba(175, 175, 175, 0.72);
    border-radius: 10px;
    height: 1rem;
  }
  &::-webkit-scrollbar-track { 
    background-color: #e4e4e4; 
    border-radius: 100px; 
  }
`;

export const CalendarHead = styled.div`
  width:9.688rem;
  height: 3.125rem;
  background-color: #eef3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position:fixed;
  z-index: 5;
`;

export const SunHeadDate = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e31100;
`;

export const SatHeadDate = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #007aff;
`;

export const HeadDate = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333;
`;

export const PostingWrapper = styled.div`
  width:100%;
  overflow-x :hidden ;
  margin-top: 3.125rem;
  padding-top:2.063rem;
  padding-bottom: 1.25rem;
`; 

export const PostWrapper = styled.div`
  width: 8.75rem;
  height: 11.875rem;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
  background-color: yellow;
  margin-top:1.25rem;
  margin-left:.5rem;
  padding-bottom: .625rem;
`;

export const PostTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:.625rem ;
  margin-top:.625rem;
`;

export const PostTime = styled.h1`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
  margin-right:.625rem;
  margin-top:.625rem;
`;

export const PostImg = styled.div`
  width: 7.5rem;
  height: 4.25rem;
  background-color: pink;
  margin-left: .625rem;
  margin-top:.5rem;
  margin-bottom:.625rem;
`;

export const PostText = styled.div`
  width: 7.5rem;
  height: 2.2rem;
  background-color: #fff;
  font-size: 0.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  margin-left: .625rem;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostBotWrapper = styled.div`
  display: flex;
  margin-left: .625rem;
  margin-top: 1.3rem;
`;

export const BotIconWrapper = styled.div`
  margin-right: 1rem;
`;