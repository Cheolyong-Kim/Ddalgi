import type { IQuery } from "../../../commons/types/generated/types";

export interface ICommentListParentProps {
  data?: Pick<IQuery, "fetchBoardComments">;
}
