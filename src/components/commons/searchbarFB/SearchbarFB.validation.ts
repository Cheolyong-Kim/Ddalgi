import * as yup from "yup";

export const schema = yup.object({
  searchWord: yup.string().default(""),
  searchDate: yup.string().default(""),
});
