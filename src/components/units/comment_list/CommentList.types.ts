import type { IQuery } from "../../../commons/types/generated/types";

export interface ICommentListParentProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  fetchMore: any;
}

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}
