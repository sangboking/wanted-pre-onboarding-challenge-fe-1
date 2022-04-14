import styled from 'styled-components';

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
`;

export const CalendarHead = styled.div`
  height: 3.125rem;
  background-color: #eef3ff;
  display: flex;
  align-items: center;
  justify-content: center;
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