import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width:100%;
  height:46rem;
  border-radius: 15px;
  margin-top: 2.188rem;
  @media screen and (max-width:1440px) {
   height:50rem;
  }
`;

export const CalendarTable = styled.table`
  border-collapse:collapse;
  table-layout: fixed;
  border:1px solid #e4e4e4;
  width: 100%;
  height:100%;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333;;
  background-color: #fff;
  border-collapse: collapse;
  border-radius: 10px;
  border-style: hidden;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
`;


export const CalendarThead = styled.thead``;

export const CalendarTr = styled.tr``;

export const CalendarTh = styled.th`
  background-color:  #eef3ff;
  border-left: 1px solid #e4e4e4;
  height:3.125rem;
  color: #777;
  vertical-align: middle;
`;

export const CalendarTh2 = styled.th`
  border-top: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  height: 6.1rem;
  color: #777;
  margin: 0 auto;
  width:6rem;
  padding-top:.5rem;
  padding-left:.5rem;
  text-align: center;
`;

export const CalendarTbody = styled.tbody`
  text-align: left;
`;