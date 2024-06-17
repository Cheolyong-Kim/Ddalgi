import * as yup from "yup";

const isEmptyName = (value: string): undefined | string =>
  value === "" ? undefined : value;

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 알맞지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 최소 8자리 이상으로 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리까지 입력할 수 있습니다.")
    .required(),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "비밀번호를 다시 확인해주세요.")
    .required("비밀번호를 입력해주세요."),
  name: yup.string().transform(isEmptyName).default("ㅇㅇ"),
});
