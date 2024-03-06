import type { DocumentData } from "@firebase/firestore-types";
import type { ChangeEvent } from "react";

export interface INoticeUIProps {
  data?: DocumentData[];
  onClickTitle: (id: string) => () => void;
  onClickNewButton: () => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPage: (page: number) => () => void;
  onChangeSearchWord: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSearchDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearchButton: () => void;
  startPage: number;
  lastPage: number;
  activatedPage: number;
  searchWord: string;
  isSearch: boolean;
}

export interface IPaginationSpanProps {
  isActive: boolean;
}

export interface IPaginationButtonProps {
  isLeft: boolean;
}
