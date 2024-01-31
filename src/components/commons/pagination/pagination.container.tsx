import { type MouseEvent, useState } from "react";
import PaginationUI from "./pagination.presenter";

import type { IPaginationProps } from "./pagination.types";

const Pagination = (props: IPaginationProps): JSX.Element => {
  const [startPage, setStartPage] = useState(1);
  const [activatedPage, setActivatedPage] = useState(1);

  const onClickPrev = async (): Promise<void> => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivatedPage(startPage - 5);
    await props.refetch({ page: startPage - 5 });
  };

  const onClickNext = async (): Promise<void> => {
    if (startPage + 5 <= props.lastPage) {
      setStartPage(startPage + 5);
      setActivatedPage(startPage + 5);
      await props.refetch({ page: startPage + 5 });
    }
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const currentPage = Number(event.currentTarget.id);
    setActivatedPage(currentPage);
    void props.refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <PaginationUI
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      onClickPage={onClickPage}
      startPage={startPage}
      activatedPage={activatedPage}
      lastPage={props.lastPage}
    />
  );
};

export default Pagination;
