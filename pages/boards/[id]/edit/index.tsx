import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { FETCH_BOARD } from "../../../../src/commons/queries";
import BoardsNew from "../../../../src/components/units/board/new/BoardsNew.container";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const BoardsEdit = (): JSX.Element => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: router.query.id,
      },
    },
  );

  return <BoardsNew isEdit={true} data={data} />;
};

export default BoardsEdit;
