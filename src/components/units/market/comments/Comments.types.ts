import type {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../commons/types/generated/types";

export interface CommentsBtnProps {
  img_src: string;
}

export interface CommentsProps {
  data: IUseditemQuestion | IUseditemQuestionAnswer;
  isQuestionAnswer?: boolean;
  useditemQuestionId?: string;
}
