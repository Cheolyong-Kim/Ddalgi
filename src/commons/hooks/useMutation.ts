import {
  useMutation,
  type ApolloCache,
  type DefaultContext,
  type MutationTuple,
} from "@apollo/client";
import {
  CREATE_BOARD,
  CREATE_BOARD_COMMENT,
  CREATE_USER,
  DELETE_BOARD,
  DELETE_BOARD_COMMENT,
  DISLIKE_BOARD,
  LIKE_BOARD,
  LOGIN_USER,
  UPDATE_BOARD,
  UPDATE_BOARD_COMMENT,
  UPLOADFILE,
} from "../queries";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationCreateBoardCommentArgs,
  IMutationCreateUserArgs,
  IMutationDeleteBoardArgs,
  IMutationDeleteBoardCommentArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IMutationLoginUserArgs,
  IMutationUpdateBoardArgs,
  IMutationUpdateBoardCommentArgs,
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
