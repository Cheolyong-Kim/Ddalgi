import * as yup from "yup";

export const schema = yup.object({
  contents: yup.string().max(100).required(),
});
