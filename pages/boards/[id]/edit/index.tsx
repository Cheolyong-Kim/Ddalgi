import { useRouter } from "next/router";
import BoardsNew from "../../../../src/components/units/board/new/index";
import { useQueryFetchBoard } from "../../../../src/commons/hooks/useQuery";

const BoardsEdit = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data } = useQueryFetchBoard(router.query.id);

  return <BoardsNew isEdit={true} data={data} />;
};

export default BoardsEdit;
