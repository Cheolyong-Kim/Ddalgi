import * as yup from "yup";

export const schema = yup.object({
  oldPassword: yup.string().required("이전 비밀번호를 입력해주세요."),
  newPassword: yup
    .string()
    .min(8, "비밀번호는 8자리 이상이어야합니다.")
    .required("새 비밀번호를 입력해주세요."),
  newPasswordCheck: yup
    .string()
    .min(8, "새 비밀번호를 확인해주세요.")
    .oneOf([yup.ref("newPassword")], "새 비밀번호를 확인해주세요.")
    .required("새 비밀번호를 확인해주세요."),
});
