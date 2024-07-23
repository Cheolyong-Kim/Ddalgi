import { useState } from "react";
import type { IQuery, IQueryFetchBoardsArgs } from "../types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

interface IUsePageReturn {
  startPage: number;
  activatedPage: number;
  onClickPrev: () => Promise<void>;
  onClickNext: () => Promise<void>;
  onClickPage: (page: string) => Promise<void>;
}

export const usePage = (
  lastPage: number,
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>,
): IUsePageReturn => {
  const [startPage, setStartPage] = useState(1);
  const [activatedPage, setActivatedPage] = useState(1);

  const onClickPrev = async (): Promise<void> => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivatedPage(startPage - 5);
    await refetch({ page: startPage - 5 });
  };

  const onClickNext = async (): Promise<void> => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivatedPage(startPage + 5);
      await refetch({ page: startPage + 5 });
    }
  };

  const onClickPage = async (page: string): Promise<void> => {
    const currentPage = Number(page);
    setActivatedPage(currentPage);
    await refetch({ page: currentPage });
  };

  return { startPage, activatedPage, onClickPrev, onClickNext, onClickPage };
};
