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
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
  FETCH_USEDITEM,
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_BEST,
  FETCH_USEDITEMS_COUNT_I_PICKED,
  FETCH_USEDITEMS_COUNT_I_SOLD,
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USEDITEMS_I_SOLD,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGEDIN,
} from "../queries";
import type {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
  IQueryFetchPointTransactionsArgs,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfLoadingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
  IQueryFetchUseditemQuestionAnswersArgs,
  IQueryFetchUseditemQuestionsArgs,
  IQueryFetchUseditemsIPickedArgs,
  IQueryFetchUseditemsISoldArgs,
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

export const useQueryFetchUsedItemsISold = (): QueryResult<
  Pick<IQuery, "fetchUseditemsISold">,
  IQueryFetchUseditemsISoldArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USEDITEMS_I_SOLD);

  return result;
};

export const useQueryFetchUsedItemsIPicked = (): QueryResult<
  Pick<IQuery, "fetchUseditemsIPicked">,
  IQueryFetchUseditemsIPickedArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  return result;
};

export const useQueryFetchUsedItemsCountISold = (): QueryResult<
  Pick<IQuery, "fetchUseditemsCountISold">,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsCountISold">>(
    FETCH_USEDITEMS_COUNT_I_SOLD,
  );

  return result;
};

export const useQueryFetchUsedItemsCountIPicked = (): QueryResult<
  Pick<IQuery, "fetchUseditemsCountIPicked">,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(
    FETCH_USEDITEMS_COUNT_I_PICKED,
  );

  return result;
};

export const useQueryFetchPointTransactions = (): QueryResult<
  Pick<IQuery, "fetchPointTransactions">,
  IQueryFetchPointTransactionsArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS);

  return result;
};

export const useQueryFetchPointTransactionsOfBuying = (): QueryResult<
  Pick<IQuery, "fetchPointTransactionsOfBuying">,
  IQueryFetchPointTransactionsOfBuyingArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  return result;
};

export const useQueryFetchPointTransactionsOfSelling = (): QueryResult<
  Pick<IQuery, "fetchPointTransactionsOfSelling">,
  IQueryFetchPointTransactionsOfSellingArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfSelling">,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  return result;
};

export const useQueryFetchPointTransactionsOfLoading = (): QueryResult<
  Pick<IQuery, "fetchPointTransactionsOfLoading">,
  IQueryFetchPointTransactionsOfLoadingArgs
> => {
  const result = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfLoading">,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING);

  return result;
};

export const useQueryFetchPointTransactionsCountOfBuying = (): QueryResult<
  any,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchPointTransactionsCountOfBuying">>(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  );

  return result;
};

export const useQueryFetchPointTransactionsCountOfLoading = (): QueryResult<
  any,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchPointTransactionsCountOfLoading">>(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  );

  return result;
};

export const useQueryFetchPointTransactionsCountOfSelling = (): QueryResult<
  any,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchPointTransactionsCountOfSelling">>(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  );

  return result;
};
