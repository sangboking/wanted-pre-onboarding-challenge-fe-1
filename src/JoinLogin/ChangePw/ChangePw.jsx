import React from 'react'
import * as styled from './ChangePw.style';
import { useForm } from 'react-hook-form';

export default function ChangePw() {
  const pwdRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
  const { handleSubmit, formState:{errors}, register, setError, formState } = useForm({
    mode:'onChange'
  });

  const onValid = (data) => {
    if(data.pwd !== data.pwdConfirm){
      setError(
        "pwdConfirm",
        {message:'비밀번호가 일치하지 않습니다.'},
        {shouldFocus:true}
      )
    }

  
  }

  return (
    <styled.FormStyle onSubmit={handleSubmit(onValid)}>
      <styled.Wrapper>
        <styled.Title>비밀번호 변경하기</styled.Title>
        
        <styled.Intro>새 비밀번호를 입력해주세요.</styled.Intro>
        
        <styled.ConfirmWrapper>
          <styled.Name>새 비밀번호</styled.Name>
          <styled.AlertSpan>{errors?.pwd?.message}</styled.AlertSpan>
        </styled.ConfirmWrapper>
        
        <styled.InputBox
          type='password'
          placeholder='*8~12자의 대/소문자,숫자,특수문자 중 3가지 이상 입력해 주세요.'
          {...register('pwd',
          {
            required:true,
            minLength:8,
            maxLength:12,
            pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/ , message:'8~12자, 최소 하나의 특수문자를 포함하여 주세요.'}})}>
        </styled.InputBox>
        
        <styled.ConfirmWrapper>
          <styled.Name>새 비밀번호 확인</styled.Name>
          <styled.AlertSpan>{errors?.pwdConfirm?.message}</styled.AlertSpan>
        </styled.ConfirmWrapper>
        
        <styled.InputBox
          type='password' 
          placeholder='비밀번호를 재입력하세요.'
          {...register('pwdConfirm',
          {
            required:true,
            minLength:8,
            maxLength:12
          })}>

        </styled.InputBox>
        
        <styled.Button formState={formState.isValid} disabled={!formState.isValid}>비밀번호 변경하기</styled.Button>
      </styled.Wrapper>
    </styled.FormStyle>
  )
}
