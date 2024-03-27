import type { IPaginationProps } from "./Pagination.types";
import * as P from "./Pagination.styles";
import { usePage } from "../../../commons/hooks/usePage";

const Pagination = (props: IPaginationProps): JSX.Element => {
  const { startPage, activatedPage, onClickNext, onClickPrev, onClickPage } =
    usePage(props.lastPage, props.refetch);

  return (
    <P.PaginationWrap>
      <P.PaginationButton
        onClick={onClickPrev}
        isLeft={true}
      ></P.PaginationButton>
      {new Array(5).fill(0).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <P.PaginationSpan
              key={index + startPage}
              id={String(index + startPage)}
              onClick={() => {
                void onClickPage(String(index + startPage));
              }}
              isActive={index + startPage === activatedPage}
            >
              {index + startPage}
            </P.PaginationSpan>
          ),
      )}
      <P.PaginationButton
        onClick={onClickNext}
        isLeft={false}
      ></P.PaginationButton>
    </P.PaginationWrap>
  );
};

export default Pagination;
