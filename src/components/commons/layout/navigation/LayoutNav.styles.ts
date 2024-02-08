import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const flexCol = css`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  ${flexRow}
  justify-content: center;
  height: 50px;
  margin-bottom: 50px;
  background-color: #ffd600;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.15);
`;

export const NavUl = styled.ul`
  ${flexRow}
  justify-content: space-between;
  align-items: center;
  width: 40%;
  list-style: none;
`;

export const NavLi = styled.li`
  ${flexCol}
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  height: 18px;
  border-right: 1px solid white;
  font-size: 18px;
  font-weight: 400;

  &:last-child {
    border-right: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
