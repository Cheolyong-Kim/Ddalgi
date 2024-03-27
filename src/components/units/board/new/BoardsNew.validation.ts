import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요.").default("ㅇㅇ"),
  password: yup.string().required("패스워드를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  youtubeUrl: yup.string(),
});
