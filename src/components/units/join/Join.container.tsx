import { type ChangeEvent, useState } from "react";
import JoinUI from "./Join.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../../commons/queries";
import type {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { useRouter } from "next/router";

const Join = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("ㅇㅇ");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const router = useRouter();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onChangePasswordCheck = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setPasswordCheck(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const onClickJoinButton = async (): Promise<void> => {
    if (!email || !email.includes("@")) {
      setEmailError("이메일을 입력해주세요.");
    } else {
      setEmailError("");
    }

    if (email.split("@").length - 1 >= 2) {
      setEmailError("정확한 이메일을 입력해주세요.");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return;
    } else {
      setPasswordError("");
    }

    if (password !== passwordCheck) {
      setPasswordCheckError("비밀번호를 다시 확인해주세요");
      return;
    } else {
      setPasswordCheckError("");
    }

    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });

      alert("회원가입이 완료되었습니다.");
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <JoinUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePasswordCheck={onChangePasswordCheck}
      onChangeName={onChangeName}
      onClickJoinButton={onClickJoinButton}
      emailError={emailError}
      passwordError={passwordError}
      passwordCheckError={passwordCheckError}
    />
  );
};

export default Join;
