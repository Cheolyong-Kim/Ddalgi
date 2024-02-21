import { useState, type MouseEvent } from "react";

import BoardsUI from "./Boards.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "../../../../commons/queries";

const Boards = (): JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const [isSearchWord, setIsSearchWord] = useState(false);

  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickCreateBoard = (): void => {
    void router.push(`/boards/new`);
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLAnchorElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <BoardsUI
      data={data}
      onClickCreateBoard={onClickCreateBoard}
      onClickMoveDetail={onClickMoveDetail}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      setKeyword={setKeyword}
      setIsSearchWord={setIsSearchWord}
      keyword={keyword}
      isSearchWord={isSearchWord}
      lastPage={lastPage}
    />
  );
};

export default Boards;
