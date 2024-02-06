import styled from "@emotion/styled";
import { css } from "@emotion/react";

const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const MainWrap = styled.div`
  ${flexCol};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CatImgWrap = styled.div`
  ${flexCol};
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 800px;
  overflow: hidden;
  box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.1);
`;

export const CatImg = styled.img`
  cursor: pointer;
`;

export const CatButton = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 50px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
