import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 125%;
  background-color: #f5f6f8;
  padding-top:6rem;
`;

export const LayOut = styled.div`
  width: 30.031rem;
  margin:0 auto;
  position: relative;
  background-color: #f5f6f8;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
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

export const Intro = styled.h2`
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

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.313rem;
`;

export const InputTitle = styled.h1`
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

export const IdEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  width:105%;
`;

export const Input = styled.input`
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

export const TopButton = styled.button`
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

export const InputTitleWrapper = styled.div`
  display:flex ;
  align-items: center;
  margin-top: 1.063rem;
  justify-content: space-between;
`;

export const InputTitle2 = styled.h1`
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

export const PwSpan = styled.span`
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

export const PwInput = styled.input`
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

export const Line = styled.div`
  width:30rem;
  height: 0.031rem;
  margin-top:1.25rem;
  margin-bottom:1.375rem;
  margin-left:1rem;
  background-color: #eaeaea;
`;

export const BirthWrapper = styled.div`
  margin-top:.5rem;
  display: flex;
  width:110%;
`;

export const YearBox = styled.input`
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

export const MonthBox = styled.input`
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

export const DayBox = styled.input`
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


export const Title2 = styled.h2`
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

export const TextBox = styled.div`
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
  padding:1rem 0.438rem 1.168rem 1rem;
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

export const ConfrimWrapper = styled.div`
  display:flex;
  align-items: center;
  margin-top:1.5rem;
  text-align:right;
  margin-bottom:1.5rem;
`;

export const Title3 = styled.h2`
  position:absolute;
  right:0;
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

export const CheckBox = styled.input`
  background-color: #fff;
  border-radius: 15px;
  position:absolute;
  right:-1.7rem;
  &:focus{
    outline: none;
  }
`;

export const JoinButton = styled.button`
  width:32rem;
  height:3.125rem;
  background-color: ${props => props.formState ? props.theme.navyColor :'#b8b8b8'};
  border: 1px solid ${props => props.formState ? props.theme.navyColor :'#b8b8b8'};
  color: rgba(255, 255, 255, 0.9);
  border-radius: .8rem;
  margin-top:2rem;
  margin-bottom:4rem;
  font-weight: 500;
  cursor:pointer;
`;

export const TextWrapper = styled.div`
`;

export const FormStyled = styled.form`

`;

export const FormStyled2 = styled.form`

`;

export const AlertSpan = styled.h1`
  font-size: .8rem;
  color:red;
  margin-left: 2.563rem;
`;

export const AlertSpan2 = styled.h1`
  font-size:.8rem;
  color:green;
  margin-left: 1rem;
`;