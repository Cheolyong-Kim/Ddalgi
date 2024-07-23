import React, { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import Comment from "../commentNew/index";
import * as CS from "./Comments.styles";
import type { ICommentsData, ICommentsProps } from "./Comments.types";
import { useMutationDeleteComment } from "../../../../commons/hooks/useMutation";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./Comments.validataion";
import { FETCH_BOARD_COMMENT } from "../../../../commons/queries";

const Comments = (props: ICommentsProps): JSX.Element => {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [deleteComment] = useMutationDeleteComment();

  const onClickDelete = async (inputData: ICommentsData): Promise<void> => {
    try {
      await deleteComment({
        variables: {
          password: inputData.password,
          boardCommentId: props.data._id,
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
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {isEdit ? (
        <Comment
          id={props.data._id}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          data={props.data}
        />
      ) : (
        <CS.CommentsWrap id={props.data._id}>
          <CS.CommentsContentsWrap>
            <CS.ProfileImg
              src={
                props.data.user?.picture
                  ? `http://storage.googleapis.com/${props.data.user.picture}`
                  : "/boards/id/profile.png"
              }
            />
            <CS.CommentsDetailWrap>
              <CS.ProfileWrap>
                <CS.ProfileName>{props.data.writer}</CS.ProfileName>
                <CS.Created>{getDate(props.data.createdAt)}</CS.Created>
              </CS.ProfileWrap>
              <CS.Contents>{props.data.contents}</CS.Contents>
            </CS.CommentsDetailWrap>
          </CS.CommentsContentsWrap>
          {isDelete ? (
            <CS.CommentsPasswordInputWrap
              onSubmit={handleSubmit(onClickDelete)}
            >
              <CS.CommentsPasswordInput
                type="password"
                placeholder="비밀번호"
                {...register("password")}
              />
              <CS.CommentsDeleteBtn type="submit">삭제</CS.CommentsDeleteBtn>
            </CS.CommentsPasswordInputWrap>
          ) : (
            <CS.CommentsUtilWrap>
              <CS.CommentsBtnsWrap>
                <CS.CommentsBtn
                  type="button"
                  img_src={"/boards/id/update_btn.png"}
                  onClick={() => setIsEdit(true)}
                ></CS.CommentsBtn>
                <CS.CommentsBtn
                  type="button"
                  img_src={"/boards/id/delete_btn.png"}
                  onClick={() => setIsDelete(true)}
                ></CS.CommentsBtn>
              </CS.CommentsBtnsWrap>
            </CS.CommentsUtilWrap>
          )}
        </CS.CommentsWrap>
      )}
    </>
  );
};

export default Comments;
