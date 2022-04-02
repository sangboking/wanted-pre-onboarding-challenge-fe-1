import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  width:30.125rem;
  margin:0 auto;
  margin-top:10rem;
  margin-bottom:10rem;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.625rem;
`;

const Intro = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-bottom: 2.5rem;
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.438rem;
`;

const InputBox = styled.input`
  border-radius: 15px;
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  width:28.6rem;
  height: 3.125rem;
  padding-left: 1.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-bottom:1.938rem;
  &:focus{
    outline: none;
  }
`;

const BirthWrapper = styled.div`
  display: flex;
  margin-bottom: 1.938rem;
`;

const YearBox = styled.input`
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  border-radius:1rem;
  padding-left:1.375rem;
  height: 2.9rem;
  width:10.625rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  &:focus{
    outline: none;
  }
  margin-right:0.938rem;
`;

const  MonthBox = styled.select`
  border:1px solid #f2f2f2;
  border-radius:1rem;
  padding-left:1.375rem;
  height: 3.125rem;
  width:8.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  background:url(/assets/arrow_down.png) no-repeat right 50%;
  background-size:30px;
  background-color: #f2f2f2;
  appearance: none; //select box 화살표 제거 
  -moz-appearance: none; 
  -webkit-appearance: none; 
  cursor: pointer;
  &:focus{
    outline: none;
  }
  margin-right: 0.938rem;
`;

const MonthOption = styled.option`
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  border-radius:3rem;
`;

const DayBox = styled.select`
  border:1px solid #f2f2f2;
  border-radius:1rem;
  padding-left:1.375rem;
  height: 3.125rem;
  width:8.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  background:url(/assets/arrow_down.png) no-repeat right 50%;
  background-size:30px;
  background-color: #f2f2f2;
  appearance: none; //select box 화살표 제거 
  -moz-appearance: none; 
  -webkit-appearance: none; 
  &:focus{
    outline: none;
  }
`;

const DayOption = styled.option`
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  border-radius:3rem;
`;

const Button = styled.button`
  border-radius: 15px;
  width:30rem;
  padding:1rem;
  font-size:0.875rem;
  color: rgba(250, 250, 250, 0.9);
  background-color:#112553;
  border:1px solid #112553;
  font-weight: 500;
  margin-top:.5rem;
  cursor: pointer;
`;


export default function FindId() {
  const month = [1,2,3,4,5,6,7,8,9,10,11,12];
  const day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  return (
    <Wrapper>
      <Title>아이디 찾기</Title>
      
      <Intro>아이디는 가입시 입력하신 정보를 통해 찾을 수 있습니다.</Intro>
      
      <Name>이름</Name>
      
      <InputBox placeholder='이름을 입력해주세요.'></InputBox>
      
      <Name>생년월일</Name>
      
      <BirthWrapper>
        <YearBox placeholder='년도'></YearBox>
        <MonthBox>
          <MonthOption value='월'>월</MonthOption>
          {
            month.map((a,i)=>{
              return(
                <MonthOption value={a} key={i}>{a}</MonthOption>
              )
            })
          }
        </MonthBox>
        <DayBox>
          <DayOption value='일'>일</DayOption>
          {
            day.map((a,i)=>{
              return(
                <DayOption value={a} key={i}>{a}</DayOption>
              )
            })
          }
        </DayBox>
      </BirthWrapper>
      
      <Link to='/confirmId'>
        <Button>아이디 찾기</Button>
      </Link>
    </Wrapper>
  )
}



