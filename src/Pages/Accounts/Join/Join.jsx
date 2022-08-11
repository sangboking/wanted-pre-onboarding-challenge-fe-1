import React, { useState } from 'react';
import * as styled from './Join.style';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import JoinCompletModal from '../../../Components/JoinModal/JoinCompletModal';
import JoinDuplicateModal from '../../../Components/JoinModal/JoinDuplicateModal';

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
  const {register, handleSubmit, formState:{errors}, setError, getValues, formState} = useForm({
    mode:"onChange"
  });
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
    if(data.checkbox1 === false){
      setError(
        "checkbox1",
        {message:"* 링커 이용약관과 개인정보 보호정책에 모두 동의하여 주세요."}
      )
    }
    if(data.checkbox2 === false){
      setError(
        "checkbox2",
        {message:"* 링커 이용약관과 개인정보 보호정책에 모두 동의하여 주세요."}
      )
    }
};

  const emailSend = async () => {
    const email = getValues('email');
    if(regExp.test(email) === true ){
      await axios.get(`/api/auth/signup/${email}`)
      .then((response) => {
        console.log(response);
        setEmailSendModal(true);
      })
      .catch((error) => {
        console.log(error);
        setOverlapModal(!overlapModal);
      })
    }
  }; 

  const emailConfirm = async () => {
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
  };

  const joinOnclick = async () => {
    const data = {
      userEmail : getValues('email'),
      password : getValues('password'),
      userName : getValues('username'),
      emailVerified :emailVerified,
      birthDay : `${getValues('year')}-${getValues('month')}-${getValues('day')}`
    }

    if(emailVerified && getValues('checkbox1') && getValues('checkbox2')){
      await axios.post(`/api/accounts`,JSON.stringify(data),{headers:{"Content-Type":`application/json`}})
      .then((response) => {
        setJoinModal(!joinModal);
      })
      .catch((error) => {
        console.log(error)
      })
    }
  };
  
    return (
      <styled.Wrapper>
        {
          joinModal &&
          <JoinCompletModal />
        }
        {
          overlapModal && 
          <JoinDuplicateModal />
        }

        <styled.LayOut>
          <styled.Title>회원가입</styled.Title>
          <styled.Intro>환영합니다! 링커에 가입해보세요.</styled.Intro>
        
        <styled.FormStyled onSubmit={handleSubmit(onValid)}>
          <styled.EmailWrapper>
            <styled.InputTitle>아이디(E-mail)</styled.InputTitle>
            <styled.AlertSpan>{errors?.email?.message}</styled.AlertSpan> 
          </styled.EmailWrapper>
          <styled.IdEmailWrapper>
            <styled.Input autoComplete='off'{...register("email",
            {
              required:true,
              pattern:{value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i ,message:"이메일 형식이 올바르지 않습니다."}
            })} />
            <styled.TopButton onClick={emailSend}>인증번호 발송</styled.TopButton>
          </styled.IdEmailWrapper>
          {
            emailSendModal === true 
            ? <styled.AlertSpan2 style={{marginTop:'.5rem'}}>* 이메일이 발송되었습니다.</styled.AlertSpan2>
            : null
          }
          
          <styled.InputTitle style={{marginTop:'1.063rem'}}>이메일 인증번호</styled.InputTitle>
          <styled.IdEmailWrapper>
            <styled.Input autoComplete='off' {...register("emailCode",
            {
              required:true
            })}/>
            <styled.TopButton onClick={emailConfirm}>확인</styled.TopButton>
          </styled.IdEmailWrapper>
          {
            emailCodeModal === true
            ? <styled.AlertSpan2 style={{marginTop:'.5rem'}}>* 이메일 인증이 완료되었습니다.</styled.AlertSpan2>
            : null
          }
          {
            codeConfirmModal === true
            ? <styled.AlertSpan style={{marginTop:'.5rem'}}>* 이메일 인증이 실패하였습니다.</styled.AlertSpan>
            : null
          }          
        
          <styled.InputTitleWrapper>
            <styled.InputTitle2>비밀번호</styled.InputTitle2>
            <styled.AlertSpan>{errors?.password?.message}</styled.AlertSpan>
          </styled.InputTitleWrapper>
          <styled.PwInput type="password" placeholder='영문,숫자 조합 8~12자를 입력해 주세요!' {...register("password", 
            {
              required:true ,
              pattern:{value:/^[A-Za-z0-9]{6,12}$/,message:'영문, 숫자 조합 8~12자를 입력해주세요'},
              maxLength:{value:12,message:'최대 비밀먼호는 12자 입니다.'} ,
              minLength:{value:8,message:'최소 비밀번호는 8자 입니다.'}
            })}>
          </styled.PwInput>
          
          <styled.InputTitleWrapper>
            <styled.InputTitle>비밀번호 확인</styled.InputTitle>
            <styled.AlertSpan>{errors?.confirmPassword?.message}</styled.AlertSpan>
          </styled.InputTitleWrapper>
          <styled.PwInput type="password" {...register("confirmPassword",
            {
              required:true,
              pattern:{value:/^[A-Za-z0-9]{6,12}$/,message:'영문, 숫자 조합 8~12자를 입력해주세요'},
              maxLength:{value:12,message:'최대 비밀먼호는 12자 입니다.'},
              minLength:{value:8,message:'최소 비밀번호는 8자 입니다.'}
            })}> 
          </styled.PwInput>
        
          <styled.InputTitleWrapper>
            <styled.InputTitle>이름</styled.InputTitle>
            <styled.AlertSpan>{errors?.username?.message}</styled.AlertSpan>
          </styled.InputTitleWrapper>
          <styled.PwInput autoComplete='off' {...register("username", 
            {
              required:true,
              minLength:{value:2, message:'두 글자 이상 입력해 주세요.'}
            })}>
          </styled.PwInput>

          <styled.InputTitle style={{marginTop:'1.063rem'}}>생년월일</styled.InputTitle>
          <styled.BirthWrapper>
            <styled.YearBox autoComplete='off' placeholder='년(YYYY)' {...register("year", 
              {
                required:true,
                minLength:4,
                maxLength:4
              })}>
            </styled.YearBox>

            <styled.MonthBox autoComplete='off' placeholder='월(mm)' {...register("month",
              {
                required:true,
                minLength:2,
                maxLength:2,
              })}>
            </styled.MonthBox>
            <styled.DayBox autoComplete='off' placeholder='일(dd)' {...register("day", 
              {
                required:true,
                minLength:2,
                maxLength:2
              })}>   
            </styled.DayBox>
          </styled.BirthWrapper>

          <styled.Line/>
          
          <styled.Title2>링커 이용약관</styled.Title2>
          <styled.TextBox readOnly>
            <styled.TextWrapper>
              <h3>여러분을 환영합니다</h3>
              <p>{rule}</p>
            </styled.TextWrapper>
          </styled.TextBox>
          <styled.ConfrimWrapper>
            <styled.Title3>동의합니다</styled.Title3>
            <styled.CheckBox type="checkbox"{...register("checkbox1",
              {
                require:true,
              })}
            />
          </styled.ConfrimWrapper>
        
          <styled.Title2>링커 개인정보보호정책</styled.Title2>
          <styled.TextBox>
            <h3>여러분을 환영합니다</h3>
            <p>{rule}</p>
          </styled.TextBox>
          <styled.ConfrimWrapper>
            <styled.Title3>동의합니다</styled.Title3>
            <styled.CheckBox type='checkbox' {...register("checkbox2",
              {
                require:true
              })}
            />
          </styled.ConfrimWrapper>
          <styled.AlertSpan>{errors?.checkbox1?.message}</styled.AlertSpan>
          <styled.AlertSpan>{errors?.checkbox2?.message}</styled.AlertSpan>
          
        
          <styled.JoinButton formState={formState.isValid} disabled={!formState.isValid} onClick={joinOnclick}>가입하기</styled.JoinButton>
        </styled.FormStyled>
        </styled.LayOut>
      </styled.Wrapper>   
    );
};
