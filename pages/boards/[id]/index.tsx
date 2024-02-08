import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENT } from "../../../src/commons/queries";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../src/commons/types/generated/types";

import BoardsDetail from "../../../src/components/units/board/detail/BoardsDetail.container";
import Comment from "../../../src/components/units/board/comment/Comment.container";
import CommentList from "../../../src/components/units/board/comment_list/CommentList.container";

const DetailPage = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: {
      boardId: router.query.id,
    },
  });

  return (
    <>
      <BoardsDetail />
      <Comment isEdit={false} />
      <CommentList data={data} fetchMore={fetchMore} />
    </>
  );
};

export default DetailPage;
