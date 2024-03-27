import { type Dispatch, type SetStateAction, useState } from "react";

interface IUsePageReturn {
  startPage: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPage: (page: number) => () => void;
}

export const usePageFB = (
  lastPage: number,
  setActivatedPage: Dispatch<SetStateAction<number>>,
): IUsePageReturn => {
  const [startPage, setStartPage] = useState(1);

  const onClickPrev = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivatedPage(startPage - 5);
  };

  const onClickNext = (): void => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivatedPage(startPage + 5);
    }
  };

  const onClickPage = (page: number) => () => {
    setActivatedPage(page);
  };

  return { startPage, onClickPrev, onClickNext, onClickPage };
};
