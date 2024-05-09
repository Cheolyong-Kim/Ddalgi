import { useRouter } from "next/router";
import { getDate } from "../../../../commons/libraries/utils";
import * as MC from "./Comments.styles";
import type { CommentsProps } from "./Comments.types";
import { useState } from "react";
import {
  useMutationDeleteUseditemQuestion,
  useMutationDeleteUseditemQuestionAnswer,
} from "../../../../commons/hooks/useMutation";
import {
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "../../../../commons/queries";
import MarketComment from "../commentNew";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/useQuery";

const MarketComments = (props: CommentsProps): JSX.Element => {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const [deleteUseditemQuestion] = useMutationDeleteUseditemQuestion();
  const [deleteUseditemQuestionAnswer] =
    useMutationDeleteUseditemQuestionAnswer();
  const { data: userData } = useQueryFetchUserLoggedIn();

  const onClickDelete = (useditemQuestionId: string) => async () => {
    try {
      if (props.isQuestionAnswer) {
        await deleteUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId: useditemQuestionId,
          },
          refetchQueries: [
            {
              query: FETCH_USEDITEM_QUESTION_ANSWERS,
              variables: {
                useditemQuestionId: props.useditemQuestionId,
              },
            },
          ],
        });
      } else {
        await deleteUseditemQuestion({
          variables: {
            useditemQuestionId,
          },
          refetchQueries: [
            {
              query: FETCH_USEDITEM_QUESTIONS,
              variables: {
                useditemId: router.query.id,
              },
            },
          ],
        });
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {isEdit ? (
        <MarketComment
          id={props.data._id}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isQuestionAnswer={props.isQuestionAnswer}
          useditemQuestionId={props.useditemQuestionId}
          data={props.data}
        />
      ) : (
        <MC.MainWrap>
          <MC.CommentsWrap id={props.data._id}>
            <MC.CommentsContentsWrap>
              <MC.ProfileImg
                src={
                  props.data.user.picture
                    ? `http://storage.googleapis.com/${props.data.user.picture}`
                    : "/boards/id/profile.png"
                }
              />
              <MC.CommentsDetailWrap>
                <MC.ProfileWrap>
                  <MC.ProfileName>{props.data.user.name}</MC.ProfileName>
                  <MC.Created>{getDate(props.data.createdAt)}</MC.Created>
                </MC.ProfileWrap>
                <MC.Contents>{props.data.contents}</MC.Contents>
              </MC.CommentsDetailWrap>
            </MC.CommentsContentsWrap>
            <MC.CommentsUtilWrap>
              {props.data.user._id === userData?.fetchUserLoggedIn._id ? (
                <MC.CommentsBtnsWrap>
                  <MC.CommentsBtn
                    type="button"
                    img_src={"/boards/id/update_btn.png"}
                    onClick={() => setIsEdit(true)}
                  ></MC.CommentsBtn>
                  <MC.CommentsBtn
                    type="button"
                    img_src={"/boards/id/delete_btn.png"}
                    onClick={onClickDelete(props.data._id)}
                  ></MC.CommentsBtn>
                </MC.CommentsBtnsWrap>
              ) : isAnswer ? (
                <MC.CommentsBtn
                  type="button"
                  style={{ marginLeft: "30px" }}
                  img_src={"/boards/id/delete_btn.png"}
                  onClick={() => setIsAnswer(false)}
                ></MC.CommentsBtn>
              ) : (
                <MC.AnswerBtn
                  type="button"
                  onClick={() => setIsAnswer(true)}
                ></MC.AnswerBtn>
              )}
            </MC.CommentsUtilWrap>
          </MC.CommentsWrap>
          {isAnswer ? (
            <MC.AnswersWrap>
              <MC.AnswersArrow src="/markets/답글화살표.png" />
              <MarketComment
                isAnswer={true}
                setIsAnswer={setIsAnswer}
                id={props.data._id}
              />
            </MC.AnswersWrap>
          ) : (
            <></>
          )}
        </MC.MainWrap>
      )}
    </>
  );
};

export default MarketComments;
