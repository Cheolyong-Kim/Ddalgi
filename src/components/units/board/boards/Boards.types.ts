import type { ChangeEvent, MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardsProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickCreateBoard: () => void;
  onClickMoveDetail: (event: MouseEvent<HTMLAnchorElement>) => void;
  onChangeSearchWordInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSearchDateInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearchButton: () => void;
  refetch: any;
  searchWord: string;
  isSearchWord: boolean;
  lastPage: number;
}

export interface ISearchInputProps {
  search?: string;
  startDate?: string;
  endDate?: string;
}
