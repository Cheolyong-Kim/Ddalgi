import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { MenuSpanProps } from "./Markets.types";
import InfiniteScroll from "react-infinite-scroller";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const MarketsWrap = styled.main`
  ${flexCol};
  width: 1200px;
  margin-bottom: 40px;
`;

export const BestUsedItemsWrap = styled.section`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  color: #404040;
`;

export const UsedItemsWrap = styled.section`
  width: 1200px;
  ${flexCol};
`;

export const UsedItemsHeader = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Menu = styled.div`
  ${flexRow};
`;

export const MenuSpan = styled.span`
  margin-right: 20px;
  font-size: 18px;
  font-weight: ${(props: MenuSpanProps) =>
    props.isSelected ? "bold" : "auto"};
  text-decoration: ${(props: MenuSpanProps) =>
    props.isSelected ? "underline #fe7488 2px" : "none"};
  cursor: pointer;
`;

export const CreateButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const UsedItemsScroll = styled(InfiniteScroll)`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  padding: 0 30px;
`;
