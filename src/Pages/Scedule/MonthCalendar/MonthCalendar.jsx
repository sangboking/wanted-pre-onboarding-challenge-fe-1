import React from 'react'
import * as styled from './MonthCalendar.style'
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPost } from '../../../apis/api';

export default function MonthCalendar({firstWeek,lastWeek,today}) {
  const { brandId } = useParams();

  const {data} = useQuery('getPost', () => getPost(brandId));

  const calendarArr = () => {

    let result = [];
    let week = firstWeek;
    for ( week; week <= lastWeek; week++) {
      result = result.concat(
        <styled.CalendarTr key={week}>
          {
            // eslint-disable-next-line no-loop-func
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                  <styled.CalendarTh2 key={index} /*style={{backgroundColor:'red'}}*/ >
                    <span>{days.format('D')}</span>
                  </styled.CalendarTh2>
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                  <styled.CalendarTh2 key={index} style={{opacity:'30%'}} >
                    <span>{days.format('D')}</span>
                  </styled.CalendarTh2>
                );
              }else{
                return(
                  <styled.CalendarTh2 key={index}  >
                    <span>{days.format('D')}</span>
                  </styled.CalendarTh2>
                );
              }
            })
          }
        </styled.CalendarTr>
      );
    }
    return result;
  }

  
  return (
     <styled.CalendarWrapper>
      <styled.CalendarTable>
        <styled.CalendarThead>
          <styled.CalendarTr>
            <styled.CalendarTh scope='col' style={{color:"#e31100"}}>일 </styled.CalendarTh>
            <styled.CalendarTh scope='col'>월 </styled.CalendarTh>
            <styled.CalendarTh scope='col'>화 </styled.CalendarTh>
            <styled.CalendarTh scope='col'>수 </styled.CalendarTh>
            <styled.CalendarTh scope='col'>목 </styled.CalendarTh>
            <styled.CalendarTh scope='col'>금 </styled.CalendarTh>
            <styled.CalendarTh scope='col' style={{color:"#007aff"}}>토 </styled.CalendarTh>
          </styled.CalendarTr>
        </styled.CalendarThead>

        <styled.CalendarTbody>
          {calendarArr()}
        </styled.CalendarTbody>

        
      </styled.CalendarTable>
     </styled.CalendarWrapper>
  )
}

