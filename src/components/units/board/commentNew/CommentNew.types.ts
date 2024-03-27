import type { Dispatch, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentData {
  writer: string;
  password: string;
  contents: string;
}

export interface ICommentProps {
  id?: string;
  data?: IBoardComment;
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}
