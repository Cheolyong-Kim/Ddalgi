import {
  Header,
  HeaderButton,
  ContentsWrap,
  HeaderButtonWrap,
  Logo,
} from "./LayoutHeader.styles";
import type { ILayoutHeaderUIProps } from "./LayoutHeader.types";

const LayoutHeaderUI = (props: ILayoutHeaderUIProps): JSX.Element => {
  return (
    <Header>
      <ContentsWrap>
        <Logo onClick={props.onClickLogo}>
          <img src="/header/logo.png" />
        </Logo>
        <HeaderButtonWrap>
          <HeaderButton isJoin={false}>로그인</HeaderButton>
          <HeaderButton isJoin={true}>회원가입</HeaderButton>
        </HeaderButtonWrap>
      </ContentsWrap>
    </Header>
  );
};

export default LayoutHeaderUI;
