import styled from "@emotion/styled";

export const MainWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 40px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  font-size: 18px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #bdbdbd;
`;

export const TableHeadName = styled.th`
  width: 8%;
  padding: 10px;
`;

export const TableHeadAge = styled.th`
  width: 8%;
  padding: 10px;
`;

export const TableHeadHobby = styled.th`
  width: 34%;
  padding: 10px;
`;

export const TableHeadProfile = styled.th`
  width: 50%;
  padding: 10px;
`;

export const TableName = styled.td`
  width: 8%;
  padding: 10px;
`;

export const TableAge = styled.td`
  width: 8%;
  padding: 10px;
`;

export const TableHobby = styled.td`
  width: 34%;
  padding: 10px;
`;

export const TableProfile = styled.td`
  width: 50%;
  padding: 8px;
`;

export const CreateButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 40px;
  padding: 5px;
  border: 1px solid #f2f2f2;
  background-color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const CreateImg = styled.img`
  width: 20px;
  height: 20px;
`;
