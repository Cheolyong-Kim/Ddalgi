import type { MouseEvent } from "react";

export interface IPaginationProps {
  lastPage: number;
  refetch: any;
}

export interface IPaginationUIProps {
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  activatedPage: number;
  lastPage: number;
}

export interface IPaginationButtonProps {
  isLeft: boolean;
}

export interface IPaginationSpanProps {
  isActive: boolean;
}
