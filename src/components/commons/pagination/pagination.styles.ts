import styled from "@emotion/styled";
import type {
  IPaginationButtonProps,
  IPaginationSpanProps,
} from "./pagination.types";
import { css } from "@emotion/react";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const PaginationWrap = styled.div`
  ${flexRow};
  align-items: center;
`;

export const PaginationSpan = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  text-align: center;
  color: ${(props: IPaginationSpanProps) =>
    props.isActive ? "#FFD600" : "black"};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const PaginationButton = styled.button`
  width: 24px;
  height: 24px;
  margin: ${(props) => (props.isLeft ? "0 20px 0 0 " : "0 0 0 20px")};
  border: none;
  background-color: white;
  background-image: url("./banner/ic_navigate_before-24px.png");
  transform: ${(props: IPaginationButtonProps) =>
    props.isLeft ? "" : "rotate(180deg)"};
  cursor: pointer;
`;
