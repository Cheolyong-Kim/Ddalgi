import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IBoardsUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickCreateBoard: () => void;
  onClickMoveDetail: (event: MouseEvent<HTMLAnchorElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  setKeyword: Dispatch<SetStateAction<string>>;
  setIsSearchWord: Dispatch<SetStateAction<boolean>>;
  keyword: string;
  isSearchWord: boolean;
  lastPage: number;
}
