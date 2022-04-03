import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Wrapper = styled.div`
  max-width: 100%;
  height: 100%;
  margin:0 auto;
  margin-bottom:10rem;
  background-color: ${props=>props.joinState?'#707070':'#fff'};
`;

const LayOut = styled.div`
  width: 30rem;
  margin:0 auto;
  height: 67.5rem;
  padding: 6.063rem 0 0;
  position:relative;
`;

const Title = styled.span`
  font-size:1.75rem;
  font-weight:700;
  width: 6.75rem;
  height: 2rem;
  margin: 0 9.75rem 0.625rem 0;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
`;

const Intro = styled.h2`
  width: 16.5rem;
  height: 1.313rem;
  margin: 0.625rem 0 0;
  margin-bottom:2.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(103, 103, 103, 0.9);
`;

const IdPwWrapper = styled.div`
  display: flex;
  width:30.5rem;
  margin-bottom:1rem;
`;

const Input = styled.input`
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  border-radius:15px;
  width:65%;
  height: 3rem;
  margin-right:.5rem;
  margin-bottom:1rem;
  color: #676767;
  padding-left:1.375rem;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.875rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
  }
  &:focus{
    outline: none;
  }
`;

const InputTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.32px;
  color: #191919;
  margin-bottom:.5rem ;
`;

const PwSpan = styled.span`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.24px;
  text-align: right;
  color: #676767;
  margin-left:.75rem;
`;

const InputTitleWrapper = styled.div`
  display:flex ;
  
`;

const Button = styled.button`
  font-size:.8rem;
  color:rgba(255, 255, 255, 0.9);
  width:28%;
  height:3rem;
  font-weight: 500;
  border-radius: 15px;
  background-color: #112553;
  border:1px solid #112553;
  cursor: pointer;
`;

const PwInput = styled.input`
  border-radius: 15px;
  width:97%;
  height:3rem;
  margin-top:.5rem ;
  margin-bottom:1.5rem;
  padding-left:1.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  &:focus{
    outline: none;
  }
`;

const Line = styled.div`
  margin-top:2rem;
  margin-bottom:1.6rem;
  height: 0.031rem;
  background-color: #ece7ef;
`;

const BirthWrapper = styled.div`
  margin-top:.5rem;
  display: flex;
  width:105%;
`;

const YearBox = styled.input`
  font-weight: 500;
  font-size:0.8rem;
  background-color: #f2f2f2;
  color: #676767;
  border:1px solid #f2f2f2;
  border-radius: 15px;
  padding-left:1.375rem;
  width:35%;
  height: 2.9rem;
  &:focus{
    outline: none;
  }
  margin-right:1rem;
`;

const MonthBox = styled.select`
  font-weight: 500;
  font-size:0.8rem;
  color: #676767;
  border:1px solid #f2f2f2;
  border-radius: 15px;
  padding-left:1.375rem;
  margin-right:0.938rem;
  width:36%;
  height: 3.125rem;
  background:url(/assets/arrow_down.png) no-repeat right 50%;
  background-size:30px;
  background-color: #f2f2f2;
  &:focus{
    outline: none;
  }
  appearance: none; //select box 화살표 제거 
  -moz-appearance: none; 
  -webkit-appearance: none; 
  cursor: pointer;
`;

const MonthOption = styled.option`
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  border-radius:3rem;
`;

const DayBox = styled.input`
  font-weight: 500;
  font-size:0.8rem;
  color: #676767;
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  border-radius: 15px;
  padding-left:1.375rem;
  margin-right:0.938rem;
  width:30%;
  height: 3rem;
  &:focus{
    outline:none;
  }
`;


const Title2 = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-bottom:0.375rem;
`;

const TextBox = styled.div`
  width:97%;
  overflow-y: auto;
  display:block;
  height: 5rem;
  font-size: 0.75rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  background-color: #f2f2f2;
  border:1px solid #f2f2f2;
  padding:0.625rem 0.6rem 0.582rem 0.813rem;
  border-radius: 15px;
  //우측 스크롤바 css
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

const ConfrimWrapper = styled.div`
  width:31rem;
  display:flex;
  margin-top:1rem;
  text-align:right;
  position:relative;
  margin-bottom:1.5rem;
`;

const Title3 = styled.h2`
  position:absolute;
  right:2rem;
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #191919;
`;

const CheckBox = styled.input`
  background-color: #fff;
  border: 1px solid red;
  border-radius: 2px;
  position:absolute;
  right:.5rem;
  &:focus{
    outline: none;
  }
  &:checked{
    background-color: red;
  }
`;

const JoinButton = styled.button`
  background-color: #112553;
  border: 1px solid #112553;
  color: rgba(255, 255, 255, 0.9);
  width:102%;
  height:2.8rem;
  border-radius: .8rem;
  margin-top:2rem;
  font-weight: 500;
  cursor:pointer;
`;

const JoinCompletBox = styled.div`
  z-index:100;
  position:absolute;
  top:30rem;
  left:-3rem;
  margin:0 auto;
  width: 36.313rem;
  height: 12.438rem;
  color:black;
  border-radius: 15px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align:center;
`;

const JoinBox = styled.h1`
  margin-top:4.5rem;
  font-size: 1.063rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #191919;
  margin-bottom:2.6rem;
`;

const JoinButton2 = styled.button`
  width: 8.25rem;
  height: 2.5rem;
  border-radius: 15px;
  background-color: #112553;
  border:1px solid #112553;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

const TextWrapper = styled.div`
`;

const FormStyled = styled.form`

`;



const Join = () => {

  const month = [1,2,3,4,5,6,7,8,9,10,11,12];
  
  const rule = `
  링커 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 
  링커 서비스의 이용과 관련하여 링커 서비스를 제공하는 링커 주식회사(이하 ‘링커’)
  와 이를 이용하는 링커 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
  아울러 여러분의 링커 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습
  니다.링커 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 
  링커 서비스의 이용과 관련하여 링커 서비스를 제공하는 링커 주식회사(이하 ‘링커’)
  와 이를 이용하는 링커 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
  아울러 여러분의 링커 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습
  니다.링커 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 
  링커 서비스의 이용과 관련하여 링커 서비스를 제공하는 링커 주식회사(이하 ‘링커’)
  와 이를 이용하는 링커 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
  아울러 여러분의 링커 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습
  니다.`;

  const [joinState,setJoinState] = useState(false);
  const {register, handleSubmit, formState:{errors}, setError} = useForm();
  console.log(errors)
  const onValid = (data) => {
    if(data.pwd !== data.pwdConfirm){
      setError(
        "pwd",
        {message:"비밀번호가 일치하지 않습니다."},
        {shouldFocus:true}
      )
    }
  }
 


    return (
      <Wrapper joinState={joinState}>
        <LayOut>
          <FormStyled onSubmit={handleSubmit(onValid)}>
            <Title>회원가입</Title>
            <Intro>환영합니다! 링커에 가입해보세요.</Intro>
          
            <InputTitle>아이디(email)</InputTitle> 
            <IdPwWrapper>
              <Input {...register("email", {required:true})}/>
              <Button>인증번호 발송</Button>
            </IdPwWrapper>
            
            <InputTitle>이메일 인증번호</InputTitle>
            <IdPwWrapper>
              <Input {...register("emailCode", {required:true})}></Input>
              <Button>확인</Button>
            </IdPwWrapper>

            <InputTitleWrapper>
              <InputTitle>비밀번호</InputTitle>
              <PwSpan>* 영문,숫자 조합 8~12자 입력</PwSpan>
            </InputTitleWrapper>
            <PwInput type="password" {...register("pwd", 
            {
              required:true ,
              maxLength:{value:12,message:'최대 비밀먼호는 12자 입니다.'} ,
              minLength:{value:8,message:'최소 비밀번호는 8자 입니다.'}
            })}>
            </PwInput>
            <span>{errors?.pwd?.message}</span>
            
            
            <InputTitle>비밀번호 확인</InputTitle>
            <PwInput type="password" {...register("pwdConfirm",
             {required:true,
              maxLength:12,
              minLength:8
             })}> 
            </PwInput>
          
            <InputTitle>이름</InputTitle>
            <PwInput {...register("name", {required:true})}></PwInput>

            <InputTitle>생년월일</InputTitle>
            <BirthWrapper>
              <YearBox placeholder='년(YYYY)' {...register("year", {required:true})}></YearBox>
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
              <DayBox placeholder='일' {...register("day", {required:true})}>
                
              </DayBox>
            </BirthWrapper>
            {
              joinState ? 
              <JoinCompletBox>
                <JoinBox>회원가입이 완료되었습니다!</JoinBox>
                <Link to='/login'>
                  <JoinButton2>로그인</JoinButton2>
                </Link>
              </JoinCompletBox> 
              : null
            }
            <Line/>
            <Title2>이용약관</Title2>
            <TextBox readOnly>
              <TextWrapper>
                <h3>여러분을 환영합니다</h3>
                <p>{rule}</p>
              </TextWrapper>
            </TextBox>
            <ConfrimWrapper>
              <Title3>동의합니다</Title3>
              <CheckBox type="checkbox"/>
            </ConfrimWrapper>
            <Title2>개인정보보호정책</Title2>
            <TextBox>
              <h3>여러분을 환영합니다</h3>
              <p>{rule}</p>
            </TextBox>
            <ConfrimWrapper>
              <Title3>동의합니다</Title3>
              <CheckBox type="checkbox"/>
            </ConfrimWrapper>
            <JoinButton onClick={()=>{setJoinState(!joinState)}}>가입하기</JoinButton>
          </FormStyled>
        </LayOut>
      </Wrapper>   
    );
};

export default Join;


