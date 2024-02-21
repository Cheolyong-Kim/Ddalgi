import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface ISearchInputProps {
  search?: string;
  startDate?: string;
  endDate?: string;
}

export interface ISearchBarProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  setKeyword: Dispatch<SetStateAction<string>>;
  setIsSearchWord: Dispatch<SetStateAction<boolean>>;
}

export interface ISearchBarUIProps {
  onChangeSearchWordInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSearchDateInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearchButton: () => void;
}
