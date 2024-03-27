import { useForm } from "react-hook-form";
import {
  useMutationCreateBoardComment,
  useMutationUpdateBoardComment,
} from "../../../../commons/hooks/useMutation";
import { useQueryFetchUserLoggedIn } from "../../../../commons/hooks/useQuery";
import * as CN from "./CommentNew.styles";
import type { ICommentData, ICommentProps } from "./CommentNew.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { schema } from "./CommentNew.validation";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENT } from "../../../../commons/queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import type { IUpdateBoardCommentInput } from "../../../../commons/types/generated/types";

const Comment = (props: ICommentProps): JSX.Element => {
  const [accessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const { register, handleSubmit, setValue, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const { data: userData } = useQueryFetchUserLoggedIn();
  const [createBoardComment] = useMutationCreateBoardComment();
  const [updateBoardComment] = useMutationUpdateBoardComment();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickSubmit = async (inputData: ICommentData): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: accessToken
              ? userData?.fetchUserLoggedIn.name
              : inputData.writer,
            password: inputData.password,
            contents: inputData.contents,
            rating: 0.0,
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

      setValue("writer", "");
      setValue("password", "");
      setValue("contents", "");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate =
    (id: string) =>
    async (inputData: ICommentData): Promise<void> => {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (inputData.contents)
        updateBoardCommentInput.contents = inputData.contents;

      try {
        await updateBoardComment({
          variables: {
            updateBoardCommentInput,
            password: inputData.password,
            boardCommentId: id,
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

        props.setIsEdit?.(false);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  return (
    <CN.MainWrap>
      <CN.CommentNewWrap>
        {props.isEdit ? (
          <></>
        ) : (
          <CN.TitleWrap>
            <CN.Title>댓글</CN.Title>
          </CN.TitleWrap>
        )}
        <CN.InputForm
          onSubmit={handleSubmit(
            props.isEdit ? onClickUpdate(props.id ?? "") : onClickSubmit,
          )}
        >
          <CN.InfoInputWrap>
            <CN.InfoInput
              type="text"
              placeholder="작성자"
              defaultValue={props.data?.writer ?? ""}
              disabled={props.isEdit}
              {...register("writer")}
            />
            <CN.InfoInput
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
          </CN.InfoInputWrap>
          <CN.ContentsInputWrap>
            <CN.ContentsInput
              placeholder="답변을 작성해보세요."
              maxLength={100}
              defaultValue={props.data?.contents ?? ""}
              {...register("contents")}
            ></CN.ContentsInput>
            <CN.ContentsLimit>{watch("contents")?.length}/100</CN.ContentsLimit>
            {props.isEdit ? (
              <CN.CancleBtn
                type="button"
                onClick={onClickMoveToPage(
                  `/boards/${router.query.id as string}`,
                )}
              >
                취소
              </CN.CancleBtn>
            ) : (
              <></>
            )}
            <CN.SubmitBtn type="submit">
              {props.isEdit ? "수정" : "등록"}
            </CN.SubmitBtn>
          </CN.ContentsInputWrap>
        </CN.InputForm>
      </CN.CommentNewWrap>
    </CN.MainWrap>
  );
};

export default Comment;
