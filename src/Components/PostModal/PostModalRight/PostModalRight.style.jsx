import styled from 'styled-components';

export const RightPostBox = styled.div`
  width:25.075rem;
  height:85%;
  margin-top:2.875rem;
`;

export const PostBoxHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TstorageWrapper = styled.div`
  display:flex;
  align-items: center;
`;

export const UserProfileWrapper = styled.div`
  display: flex;
`;

export const UserProfileImage = styled.div`
  width:2.25rem;
  height:2.25rem;
  border-radius: 15px;
  border:1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 2.125rem;
`;

export const UserProfileSns = styled.div`
  position: absolute;
  right:-.5rem;
  top:1rem;
  z-index: 10;
`;

export const DotIconWrapper = styled.div`
  cursor: pointer;
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
  margin-top:1rem;
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

export const FileLabel = styled.label`
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FileUpload = styled.input`
  display: none;
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