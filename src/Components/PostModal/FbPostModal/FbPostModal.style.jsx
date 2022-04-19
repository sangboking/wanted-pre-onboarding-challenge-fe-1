import styled from 'styled-components';

export const LeftPostBox = styled.div`
  width:27.5rem;
  height: 52rem;
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
  cursor: pointer;
`;

export const PostContent = styled.div`
  width:25.5rem;
  height:70%;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  background-color: #fff;
  margin-top:1rem;
  padding:1rem;
  position: relative;
`;

export const CautionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:1.4rem;
`;

export const UserWrapper = styled.div`
  display:flex ;
  margin-bottom:1.5rem ;
  align-items: center;
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
  white-space: pre-line;
`;

export const ContentBox = styled.div`
  width:100%;
  height:25.375rem;
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

export const PreviewImgWrapper = styled.div`
  width:25.5rem;
  height:18rem;
  display: flex;
  flex-wrap: wrap;
  gap:5px;
  position: absolute;
  bottom:4rem;
`;

export const PreviewImg = styled.img`
  background-image: url(${props => props.img});
  background-size:cover;
  background-repeat: no-repeat;
  flex: 1 1 40%;
`;

export const Line = styled.div`
  width:25.2rem;
  height:.3px;
  background-color: #eaeaea;
  position: absolute;
  bottom: 3rem;
`;

export const ContentBottomWrapper = styled.div`
  display: flex;
`;

export const ContentIconWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom:1rem;
  left:2rem;
`;

export const ContentIconName = styled.h1`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #676767;
  margin-left:0.616rem;
  margin-right: 4.8rem;
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