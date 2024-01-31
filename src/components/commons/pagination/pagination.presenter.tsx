import type { IPaginationUIProps } from "./pagination.types";
import {
  PaginationWrap,
  PaginationButton,
  PaginationSpan,
} from "./pagination.styles";

const PaginationUI = (props: IPaginationUIProps): JSX.Element => {
  return (
    <PaginationWrap>
      <PaginationButton
        onClick={props.onClickPrev}
        isLeft={true}
      ></PaginationButton>
      {new Array(5).fill(0).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <PaginationSpan
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              isActive={index + props.startPage === props.activatedPage}
            >
              {index + props.startPage}
            </PaginationSpan>
          ),
      )}
      <PaginationButton
        onClick={props.onClickNext}
        isLeft={false}
      ></PaginationButton>
    </PaginationWrap>
  );
};

export default PaginationUI;
