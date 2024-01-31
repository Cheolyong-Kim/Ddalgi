import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";

import type { ChangeEvent, MouseEvent } from "react";

import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
} from "../../../commons/queries";
import OtherCommentUI from "./Other_comment.presenter";

import type { IOtherCommentParentProps } from "./Other_comment.types";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../commons/types/generated/types";

const OtherComment = (props: IOtherCommentParentProps): JSX.Element => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    try {
      setIsModalOpen((prev) => !prev);

      const result = await deleteComment({
        variables: {
          password,
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
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const onToggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <OtherCommentUI
      data={props.data}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      onToggleModal={onToggleModal}
      setIsEdit={setIsEdit}
      onChangePassword={onChangePassword}
      isEdit={isEdit}
      isModalOpen={isModalOpen}
    />
  );
};

export default OtherComment;
