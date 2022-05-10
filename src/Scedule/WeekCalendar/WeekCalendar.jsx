import React from 'react';
import * as styled from './WeekCalendar.style';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import moment from 'moment';
import { getPost } from '../../apis/api';
import FaceBookS from '../../SvgIcons/FaceBookS';
import InstaS from '../../SvgIcons/InstaS';
import TwitS from '../../SvgIcons/TwitS';
import HeartIcon from '../../SvgIcons/HeartIcon';
import CommentIcon from '../../SvgIcons/CommentIcon';

export default function WeekCalendar({startDate,endDate}) {
  const { brandId } = useParams();

  const arr = ["월","화","수","목","금"];

  const {data} = useQuery('getPost', () => getPost(brandId));
  
  return (
    <styled.WeekCalendarWrapper>
      <styled.CalendarContent style={moment().format('YYYY-MM-DD') > startDate.clone().add(0,'days').format('YYYY-MM-DD') ? {backgroundColor:'#f8f8f8',borderBottomLeftRadius:'15px'} : {backgroundColor:'#fff',borderBottomLeftRadius:'15px'}}>
        <styled.CalendarHead style={{borderTopLeftRadius:'14px'}}>
          <styled.SunHeadDate>일 {startDate.format('M/D')}</styled.SunHeadDate> 
        </styled.CalendarHead>
        <styled.PostingWrapper >
        {
          data?.result.map((a,index) => {
            if(a.postDate.substring(5,10) === startDate.format().substring(5,10)){
              return (
                <styled.PostWrapper key={index} style={moment().format('YYYY-MM-DD') > startDate.clone().add(index,'days').format('YYYY-MM-DD') ? {opacity:'0.4'} : {opacity:'1'} }>
                  <styled.PostTopWrapper>
                    <styled.IconWrapper>
                      <FaceBookS width={14} height={14} />
                      <InstaS width={14} height={14}/>
                      <TwitS  width={14} height={14}/>
                    </styled.IconWrapper>

                    <styled.PostTime>{`${new Date(data?.result[index].createDate).getHours()+9}:${new Date(data?.result[index].createDate).getMinutes()}`}</styled.PostTime>
                  </styled.PostTopWrapper>

                  <styled.PostImg></styled.PostImg>

                  <styled.PostText>{a.content}</styled.PostText>

                  <styled.PostBotWrapper>
                    <styled.BotIconWrapper> <HeartIcon width={12} height={12}/></styled.BotIconWrapper>
                    <styled.BotIconWrapper><CommentIcon width={12} height={12} /></styled.BotIconWrapper>
                  </styled.PostBotWrapper>
                </styled.PostWrapper>
                )
              }
            })
          }
        </styled.PostingWrapper>
      </styled.CalendarContent>

      {
        arr.map((day,i)=>{
          return(
            <styled.CalendarContent key={i} style={moment().format('YYYY-MM-DD') > startDate.clone().add(i+1,'days').format('YYYY-MM-DD') ? {backgroundColor:'#f8f8f8'} : {backgroundColor:'#fff'}}>
              <styled.CalendarHead >
                <styled.HeadDate>{day} {startDate.clone().add(i+1,'days').format('M/D')}</styled.HeadDate>
              </styled.CalendarHead>
              <styled.PostingWrapper>
              {
                data?.result.map((a,index) => {
                  if(a.postDate.substring(5,10) === startDate.clone().add(i+1,'days').format('MM-DD') ){
                    return (
                        <styled.PostWrapper key={index} style={moment().format('YYYY-MM-DD') > startDate.clone().add(i+1,'days').format('YYYY-MM-DD') ? {opacity:'0.4'} : {opacity:'1'} }>
                          <styled.PostTopWrapper >
                            <styled.IconWrapper>
                              <FaceBookS width={14} height={14} />
                              <InstaS width={14} height={14}/>
                              <TwitS  width={14} height={14}/>
                            </styled.IconWrapper>

                            <styled.PostTime>{`${new Date(data.result[index].createDate).getHours()+9}:${new Date(data.result[index].createDate).getMinutes()}`}</styled.PostTime>
                          </styled.PostTopWrapper>

                          <styled.PostImg></styled.PostImg>

                          <styled.PostText>{a.content}</styled.PostText>

                          <styled.PostBotWrapper>
                            <styled.BotIconWrapper> <HeartIcon width={12} height={12}/></styled.BotIconWrapper>
                            <styled.BotIconWrapper><CommentIcon width={12} height={12} /></styled.BotIconWrapper>
                          </styled.PostBotWrapper>
                        </styled.PostWrapper>
                    )
                  }
                })
              }
              </styled.PostingWrapper>
            </styled.CalendarContent>
          )
        })
      }

      <styled.CalendarContent style={moment().format('YYYY-MM-DD') > endDate.clone().add(0,'days').format('YYYY-MM-DD') ? {backgroundColor:'#f8f8f8',borderBottomRightRadius:'15px'} : {backgroundColor:'#fff',borderBottomRightRadius:'15px'}}>
        <styled.CalendarHead style={{borderTopRightRadius:'10px'}}>
          <styled.SatHeadDate>토 {endDate.format('M/D')}</styled.SatHeadDate>
        </styled.CalendarHead>
        <styled.PostingWrapper>
        {
            data?.result.map((a,index) => {
              if(a.postDate.substring(5,10) === endDate.format().substring(5,10)){
                return (
                  <styled.PostWrapper key={index} style={moment().format('YYYY-MM-DD') > endDate.clone().add(0,'days').format('YYYY-MM-DD') ? {opacity:'0.4'} : {opacity:'1'} }>
                    <styled.PostTopWrapper>
                      <styled.IconWrapper>
                        <FaceBookS width={14} height={14} />
                        <InstaS width={14} height={14}/>
                        <TwitS  width={14} height={14}/>
                      </styled.IconWrapper>

                      <styled.PostTime>{`${new Date(data?.result[index].createDate).getHours()+9}:${new Date(data?.result[index].createDate).getMinutes()}`}</styled.PostTime>
                    </styled.PostTopWrapper>

                    <styled.PostImg></styled.PostImg>

                    <styled.PostText>{a.content}</styled.PostText>

                    <styled.PostBotWrapper>
                      <styled.BotIconWrapper> <HeartIcon width={12} height={12}/></styled.BotIconWrapper>
                      <styled.BotIconWrapper><CommentIcon width={12} height={12} /></styled.BotIconWrapper>
                    </styled.PostBotWrapper>
                  </styled.PostWrapper>
                )
              }
            })
          }
        </styled.PostingWrapper>
        
      </styled.CalendarContent>
      
      
    </styled.WeekCalendarWrapper>
  )
}
