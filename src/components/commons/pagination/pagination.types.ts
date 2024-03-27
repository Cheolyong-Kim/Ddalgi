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

export interface IPaginationButtonProps {
  isLeft: boolean;
}

export interface IPaginationSpanProps {
  isActive: boolean;
}
