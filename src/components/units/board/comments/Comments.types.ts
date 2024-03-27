import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentsData {
  password: string;
}

export interface ICommentsProps {
  data: IBoardComment;
}

export interface OtherCommentBtnProps {
  img_src: string;
}
