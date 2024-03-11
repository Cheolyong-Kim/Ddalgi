import type { ChangeEvent } from "react";

export interface IJoinUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickJoinButton: () => Promise<void>;
  emailError: string;
  passwordError: string;
  passwordCheckError: string;
}
