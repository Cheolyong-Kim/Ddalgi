import type { MouseEvent } from "react";
import type { IQuery } from "../../../commons/types/generated/types";

export interface IBoardsProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickCreateBoard: () => void;
  onClickMoveDetail: (event: MouseEvent<HTMLAnchorElement>) => void;
  refetch: any;
  lastPage: number;
}
