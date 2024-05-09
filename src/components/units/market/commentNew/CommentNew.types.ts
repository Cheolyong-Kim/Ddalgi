import type { Dispatch, SetStateAction } from "react";
import type {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";

export interface CommentNewData {
  contents: string;
}

export interface CommentProps {
  id?: string;
  useditemQuestionId?: string;
  isEdit?: boolean;
  isAnswer?: boolean;
  isQuestionAnswer?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  setIsAnswer?: Dispatch<SetStateAction<boolean>>;
  data?: IUseditemQuestion | IUseditemQuestionAnswer;
}
