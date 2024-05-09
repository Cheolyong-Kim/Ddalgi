import type { IQuery } from "../../../../commons/types/generated/types";

export interface CommentListProps {
  data: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  fetchMore: any;
}
