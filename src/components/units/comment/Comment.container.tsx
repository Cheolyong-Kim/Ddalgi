import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import type { ChangeEvent, MouseEvent } from "react";

import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
} from "../../../../src/commons/queries";
import CommentUI from "./Comment.presenter";

import type { ICommentParentProps } from "./Comment.types";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../commons/types/generated/types";

const Comment = (props: ICommentParentProps): JSX.Element => {
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
  });
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

  const router = useRouter();

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
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
            ...inputs,
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

    setInputs({
      writer: "",
      password: "",
    });
    setContents("");
    setRating(0.0);
  };

  const onClickUpdate = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating,
          },
          password: inputs.password,
          boardCommentId: event.currentTarget.id,
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
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <CommentUI
      id={props.id ?? ""}
      rating={rating}
      onChangeInputs={onChangeInputs}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      setRating={setRating}
      isEdit={props.isEdit}
      data={props?.data}
      inputs={inputs}
      contents={contents}
    />
  );
};

export default Comment;
