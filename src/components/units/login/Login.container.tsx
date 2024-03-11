import { type ChangeEvent, useState } from "react";
import LoginUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../commons/queries";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const router = useRouter();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onClickJoinButton = (): void => {
    void router.push("/join");
  };

  const onClickLoginButton = async (): Promise<void> => {
    try {
      if (!email) {
        setEmailError("이메일을 입력해주세요.");
        return;
      } else {
        setEmailError("");
      }

      if (!password) {
        setPasswordError("패스워드를 입력해주세요.");
        return;
      } else {
        setPasswordError("");
      }

      const result = await loginUser({
        variables: { email, password },
      });

      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken ?? "");
      localStorage.setItem("accessToken", accessToken ?? "");
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickJoinButton={onClickJoinButton}
      onClickLoginButton={onClickLoginButton}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
};

export default Login;
