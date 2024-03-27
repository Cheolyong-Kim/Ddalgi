import type { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  fetchMore: any;
}
