import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import type { ChangeEvent, MouseEvent } from "react";

import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  //   DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
} from "../../../../src/commons/queries";
import CommentUI from "./Comment.presenter";

import type { ICommentParentProps } from "./Comment.types";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  //   IMutationDeleteBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../commons/types/generated/types";

const Comment = (props: ICommentParentProps): JSX.Element => {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0.0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  //   const [deleteBoardComment] = useMutation<
  //     Pick<IMutation, "deleteBoardComment">,
  //     IMutationDeleteBoardCommentArgs
  //   >(DELETE_BOARD_COMMENT);

  const router = useRouter();

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(event.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }

    setWriter("");
    setContents("");
    setPassword("");
  };

  const onClickUpdate = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
          },
          password,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: {
              ID: router.query.id,
            },
          },
        ],
      });

      console.log(result);
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CommentUI
      id={props.id}
      rating={rating}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      setRating={setRating}
      isEdit={props.isEdit}
      data={props?.data}
      writer={writer}
      password={password}
      contents={contents}
    />
  );
};

export default Comment;
