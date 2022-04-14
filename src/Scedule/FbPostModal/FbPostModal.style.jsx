import styled from 'styled-components';

export const ModalBack = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  left:0;top:0;
  background:rgba(0,0,0,0.6);
  display:block;
  z-index: 10;
`;

export const PostBox = styled.div`
  position:absolute;
  top:0;left:0;
  right:0;bottom:0;
  margin:auto;
  width:56.125rem;
  height:54rem;
  background-color: #fff;
  border-radius: 60px;
  display: flex;
  padding-left:1.625rem;
  padding-right:1.625rem;
  /* box-shadow : rgba(0,0,0,0.5) 0 0 0 100vw; */
  z-index : 15;
  overflow: auto;

  @media screen and (max-width:1440px) {
   height:58rem;
  }
`;

export const LeftPostBox = styled.div`
  width:27.5rem;
  height: 85%;
  /* padding:1rem ; */
  margin-top:3rem;
  margin-right:1.625rem;
`;

export const PostBoxHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FaceBookLogo = styled.div`
  
`;

export const SnsIconWrapper = styled.div`
  display: flex;
  align-items:center ;
  justify-content:center ;
`;

export const SnsIcon = styled.div`
  margin-right:1.25rem;
`;

export const SnsBigIcon = styled.img`
  width:30px;
  height:30px;
  margin-right:2rem;
`;

export const PostContent = styled.div`
  width:25.5rem;
  height:70%;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  margin-top:1.6rem;
  padding:1rem;
`;

export const CautionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top:1.4rem;
`;

export const CautionIntro = styled.h1`
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-left:.3rem;
`;

export const UserWrapper = styled.div`
  display:flex ;
  margin-bottom:1.5rem ;
`;

export const Circle = styled.div`
  width:3.125rem;
  height:3.125rem;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  border: solid 0.5px #fff;;
  margin-right: .5rem;
`;

export const UserName = styled.h1`
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
  color: #333;
  margin-top:.2rem;
`;

export const PostTitle = styled.h1`
  font-size: 0.875rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.26px;
  text-align: left;
  color: #191919;
  margin-bottom:1.5rem;
  margin-left:.8rem;
`;

export const ContentBox = styled.div`
  width:100%;
  height:65%;
  background-color: #f2f2f2;
  display:flex ;
  align-items:center ;
  justify-content:center ;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.26px;
  text-align: center;
  color: #666;
`;

export const VerticalLine = styled.div`
  width:.3px;
  height:90%;
  background-color:#eaeaea;
  margin-top:3rem;
  margin-right:1.625rem;
`;

export const RightPostBox = styled.div`
  width:25.075rem;
  height:85%;
  margin-top:2.875rem;
`;

export const TstorageWrapper = styled.div`
  display:flex;
  align-items: center;
  
`;

export const TstorageIntro = styled.h1`
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333;
`;

export const TextAreaWrapper = styled.div`
  width:23.875rem;
  border-radius: 5px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  height:25%;
  padding:0.813rem 0.75rem 0 0.75rem;
  margin-top:.75rem;
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width:22.875rem;
  height:65%;
  border: solid 1px #eaeaea;
  outline-color: #eaeaea; //text-area 포커스시 색깔
  background-color: #fff;
  resize: none;
  padding:.5rem .5rem 0 .5rem;
  &::placeholder{
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #191919;
  }
`;

export const TextIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:1.125rem;
`;

export const LocationIconWrapper = styled.div`
  display: flex;;
  margin-left: .4rem;
`;

export const SmileIconWrapper = styled.div`
  margin-right:.4rem;
`;

export const ImgTitle = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #191919;
  margin-top:1.5rem;
  margin-bottom:.875rem;
  margin-left:.3rem;
`;

export const FileWrapper = styled.div`
  width:25.375rem;
  height:10rem;
  border-radius:5px ;
  border: solid 0.3px #eaeaea;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FileTitle = styled.h1`
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-align: center;
  color: #191919;
  margin-top:3.653rem;
  margin-bottom:0.75rem;
`;

export const FileButton = styled.button`
  width: 6.375rem;
  height: 1.875rem;
  border-radius: 15px;
  background-color: #007aff;
  border:1px solid #007aff;
  font-size: 0.75rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

export const Line = styled.div`
  width:25.375rem;
  height:.3px;
  background-color:#eaeaea;
  margin-top:2.5rem;
`;

export const UploadTitle = styled.h1`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: left;
  color: #191919;
  margin-top:2.5rem;
  margin-left:.3rem;
`;

export const RadioButtonWrapper = styled.div`
  margin-top:1.25rem;
  display: flex;
  align-items: center;
`;

export const RadioButton = styled.input`

`;

export const RadioButtonIntro = styled.label`
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #191919;
  margin-right: .875rem;
`;

export const ButtonWrapper = styled.div`
  width:100%;
  display: flex;
  margin-top:2rem;
  justify-content: center;
`;

export const CancelButton = styled.button`
  width: 12.375rem;
  height: 2.5rem;
  border-radius: 15px;
  border: solid 0.3px #999;
  background-color:#fff;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #191919;
  margin-right:1.5rem;
  cursor: pointer;
  &:hover{
    background-color: #112553;
    border:1px solid #112553;
    color:#fff;
    transition:.2s;
  }
  `;

export const PostButton2 = styled.button`
  width: 12.375rem;
  height: 2.5rem;
  border-radius: 15px;
  background-color: #112553;
  border:1px solid #112553;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  cursor: pointer;
`;