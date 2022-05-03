import React from 'react';
import * as styled from './WeekCalendar.style';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPost } from '../../apis/api';

export default function WeekCalendar({startDate,endDate}) {
  const { brandId } = useParams();

  const arr = ["월","화","수","목","금"];

  const {data, isLoading} = useQuery('getPost', () => getPost(brandId));

 
     
  return (
    <styled.WeekCalendarWrapper>
      <styled.CalendarContent>
        <styled.CalendarHead style={{borderTopLeftRadius:'15px'}}>
          <styled.SunHeadDate>일 {startDate.format('M/D')}</styled.SunHeadDate> 
        </styled.CalendarHead>
        {
          data.result[0].postDate.substring(0,10) === startDate.format().substring(0,10)
          ? '날짜같음 데이터 바인딩 할게요'
          :'날짜다름 바인딩안댐'
        }
        
      </styled.CalendarContent>

     {
       arr.map((day,i)=>{
        return(
          <styled.CalendarContent key={i}>
            <styled.CalendarHead>
              <styled.HeadDate>{day} {startDate.clone().add(i+1,'days').format('M/D')}</styled.HeadDate>
            </styled.CalendarHead>
            {
              data.result[i].postDate.substring(5,10) === startDate.clone().add(i+1,'days').format('MM-DD')
              ? data.result.map((a,i) => {
                return a.content
              })
              :'날짜다름 바인딩안댐'
            }
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




