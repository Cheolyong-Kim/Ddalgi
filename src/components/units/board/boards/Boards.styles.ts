import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const reset = css`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

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
`;

export const BoardsTable = styled.table`
  ${flexColumn};
  align-items: center;
  margin-bottom: 25px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const TableRow = styled.tr`
  ${flexRow};
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeaderNum = styled.th`
  width: 10%;
  font-size: 18px;
  font-weight: 500;
`;

export const TableHeaderTitle = styled.th`
  width: 60%;
  font-size: 18px;
  font-weight: 500;
`;

export const TableHeaderWriter = styled.th`
  width: 15%;
  font-size: 18px;
  font-weight: 500;
`;

export const TableHeaderDate = styled.th`
  width: 15%;
  font-size: 18px;
  font-weight: 500;
`;

export const TableNum = styled.td`
  width: 10%;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const TableTitle = styled.td`
  width: 60%;
  font-size: 16px;
  font-weight: 400;
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color: #4f4f4f;
  cursor: pointer;
`;

export const TableWriter = styled.td`
  width: 15%;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const TableDate = styled.td`
  width: 15%;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
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
  width: 170px;
  height: 50px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const CreateBtnImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;