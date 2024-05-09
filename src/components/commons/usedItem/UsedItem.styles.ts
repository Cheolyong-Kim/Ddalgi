import styled from "@emotion/styled";
import { css } from "@emotion/react";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.div`
  ${flexCol};
  margin-bottom: 80px;
`;

export const ItemLink = styled.a`
  display: block;
  text-decoration: none;
  color: black;
`;

export const ItemImg = styled.img`
  width: 250px;
  height: 250px;
  background-color: black;
  margin-bottom: 20px;
  border-radius: 8px;
  cursor: pointer;
`;

export const ItemWrap = styled.div`
  width: 250px;
  ${flexRow};
  justify-content: space-between;
`;

export const InfoWrap = styled.div`
  width: 200px;
  ${flexCol};
`;

export const Name = styled.span`
  margin-bottom: 6px;
  font-size: 18px;
  color: #404040;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Remarks = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  color: #606060;
`;

export const Price = styled.span`
  font-size: 20px;
  color: #404040;
`;

export const PickedCountWrap = styled.div`
  ${flexCol};
  align-items: center;
`;

export const PickedCountImg = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
`;

export const PickedCount = styled.span`
  font-size: 16px;
`;
