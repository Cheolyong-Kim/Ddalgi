import styled from "@emotion/styled";
import { css } from "@emotion/react";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const BoardsWrap = styled.div`
  ${flexColumn};
  width: 1200px;
  margin-bottom: 40px;
`;

export const BoardsHeaderWrap = styled.div`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const BoardsTitle = styled.h1`
  display: inline-block;
  font-size: 30px;
  color: #404040;
`;

export const BoardsTable = styled.table`
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

export const BoardsFooter = styled.div`
  ${flexRow};
  position: relative;
  justify-content: center;
  align-items: center;
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
