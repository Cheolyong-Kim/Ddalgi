import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required().default("ㅇㅇ"),
  password: yup.string().required(),
  contents: yup.string().max(100).required(),
});
