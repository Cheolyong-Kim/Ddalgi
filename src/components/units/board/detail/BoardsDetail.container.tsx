import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";

import BoardsDetailUI from "./BoardsDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "../../../../commons/queries";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

const BoardsDetail = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: router.query.id,
      },
    },
  );

  const onClickMove = (): void => {
    void router.push("/boards");
  };

  const onClickDelete = async (): Promise<void> => {
    if (typeof data?.fetchBoard._id !== "string") return;

    try {
      await deleteBoard({
        variables: {
          boardId: data?.fetchBoard._id,
        },
      });
      alert("게시글이 삭제되었습니다.");

      void router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = (): void => {
    if (typeof router.query.id !== "string") return;

    void router.push(`/boards/${router.query.id}/edit`);
  };

  const onClickLike = async (): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      const result = await likeBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.id },
          },
        ],
      });

      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDislike = async (): Promise<void> => {
    if (typeof router.query.id !== "string") return;

    try {
      const result = await dislikeBoard({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query.id } },
        ],
      });

      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardsDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      onClickMove={onClickMove}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
};

export default BoardsDetail;
