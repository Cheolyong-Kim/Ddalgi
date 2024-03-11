import * as L from "./Login.styles";
import type { ILoginUIProps } from "./Login.types";

const LoginUI = (props: ILoginUIProps): JSX.Element => {
  return (
    <L.MainWarp>
      <L.LoginTitle>로그인</L.LoginTitle>
      <L.InputWrap>
        <L.LoginInput
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={props.onChangeEmail}
        />
        <L.ErrorSpan>{props.emailError}</L.ErrorSpan>
        <L.LoginInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={props.onChangePassword}
        />
        <L.ErrorSpan>{props.passwordError}</L.ErrorSpan>
      </L.InputWrap>
      <L.ButtonWrap>
        <L.LoginButton isLoginBtn={false} onClick={props.onClickJoinButton}>
          회원가입
        </L.LoginButton>
        <L.LoginButton isLoginBtn={true} onClick={props.onClickLoginButton}>
          로그인
        </L.LoginButton>
      </L.ButtonWrap>
    </L.MainWarp>
  );
};

export default LoginUI;
