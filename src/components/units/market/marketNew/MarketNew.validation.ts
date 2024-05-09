import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요."),
  remarks: yup.string().required("한줄평을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  price: yup.string().required("가격을 입력해주세요."),
  tags: yup.string().required("태그를 입력해주세요."),
  addressDetail: yup.string().default(""),
});
