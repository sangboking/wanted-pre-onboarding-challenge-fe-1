import React from 'react'
import styled from 'styled-components'

const WeekCalendarWrapper = styled.div`
  margin-top: 2.188rem;
  width:67.9rem;
  height: 78%;
  border-radius: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  display: flex;
`;

const CalendarContent = styled.div`
  width: 9.688rem;
  height: 100%;
  border-right:1px solid #eaeaea;
`;

const CalendarHead = styled.div`
  height: 3.125rem;
  background-color: #dfe5f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SunHeadDate = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #e31100;
`;

const SatHeadDate = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #007aff;
`;

const HeadDate = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333;
`;

export default function WeekCalendar({startDate,endDate}) {
  

  const arr = ["월","화","수","목","금"];

        
  return (
    <WeekCalendarWrapper>
      <CalendarContent>
        <CalendarHead style={{borderTopLeftRadius:'15px'}}>
          <SunHeadDate>일 {startDate.format('M/D')}</SunHeadDate> 
        </CalendarHead>
      </CalendarContent>

     {
       arr.map((day,i)=>{
        return(
          <CalendarContent>
            <CalendarHead>
              <HeadDate>{day} {startDate.clone().add(i+1,'days').format('M/D')}</HeadDate>
            </CalendarHead>
          </CalendarContent>
        )
       })
     }

      <CalendarContent style={{borderRight:'none'}}>
        <CalendarHead style={{borderTopRightRadius:'10px'}}>
          <SatHeadDate>토 {endDate.format('M/D')}</SatHeadDate>
        </CalendarHead>
      </CalendarContent>
      
    </WeekCalendarWrapper>

    
  )
}




