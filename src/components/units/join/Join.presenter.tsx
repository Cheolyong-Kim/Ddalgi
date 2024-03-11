import * as J from "./Join.styles";
import type { IJoinUIProps } from "./Join.types";

const JoinUI = (props: IJoinUIProps): JSX.Element => {
  return (
    <J.MainWarp>
      <J.JoinTitle>회원가입</J.JoinTitle>
      <J.InputWrap>
        <J.JoinInput
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={props.onChangeEmail}
        />
        <J.JoinInputError>{props.emailError}</J.JoinInputError>
        <J.JoinInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={props.onChangePassword}
        />
        <J.JoinInputError>{props.passwordError}</J.JoinInputError>
        <J.JoinInput
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          onChange={props.onChangePasswordCheck}
        />
        <J.JoinInputError>{props.passwordCheckError}</J.JoinInputError>
        <J.JoinInput
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={props.onChangeName}
        />
      </J.InputWrap>
      <J.ButtonWrap>
        <J.JoinButton onClick={props.onClickJoinButton}>회원가입</J.JoinButton>
      </J.ButtonWrap>
    </J.MainWarp>
  );
};

export default JoinUI;
