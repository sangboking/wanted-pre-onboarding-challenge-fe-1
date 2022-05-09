import React from 'react'
import styled from 'styled-components'
import moment from 'moment';

const CalendarWrapper = styled.div`
  width:100%;
  height:46rem;
  border-radius: 15px;
  margin-top: 2.188rem;
  @media screen and (max-width:1440px) {
   height:50rem;
  }
`;

const CalendarTable = styled.table`
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

const CalendarThead = styled.thead` `;

const CalendarTr = styled.tr`
  
`;

const CalendarTh = styled.th`
  background-color:  #eef3ff;
  border-left: 1px solid #e4e4e4;
  height:3.125rem;
  color: #777;
  vertical-align: middle;
`;

const CalendarTh2 = styled.th`
  border-top: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  height: 6.1rem;
  color: #777;
  margin: 0 auto;
  width:6rem;
  padding-top:.5rem;
  padding-left:.5rem;
`;

const CalendarTbody = styled.tbody`
  text-align: left;
`;



export default function MonthCalendar({firstWeek,lastWeek,today}) {
  const calendarArr=()=>{

    let result = [];
    let week = firstWeek;
    for ( week; week <= lastWeek; week++) {
      result = result.concat(
        <CalendarTr key={week}>
          {
            // eslint-disable-next-line no-loop-func
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                  <CalendarTh2 key={index} /*style={{backgroundColor:'red'}}*/ >
                    <span>{days.format('D')}</span>
                  </CalendarTh2>
                );
              }else if(days.format('MM') !== today.format('MM')){
                return(
                  <CalendarTh2 key={index} style={{opacity:'30%'}} >
                    <span>{days.format('D')}</span>
                  </CalendarTh2>
                );
              }else{
                return(
                  <CalendarTh2 key={index}  >
                    <span>{days.format('D')}</span>
                  </CalendarTh2>
                );
              }
            })
          }
        </CalendarTr>
      );
    }
    return result;
  }

  
  return (
    
     <CalendarWrapper>
      <CalendarTable>
        <CalendarThead>
          <CalendarTr>
            <CalendarTh scope='col' style={{color:"#e31100"}}>일 </CalendarTh>
            <CalendarTh scope='col'>월 </CalendarTh>
            <CalendarTh scope='col'>화 </CalendarTh>
            <CalendarTh scope='col'>수 </CalendarTh>
            <CalendarTh scope='col'>목 </CalendarTh>
            <CalendarTh scope='col'>금 </CalendarTh>
            <CalendarTh scope='col' style={{color:"#007aff"}}>토 </CalendarTh>
          </CalendarTr>
        </CalendarThead>

        <CalendarTbody>
          {calendarArr()}
        </CalendarTbody>

        
      </CalendarTable>
     </CalendarWrapper>
   
  )
}



// {month.map((a,i)=>{
//   return(
//     <CalendarTr key={i}>
//       <CalendarTh2 scope='col' style={{color:"#e31100"}}></CalendarTh2>
//       <CalendarTh2 scope='col'></CalendarTh2>
//       <CalendarTh2 scope='col'></CalendarTh2>
//       <CalendarTh2 scope='col'></CalendarTh2>
//       <CalendarTh2 scope='col'></CalendarTh2>
//       <CalendarTh2 scope='col'></CalendarTh2>
//       <CalendarTh2 scope='col' style={{color:"#007aff"}}></CalendarTh2>
//     </CalendarTr>
//   )
// })}