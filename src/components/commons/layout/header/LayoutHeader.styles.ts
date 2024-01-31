import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { IHeaderButtonProps } from "./LayoutHeader.types";

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  ${flexRow}
  justify-content: center;
  height: 140px;
`;

export const ContentsWrap = styled.div`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  width: 65%;
  padding:;
`;

export const Logo = styled.a`
  cursor: pointer;
`;

export const HeaderButtonWrap = styled.div`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.button`
  width: 90px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: ${(props: IHeaderButtonProps) =>
    props.isJoin ? "#ffd600" : "white"};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
