import { useForm } from "react-hook-form";
import * as L from "./Login.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Login.validation";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useMutationLoginUser } from "../../../commons/hooks/useMutation";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import type { ILoginData } from "./Login.types";

const Login = (): JSX.Element => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { onClickMoveToPage } = useMoveToPage();
  const [loginUser] = useMutationLoginUser();

  const onClickSubmit = async (data: ILoginData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken ?? "");
      localStorage.setItem("accessToken", accessToken ?? "");
      onClickMoveToPage("/boards")();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <L.MainForm onSubmit={handleSubmit(onClickSubmit)}>
      <L.Title>로그인</L.Title>
      <L.InputWrap>
        <L.Input
          type="email"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <L.ErrorBox>{formState.errors.email?.message}</L.ErrorBox>
        <L.Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <L.ErrorBox>{formState.errors.password?.message}</L.ErrorBox>
      </L.InputWrap>
      <L.ButtonWrap>
        <L.Button
          type="button"
          isLoginBtn={false}
          onClick={() => {
            onClickMoveToPage("/join")();
          }}
        >
          회원가입
        </L.Button>
        <L.Button type="submit" isLoginBtn={true}>
          로그인
        </L.Button>
      </L.ButtonWrap>
    </L.MainForm>
  );
};

export default Login;
