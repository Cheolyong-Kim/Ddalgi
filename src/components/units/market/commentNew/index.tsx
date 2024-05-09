import { useForm } from "react-hook-form";
import * as MC from "./CommentNew.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./CommentNew.validation";
import {
  useMutationCreateUseditemQuestion,
  useMutationCreateUseditemQuestionAnswer,
  useMutationUpdateUseditemQuestion,
  useMutationUpdateUseditemQuestionAnswer,
} from "../../../../commons/hooks/useMutation";
import { useRouter } from "next/router";
import type { CommentNewData, CommentProps } from "./CommentNew.types";
import {
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "../../../../commons/queries";

const MarketComment = (props: CommentProps): JSX.Element => {
  const router = useRouter();
  const { register, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const [createUseditemQuestion] = useMutationCreateUseditemQuestion();
  const [updateUseditemQuestion] = useMutationUpdateUseditemQuestion();
  const [createUseditemQuestionAnswer] =
    useMutationCreateUseditemQuestionAnswer();
  const [updateUseditemQuestionAnswer] =
    useMutationUpdateUseditemQuestionAnswer();

  const onClickSubmit = async (data: CommentNewData): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      if (props.isAnswer) {
        await createUseditemQuestionAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
            useditemQuestionId: props.id ?? "",
          },
          refetchQueries: [
            {
              query: FETCH_USEDITEM_QUESTION_ANSWERS,
              variables: {
                useditemQuestionId: props.id,
              },
            },
          ],
        });

        props.setIsAnswer?.(false);
      } else {
        await createUseditemQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemId: router.query.id,
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

      setValue("contents", "");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (data: CommentNewData): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      if (props.isQuestionAnswer) {
        await updateUseditemQuestionAnswer({
          variables: {
            updateUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
            useditemQuestionAnswerId: props.id ?? "",
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

        props.setIsEdit?.(false);
      } else {
        await updateUseditemQuestion({
          variables: {
            updateUseditemQuestionInput: {
              contents: data.contents,
            },
            useditemQuestionId: props.data?._id ?? "",
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

        props.setIsEdit?.(false);
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MC.InputForm
      onSubmit={handleSubmit(props.isEdit ? onClickUpdate : onClickSubmit)}
    >
      <MC.ContentsInput
        placeholder="댓글을 작성해주세요."
        maxLength={100}
        defaultValue={props.data?.contents ?? ""}
        {...register("contents")}
      ></MC.ContentsInput>
      <MC.ContentsLimit>{watch("contents")?.length}/100</MC.ContentsLimit>
      {props.isEdit ? (
        <MC.CancleBtn
          type="button"
          onClick={() => {
            props.setIsEdit?.(false);
          }}
        >
          취소
        </MC.CancleBtn>
      ) : (
        <></>
      )}
      <MC.SubmitBtn type="submit">
        {props.isEdit ? "수정" : "등록"}
      </MC.SubmitBtn>
    </MC.InputForm>
  );
};

export default MarketComment;
