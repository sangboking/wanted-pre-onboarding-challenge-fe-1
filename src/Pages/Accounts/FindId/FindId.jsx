import * as styled from './FindId.style';
import { useForm } from 'react-hook-form';
import FindIdModal from '../../../Components/FindIdModal/FindIdModal';

export default function FindId() {

  const { handleSubmit, formState, register } = useForm({
    mode:'onChange'
  });

  return (
      <styled.Wrapper>
        <FindIdModal />

        <styled.FormStyle onSubmit={handleSubmit}>
          <styled.LayOut>
            <styled.Title>아이디 찾기</styled.Title>
            
            <styled.Intro>아이디는 가입시 입력하신 정보를 통해 찾을 수 있습니다.</styled.Intro>
            
            <styled.InputLabel>이름</styled.InputLabel>
            
            <styled.NameInputBox {...register('name', {required:true,minLength:2})}></styled.NameInputBox>

            <styled.InputLabel>생년월일</styled.InputLabel>

            <styled.BirthWrapper>
              <styled.YearInputBox placeholder='년(YYYY)'
                {
                  ...register('year',{required:true,minLength:4})
                }>
              </styled.YearInputBox>
              <styled.MonthInputBox placeholder='월(mm)'
                {
                  ...register('month',{required:true,minLength:2})
                }>
              </styled.MonthInputBox>
              <styled.DayInputBox placeholder='일(dd)'
                {
                  ...register('day',{required:true,minLength:2})
                }>
              </styled.DayInputBox>
            </styled.BirthWrapper>
            
            <styled.FindIdButton formState={formState.isValid} disabled={!formState.isValid}>아이디 찾기</styled.FindIdButton>
           
          </styled.LayOut>
        </styled.FormStyle>
      </styled.Wrapper>
    
  )
}

