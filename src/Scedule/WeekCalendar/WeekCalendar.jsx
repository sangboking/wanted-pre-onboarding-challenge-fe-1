import React from 'react'
import * as styled from './WeekCalendar.style'

export default function WeekCalendar({startDate,endDate}) {
  

  const arr = ["월","화","수","목","금"];

        
  return (
    <styled.WeekCalendarWrapper>
      <styled.CalendarContent>
        <styled.CalendarHead style={{borderTopLeftRadius:'15px'}}>
          <styled.SunHeadDate>일 {startDate.format('M/D')}</styled.SunHeadDate> 
        </styled.CalendarHead>
      </styled.CalendarContent>

     {
       arr.map((day,i)=>{
        return(
          <styled.CalendarContent key={i}>
            <styled.CalendarHead>
              <styled.HeadDate>{day} {startDate.clone().add(i+1,'days').format('M/D')}</styled.HeadDate>
            </styled.CalendarHead>
          </styled.CalendarContent>
        )
       })
     }

      <styled.CalendarContent style={{borderRight:'none'}}>
        <styled.CalendarHead style={{borderTopRightRadius:'10px'}}>
          <styled.SatHeadDate>토 {endDate.format('M/D')}</styled.SatHeadDate>
        </styled.CalendarHead>
      </styled.CalendarContent>
      
    </styled.WeekCalendarWrapper>

    
  )
}




