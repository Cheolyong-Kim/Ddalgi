import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface NavMenuProps {
  isSelected?: boolean;
}

interface TableDataProps {
  width: string;
}

interface UsedItemLinkProps {
  isSold: boolean;
  isDeleted?: boolean;
}

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const MyMarketWrap = styled.main`
  ${flexCol};
  justify-content: flex-start;
  align-items: center;
  width: 1050px;
`;

export const HeaderWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const NavWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
`;

export const NavMenu = styled.span`
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px solid #bdbdbd;
  font-size: 18px;
  font-weight: ${(props: NavMenuProps) => (props.isSelected ? "bold" : "auto")};
  color: ${(props: NavMenuProps) => (props.isSelected ? "#fe7488" : "#404040")};
  cursor: pointer;

  &:last-child {
    padding: 0
    margin: 0;
    border: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 25px;
  border-top: 1px solid #404040;
  border-bottom: 1px solid #404040;
`;

export const TableHead = styled.thead`
  ${flexRow};
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
`;

export const TableRow = styled.tr`
  ${flexRow};
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #bbbbbb;
  text-align: center;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeadData = styled.th`
  width: ${(props: TableDataProps) => props.width};
  font-size: 18px;
  font-weight: bold;
`;

export const TableData = styled.td`
  width: ${(props: TableDataProps) => props.width};
  font-size: 18px;
  color: #404040;
`;

export const UseditemLink = styled.a`
  color: ${(props: UsedItemLinkProps) =>
    props.isSold ? "#fe7488" : "#404040"};
  text-decoration: ${(props: UsedItemLinkProps) =>
    props.isSold || props.isDeleted ? "line-through" : "none"};
  cursor: ${(props) => (props.isDeleted ? "auto" : "pointer")};
  pointer-events: ${(props) => (props.isDeleted ? "none" : "auto")};
`;
