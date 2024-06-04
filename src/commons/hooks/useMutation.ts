import {
  type OperationVariables,
  useMutation,
  type ApolloCache,
  type DefaultContext,
  type MutationTuple,
} from "@apollo/client";
import {
  CREATE_BOARD,
  CREATE_BOARD_COMMENT,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  CREATE_POINT_TRANSACTION_OF_LOADING,
  CREATE_USEDITEM,
  CREATE_USEDITEM_QUESTION,
  CREATE_USEDITEM_QUESTION_ANSWER,
  CREATE_USER,
  DELETE_BOARD,
  DELETE_BOARD_COMMENT,
  DELETE_USEDITEM,
  DELETE_USEDITEM_QUESTION,
  DELETE_USEDITEM_QUESTION_ANSWER,
  DISLIKE_BOARD,
  LIKE_BOARD,
  LOGIN_USER,
  LOGIN_USER_EXAMPLE,
  LOGOUT_USER,
  RESET_USER_PASSWORD,
  TOGGLE_USEDITEM_PICK,
  UPDATE_BOARD,
  UPDATE_BOARD_COMMENT,
  UPDATE_USEDITEM,
  UPDATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USER,
  UPLOADFILE,
} from "../queries";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationCreateBoardCommentArgs,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationCreatePointTransactionOfLoadingArgs,
  IMutationCreateUseditemArgs,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationCreateUseditemQuestionArgs,
  IMutationCreateUserArgs,
  IMutationDeleteBoardArgs,
  IMutationDeleteBoardCommentArgs,
  IMutationDeleteUseditemArgs,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IMutationDeleteUseditemQuestionArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IMutationLoginUserArgs,
  IMutationResetUserPasswordArgs,
  IMutationToggleUseditemPickArgs,
  IMutationUpdateBoardArgs,
  IMutationUpdateBoardCommentArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionArgs,
  IMutationUpdateUserArgs,
  IMutationUploadFileArgs,
} from "../types/generated/types";

export const useMutationCreateUser = (): MutationTuple<
  Pick<IMutation, "createUser">,
  IMutationCreateUserArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  return result;
};

export const useMutationCreateBoard = (): MutationTuple<
  Pick<IMutation, "createBoard">,
  IMutationCreateBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  return result;
};

export const useMutationUpdateBoard = (): MutationTuple<
  Pick<IMutation, "updateBoard">,
  IMutationUpdateBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  return result;
};

export const useMutationDeleteBoard = (): MutationTuple<
  Pick<IMutation, "deleteBoard">,
  IMutationDeleteBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  return result;
};

export const useMutationCreateBoardComment = (): MutationTuple<
  Pick<IMutation, "createBoardComment">,
  IMutationCreateBoardCommentArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  return result;
};

export const useMutationUpdateBoardComment = (): MutationTuple<
  Pick<IMutation, "updateBoardComment">,
  IMutationUpdateBoardCommentArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  return result;
};

export const useMutationDeleteComment = (): MutationTuple<
  Pick<IMutation, "deleteBoardComment">,
  IMutationDeleteBoardCommentArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  return result;
};

export const useMutationUploadFile = (): MutationTuple<
  Pick<IMutation, "uploadFile">,
  IMutationUploadFileArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  return result;
};

export const useMutationLikeBoard = (): MutationTuple<
  Pick<IMutation, "likeBoard">,
  IMutationLikeBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  return result;
};

export const useMutationDisLikeBoard = (): MutationTuple<
  Pick<IMutation, "dislikeBoard">,
  IMutationDislikeBoardArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  return result;
};

export const useMutationLoginUser = (): MutationTuple<
  Pick<IMutation, "loginUser">,
  IMutationLoginUserArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  return result;
};

export const useMutationCreateUseditem = (): MutationTuple<
  Pick<IMutation, "createUseditem">,
  IMutationCreateUseditemArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  return result;
};

export const useMutationDeleteUseditem = (): MutationTuple<
  Pick<IMutation, "deleteUseditem">,
  IMutationDeleteUseditemArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  return result;
};

export const useMutationUpdateUseditem = (): MutationTuple<
  any,
  OperationVariables,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation(UPDATE_USEDITEM);

  return result;
};

export const useMutationToggleUseditemPick = (): MutationTuple<
  Pick<IMutation, "toggleUseditemPick">,
  IMutationToggleUseditemPickArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  return result;
};

export const useMutationCreateUseditemQuestion = (): MutationTuple<
  Pick<IMutation, "createUseditemQuestion">,
  IMutationCreateUseditemQuestionArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  return result;
};

export const useMutationDeleteUseditemQuestion = (): MutationTuple<
  Pick<IMutation, "deleteUseditemQuestion">,
  IMutationDeleteUseditemQuestionArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  return result;
};

export const useMutationUpdateUseditemQuestion = (): MutationTuple<
  Pick<IMutation, "updateUseditemQuestion">,
  IMutationUpdateUseditemQuestionArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);

  return result;
};

export const useMutationCreateUseditemQuestionAnswer = (): MutationTuple<
  Pick<IMutation, "createUseditemQuestionAnswer">,
  IMutationCreateUseditemQuestionAnswerArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);

  return result;
};

export const useMutationDeleteUseditemQuestionAnswer = (): MutationTuple<
  Pick<IMutation, "deleteUseditemQuestionAnswer">,
  IMutationDeleteUseditemQuestionAnswerArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER);

  return result;
};

export const useMutationUpdateUseditemQuestionAnswer = (): MutationTuple<
  Pick<IMutation, "updateUseditemQuestionAnswer">,
  IMutationUpdateUseditemQuestionAnswerArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);

  return result;
};

export const useMutationCreatePointTransactionOfLoading = (): MutationTuple<
  Pick<IMutation, "createPointTransactionOfLoading">,
  IMutationCreatePointTransactionOfLoadingArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  return result;
};

export const useMutationCreatePointTransactionOfBuyingAndSelling =
  (): MutationTuple<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs,
    DefaultContext,
    ApolloCache<any>
  > => {
    const result = useMutation<
      Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
      IMutationCreatePointTransactionOfBuyingAndSellingArgs
    >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

    return result;
  };

export const useMutationResetUserPassword = (): MutationTuple<
  Pick<IMutation, "resetUserPassword">,
  IMutationResetUserPasswordArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  return result;
};

export const useMutationUpdateUser = (): MutationTuple<
  Pick<IMutation, "updateUser">,
  IMutationUpdateUserArgs,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  return result;
};

export const useMutationLogOutUser = (): MutationTuple<
  Pick<IMutation, "logoutUser">,
  OperationVariables,
  DefaultContext,
  ApolloCache<any>
> => {
  const result = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  return result;
};
