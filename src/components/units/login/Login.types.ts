import type { ChangeEvent } from "react";

export interface ILoginUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickJoinButton: () => void;
  onClickLoginButton: () => Promise<void>;
  emailError: string;
  passwordError: string;
}

export interface ILoginButtonProps {
  isLoginBtn: boolean;
}
