import { useForm } from "react-hook-form";
import MyPageHeader from "../header";
import * as MP from "./MyProfile.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./MyProfile.validation";
import { useMutationResetUserPassword } from "../../../../commons/hooks/useMutation";
import { useRouter } from "next/router";

interface IResetPasswordData {
  oldPassword: string;
  newPassword: string;
}

const MyProfile = (): JSX.Element => {
  const router = useRouter();
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [resetUserPassword] = useMutationResetUserPassword();

  const onClickSubmit = async (data: IResetPasswordData): Promise<void> => {
    try {
      await resetUserPassword({
        variables: {
          password: String(data.newPassword),
        },
      });

      alert("비밀번호가 변경되었습니다");
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MP.MainWrap>
      <MyPageHeader isMyProfile={true} />
      <MP.InputForm onSubmit={handleSubmit(onClickSubmit)}>
        <MP.InputTitle>비밀번호 변경</MP.InputTitle>
        <MP.InputWrap>
          <MP.InputBox>
            <MP.InputLabel>현재 비밀번호</MP.InputLabel>
            <MP.Input
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              {...register("oldPassword")}
            />
          </MP.InputBox>
          <MP.ErrorMessage>
            {formState.errors.oldPassword?.message}
          </MP.ErrorMessage>
        </MP.InputWrap>
        <MP.InputWrap>
          <MP.InputBox>
            <MP.InputLabel>새 비밀번호</MP.InputLabel>
            <MP.Input
              type="password"
              placeholder="새 비밀번호를 입력해주세요."
              {...register("newPassword")}
            />
          </MP.InputBox>
          <MP.ErrorMessage>
            {formState.errors.newPassword?.message}
          </MP.ErrorMessage>
        </MP.InputWrap>
        <MP.InputWrap>
          <MP.InputBox>
            <MP.InputLabel>새 비밀번호 확인</MP.InputLabel>
            <MP.Input
              type="password"
              placeholder="새 비밀번호를 확인해주세요."
              {...register("newPasswordCheck")}
            />
          </MP.InputBox>
          <MP.ErrorMessage>
            {formState.errors.newPasswordCheck?.message}
          </MP.ErrorMessage>
        </MP.InputWrap>
        <MP.SubmitButton type="submit">비밀번호 변경</MP.SubmitButton>
      </MP.InputForm>
    </MP.MainWrap>
  );
};

export default MyProfile;
