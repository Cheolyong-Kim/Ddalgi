import { useForm } from "react-hook-form";
import * as J from "./Join.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Join.validation";
import { useMutationCreateUser } from "../../../commons/hooks/useMutation";
import type { IJoinData } from "./Join.types";
import { useRouter } from "next/router";

const Join = (): JSX.Element => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [createUser] = useMutationCreateUser();

  const router = useRouter();

  const onClickJoin = async (data: IJoinData): Promise<void> => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
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
    <J.MainForm onSubmit={handleSubmit(onClickJoin)}>
      <J.Title>회원가입</J.Title>
      <J.InputWrap>
        <J.Input
          type="email"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <J.ErrorBox>{formState.errors.email?.message}</J.ErrorBox>
        <J.Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <J.ErrorBox>{formState.errors.password?.message}</J.ErrorBox>
        <J.Input
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          {...register("passwordCheck")}
        />
        <J.ErrorBox>{formState.errors.passwordCheck?.message}</J.ErrorBox>
        <J.Input
          type="text"
          placeholder="닉네임을 입력해주세요"
          {...register("name")}
        />
      </J.InputWrap>
      <J.ButtonWrap>
        <J.Button type="submit">회원가입</J.Button>
      </J.ButtonWrap>
    </J.MainForm>
  );
};

export default Join;
