import { usePageFB } from "../../../commons/hooks/usePageFB";
import * as P from "./PaginationFB.styles";
import { v4 as uuidv4 } from "uuid";
import type { IPaginationFBProps } from "./PaginationFB.types";

export const PaginationFB = (props: IPaginationFBProps): JSX.Element => {
  const { startPage, onClickPrev, onClickNext, onClickPage } = usePageFB(
    props.lastPage,
    props.setActivatedPage,
  );

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
              key={uuidv4()}
              onClick={onClickPage(index + startPage)}
              isActive={index + 1 === props.activatedPage}
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
