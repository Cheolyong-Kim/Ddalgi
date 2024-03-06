import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type {
  IPaginationButtonProps,
  IPaginationSpanProps,
} from "./notices.types";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const NoticeWrap = styled.div`
  ${flexColumn};
  width: 1200px;
  margin-bottom: 40px;
`;

export const NoticeHeaderWrap = styled.div`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const NoticeTitle = styled.h1`
  display: inline-block;
  font-size: 30px;
  color: #404040;
`;

export const SearchBarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
`;

export const SearchBarInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
`;

export const SearchBarIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

export const SearchTitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 14px 16px 14px 10px;
  border: none;
  font-size: 18px;

  &::placeholder {
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #404040;
  }
`;

export const SearchDateInput = styled.input`
  width: 25%;
  height: 40px;
  padding: 14px 16px 14px 16px;
  border: none;
  font-size: 12px;

  &::placeholder {
    color: #bbbbbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #404040;
  }
`;

export const SearchButton = styled.button`
  width: 7%;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: white;
  cursor: pointer;
`;

export const NoticeTable = styled.table`
  ${flexColumn};
  align-items: center;
  margin-bottom: 25px;
  border-top: 1px solid #404040;
  border-bottom: 1px solid #404040;
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

export const TableHeaderNum = styled.th`
  width: 10%;
  font-size: 18px;
  font-weight: bold;
  color: #404040;
`;

export const TableHeaderTitle = styled.th`
  width: 60%;
  font-size: 18px;
  font-weight: bold;
  color: #404040;
`;

export const TableHeaderWriter = styled.th`
  width: 15%;
  font-size: 18px;
  font-weight: bold;
  color: #404040;
`;

export const TableHeaderDate = styled.th`
  width: 15%;
  font-size: 18px;
  font-weight: bold;
  color: #404040;
`;

export const TableNum = styled.td`
  width: 10%;
  font-size: 16px;
  font-weight: 400;
  color: #404040;
`;

export const TableTitle = styled.td`
  width: 60%;
  font-size: 16px;
  font-weight: 400;
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color: #404040;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableWriter = styled.td`
  width: 15%;
  font-size: 16px;
  font-weight: 400;
  color: #404040;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TableDate = styled.td`
  width: 15%;
  font-size: 16px;
  font-weight: 400;
  color: #404040;
`;

export const NoticeFooter = styled.div`
  ${flexRow};
  position: relative;
  justify-content: center;
  align-items: center;
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
  font-weight: bold;
  text-align: center;
  line-height: 24px;
  color: ${(props: IPaginationSpanProps) =>
    props.isActive ? "#fe7488" : "#404040"};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const PaginationButton = styled.button`
  width: 24px;
  height: 24px;
  margin: ${(props: IPaginationButtonProps) =>
    props.isLeft ? "0 20px 0 0 " : "0 0 0 20px"};
  border: none;
  background-color: white;
  background-image: url("./boards/ic_navigate_before-24px.png");
  transform: ${(props: IPaginationButtonProps) =>
    props.isLeft ? "" : "rotate(180deg)"};
  cursor: pointer;
`;

export const CreateBtn = styled.button`
  ${flexRow};
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #fe7488;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
