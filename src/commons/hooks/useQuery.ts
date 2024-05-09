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
  FETCH_USEDITEM,
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_BEST,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGEDIN,
} from "../queries";
import type {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
  IQueryFetchUseditemQuestionAnswersArgs,
  IQueryFetchUseditemQuestionsArgs,
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

export const useQueryFetchUsedItemOfTheBest = (): QueryResult<
  Pick<IQuery, "fetchUseditemsOfTheBest">,
  OperationVariables
> => {
  const result =
    useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(FETCH_USEDITEMS_BEST);

  return result;
};

export const useQueryFetchUsedItems = (
  isSoldout: boolean,
): QueryResult<Pick<IQuery, "fetchUseditems">, OperationVariables> => {
  const result = useQuery<Pick<IQuery, "fetchUseditems">>(FETCH_USEDITEMS, {
    variables: {
      isSoldout,
    },
  });

  return result;
};

export const useQueryFetchUsedItem = (
  useditemId: string,
): QueryResult<Pick<IQuery, "fetchUseditem">, OperationVariables> => {
  const result = useQuery<Pick<IQuery, "fetchUseditem">>(FETCH_USEDITEM, {
    variables: {
      useditemId,
    },
  });

  return result;
};

export const useQueryFetchUsedItemQuestionAnswers = (
  useditemQuestionId: string,
): QueryResult<
  Pick<IQuery, "fetchUseditemQuestionAnswers">,
  IQueryFetchUseditemQuestionAnswersArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId,
    },
  });

  return result;
};

export const useQueryFetchUsedItemQuestions = (
  useditemId: string,
): QueryResult<
  Pick<IQuery, "fetchUseditemQuestions">,
  IQueryFetchUseditemQuestionsArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId,
    },
  });

  return result;
};
