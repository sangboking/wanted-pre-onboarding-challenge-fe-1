import * as styled from './JoinOut.style';
import LinkrLogoNavy from '../../SvgIcons/LinkrLogoNavy';

export default function JoinOut() {
  return (
    <styled.Wrapper>
      <styled.LayOut>
        <styled.LogoWrapper>
          <LinkrLogoNavy/>
        </styled.LogoWrapper>

        <styled.Title>회원탈퇴</styled.Title>

        <styled.Intro>링커 회원탈퇴가 완료되었습니다.<br/>그동안 링커를 이용해주셔서 감사합니다.</styled.Intro>

        <styled.Button>확인</styled.Button>
      </styled.LayOut>
    </styled.Wrapper>
  )
}
