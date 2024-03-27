import { useRouter } from "next/router";
import BoardsDetail from "../../../src/components/units/board/detail/index";
import Comment from "../../../src/components/units/board/commentNew/index";
import CommentList from "../../../src/components/units/board/commentList/index";
import { useQueryFetchBoardComments } from "../../../src/commons/hooks/useQuery";

const DetailPage = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data, fetchMore } = useQueryFetchBoardComments(router.query.id);

  return (
    <>
      <BoardsDetail />
      <Comment isEdit={false} />
      <CommentList data={data} fetchMore={fetchMore} />
    </>
  );
};

export default DetailPage;
