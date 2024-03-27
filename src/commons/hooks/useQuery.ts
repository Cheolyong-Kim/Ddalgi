import {
  type OperationVariables,
  type QueryResult,
  useQuery,
} from "@apollo/client";
import {
  FETCH_BOARD,
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARD_COMMENT,
  FETCH_USER_LOGGEDIN,
} from "../queries";
import type {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from "../types/generated/types";

export const useQueryFetchBoards = (): QueryResult<
  Pick<IQuery, "fetchBoards">,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);

  return result;
};

export const useQueryFetchBoardsCount = (): QueryResult<
  Pick<IQuery, "fetchBoardsCount">,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  return result;
};

export const useQueryFetchBoard = (
  id: string,
): QueryResult<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs> => {
  const result = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: id,
      },
    },
  );

  return result;
};

export const useQueryFetchBoardComments = (
  id: string,
): QueryResult<
  Pick<IQuery, "fetchBoardComments">,
  IQueryFetchBoardCommentsArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: id,
    },
  });

  return result;
};

export const useQueryFetchUserLoggedIn = (): QueryResult<
  Pick<IQuery, "fetchUserLoggedIn">,
  OperationVariables
> => {
  const result =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  return result;
};
