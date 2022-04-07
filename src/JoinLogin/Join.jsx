import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Wrapper = styled.div`
  width: 100%;
  height: 125%;
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
  width:33%;
  height: 2.9rem;
  &:focus{
    outline: none;
  }
  margin-right:1rem;
`;

const MonthBox = styled.input`
  font-weight: 500;
  font-size:0.8rem;
  background-color: #fff;
  border:1px solid #fff;
  color: #676767;
  border-radius: 15px;
  padding-left:1.375rem;
  margin-right:0.938rem;
  width:33%;
  height: 3.3rem;
  &:focus{
    outline: none;
  }
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
  width:33%;
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
  width:32rem;
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
  height:145vh;
  position:absolute;
  left:0;top:0;
  background:rgba(0,0,0,0.6);
  display:block;
  z-index: 10;
  margin: 0 auto;
`;

const JoinCompletBox = styled.div`
  z-index:100;
  top:-30rem;left:0;
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

const FormStyled2 = styled.form`

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



export default function Join()  {
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
  const {register, handleSubmit, formState:{errors}, setError, getValues} = useForm();
  const [joinModal,setJoinModal] = useState(false);
  const [overlapModal, setOverlapModal] = useState(false);
  const [emailSendModal, setEmailSendModal] = useState(false);
  const [emailCodeModal, setEmailCodeModal] = useState(false);
  const [codeConfirmModal, setCodeConfirmModal] = useState(false);
  const [emailVerified, setEmailVerified] = useState();
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

   
  const onValid = (data) => {
    
    if(data.password !== data.confirmPassword){
      setError(
        "password",
        {message:"* 비밀번호가 일치하지 않습니다."},
        {shouldFocus:true}
      )
      setError(
        "confirmPassword",
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
      console.log(data);
  } //invalid 검사
}


  const emailSendOnclick = async () => {
    const email = getValues('email');
    if(regExp.test(email) === true ){
      await axios.get(`/api/auth/signup/${email}`)
      .then((response) => {
        console.log(response);
        setEmailSendModal(true);
      })
      .catch((error) => {
        console.log(error);
        setOverlapModal(true);
      })
    }
    else{
      console.log('정규식에 일치하지 않습니다.')
    }
  } 

  const emailConfirmOnclick = async () => {
    const email = getValues('email');
    const emailCode = getValues('emailCode');
    console.log(emailCode);
    await axios.get(`/api/auth/signup/${email}/${emailCode}`)
    .then((response) => {
      if(response.data.result === true){
        console.log(response);
        setEmailCodeModal(!emailCodeModal);
        setCodeConfirmModal(false);
        setEmailVerified(response.data.result);
      }
      else{
        setCodeConfirmModal(true);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const joinOnclick = async () => {
     const data = {
      userEmail : getValues('email'),
      password : getValues('password'),
      userName : getValues('username'),
      emailVerified :emailVerified,
      birthDay : `${getValues('year')}-${getValues('month')}-${getValues('day')}`
    }

    if(emailVerified === true){
      console.log(JSON.stringify(data));
      await axios.post(`/api/accounts`,JSON.stringify(data),{headers:{"Content-Type":`application/json`}})
      .then((response) => {
        console.log(response)
        setJoinModal(true);
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
  
    return (
      <Wrapper>
        {
          joinModal ? 
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
        {
          overlapModal ? 
          <JoinCompleteBack>
            <JoinCompletBox>
              <JoinBox>이미 가입된 계정입니다.</JoinBox>
              <JoinButton2 onClick={()=>{setOverlapModal(false)}}>확인</JoinButton2>
            </JoinCompletBox> 
          </JoinCompleteBack>
          : null
        }

        <LayOut>
          <Title>회원가입</Title>
          <Intro>환영합니다! 링커에 가입해보세요.</Intro>
        
        <FormStyled onSubmit={handleSubmit(onValid)}>
          <InputTitle style={{marginTop:'2.5rem'}}>아이디(email)</InputTitle> 
          <IdEmailWrapper>
            <Input {...register("email",
            {
              required:true,
              pattern:{value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i ,message:"* 유효하지 않은 이메일 입니다."}
            })} />
            <TopButton onClick={emailSendOnclick}>인증번호 발송</TopButton>
          </IdEmailWrapper>
          <AlertSpan style={{marginTop:'.5rem'}}>{errors?.email?.message}</AlertSpan>
          {
            emailSendModal === true 
            ? <AlertSpan2 style={{marginTop:'.5rem'}}>* 이메일이 발송되었습니다.</AlertSpan2>
            : null
          }
          
          <InputTitle>이메일 인증번호</InputTitle>
          <IdEmailWrapper>
            <Input {...register("emailCode",
            {
              required:true
            })}/>
            <TopButton onClick={emailConfirmOnclick}>확인</TopButton>
          </IdEmailWrapper>
          {
            emailCodeModal === true
            ? <AlertSpan2 style={{marginTop:'.5rem'}}>* 이메일 인증이 완료되었습니다.</AlertSpan2>
            : null
          }
          {
            codeConfirmModal === true
            ? <AlertSpan style={{marginTop:'.5rem'}}>* 이메일 인증이 실패하였습니다.</AlertSpan>
            : null
          }          
        
          <InputTitleWrapper>
            <InputTitle2>비밀번호</InputTitle2>
            <PwSpan>* 영문,숫자 조합 8~12자를 입력해 주세요!</PwSpan>
          </InputTitleWrapper>
          <PwInput type="password" {...register("password", 
          {
            required:true ,
            pattern:{value:/^[A-Za-z0-9]{6,12}$/,message:'* 영문, 숫자 조합 8~12자를 입력해주세요'},
            maxLength:{value:12,message:'*최대 비밀먼호는 12자 입니다.'} ,
            minLength:{value:8,message:'*최소 비밀번호는 8자 입니다.'}
          })}>
          </PwInput>
          <AlertSpan>{errors?.password?.message}</AlertSpan>
          
          <InputTitle>비밀번호 확인</InputTitle>
          <PwInput type="password" {...register("confirmPassword",
            {
            required:true,
            pattern:{value:/^[A-Za-z0-9]{6,12}$/,message:'* 영문, 숫자 조합 8~12자를 입력해주세요'},
            maxLength:{value:12,message:'*최대 비밀먼호는 12자 입니다.'},
            minLength:{value:8,message:'*최소 비밀번호는 8자 입니다.'}
            })}> 
          </PwInput>
          <AlertSpan>{errors?.confirmPassword?.message}</AlertSpan>
        
          <InputTitle>이름</InputTitle>
          <PwInput {...register("username", 
            {required:true})}>
          </PwInput>

          <InputTitle>생년월일</InputTitle>
          <BirthWrapper>
            <YearBox placeholder='년(YYYY)' {...register("year", 
              {
                required:true,
                minLength:4,
                maxLength:4
              })}>
            </YearBox>

            <MonthBox placeholder='월(mm)' {...register("month",
              {
                required:true,
                maxLength:2,
              })}>
            </MonthBox>
            <DayBox placeholder='일(dd)' {...register("day", 
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
            <CheckBox type="checkbox"{...register("checkbox1",
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
          
        
          <JoinButton onClick={joinOnclick}>가입하기</JoinButton>
        </FormStyled>
        </LayOut>
      </Wrapper>   
    );
};






//1.이메일 작성후 인증번호 발송 => 이메일 backend로 전송
//2.전송된 이메일 code값 backend에서 받아오기 => 이때 받아온 code가 사용자가 입력한 인증번호와 같을시 하단에 인증이 완료되었습니다 메세지 주기
//3.그후 밑 사용자 정보 모두 입력후 전체 정보가 기입되고 가입하기 누르면 backend로 사용자 정보 보내고 로그인하기 모달창 띄우기 => 회원가입 완료