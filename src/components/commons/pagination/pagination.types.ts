import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IPaginationProps {
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPaginationUIProps {
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  activatedPage: number;
  lastPage: number;
}

export interface IPaginationButtonProps {
  isLeft: boolean;
}

export interface IPaginationSpanProps {
  isActive: boolean;
}
