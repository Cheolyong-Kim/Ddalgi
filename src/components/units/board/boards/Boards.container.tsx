import { useState, type MouseEvent, type ChangeEvent } from "react";

import BoardsUI from "./Boards.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "../../../../commons/queries";
import type { ISearchInputProps } from "./Boards.types";

const Boards = (): JSX.Element => {
  const [searchWord, setSearchWord] = useState("");
  const [searchDate, setSearchDate] = useState<string[]>([]);
  const [isSearchWord, setIsSearchWord] = useState(false);

  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onChangeSearchWordInput = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchWord(event.currentTarget.value);
  };

  const onChangeSearchDateInput = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const dateArray = event.currentTarget.value.replaceAll(".", "-").split("~");
    setSearchDate(dateArray);
  };

  const onClickSearchButton = (): void => {
    const searchVariables: ISearchInputProps = {};
    if (searchWord) searchVariables.search = searchWord;
    if (searchDate.length !== 0) {
      searchVariables.startDate = searchDate[0];
      searchVariables.endDate = searchDate[1];
    }

    if (searchWord) setIsSearchWord(true);
    void refetch({ ...searchVariables, page: 1 });
  };

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
      onChangeSearchWordInput={onChangeSearchWordInput}
      onChangeSearchDateInput={onChangeSearchDateInput}
      onClickSearchButton={onClickSearchButton}
      refetch={refetch}
      searchWord={searchWord}
      isSearchWord={isSearchWord}
      lastPage={lastPage}
    />
  );
};

export default Boards;
