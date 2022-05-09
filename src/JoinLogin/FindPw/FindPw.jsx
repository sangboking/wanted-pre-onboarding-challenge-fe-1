import React from 'react';
import * as styled from './FindPw.style';
import { useForm } from 'react-hook-form';
import FindPwModal from '../../Components/FindPwModal/FindPwModal';


export default function FindPw() {
  const { handleSubmit, register, formState } = useForm({
    mode:'onChange'
  });

  return (
      <styled.Wrapper>
        <FindPwModal />

        <styled.FormStyle onSubmit={handleSubmit}>
          <styled.LayOut>
            <styled.Title>비밀번호 찾기</styled.Title>

            <styled.Intro>가입하신 이메일 주소로 비밀번호 재설정 링크가 전송됩니다.</styled.Intro>

            <styled.Name>아이디(E-mail)</styled.Name>

            <styled.InputBox 
              autoComplete='off'
              placeholder='아이디(이메일)을 입력해주세요.' 
              type='text'
              {...register('email',{required:true})}
            >

            </styled.InputBox>

            <styled.FindPwButton formState={formState.isValid} disabled={!formState.isValid}>비밀번호 찾기</styled.FindPwButton>
            </styled.LayOut>
        </styled.FormStyle>
      </styled.Wrapper>
  )
}
