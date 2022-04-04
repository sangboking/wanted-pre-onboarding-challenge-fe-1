import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Wrapper = styled.div`
  width: 100%;
  height: 120%;
  background-color: #f5f6f8;
  padding-top:6rem;
`;

const LayOut = styled.div`
  width: 30.031rem;
  margin:0 auto;
  position: relative;
  background-color: #f5f6f8;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.56px;
  text-align: left;
  color: #191919;
  margin-left: .766rem;
`;

const Intro = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #676767;
  margin-top:.625rem;
  margin-left: .766rem;
`;

const InputTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #191919;
  margin-top:1.5rem;
  margin-left: .766rem;
`;

const IdEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  width:105%;
`;

const Input = styled.input`
  width: 23rem;
  height: 3.125rem;
  border-radius: 15px;
  border:1px solid #fff;
  margin-right:.625rem;
  margin-top:.5rem;
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
    background-color: #fff;
  }
`;

const TopButton = styled.button`
  width: 9rem;
  height: 3.5rem;
  background-color: #112553;
  border-radius: 15px;
  border:1px solid #112553;
  font-size:.8rem;
  color:rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  margin-top: .5rem;
  cursor: pointer;
`;

const InputTitleWrapper = styled.div`
  display:flex ;
  align-items: center;
  margin-top: 1.5rem;
`;

const InputTitle2 = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  text-align: left;
  color: #191919;
  margin-left: .766rem;
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

const PwInput = styled.input`
  width: 30rem;
  height: 3.125rem;
  border-radius: 15px;
  margin-top:.5rem ;
  margin-bottom:.5rem;
  padding-left:1.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  background-color: #fff;
  border:1px solid #fff;
  &:focus{
    outline: none;
  }
`;

const Line = styled.div`
  width:32rem;
  height: 0.031rem;
  margin-top:2rem;
  margin-bottom:1.6rem;
  background-color: #aaa;
`;

const BirthWrapper = styled.div`
  margin-top:.5rem;
  display: flex;
  width:110%;
`;

const YearBox = styled.input`
  font-weight: 500;
  font-size:0.8rem;
  background-color: #fff;
  border:1px solid #fff;
  color: #676767;
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
  background-color: #fff;
  border:1px solid #fff;
  color: #676767;
  border-radius: 15px;
  padding-left:1.375rem;
  margin-right:0.938rem;
  width:36%;
  height: 3.125rem;
  background:url(/assets/arrow_down.png) no-repeat right 50%;
  background-size:30px;
  &:focus{
    outline: none;
  }
  appearance: none; //select box 화살표 제거 
  -moz-appearance: none; 
  -webkit-appearance: none; 
  cursor: pointer;
`;

const MonthOption = styled.option`
  background-color: #fff;
  border:1px solid #fff;
  border-radius:3rem;
`;

const DayBox = styled.input`
  font-weight: 500;
  font-size:0.8rem;
  color: #676767;
  background-color: #fff;
  border:1px solid #fff;
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
  margin-left: .766rem;
`;

const TextBox = styled.div`
  width:30.5rem;
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
  background-color: #fff;
  border:1px solid #fff;
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
  display:flex;
  align-items: center;
  margin-top:1.5rem;
  text-align:right;
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
  margin-right:.1rem;
`;

const CheckBox = styled.input`
  background-color: #fff;
  border: 1px solid red;
  border-radius: 15px;
  position:absolute;
  right:0;
  &:focus{
    outline: none;
  }
  &:checked{
    background-color: red;
  }
`;

const JoinButton = styled.button`
  width:31rem;
  height:3.125rem;
  background-color: #112553;
  border: 1px solid #112553;
  color: rgba(255, 255, 255, 0.9);
  border-radius: .8rem;
  margin-top:2rem;
  margin-bottom:4rem;
  font-weight: 500;
  cursor:pointer;
`;

const JoinCompleteBack = styled.div`
  width:100%;
  height:130%;
  position:absolute;
  left:0;top:0;
  background:rgba(0,0,0,0.6);
  display:block;
  z-index: 10;
  margin: 0 auto;
`;

const JoinCompletBox = styled.div`
  z-index:100;
  top:-20rem;left:0;
  right:0;bottom:0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 36.313rem;
  height: 12.438rem;
  color:black;
  border-radius: 15px;
  background:rgba(0,0,0,0.6);
  background-color: #fff;
  text-align:center;
  position: absolute;
`;

const JoinBox = styled.h1`
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

const AlertSpan = styled.h1`
  font-size: .8rem;
  color:red;
  margin-left: 1rem;
`;

const AlertSpan2 = styled.h1`
  font-size:.8rem;
  color:green;
  margin-left: 1rem;
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
  const {register, handleSubmit, formState:{errors}, setError, watch, getValues} = useForm();
  const [joinState,setJoinState] = useState(false);
  const [email, setEmail] = useState();
  const [emailCode, setEmailCode] = useState();
  const [emailSendModal, setEmailSendModal] = useState(false);
  const [emailCodeModal, setEmailCodeModal] = useState(false);
  const [checkModal, setCheckModal] = useState(false);
  const [check, setCheck] = useState(false);

  const onValid = (data) => {
    console.log(data)
    if(data.pwd !== data.pwdConfirm){
      setError(
        "pwd",
        {message:"* 비밀번호가 일치하지 않습니다."},
        {shouldFocus:true}
      )
      setError(
        "pwdConfirm",
        {message:"* 비밀번호가 일치하지 않습니다."},
        {shouldFocus:true}
      )
    }
    else if(data.checkbox1 === false){
      setError(
        "checkbox1",
        {message:"* 링커 이용약관과 개인정보 보호정책에 모두 동의하여 주세요."}
      )
    }
    else if(data.checkbox2 === false){
      setError(
        "checkbox2",
        {message:"* 링커 이용약관과 개인정보 보호정책에 모두 동의하여 주세요."}
      )
    }
    else{
      return setJoinState(!joinState)
    }
    
  } //invalid 검사
  
  const emailOnclick = async () => {
    console.log(email)
    await axios.post(`http://localhost:8080/api/auth/signup/${email}`)
    .then(setEmailSendModal(!emailSendModal))
    .catch(console.log('email 값이 전송되지 않았습니다.'))
  } //email 인증번호 발송 api

  const emailConfirmOnclick = async () => {
    console.log(emailCode);
    await axios.get(`http://localhost:8080/api/auth/signup/${email}/${emailCode}`)
    .then((response) => {
      if(response === emailCode){
        setEmailCodeModal(!emailCodeModal);
      }
    })
  }

  const checkBoxOnclick = () => {
    setCheck(!check);
  }


  const getEmailValue = (e) => {
   setEmail(e.target.value);
  }

  const confirmEmailValue = (e) => {
    setEmailCode(e.target.value)
  }
 
    return (
      <Wrapper joinState={joinState}>
        {
          joinState ? 
          <JoinCompleteBack>
            <JoinCompletBox>
              <JoinBox>회원가입이 완료되었습니다!</JoinBox>
              <Link to='/login'>
                <JoinButton2>로그인</JoinButton2>
              </Link>
            </JoinCompletBox> 
          </JoinCompleteBack>
          : null
        }
        <LayOut>
          <Title>회원가입</Title>
          <Intro>환영합니다! 링커에 가입해보세요.</Intro>
        
          <InputTitle style={{marginTop:'2.5rem'}}>아이디(email)</InputTitle> 
          <IdEmailWrapper>
            <Input onChange={getEmailValue} value={email ||""}/>
            <TopButton>인증번호 발송</TopButton>
          </IdEmailWrapper>
          {
            emailSendModal === true 
            ? <AlertSpan2>* 이메일이 발송되었습니다.</AlertSpan2>
            : null
          }
          
          <InputTitle>이메일 인증번호</InputTitle>
          <IdEmailWrapper>
            <Input onChange={confirmEmailValue} value={emailCode || ""}></Input>
            <TopButton onClick={emailConfirmOnclick}>확인</TopButton>
          </IdEmailWrapper>
          {

          }
        <FormStyled onSubmit={handleSubmit(onValid)}>
          <InputTitleWrapper>
            <InputTitle2>비밀번호</InputTitle2>
            <PwSpan>* 영문,숫자 조합 8~12자를 입력해 주세요!</PwSpan>
          </InputTitleWrapper>
          <PwInput type="password" {...register("pwd", 
          {
            required:true ,
            maxLength:{value:12,message:'*최대 비밀먼호는 12자 입니다.'} ,
            minLength:{value:8,message:'*최소 비밀번호는 8자 입니다.'}
          })}>
          </PwInput>
          <AlertSpan>{errors?.pwd?.message}</AlertSpan>
          
          <InputTitle>비밀번호 확인</InputTitle>
          <PwInput type="password" {...register("pwdConfirm",
            {
            required:true,
            maxLength:{value:12,message:'*최대 비밀먼호는 12자 입니다.'},
            minLength:{value:8,message:'*최소 비밀번호는 8자 입니다.'}
            })}> 
          </PwInput>
          <AlertSpan>{errors?.pwdConfirm?.message}</AlertSpan>
        
          <InputTitle>이름</InputTitle>
          <PwInput {...register("name", 
            {required:true})}>
          </PwInput>

          <InputTitle>생년월일</InputTitle>
          <BirthWrapper>
            <YearBox placeholder='년(YYYY)' {...register("year", 
              {
                required:true,
                maxLength:4
              })}>
            </YearBox>

            <MonthBox>
              <MonthOption>월</MonthOption>
              {
                month.map((a,i)=>{
                  return(
                    <MonthOption value={a} key={i} {...register("month")}>{a}</MonthOption>
                  )
                })
              }
            </MonthBox>
            <DayBox placeholder='일' {...register("day", 
              {
                required:true,
                maxLength:2
              })}>   
            </DayBox>
          </BirthWrapper>
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
            <CheckBox type="checkbox" onClick={checkBoxOnclick}{...register("checkbox1",
              {
                require:true,
                
              })}
            />
          </ConfrimWrapper>
        
          <Title2>개인정보보호정책</Title2>
          <TextBox>
            <h3>여러분을 환영합니다</h3>
            <p>{rule}</p>
          </TextBox>
          <ConfrimWrapper>
            <Title3>동의합니다</Title3>
            <CheckBox type="checkbox" {...register("checkbox2",
              {
                require:true
              })}
            />
          </ConfrimWrapper>
          <AlertSpan>{errors?.checkbox1?.message}</AlertSpan>
          <AlertSpan>{errors?.checkbox2?.message}</AlertSpan>
          
        
          <JoinButton>가입하기</JoinButton>
        </FormStyled>
        </LayOut>
      </Wrapper>   
    );
};

export default Join;

// {
//   checkModal === true 
//   ?<AlertSpan>* 링커 이용약관과 개인정보 보호정책에 모두 동의하여 주세요.</AlertSpan>
//   :null
// }

